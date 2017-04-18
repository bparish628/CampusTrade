/*
SQLyog Community v12.2.4 (64 bit)
MySQL - 10.1.13-MariaDB : Database - campus_trade
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`campus_trade` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `campus_trade`;

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `name` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `category` */

insert  into `category`(`name`,`id`,`createdAt`,`updatedAt`) values 
('Books',1,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Electronics',2,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Cell Phones',3,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Computers',4,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Furniture',5,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Clothing',6,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Games',7,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Vehicles',8,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Other',9,'2017-04-18 14:43:04','2017-04-18 14:43:04');

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `post` */

insert  into `post`(`name`,`description`,`location`,`price`,`category`,`image`,`user`,`id`,`createdAt`,`updatedAt`) values 
('Physics book','This book is in good condition','None',15,1,NULL,1,1,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Red couch','My grandma\'s couch.','None',45,6,NULL,1,2,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Lamp','This lamp lights this place up!','None',8,2,NULL,2,3,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Software Engineering Book','Book for software engineering','None',60,1,NULL,1,4,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Riot Points','$20 worth of riot points','None',19.99,5,NULL,3,5,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Apple Macbook Pro','2012 Edition','None',450,4,NULL,3,6,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('Dell Laptop','This laptop is in great condition.','None',350,4,NULL,2,7,'2017-04-18 14:43:04','2017-04-18 14:43:04');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `user` */

insert  into `user`(`email`,`password`,`firstName`,`lastName`,`id`,`createdAt`,`updatedAt`) values 
('test@test.com','password','Test','User',1,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('johndoe@campustrade.com','password','John','Doe',2,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
('bobross@campustrade.com','password','Bob','Ross',3,'2017-04-18 14:43:04','2017-04-18 14:43:04');

/*Table structure for table `user_message` */

DROP TABLE IF EXISTS `user_message`;

CREATE TABLE `user_message` (
  `user` int(11) DEFAULT NULL,
  `recipient` int(11) DEFAULT NULL,
  `message` varchar(512) DEFAULT NULL,
  `read` tinyint(1) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `user_message` */

insert  into `user_message`(`user`,`recipient`,`message`,`read`,`id`,`createdAt`,`updatedAt`) values 
(1,2,'Hello!',1,1,'2017-04-18 14:43:04','2017-03-30 12:57:51'),
(2,1,'Sup Dude!',1,2,'2017-04-18 14:43:04','2017-03-31 12:57:51'),
(1,2,'Not much...',0,3,'2017-04-18 14:43:04','2017-04-01 12:57:51'),
(2,3,'Would you pay $65',0,4,'2017-04-18 14:43:04','2017-04-01 12:57:51'),
(1,3,'its me!',0,5,'2017-04-18 14:43:04','2017-04-01 12:57:51'),
(1,2,'We should trade!',0,6,'2017-04-18 14:43:04','2017-04-01 12:57:51');

/*Table structure for table `wishlist` */

DROP TABLE IF EXISTS `wishlist`;

CREATE TABLE `wishlist` (
  `post` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `wishlist` */

insert  into `wishlist`(`post`,`user`,`id`,`createdAt`,`updatedAt`) values 
(3,1,1,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
(5,1,2,'2017-04-18 14:43:04','2017-04-18 14:43:04'),
(1,2,3,'2017-04-18 14:43:04','2017-04-18 14:43:04');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
