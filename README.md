
# Node.js and Express API with MySQL


## Overview
This project is a simple Node.js application using the Express framework and MySQL for database interactions. The application connects to a MySQL database and provides several API endpoints to interact with a products table.
## Setup


run `npm init` to set up new npm package.

create `index.js` file to write connection code.

to run file use `node index.js` on terminal.

additional info`:`

use postman API to use API [run].

done basic setting on postman to connect `http://localhost/3000` get method.

run this command to setup nodemon `npm i -g nodemon`.

to run use `nodemon index.js`.





## To Run

run `npm i` to install necessary packages.

run `node index.js` and check localhost:3000

make sure you have `mysql database` with `nodeDB` database and `products` table

make sure mysql connectivity match `user`,`password` i.e. `root`.

database code written `below` :
## mysql Database

```mysql

create database nodeDB;
use nodeDB;

create table products (id int, name varchar(100), description varchar(500),price int);

INSERT INTO products (id, name, description, price)
VALUES
    (1, 'Wireless Mouse', 'A sleek and ergonomic wireless mouse with long battery life.', 25),
    (2, 'Mechanical Keyboard', 'A durable mechanical keyboard with customizable RGB lighting.', 50),
    (3, 'Gaming Headset', 'A high-quality gaming headset with surround sound and noise-cancelling microphone.', 75),
    (4, 'USB-C Hub', 'A versatile USB-C hub with multiple ports for enhanced connectivity.', 40),
    (5, 'External SSD', 'A portable external SSD with fast read and write speeds.', 120),
    (6, '4K Monitor', 'A stunning 27-inch 4K monitor with vibrant colors and sharp details.', 300),
    (7, 'Bluetooth Speaker', 'A compact Bluetooth speaker with excellent sound quality and battery life.', 60),
    (8, 'Smartwatch', 'A stylish smartwatch with fitness tracking and notification features.', 150),
    (9, 'Wireless Charger', 'A fast wireless charger compatible with various devices.', 30),
    (10, 'Action Camera', 'A rugged action camera with 4K recording and waterproof design.', 200),
    (11, 'Laptop Stand', 'An adjustable laptop stand for ergonomic typing and cooling.', 35),
    (12, 'Noise-Cancelling Earbuds', 'Wireless earbuds with active noise cancellation and superior sound quality.', 100),
    (13, 'Smart Thermostat', 'A smart thermostat with remote control and energy-saving features.', 130),
    (14, 'E-reader', 'A lightweight e-reader with a high-resolution display and long battery life.', 110),
    (15, 'VR Headset', 'An immersive VR headset with high-definition graphics and motion tracking.', 250),
    (16, 'Fitness Tracker', 'A compact fitness tracker with heart rate monitoring and activity tracking.', 90),
    (17, 'Portable Projector', 'A mini portable projector with HD resolution and built-in speakers.', 180),
    (18, 'Smart Light Bulbs', 'A set of smart light bulbs with adjustable brightness and color.', 70),
    (19, 'Electric Toothbrush', 'An electric toothbrush with multiple brushing modes and long battery life.', 80),
    (20, 'Robot Vacuum', 'A smart robot vacuum with powerful suction and scheduling features.', 220),
    (21, 'Instant Pot', 'A multi-functional Instant Pot for quick and easy cooking.', 100),
    (22, 'Air Purifier', 'A high-efficiency air purifier with HEPA filter for clean air.', 140),
    (23, 'Digital Photo Frame', 'A digital photo frame with Wi-Fi connectivity and high-resolution display.', 90),
    (24, 'Smart Doorbell', 'A smart doorbell with video recording and motion detection.', 160),
    (25, 'Electric Scooter', 'A foldable electric scooter with long-range battery and fast charging.', 300);


```
node file has been attached to the repository.


## images
![page1](https://github.com/user-attachments/assets/417dbfd2-4bd7-43a3-b5a2-1a69f9790083)
![page2](https://github.com/user-attachments/assets/f08ee967-a60f-4f9e-b04f-faa993cbdc38)
![page3](https://github.com/user-attachments/assets/942276eb-bf32-42b7-bd89-0c3e35093e00)
![page4](https://github.com/user-attachments/assets/8209ab72-5887-41c4-822d-add749887256)


## Link

 - [Express Structure](https://expressjs.com/en/starter/hello-world.html)



