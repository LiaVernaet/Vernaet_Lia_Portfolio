(()=> {

    var lightbox = document.getElementsByClassName('.lightbox');
    var closeButton = document.getElementsByClassName('.closeButton');

   


    const vm = new Vue({
        el: '#appVid',

        data: {
            videodata : [],
            singlemoviedata : [],

            videotitle : "",
            videosource : "",
            videodescription : "",
            showDetails : false
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


            },

  

             scrollBackUp() {
                window.scrollTo(0, 0);
                this.showDetails = false;
                this.videsource = "";
            },

         

            closeLBox() {
                 lightbox.classList.add('close-lightbox');
             },



            scrollBackUp() {
                window.scrollTo(0, 0);
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

    closeButton.addEventListener("click", closeLBox, false);


})(); 

