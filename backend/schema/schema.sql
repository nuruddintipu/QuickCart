--
-- Database: `quickcart`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products`
(
    `id`          int(11) NOT NULL,
    `name`        varchar(255)   NOT NULL,
    `price`       decimal(10, 2) NOT NULL,
    `image`       text                    DEFAULT NULL,
    `description` text                    DEFAULT NULL,
    `category`    varchar(100)            DEFAULT NULL,
    `brand`       varchar(100)            DEFAULT NULL,
    `rating`      decimal(2, 1)           DEFAULT 0.0,
    `stock`       int(11) DEFAULT 20,
    `created_at`  timestamp      NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping mock data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `description`, `category`, `brand`, `rating`, `stock`,
                        `created_at`)
VALUES (1, 'Wireless Headphones', 59.99, '/images/1.jpg', 'High-quality wireless headphones with noise cancellation.',
        'Audio', 'SoundMagic', 4.6, 15, '2025-07-03 21:15:39'),
       (2, 'Smart Watch', 89.99, '/images/2.jpg', 'Stylish smart watch with fitness tracking features.', 'Wearable',
        'WristTech', 4.2, 10, '2025-07-03 21:15:39'),
       (3, 'Gaming Mouse', 29.99, '/images/3.jpg', 'Ergonomic gaming mouse with high DPI and RGB lighting.',
        'Accessories', 'ClickPro', 4.4, 25, '2025-07-03 21:15:39'),
       (4, 'Bluetooth Speaker', 45.99, '/images/4.jpg',
        'Portable Bluetooth speaker with deep bass and long battery life.', 'Audio', 'BassBoom', 4.5, 12,
        '2025-07-03 21:15:39'),
       (5, 'Laptop Backpack', 39.99, '/images/5.jpg',
        'Durable and water-resistant laptop backpack with USB charging port.', 'Bags', 'UrbanPack', 4.3, 30,
        '2025-07-03 21:15:39'),
       (6, 'Fitness Tracker', 49.99, '/images/6.jpg',
        'Advanced fitness tracker with heart rate monitoring and step counter.', 'Wearable', 'FitPulse', 4.0, 20,
        '2025-07-03 21:15:39'),
       (7, 'USB-C Hub', 24.99, '/images/7.jpg', '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card slots.',
        'Accessories', 'PortX', 4.1, 40, '2025-07-03 21:15:39'),
       (8, 'Noise Cancelling Earbuds', 69.99, '/images/8.jpg',
        'Compact earbuds with active noise cancellation and clear sound.', 'Audio', 'ZenSound', 4.7, 18,
        '2025-07-03 21:15:39'),
       (9, 'Mechanical Keyboard', 79.99, '/images/9.jpg',
        'RGB backlit mechanical keyboard for fast and accurate typing.', 'Accessories', 'KeyChronix', 4.5, 22,
        '2025-07-03 21:15:39'),
       (10, 'Wireless Charger Pad', 19.99, '/images/10.jpg',
        'Fast wireless charging pad compatible with all Qi-enabled devices.', 'Accessories', 'ChargeMate', 4.3, 50,
        '2025-07-03 21:15:39'),
       (11, 'Mini Projector', 129.99, '/images/11.jpg', 'Compact HD mini projector suitable for home or travel use.',
        'Electronics', 'VisualBeam', 4.4, 8, '2025-07-03 21:15:39'),
       (12, 'VR Headset', 199.99, '/images/12.jpg', 'Immersive VR headset compatible with mobile and desktop.',
        'Gaming', 'ImmersiTech', 4.6, 6, '2025-07-03 21:15:39'),
       (13, 'Portable SSD 1TB', 109.99, '/images/13.jpg', 'High-speed portable SSD for reliable data transfer.',
        'Storage', 'DataSwift', 4.7, 14, '2025-07-03 21:15:39'),
       (14, 'Digital Photo Frame', 64.99, '/images/14.jpg',
        'Wi-Fi enabled digital photo frame with auto-rotate display.', 'Home', 'FrameIt', 4.2, 17,
        '2025-07-03 21:15:39'),
       (15, '4K Action Camera', 149.99, '/images/15.jpg',
        'Rugged 4K action camera with waterproof casing and remote control.', 'Photography', 'GoXtreme', 4.5, 9,
        '2025-07-03 21:15:39');
