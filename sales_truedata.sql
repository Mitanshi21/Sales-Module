-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2025 at 12:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sales_truedata`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`) VALUES
(1, 'Rahul Sharma'),
(2, 'Priya Patel'),
(3, 'Amit Verma'),
(4, 'Sneha Mehta'),
(5, 'Karan Singh');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_price` float NOT NULL,
  `product_description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`, `product_description`) VALUES
(1, 'Laptop', 55000, 'Dell Inspiron'),
(2, 'Mobile Phone', 25000, 'Samsung Galaxy'),
(3, 'Headphones', 3000, 'Wireless Headset'),
(4, 'Smart Watch', 8000, 'Fitness Tracker'),
(5, 'Tablet', 18000, 'Android Tablet');

-- --------------------------------------------------------

--
-- Table structure for table `sales_details`
--

CREATE TABLE `sales_details` (
  `sales_details_id` int(11) NOT NULL,
  `sales_master_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `serial_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_details`
--

INSERT INTO `sales_details` (`sales_details_id`, `sales_master_id`, `product_id`, `serial_id`) VALUES
(1, 3, 3, 5),
(2, 4, 3, 5),
(3, 4, 4, 7),
(4, 4, 4, 7),
(5, 0, 0, 0),
(6, 0, 0, 0),
(7, 11, 2, 3),
(8, 11, 3, 6),
(9, 12, 2, 3),
(10, 12, 3, 6),
(11, 13, 3, 5),
(12, 13, 4, 7),
(13, 14, 3, 5),
(14, 14, 4, 7),
(15, 15, 3, 5),
(16, 15, 4, 7),
(17, 16, 3, 5),
(18, 16, 3, 5),
(19, 17, 3, 5),
(20, 17, 3, 5),
(21, 18, 3, 5),
(22, 18, 3, 5),
(23, 19, 1, 1),
(24, 19, 3, 5),
(25, 19, 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `sales_master`
--

CREATE TABLE `sales_master` (
  `sales_master_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `sales_date` date NOT NULL,
  `doc_id` bigint(20) NOT NULL,
  `amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_master`
--

INSERT INTO `sales_master` (`sales_master_id`, `customer_id`, `sales_date`, `doc_id`, `amount`) VALUES
(3, 1, '2025-12-19', 101, 11000),
(4, 1, '2025-12-19', 103, 11000),
(5, 2, '2025-12-19', 2001, 3000),
(6, 3, '2025-12-19', 2002, 3000),
(7, 3, '2025-12-20', 2003, 25000),
(8, 4, '2025-12-21', 2004, 28000),
(9, 4, '2025-12-21', 2004, 28000),
(10, 4, '2025-12-21', 2004, 28000),
(11, 4, '2025-12-21', 2004, 28000),
(12, 4, '2025-12-21', 2004, 28000),
(13, 4, '2025-12-20', 2003, 11000),
(14, 4, '2025-12-20', 2003, 11000),
(15, 4, '2025-12-20', 2003, 11000),
(16, 3, '2025-12-26', 2003, 6000),
(17, 3, '2025-12-26', 2003, 6000),
(18, 2, '2025-12-20', 2005, 6000),
(19, 2, '2025-12-23', 2001, 83000);

-- --------------------------------------------------------

--
-- Table structure for table `serial`
--

CREATE TABLE `serial` (
  `serial_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `serial_no` bigint(20) NOT NULL,
  `expiry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `serial`
--

INSERT INTO `serial` (`serial_id`, `product_id`, `serial_no`, `expiry_date`) VALUES
(1, 1, 1000000001, '2027-12-31'),
(2, 1, 1000000002, '2027-12-31'),
(3, 2, 2000000001, '2026-06-30'),
(4, 2, 2000000002, '2026-06-30'),
(5, 3, 3000000001, '2025-09-15'),
(6, 3, 3000000002, '2025-09-15'),
(7, 4, 4000000001, '2026-11-20'),
(8, 5, 5000000001, '2027-03-10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `sales_details`
--
ALTER TABLE `sales_details`
  ADD PRIMARY KEY (`sales_details_id`);

--
-- Indexes for table `sales_master`
--
ALTER TABLE `sales_master`
  ADD PRIMARY KEY (`sales_master_id`);

--
-- Indexes for table `serial`
--
ALTER TABLE `serial`
  ADD PRIMARY KEY (`serial_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sales_details`
--
ALTER TABLE `sales_details`
  MODIFY `sales_details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `sales_master`
--
ALTER TABLE `sales_master`
  MODIFY `sales_master_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `serial`
--
ALTER TABLE `serial`
  MODIFY `serial_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
