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
              counter = document.getElementById("biketimeout").value;
          }

          function decTime(){
              counter = counter - 1;

              document.getElementById("biketid").value = counter;
              if (counter <= 0){
                clearInterval(timer);
                document.getElementById("biketid").innerHTML = alert("The time has expired!".toUpperCase());
                return;
                  
              }
              localStorage.setItem('biketid',counter);
              var p = document.getElementById("biketid");
              p.innerHTML = counter;

            }

            function countDown(){
              count = localStorage.getItem('biketid');
              if(count != null){
                
                initCountDown();
                getTimeCountdown();

                //document.getElementById("tid").innerHTML = count;
              }else{
                return alert("Nothing to load");
              }
              
            }

            function getTimeCountdown(){   
            count = localStorage.getItem('biketid');
          }

          function decTimeCountDown(){
              count = count - 1;

              document.getElementById("biketid").value = count;
              if (count <= 0){
                clearInterval(timerCount);
                document.getElementById("biketid").innerHTML = alert("The time has expired!".toUpperCase());
                return;
                  
              }
              localStorage.setItem('biketid',count);
              var p = document.getElementById("biketid");
              p.innerHTML = count;

            }
 
