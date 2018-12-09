-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 09, 2018 at 09:41 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_photos`
--

DROP TABLE IF EXISTS `tbl_photos`;
CREATE TABLE IF NOT EXISTS `tbl_photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo_name` varchar(30) NOT NULL,
  `file_photoname` varchar(40) NOT NULL,
  `photo_info` text NOT NULL,
  `file_Photothumb` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_photos`
--

INSERT INTO `tbl_photos` (`id`, `photo_name`, `file_photoname`, `photo_info`, `file_Photothumb`) VALUES
(1, 'Reborn Poster', 'organ.png', 'A poster created for Reborn, meant to encourage people to consider donating their organs to help save lives.', 'thumb7.png'),
(2, 'Tattoo Design', 'tattoo.png', 'A Design for a tattoo representing myself. It was created in Adobe Illustrator and Photoshop.', 'thumb8.png'),
(3, 'Cricket Infographic', 'cricket.png', 'An infographic created in Photoshop. It is meant to visually communicate the instructions and rules of the game Cricket.', 'thumb9.png'),
(4, 'Portfolio Logo', 'agencyXlogo.png', 'A logo created in Illustrator and Photoshop for a portfolio for a group assignment.', 'thumb10.png'),
(5, 'Ikea Beer Label', 'beer.png', 'A design for a fake Ikea beer product. The label was created in Illustrator, and the constructed image in Photoshop.', 'thumb11.png'),
(6, 'Triple Scoop Ice Cream Logo', 'icecream.png', 'A logo created for Triple Scoop Ice Cream, created in Photoshop and Illustrator.', 'thumb12.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_videos`
--

DROP TABLE IF EXISTS `tbl_videos`;
CREATE TABLE IF NOT EXISTS `tbl_videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vid_name` varchar(30) NOT NULL,
  `file_Vidname` varchar(40) NOT NULL,
  `video_info` text NOT NULL,
  `file_Vidthumb` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_videos`
--

INSERT INTO `tbl_videos` (`id`, `vid_name`, `file_Vidname`, `video_info`, `file_Vidthumb`) VALUES
(1, 'Fruitcy promo spot', 'fruitcy.mp4', 'A promo spot for our brand of infuser bottle: Fruitcy. This was made in Cinema 4D and After Effects and is meant to promote the product and encourage a healthy and active lifestyle.', 'thumb4.png'),
(2, 'Mineshaft explosion animation', 'mineshaft.mp4', 'One of my first 3D animations completed by following a tutorial. It was done in Cinema 4D and After Effects and depicts an explosion inside a mineshaft.', 'thumb1.png'),
(4, 'Audi V6 Spot', 'car.mp4', 'A promo spot for the Audi V6, created in Cinema 4D and After Effects. Car model was not created by me.', 'thumb3.png'),
(5, 'Shark animation', 'shark.mp4', 'A practice animation of a shark swimming through a sea of water at night. Completed in Cinema 4D.', 'thumb5.png'),
(6, 'Soccer spot', 'soccer.mp4', 'A promotional soccer spot completed in Cinema 4D and After Effects.', 'thumb2.png'),
(15, 'Stopwatch Animation', 'watch.mp4', 'A test animation of a stopwatch.  ', 'thumb6.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
