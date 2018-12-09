<?php

include 'functions.php';

if (isset($_GET['movie'])) {
    // pass the connection and the movie id to a function
    $data = get_single_video($conn, $_GET['movie']);
    echo json_encode($data);
    
} 
else if (isset($_GET['photo'])) {
      // pass the connection and the movie id to a function
      $data = get_single_photo($conn, $_GET['photo']);
      echo json_encode($data);
  }

   else {
  
         // $data = get_all_photos($conn);
       // echo json_encode($data);

         //Only one will work at a time. Find a way to make multiple data variables?
         
            $data = get_all_videos($conn);
           echo json_encode($data);
      }






//  else {
// //     // pass the connection and the movie id to a function
// $data = get_all_photos($conn);
//      echo json_encode($data);
//  }

?>