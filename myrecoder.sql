/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50735
 Source Host           : localhost:3306
 Source Schema         : myrecoder

 Target Server Type    : MySQL
 Target Server Version : 50735
 File Encoding         : 65001

 Date: 27/05/2024 08:31:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bot
-- ----------------------------
DROP TABLE IF EXISTS `bot`;
CREATE TABLE `bot`  (
  `botId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `botName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `accountKey` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `percent` decimal(10, 2) NULL DEFAULT NULL,
  `updateTime` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`botId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bot
-- ----------------------------
INSERT INTO `bot` VALUES (1, 'bt', 'ss', 34.00, 1122);
INSERT INTO `bot` VALUES (2, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for botdetail
-- ----------------------------
DROP TABLE IF EXISTS `botdetail`;
CREATE TABLE `botdetail`  (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `sceneName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `sceneId` int(11) NULL DEFAULT NULL,
  `total` int(255) NULL DEFAULT NULL,
  `recordedTotal` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for recordingdetails
-- ----------------------------
DROP TABLE IF EXISTS `recordingdetails`;
CREATE TABLE `recordingdetails`  (
  `recordingId` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `callScript` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` tinyint(255) NULL DEFAULT NULL,
  `accountKey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `duration` int(255) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `extraId` int(11) NULL DEFAULT NULL,
  `botId` int(11) NULL DEFAULT NULL,
  `sceneId` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`recordingId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tutorials
-- ----------------------------
DROP TABLE IF EXISTS `tutorials`;
CREATE TABLE `tutorials`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `published` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tutorials
-- ----------------------------
INSERT INTO `tutorials` VALUES (1, 'test', 'testa', 'true');
INSERT INTO `tutorials` VALUES (2, 'test2', 'testb', 'false');
INSERT INTO `tutorials` VALUES (3, 'tesst3', 'testc', 'true');
INSERT INTO `tutorials` VALUES (4, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
