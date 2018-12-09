(()=> {
    const vm1 = new Vue({
        el: '#appVid',

        data: {
            videodata : [],
            singlemoviedata : [],

            videotitle : "",
            videosource : "",
            videodescription : "",
            showDetails : false
        },



        created : function() {
            this.fetchMovieData(null);
        },

        methods : {
            fetchMore(e) {
                this.fetchMovieData(e.currentTarget.dataset.movie); // this will be a number (id)
            },

            loadMovie(e) {
                // stub
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute('href');

                currentData = this.videodata.filter(video => video.file_Vidname === dataKey);

                this.videotitle = currentData[0].vid_name;
                this.videodescription = currentData[0].video_info;
                this.videosource = dataKey;

                this.showDetails = true;


                setTimeout(function() { window.scrollTo(0, 1200); }, 500);
            },

            scrollBackUp() {
               
                this.showDetails = false;
                this.videosource = "";
            },

            fetchMovieData(movie) {
                url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    if (movie) {
                        // getting one movie, so use the single array
                        console.log(data);
                        this.singlemoviedata = data;
                    } else {
                        // push all the video (or portfolio content) into the video array
                        console.log(data);
                        this.videodata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });



    

    const vm2 = new Vue({
        el: '#appPhoto',

        data: {
            photodata : [],
            singlephotodata : [],

            phototitle : "",
            photosource : "",
            photodescription : "",
            showDetails : false
        },



        created : function() {
            this.fetchPhotoData(null);
        },

        methods : {
            fetchMore(e) {
                this.fetchPhotoData(e.currentTarget.dataset.movie); // this will be a number (id)
            },

            loadMovie(e) {
                // stub
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute('href');

                currentData = this.photodata.filter(video => video.file_photoname === dataKey);

                this.phototitle = currentData[0].photo_name;
                this.photodescription = currentData[0].photo_info;
                this.photosource = dataKey;

                this.showDetails = true;


                setTimeout(function() { window.scrollTo(0, 1200); }, 500);
            },

            scrollBackUp() {
               
                this.showDetails = false;
                
                this.photosource = "";
            },

            fetchPhotoData(movie) {
                url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    if (movie) {
                        // getting one movie, so use the single array
                        console.log(data);
                        this.singlephotodata = data;
                    } else {
                        // push all the video (or portfolio content) into the video array
                        console.log(data);
                        this.photodata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });




})();