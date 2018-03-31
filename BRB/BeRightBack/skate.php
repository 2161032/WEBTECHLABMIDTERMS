<?php
// define variables and set to empty values
$nameErr = $phoneErr = "";
$name = $phone = $type = $number = $time = $price = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }
  
  if (empty($_POST["phone"])) {
    $phoneErr = "Phone Number is required";
  } else {
    $phone = test_input($_POST["phone"]);
    // check if e-mail address is well-formed
    if(preg_match("/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/", $phone)) {
      $phoneErr = "Invalid phone format"; 
    }
  }
    
    
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Be Right Back</title>

  <!-- Custom fonts -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
  <!-- Custom styles for this template -->
  <link href="css/styles.css" rel="stylesheet">
  <!-- Website Icon -->
  <link href="img/BRBLogo.ico" rel="icon">
</head>

  <body id="page-top">

<!-- Navigation -->
  <nav class="navbar" id="mainNav">
    <div class="brand-name">
      <a class="navbar-brand" href="#page-top">Be Right Back</a>
        <a href="index.html" class="go-button">Go Back</a>
    </div>
  </nav>
      
      
<!-- Header Ride -->
  <div class="head-ride">
            <img class="img-head-ride" src="img/skate.jpg" alt="BRB RollerSkate" title="Roller Skate">
    </div>
      
        <!-- Input Section -->
          <section id="input">
              <div class="container">
                <h2>Roller Skate</h2>
                  <hr><img class="img-ride" src="img/skateIcon.png" alt="BRB RollerSkate">
                  <div class="floating-label-form-group">
                        <p><span class="error">* required field.</span></p>
                        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
                            Name:<br><input type="text" name="name" value="<?php echo $name;?>"><span class="error">* <?php echo $nameErr;?></span>
                            <br><br>
                            Phone Number:<br><input type="number" name="phone" value="<?php echo $phone;?>"><span class="error">* <?php echo $phoneErr;?></span>
                            <br><br>
                            Type of Skate:<br> 
                            <select name="type"><?php echo $type;?>
                                <option value="" disabled="" selected="">Type of Skates</option>
                            <option value="inline">Inline</option>
                            <option value="roller">Roller</option>
                            </select>
                            <br><br>
                        Number of Skate:<br><input type="number" name="number" min="1" value="<?php echo $number;?>">
                            <br><br>
                        Time-In:<br><input type="time" name="time" value="<?php echo $time;?>">
                            <br><br>    
                        Time-Out:<br><input type="time" name="time" value="<?php echo $time;?>">
                            <br><br>
                        Price:<br><input type="number" name="price" min="50" step="50" value="<?php echo $price;?>">
                        <br><br>
                    </form>
                  </div>  
                        <div class="form-button">
                        <input type="button" class="add" value="Submit">
                        <input type="reset" class="cancel" id="resetButton" value="Cancel">
                      </div>
        </div>
    </section>
                
                          
    <!-- About Rentals -->
    <section class="bg-primary">
      <div class="container">
        <h2 class="text-primary">Rentals</h2>
          <hr>
        <div class="row">
              <p id="demo">Time will appear here</p>
            <br>
              <p id="demo">Time will appear here</p>
            <br>
              <p id="demo">Time will appear here</p>
            <br>
          </div>
        </div>
    </section>

<!-- Breakdown Section -->
  <section class="bg-secondary">
    <div class="container">
      <h2 class="text-primary">Breakdown</h2>
    </div>
      <hr>
      <div class="row">
              <p id="demo">Breakdown here</p>
            <br>
              <p id="demo"></p>
            <br>
              <p id="demo"></p>
            <br>        
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
      
    <script>
          function timedText() {
            setTimeout(myTimeout1, 1800000) 
            setTimeout(myTimeout2, 3600000) 
            setTimeout(myTimeout3, 7200000) 
            setTimeout(myTimeout4, 10800000) 
          }

          function myTimeout1() {
            document.getElementById("demo").innerHTML = "30 Minutes has passed";
          }
          function myTimeout2() {
            document.getElementById("demo").innerHTML = "1 Hour has passed";
          }
          function myTimeout3() {
            document.getElementById("demo").innerHTML = "1 Hour and 30 Seconds has passed";
          }
          function myTimeout4() {
            document.getElementById("demo").innerHTML = "2 Hours has passed";
          }          
      </script>

<?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $phone;
echo "<br>";
echo $type;
echo "<br>";
echo $number;
echo "<br>";
echo $time;
echo "<br>";
echo $time;
echo "<br>";
echo $price;
?>
      
  </body>
</html>
