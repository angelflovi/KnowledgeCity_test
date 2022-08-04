/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 5.6.16 : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `test`;

/*Table structure for table `api_users` */

DROP TABLE IF EXISTS `api_users`;

CREATE TABLE `api_users` (
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`username`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `api_users` */

insert  into `api_users`(`username`,`password`,`id_user`) values ('Usertest','qwerty',1);

/*Table structure for table `students` */

DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `number` varchar(20) NOT NULL,
  `name` varchar(250) NOT NULL,
  `group` varchar(50) NOT NULL,
  PRIMARY KEY (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `students` */

insert  into `students`(`number`,`name`,`group`) values ('kctest00200\r\n','David Smith 2\r\n','Default group\r\n'),('kctest00202','Bernardo Santini','Default group\r\n'),('kctest00208\r\n','Rob Shnneider\r\n','Default group\r\n'),('kctest00209\r\n','David Smith\r\n','Default group\r\n'),('kctest00213\r\n','Gerardo Quebedo\r\n','Default group\r\n'),('kctest00220\r\n','Terry Cruz\r\n','Default group\r\n'),('kctest00227','Gerardo Quevedo','Default group');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
