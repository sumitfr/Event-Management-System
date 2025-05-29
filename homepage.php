<?php
session_start();
include("connect.php");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/favicon.png">
    <title>DreamFest-HomePage</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/0b784c4b49.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="header">
        <nav id="navbar" class="navbar-white">
            <img src="images/logo3.png" class="logo">
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#popular-venues">Popular Venues</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
           
           
             <p style=color:white>
       Hello  <?php 
       if(isset($_SESSION['email'])){
        $email=$_SESSION['email'];
        $query=mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
        while($row=mysqli_fetch_array($query)){
            echo $row['firstName'].' '.$row['lastName'];
        }
       }
       ?>
       :)
    </p>
       <a href="logout.php" class="register-btn">Log Out</a>
      
        </nav>
        <section class="home" id="home">
            <form onsubmit="handleFormSubmit(event)">
                <div class="search-box">
                    <h1>Where Dream Meet Celebrations</h1>
                    <select id="serviceType" class="search-field">
                        <option disabled selected>Select Service type</option>
                        <option value="venues">Venues</option>
                        <option value="photographers">Photographers</option>
                        <option value="beautyMakeup">Beauty & Makeup</option>
                        <option value="planningDecor">Planning & Decor</option>
                        <option value="musicDance">Music & Dance</option>
                        <option value="catering">Catering</option>
                    </select>
                    <select id="city" class="search-field">
                        <option disabled selected>City</option>
                        <option value="Patna">Patna</option>
                        <option value="Bhagalpur">Bhagalpur</option>
                        <option value="Gaya">Gaya</option>
                        <option value="Muzaffarpur">Muzaffarpur</option>
                    </select>
                    <button class="btn" type="submit">Search</button>
                </div>
            </form>
        </section>
    </div>
    <!-----------------------------------chatbot cxode----------------------->
 <div class="chatbot-container" id="chatbotContainer">
    <div class="chatbot-header">
        <h2> <i class="fa-brands fa-rocketchat"></i> DreamFest</h2>
        <button id="closeChatbot" onclick="toggleChatbot()">X</button>
    </div>
    <div class="chatbot-body" id="chatbotBody">
        <div class="chatbot-message bot-message">Hello! Welcome To DreamFest assistance. How can I assist you today?</div>
    </div>
    <div class="chatbot-footer">
        <input type="text" id="chatbotInput" placeholder="Type a message..." onkeypress="handleKeyPress(event)">
        <button onclick="sendMessage()">Send</button>
    </div>
</div>
<button id="openChatbot" onclick="toggleChatbot()">Chat with us</button>

    <div class="contain" id="services">
        <h2 class="sub-title">Services </h2>
        <div class="services">
            <div>
                <img src="images/venues.avif">
                <span>
                    <h3> Venues</h3>
                </span>
            </div>
            <div>
                <img src="images/camera.avif">
                <span>
                    <h3> Photographers</h3>
                </span>
            </div>
            <div>
                <img src="images/beauty.jpg">
                <span>
                    <h3> Beauty & Makeup</h3>
                </span>
            </div>
            <div>
                <img src="images/decorators.jpg">
                <span>
                    <h3> Planning & Decor</h3>
                </span>
            </div>
            <div>
                <img src="images/music.jpg">
                <span>
                    <h3> Music & Dance</h3>
                </span>
            </div>
            <div>
                <img src="images/catering.jpg">
                <span>
                    <h3> Catering</h3>
                </span>
            </div>
        </div>
        <h2 class="sub-title" id="popular-venues">Popular Venues</h2>
        <div class="popular">
            <div>
                <img src="images/hotel maurya.jpeg">
                <h3>Hotel Maurya</h3>
                <p>Patna</p>
                <button class="button">More Info</button>
            </div>
            <div>
                <img src="images/venue_title.jpeg">
                <h3>Hotel Chinmaye Inn</h3>
                <p>Bhagalpur</p>
                <button class="button">More Info</button>
            </div>
            <div>
                <img src="images/gaya.jpeg">
                <h3>Mahabodhi Resort</h3>
                <p>Gaya</p>
                <button class="button">More Info</button>
            </div>
            <div>
                <img src="images/bndhan - Copy.jpg">
                <h3>Bandhan Resort</h3>
                <p>Muzaffarpur</p>
                <button class="button">More Info</button>
            </div>
        </div>
    </div>
    <div class="about-msg">
        <h2>About DreamFest</h2>
        <p>
            DreamFest is a distinguished event management firm headquartered in <span>Patna</span>, proudly extending services across <span>Patna</span>, <span>Gaya</span>, <span>Muzaffarpur</span>, and <span>Bhagalpur</span>. Our comprehensive offerings encompass venues, professional photography, exquisite beauty & makeup services, meticulous planning & decor, vibrant music & dance arrangements, and delectable catering solutions.
        </p>
        <p>
            Renowned for orchestrating flawless events, DreamFest partners with esteemed locales such as <span>Hotel Maurya</span> in Patna, <span>Hotel Chinmaye Inn</span> in Bhagalpur, <span>Mahabodhi Resort</span> in Gaya, and <span>Bandhan Resort</span> in Muzaffarpur. With a commitment to excellence, we transform visions into reality, ensuring each occasion is an unforgettable masterpiece of precision and creativity.
        </p>
    </div>
    

    <!--------------------------------------------footer section--------------------------->
    <footer id="contact">
        <div class="container">
            <div class="f-container">
                <h2>Dream Fest - Your Personal Event Planner</h2><br>
                <p>Plan your Event with Us Dream Fest is an Indian Event Planning Website </p>
                <div>
                    <button class="btn">Register as a Vendor</button>
                </div>
                <div class="footer">
                    <a href="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="https://linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <hr>
                </div>
            </div>
            <div class="f-container">
                <h2>Our Location</h2>
                <a href="https://en.wikipedia.org/wiki/Patna" target="_blank"><i class="fas fa-angle-right"></i>Patna</a>
                <a href="https://en.wikipedia.org/wiki/Bhagalpur" target="_blank"><i class="fas fa-angle-right"></i>Bhagalpur</a>
                <a href="https://en.wikipedia.org/wiki/Gaya_(India)" target="_blank"><i class="fas fa-angle-right"></i>Gaya</a>
                <a href="https://en.wikipedia.org/wiki/Muzaffarpur" target="_blank"><i class="fas fa-angle-right"></i>Muzaffarpur</a>
            </div>
            <div class="f-container">
                <h2>Our Newsletter</h2>
                <p>Subscribe for latest updates</p>
                <input type="text" placeholder="Enter Your Email">
                <button class="btn">Subscribe</button>
            </div>
        </div>
    </footer>
    <div class="copyright">
        <p>Copyright ©2024 All Rights Reserved</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
