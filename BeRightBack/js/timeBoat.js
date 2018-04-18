          var count
          var timer;
          var counter; 
          var timerCount;

        document.getElementById('saveInput').onsubmit;

          function init(){
              timer = setInterval(decTime,1000);
          }

          function initCountDown(){
              timerCount = setInterval(decTimeCountDown,1000);
          }

          function getTime(){
              counter = document.getElementById("boattimeout").value;
          }

          function decTime(){
              counter = counter - 1;

              document.getElementById("boattid").value = counter;
              if (counter <= 0){
                clearInterval(timer);
                document.getElementById("boattid").innerHTML = alert("The time has expired!".toUpperCase());
                return;
                  
              }
              localStorage.setItem('boattid',counter);
              var p = document.getElementById("boattid");
              p.innerHTML = counter;

            }

            function countDown(){
              count = localStorage.getItem('boattid');
              if(count != null){
                
                initCountDown();
                getTimeCountdown();

                //document.getElementById("tid").innerHTML = count;
              }else{
                return alert("Nothing to load");
              }
              
            }

            function getTimeCountdown(){   
            count = localStorage.getItem('boattid');
          }

          function decTimeCountDown(){
              count = count - 1;

              document.getElementById("boattid").value = count;
              if (count <= 0){
                clearInterval(timerCount);
                document.getElementById("boattid").innerHTML = alert("The time has expired!".toUpperCase());
                return;
                  
              }
              localStorage.setItem('boattid',count);
              var p = document.getElementById("boattid");
              p.innerHTML = count;

            }
 
