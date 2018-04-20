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
            setTimeout( function () { alert( "The time has now started!" ); }, 1000 );              
            counter = document.getElementById("timeout").value;
          }

          function decTime(){
              counter = counter - 1;

              document.getElementById("tid").value = counter;
              if (counter <= 0){
                clearInterval(timer);
                document.getElementById("tid").innerHTML = alert("The time has expired!".toUpperCase());
                return;
                  
              }
              localStorage.setItem('tid',counter);
              var p = document.getElementById("tid");
              p.innerHTML = counter;

            }

            function countDown(){
              count = localStorage.getItem('tid');
              if(count != null){
                
                initCountDown();
                getTimeCountdown();

                //document.getElementById("tid").innerHTML = count;
              }else{
                return alert("Nothing to load");
              }
              
            }

            function getTimeCountdown(){
            setTimeout( function () { alert( "The time has now started!" ); }, 1000 );              
            count = localStorage.getItem('tid');
          }

          function decTimeCountDown(){
              count = count - 1;

              document.getElementById("tid").value = count;
              if (count <= 0){
                clearInterval(timerCount);
                document.getElementById("tid").innerHTML = alert("The time has expired!".toUpperCase());
                return;
                  
              }
              localStorage.setItem('tid',count);
              var p = document.getElementById("tid");
              p.innerHTML = count;

            }
 
