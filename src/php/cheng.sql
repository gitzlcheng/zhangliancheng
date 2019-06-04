-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 12:08:50
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cheng`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` int(30) NOT NULL COMMENT '商品价格',
  `num` int(20) NOT NULL COMMENT '商品库存',
  `pic` varchar(255) NOT NULL COMMENT '商品图片',
  `details` varchar(255) NOT NULL COMMENT '商品详情',
  `type` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`, `type`) VALUES
(1, '魅族 16th', 2298, 2000, '{"big": "../img/big1.jpg","small1": "../img/xiao5.jpg","small2": "../img/xiao6.jpg","small3": "../img/xiao7.jpg","small4": "../img/xiao8.jpg"}', '骁龙845 屏幕下指纹', 'phone'),
(2, '魅族 16th Plus', 2698, 3000, '{"big": "../img/big2.jpg","small1": "../img/xiao9.jpg","small2": "../img/xiao10.jpg","small3": "../img/xiao11.jpg","small4": "../img/xiao12.jpg"}', '骁龙845 屏幕下指纹', 'phone'),
(3, '魅族 X8', 1298, 1000, '{"big": "../img/big3.jpg","small1": "../img/xiao13.jpg","small2": "../img/xiao14.jpg","small3": "../img/xiao15.jpg","small4": "../img/xiao16.jpg"}', '骁龙710 人脸+指纹双解锁', 'phone'),
(4, '魅族 16 X', 1798, 2000, '{"big": "../img/big4.jpg","small1": "../img/xiao17.jpg","small2": "../img/xiao18.jpg","small3": "../img/xiao19.jpg","small4": "../img/xiao20.jpg"}', '骁龙710 屏下指纹', 'phone'),
(5, '魅族 Note8', 1298, 2500, '{"big": "../img/big5.jpg","small1": "../img/xiao21.jpg","small2": "../img/xiao22.jpg","small3": "../img/xiao23.jpg","small4": "../img/xiao24.jpg"}', '骁龙632 人脸指纹双解锁', 'phone'),
(6, '魅族 V8 高配版', 898, 1000, '{"big": "../img/big6.jpg","small1": "../img/xiao25.jpg","small2": "../img/xiao26.jpg","small3": "../img/xiao27.jpg","small4": "../img/xiao28.jpg"}', '高清双摄 指纹+人脸双解锁', 'phone'),
(7, '魅族 15', 1498, 2300, '{"big": "../img/big7.jpg","small1": "../img/xiao29.jpg","small2": "../img/xiao30.jpg","small3": "../img/xiao31.jpg","small4": "../img/xiao32.jpg"}', '骁龙660 2000万暗光双摄', 'phone'),
(8, '魅族 Note9', 1598, 3000, '{"big": "../img/big8.jpg","small1": "../img/xiao1.jpg","small2": "../img/xiao2.jpg","small3": "../img/xiao3.jpg","small4": "../img/xiao4.jpg"}', '骁龙675 后置4800万', 'phone');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `user_id` int(255) NOT NULL COMMENT 'user_id',
  `user_name` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_pwd` varchar(255) NOT NULL,
  `user_sex` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_phone`, `user_pwd`, `user_sex`) VALUES
(1001, 'zhangsan', '15180206661', '123456', 1),
(1002, 'lisi', '15568246662', '1234567', 0),
(1003, 'wangwu', '15182226855', '12345678', 0),
(1004, '154225', '51549254', '12335548', 0),
(1005, 'haoliu', '151158546', '2546581', 1),
(1012, 'sgjdgdhsgyuwe', 'sgjdgdhsgyuwe', '1554895545', 1),
(1010, 'namejsa', 'namejsa', '123456789', 1),
(1011, '1548622', '1548622', '12543251', 1),
(1013, 'sfhasgfa', 'sfhasgfa', '5448846', 1),
(1014, '', '', '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT COMMENT 'user_id', AUTO_INCREMENT=1015;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
