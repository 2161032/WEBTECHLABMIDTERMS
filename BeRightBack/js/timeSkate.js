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
              counter = document.getElementById("skatetimeout").value;
          }

          function decTime(){
              counter = counter - 1;

              document.getElementById("skatetid").value = counter;
              if (counter <= 0){
                clearInterval(timer);
                document.getElementById("skatetid").innerHTML = alert("The time has expired!".toUpperCase());
                return;
                  
              }
              localStorage.setItem('skatetid',counter);
              var p = document.getElementById("skatetid");
              p.innerHTML = counter;

            }

            function countDown(){
              count = localStorage.getItem('skatetid');
              if(count != null){
                
                initCountDown();
                getTimeCountdown();

                //document.getElementById("tid").innerHTML = count;
              }else{
                return alert("Nothing to load");
              }
              
            }

            function getTimeCountdown(){   
            count = localStorage.getItem('skatetid');
          }

          function decTimeCountDown(){
              count = count - 1;

              document.getElementById("skatetid").value = count;
              if (count <= 0){
                clearInterval(timerCount);
                document.getElementById("skatetid").innerHTML = alert("The time has expired!".toUpperCase());
                return;
                  
              }
              localStorage.setItem('skatetid',count);
              var p = document.getElementById("skatetid");
              p.innerHTML = count;

            }
 
