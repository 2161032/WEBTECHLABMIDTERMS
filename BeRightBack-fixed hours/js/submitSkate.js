    var table, row, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, a1, b1, c1, d1, e1, f1, g1, g, e, timerValue, tot, timeVal;
    var ctr = 0;    
    var count = 0;

    function myFunction() {
        table = document.getElementById("myTable");
        row = table.insertRow(1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);
        cell7 = row.insertCell(6);
        cell7.id = ctr;
        /*cell8 = row.insertCell(7);
        cell8.id = count;*/

        
        var a = document.getElementById("skatename");
        localStorage.setItem('skatename',a.value);
        a1 = localStorage.getItem('skatename');
        console.log(a1);
                          
        var b = document.getElementById("skatetype");
        localStorage.setItem('skatetype',b.value);
        b1 = localStorage.getItem('skatetype');
        console.log(b1);
              
        var c = document.getElementById("skatenumber");
        localStorage.setItem('skatenumber',c.value);
        c1 = localStorage.getItem('skatenumber');
        console.log(c1);
              
        var d = document.getElementById("skatetimein");
        localStorage.setItem('skatetimein',d.value);
        d1 = localStorage.getItem('skatetimein');
        console.log(d1);
                
        e = document.getElementById("skatetimeout");
        if(e.value == 1800){
            timeVal = "30MIN";
        } else if(e.value == 3600){
            timeVal = "1HR";
        }else if(e.value == 5400){
            timeVal = "1HR 30MIN";
        }else if(e.value == 7200){
            timeVal = "2HRS";
        }else{
            timeVal = "FREE TIME";
        }

        localStorage.setItem('skatetimeout', timeVal);
        e1 = localStorage.getItem('skatetimeout');
        console.log(e1);
              
        var f = document.getElementById("skateprice");
        localStorage.setItem('skateprice',f.value);
        f1 = localStorage.getItem('skateprice');
        console.log(f1);
                               
        cell1.innerHTML = a1; 
        cell2.innerHTML = b1;
        cell3.innerHTML = c1;
        cell4.innerHTML = d1;
        cell5.innerHTML = e1;
        cell6.innerHTML = f1;
        if(timeVal == "FREE TIME"){
            cell7.innerHTML = 'FREE TIME';
        } else{
            startTimer(ctr, e.value);            
        }
        //cell8.innerHTML = 'Stop';
        ctr++;
        count++;
        }

        function relFunction(){
            if(localStorage.getItem('skatename') != null){
                a1 = localStorage.getItem('skatename');                          
                b1 = localStorage.getItem('skatetype');              
                c1 = localStorage.getItem('skatenumber');
                d1 = localStorage.getItem('skatetimein');
                e1 = localStorage.getItem('skatetimeout');              
                f1 = localStorage.getItem('skateprice');               
                tot = localStorage.getItem('skatetotal');

                //cell8 = row.insertCell(7);
                     
                //cell8.innerHTML = 'Stop';
                document.getElementById('skatetotal').innerHTML = tot;
            } else{
                return alert("Nothing to load");
            }   
        }

        var total = 0;
                  
        //document.getElementById('saveInput').onsubmit;

        function myEntryFunction() {
            var entry = document.getElementById('skateprice').value;
            var entry = parseFloat(entry);
                currency = currencyFormat(entry);
                document.getElementById('skatemyEntries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
                total += entry;
                localStorage.setItem('skatetotal', total);
                document.getElementById('skatetotal').innerHTML = currencyFormat(total);
                return false;
        }

        function currencyFormat(number) {
            var currency = parseFloat(number);
            currency = currency.toFixed(2);
            currency = 'P' + currency;
            return currency;
        }

        function startTimer(elementID, duration) {          
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                
                document.getElementById(elementID).innerHTML = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }


       
