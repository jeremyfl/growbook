/*
 Navicat Premium Data Transfer

 Source Server         : local mariadb
 Source Server Type    : MariaDB
 Source Server Version : 100309
 Source Host           : localhost:3306
 Source Schema         : growbook

 Target Server Type    : MariaDB
 Target Server Version : 100309
 File Encoding         : 65001

 Date: 30/11/2018 13:41:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for adonis_schema
-- ----------------------------
DROP TABLE IF EXISTS `adonis_schema`;
CREATE TABLE `adonis_schema` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of adonis_schema
-- ----------------------------
BEGIN;
INSERT INTO `adonis_schema` VALUES (27, '1503142511208_franchise_schema', 1, '2018-11-30 12:51:34');
INSERT INTO `adonis_schema` VALUES (28, '1503248427885_user', 1, '2018-11-30 12:51:34');
INSERT INTO `adonis_schema` VALUES (29, '1503248427886_token', 1, '2018-11-30 12:51:34');
INSERT INTO `adonis_schema` VALUES (30, '1543542514590_penerbit_schema', 1, '2018-11-30 12:51:34');
INSERT INTO `adonis_schema` VALUES (31, '1543542518524_kategori_buku_schema', 1, '2018-11-30 12:51:34');
INSERT INTO `adonis_schema` VALUES (32, '1543542518525_buku_schema', 1, '2018-11-30 12:51:34');
INSERT INTO `adonis_schema` VALUES (33, '1543549341119_order_buku_schema', 1, '2018-11-30 12:51:34');
COMMIT;

-- ----------------------------
-- Table structure for bukus
-- ----------------------------
DROP TABLE IF EXISTS `bukus`;
CREATE TABLE `bukus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `stok` int(11) DEFAULT NULL,
  `kategori_buku_id` int(10) unsigned DEFAULT NULL,
  `penerbit_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bukus_kategori_buku_id_foreign` (`kategori_buku_id`),
  KEY `bukus_penerbit_id_foreign` (`penerbit_id`),
  CONSTRAINT `bukus_kategori_buku_id_foreign` FOREIGN KEY (`kategori_buku_id`) REFERENCES `kategori_bukus` (`id`) ON DELETE CASCADE,
  CONSTRAINT `bukus_penerbit_id_foreign` FOREIGN KEY (`penerbit_id`) REFERENCES `penerbits` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of bukus
-- ----------------------------
BEGIN;
INSERT INTO `bukus` VALUES (1, 'Analisis & Percangan Sistem Informasi', '50000', 50, 1, 1, '2018-11-30 12:56:42', '2018-11-30 13:29:14');
INSERT INTO `bukus` VALUES (2, 'Artifial Intelegence', '45000', 60, 1, 1, '2018-11-30 13:02:44', '2018-11-30 13:02:44');
INSERT INTO `bukus` VALUES (3, 'Cahaya di Penjuru Buku', '68000', 10, 3, 2, '2018-11-30 13:03:22', '2018-11-30 13:03:22');
INSERT INTO `bukus` VALUES (4, 'Autocad 3 Dimensi', '40000', 25, 1, 1, '2018-11-30 13:36:28', '2018-11-30 13:38:46');
INSERT INTO `bukus` VALUES (5, 'Bisnis Online', '75000', 9, 2, 1, '2018-11-30 13:39:41', '2018-11-30 13:39:41');
COMMIT;

-- ----------------------------
-- Table structure for franchises
-- ----------------------------
DROP TABLE IF EXISTS `franchises`;
CREATE TABLE `franchises` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `telepon` varchar(255) DEFAULT NULL,
  `masa_berlaku` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of franchises
-- ----------------------------
BEGIN;
INSERT INTO `franchises` VALUES (1, 'Jeremy', 'Taman Pabuaran', 'Tangerang', '083897613570', '5 Bulan', '2018-11-30 12:54:32', '2018-11-30 13:39:06');
INSERT INTO `franchises` VALUES (2, 'Febri Aganan', 'Jl. Iskandar Muda No 24', 'Medan', '06145222222', NULL, '2018-11-30 13:09:53', '2018-11-30 13:09:53');
COMMIT;

-- ----------------------------
-- Table structure for kategori_bukus
-- ----------------------------
DROP TABLE IF EXISTS `kategori_bukus`;
CREATE TABLE `kategori_bukus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of kategori_bukus
-- ----------------------------
BEGIN;
INSERT INTO `kategori_bukus` VALUES (1, 'Keilmuan', '2018-11-30 12:55:37', '2018-11-30 12:55:37');
INSERT INTO `kategori_bukus` VALUES (2, 'Bisnis', '2018-11-30 12:59:24', '2018-11-30 12:59:24');
INSERT INTO `kategori_bukus` VALUES (3, 'Novel', '2018-11-30 12:59:28', '2018-11-30 12:59:28');
COMMIT;

-- ----------------------------
-- Table structure for order_bukus
-- ----------------------------
DROP TABLE IF EXISTS `order_bukus`;
CREATE TABLE `order_bukus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `jumlah` int(11) DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `buku_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_bukus_user_id_foreign` (`user_id`),
  KEY `order_bukus_buku_id_foreign` (`buku_id`),
  CONSTRAINT `order_bukus_buku_id_foreign` FOREIGN KEY (`buku_id`) REFERENCES `bukus` (`id`) ON DELETE CASCADE,
  CONSTRAINT `order_bukus_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of order_bukus
-- ----------------------------
BEGIN;
INSERT INTO `order_bukus` VALUES (1, 5, 1, 1, '2018-11-30 12:57:23', '2018-11-30 12:57:23');
INSERT INTO `order_bukus` VALUES (2, 5, 1, 1, '2018-11-30 13:29:14', '2018-11-30 13:29:14');
COMMIT;

-- ----------------------------
-- Table structure for penerbits
-- ----------------------------
DROP TABLE IF EXISTS `penerbits`;
CREATE TABLE `penerbits` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `telepon` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of penerbits
-- ----------------------------
BEGIN;
INSERT INTO `penerbits` VALUES (1, 'Penerbit Informatika', 'Jl. Buah Batu No. 121', 'Bandung', '081322201946', '2018-11-30 12:56:19', '2018-11-30 13:39:11');
INSERT INTO `penerbits` VALUES (2, 'Andi Offset', 'Jl. Suryalaya IX No.3', 'Bandung', '087839030688', '2018-11-30 13:02:20', '2018-11-30 13:02:20');
COMMIT;

-- ----------------------------
-- Table structure for tokens
-- ----------------------------
DROP TABLE IF EXISTS `tokens`;
CREATE TABLE `tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  KEY `tokens_token_index` (`token`),
  CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(254) NOT NULL,
  `password` varchar(60) NOT NULL,
  `type` enum('admin','franchise') DEFAULT NULL,
  `franchise_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_franchise_id_foreign` (`franchise_id`),
  CONSTRAINT `users_franchise_id_foreign` FOREIGN KEY (`franchise_id`) REFERENCES `franchises` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'jeremylombogia7@gmail.com', '$2a$10$qGvRVN5bAqJVgIUXHy/rl.L9lt6C7lhgpFqJp3Qo592doem8Eq8Ke', 'franchise', 1, '2018-11-30 12:54:32', '2018-11-30 12:54:32');
INSERT INTO `users` VALUES (2, 'admin@admin.com', '$2a$10$s0HSptDSFA7buxw.APBtjOtLQOQc.co24/Pc1e71G/PqWfhFnu2ma', 'admin', NULL, '2018-11-30 12:54:32', '2018-11-30 12:54:32');
INSERT INTO `users` VALUES (3, 'febri@gmail.com', '$2a$10$s0HSptDSFA7buxw.APBtjOtLQOQc.co24/Pc1e71G/PqWfhFnu2ma', 'franchise', 2, '2018-11-30 13:09:53', '2018-11-30 13:09:53');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
