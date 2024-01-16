
CREATE TABLE user (
  user_id int(10) unsigned NOT NULL AUTO_INCREMENT,
  first_name varchar(25) NOT NULL,
  last_name varchar(25) NOT NULL,
  ID_card varchar(13),
  phone varchar(10) NOT NULL,
  email varchar(40) NOT NULL,
  PRIMARY KEY (user_id)
) ;

CREATE TABLE token (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  user_id int(10) unsigned NOT NULL,
  token varchar(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
) ;

CREATE TABLE logIn (
  `login_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  role enum('user', 'admin') NOT NULL DEFAULT 'user',
  PRIMARY KEY (login_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

CREATE TABLE `phone` (
  `phone_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand` varchar(25) NOT NULL,
  `model` varchar(255) NOT NULL,
  `rent` varchar(255) NOT NULL,
  `deposit` int (255) NOT NULL,
  `amount` int(10) NOT NULL,
  PRIMARY KEY (`phone_id`)
);

CREATE TABLE `booking` (
  `booking_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `phone_id` int(10) unsigned NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`booking_id`),
  FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
  FOREIGN KEY (phone_id) REFERENCES phone(phone_id) ON DELETE CASCADE
);

CREATE TABLE `payment` (
  `payment_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `date` date NOT NULL,
  `slip` varchar(255) NOT NULL,
  `total` int(10) NOT NULL,
  PRIMARY KEY (`payment_id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE
);

CREATE TABLE `images` (
  `images_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned,
  `phone_id` int(10) unsigned,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`images_id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE,
  FOREIGN KEY (phone_id) REFERENCES phone(phone_id) ON DELETE CASCADE
);

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `ID_card`, `email`, `phone`) VALUES
(1, 'อารีญา', 'สายทอง์', 809932094145, 'areya_saitong@gmail.com', '0955835690'),
(2, 'กานต์รวี', 'ศรีธาตุ', 239900048764, 'kob89_mainum@gmail.com', '0896758314'),
(3, 'ภารัณ', 'พิสมัย', 332271213570, 'wegoxi9162@gmail.com', '0995523697');

INSERT INTO `login`(`login_id`, `user_id`, `username`, `password`, `role`) VALUES
(1,1,'tracepretzel','password123','user'),
(2,2,'bagelscience','password456','admin'),
(3,3,'ferretnetherrack','password789','user');

INSERT INTO `phone`(`phone_id`, `brand`, `model`, `rent`, `deposit`, `amount`) VALUES
(1,'Samsung','Samsung Galaxy S20 Ultra',2500,1000,'20'),
(2,'Samsung','Samsung Galaxy S21 Ultra',2500,1000, '20'),
(3,'Samsung','Samsung Galaxy S22 Ultra',2500,1000, '20'),
(4,'Samsung','Samsung Galaxy S23 Ultra',2500,1000, '20'),
(5,'HUAWEI','HUAWEI P40 Pro+',1500,500, '10'),
(6,'HUAWEI','HUAWEI P50 Pro',1500,500, '10'),
(7,'HUAWEI','HUAWEI Mate40 Pro',1500,500, '10'),
(8,'HUAWEI','HUAWEI Mate50 Pro',1500,500, '10'),
(9,'IPhone','IPhone 13 Pro.png',1500,500, '10'),
(10,'IPhone','IPhone 13 Pro Max.png',1500,500, '10'),
(11,'IPhone','IPhone 14 Pro.png',1500,500, '10'),
(12,'IPhone','IPhone 14 Pro Max.png',1500,500, '10');

INSERT INTO `images` (`images_id`, `phone_id`, `file_path`) VALUES
(1,1,'img/SamsungGalaxyS20Ultra.png'),
(2,2,'img/SamsungGalaxyS21Ultra.png'),
(3,3,'img/SamsungGalaxyS22Ultra.png'),
(4,4,'img/SamsungGalaxyS23Ultra.png'),
(5,5,'img/HUAWEIP40Pro+.png'),
(6,6,'img/HUAWEIP50Pro.png'),
(7,7,'img/HUAWEIMate40Pro.png'),
(8,8,'img/HUAWEIMate50Pro.png'),
(9,9,'img/IPhone13Pro.png'),
(10,10,'img/IPhone13ProMax.png'),
(11,11,'img/IPhone14Pro.png'),
(12,12,'img/IPhone134ProMax.png');