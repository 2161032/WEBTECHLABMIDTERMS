<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Be Right Back</title>

  <!-- Custom fonts -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    
  <!-- Custom styles -->
  <link href="css/styles.css" rel="stylesheet">
  <!-- Website Icon -->
  <link href="img/BRBLogo.ico" rel="icon">
</head>

<body id="page-top">

<!-- Navigation -->
  <nav class="navbar" id="mainNav">
    <div class="brand-name" title="Be Right Back">
      <a class="navbar-brand" href="#page-top">Be Right Back</a>
	<div class ="menu">
         <button class="menu-button">Menu</button>
         <div class ="menu-content">
             <a href="bike.php" title="Bike">Bike</a>
             <a href="skate.php" title="Skate">Roller Skate</a>
             <a href="boat.php" title="Boat">Boat</a>
         </div>
      </div>
    </div>
  </nav>
    
  <!-- Header -->
  <header class="mainhead">
    <div class="top" title="BRB">
      <img class="img-logo" src="img/BRBLogo.png" alt="BRB logo" title="BRB logo">
      <h1>BRB</h1>
      <h2>Bikes - Roller Skates - Boats</h2>
        <a href="#choice" class="choose-button">Choose a Ride</a>   
    </div>
  </header>
    
  <!-- Choices Grid Section -->
  <section class="choice" id="choice">
    <div class="container">
      <h2>Choose a Ride</h2>
      <div class="row" id="choice">
        <div class="content" title="Bike">
          <a class="choice-item" href="bike.php">
            <div class="choice-item-caption">
                <img class="img-ride" src="img/bikeIcon.png" alt="BRB Bike"> 
            </div>
            <img class="img-ride" src="img/bike.jpg" alt="BRB Bike"> </a>
          <h2>Bike</h2>
         </div>
        <div class="content"  title="Roller Skate">
          <a class="choice-item" href="skate.php">
            <div class="choice-item-caption">
                <img class="img-ride" src="img/skateIcon.png" alt="BRB Roller Skate">            
            </div>
            <img class="img-ride" src="img/skate.jpg" alt="BRB Roller Skate"> </a>
          <h2>Roller Skate</h2>
        </div>
        <div class="content"  title="Boat">
          <a class="choice-item" href="boat.php">
            <div class="choice-item-caption">
                <img class="img-ride" src="img/boatIcon.png" alt="BRB Boat">   
            </div>
            <img class="img-ride" src="img/boat.jpg" alt="BRB Boat"> </a>
          <h2>Boat</h2>
        </div>
      </div>
    </div>
  </section>
        
<!-- Footer -->
<footer class="footer">
    <div class="second" title="About BRB"> 
        <h4>About BRB</h4>
        <p>BRB, means Be Right Back or also known as Bike, Roller Skate, Boats, is a Progressive Web Application used for renting rides such as bikes, roller skates, and boats in Burnham Park.</p>
    </div>
    
    <div class="third" title="Location: Burnham Park, Baguio City">
        <h4>Location</h4>
          <p>Burnham Park, Baguio City
            <br>
          </p>
    </div>
    
    <div class="social">
    <h4>Connect With Us</h4>
    
    <a href="https://facebook.com"><img src="img/facebook-icon.png"  class="socialfa" alt="facebook-icon" title="Facebook"></a>
    <a href="https://twitter.com"><img src="img/twitter-icon.png"  class="socialtw" alt="twitter-icon" title="Twitter"></a>
    <a href="https://instagram.com"><img src="img/instagram-icon.png"  class="socialig" alt="instagram-icon" title="Instagram"></a>
    </div>
</footer>   

   
    <!-- Scroll to Top Button -->
    <button onclick="topFunction()" id="up" title="Go up"><img class="img-up" src="img/upIcon.png" alt="up-icon"> </button>

    <script>
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("up").style.display = "block";
        } else {
            document.getElementById("up").style.display = "none";
            }
        }

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    </script>
    
<!-- Service Worker -->
	<script type="text/javascript">
	//This is the "Offline copy of pages" service worker

//Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker
if (navigator.serviceWorker.controller) {
  console.log('[PWA Builder] active service worker found, no need to register')
} else {
  //Register the ServiceWorker
  navigator.serviceWorker.register('pwabuilder-sw.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}
	</script>

        
    </body>
</html>