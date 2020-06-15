/*
 Navicat MySQL Data Transfer

 Source Server         : project
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : syyxdz

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 12/06/2019 23:59:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '',
  `age` int(10) unsigned NOT NULL,
  `createTime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, '陈浩', 29, '2019-06-11 00:32:27', '2019-06-11 00:32:27');
INSERT INTO `user` VALUES (2, '熊昭陵子', 33, '2019-06-11 12:43:45', '2019-06-11 12:43:47');
INSERT INTO `user` VALUES (3, '张芳子', 152, '2019-06-12 12:00:00', '2019-06-11 12:44:11');
INSERT INTO `user` VALUES (4, '陈浩子', 21, '2019-06-11 12:44:35', '2019-06-11 12:44:37');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
