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

        
        var a = document.getElementById("boatname");
        localStorage.setItem('boatname',a.value);
        a1 = localStorage.getItem('boatname');
        console.log(a1);
                          
        var b = document.getElementById("boattype");
        localStorage.setItem('boattype',b.value);
        b1 = localStorage.getItem('boattype');
        console.log(b1);
              
        var c = document.getElementById("boatnumber");
        localStorage.setItem('boatnumber',c.value);
        c1 = localStorage.getItem('boatnumber');
        console.log(c1);
              
        var d = document.getElementById("boattimein");
        localStorage.setItem('boattimein',d.value);
        d1 = localStorage.getItem('boattimein');
        console.log(d1);
                
        e = document.getElementById("boattimeout");
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

        localStorage.setItem('boattimeout', timeVal);
        e1 = localStorage.getItem('boattimeout');
        console.log(e1);
              
        var f = document.getElementById("boatprice");
        localStorage.setItem('boatprice',f.value);
        f1 = localStorage.getItem('boatprice');
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
            if(timeVal == '30MIN'){
                    var strArr = d1.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        cell7.innerHTML = hour+':'+min;
                    }else{
                        cell7.innerHTML = hour+':'+min;
                    }
                     
                } else if(timeVal == '1HR'){
                    var strArr = d1.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]);
                    cell7.innerHTML = hour+':'+min;                    
                }else if(timeVal == '1HR 30MIN'){
                    var strArr = d1.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        cell7.innerHTML = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }                  
                }else if(timeVal == '2HRS'){
                    var strArr = d1.split(":");
                    var hour = parseInt(strArr[0])+2;
                    var min = parseInt(strArr[1]);
                    cell7.innerHTML = hour+':'+min;                    
                }           
        }

        //cell8.innerHTML = 'Stop';
        count++;
        }

        function relFunction(){
            if(localStorage.getItem('boatname') != null){
                a1 = localStorage.getItem('boatname');                          
                b1 = localStorage.getItem('boattype');              
                c1 = localStorage.getItem('boatnumber');
                d1 = localStorage.getItem('boattimein');
                e1 = localStorage.getItem('boattimeout');              
                f1 = localStorage.getItem('boatprice');               
                tot = localStorage.getItem('boattotal');

                //cell8 = row.insertCell(7);
                     
                //cell8.innerHTML = 'Stop';
                document.getElementById('boattotal').innerHTML = tot;
            } else{
                return alert("Nothing to load");
            }   
        }

        var total = 0;
                  
        //document.getElementById('saveInput').onsubmit;

        function myEntryFunction() {
            var entry = document.getElementById('boatprice').value;
            var entry = parseFloat(entry);
                currency = currencyFormat(entry);
                document.getElementById('boatmyEntries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
                total += entry;
                localStorage.setItem('boattotal', total);
                document.getElementById('boattotal').innerHTML = currencyFormat(total);
                return false;
        }

        function currencyFormat(number) {
            var currency = parseFloat(number);
            currency = currency.toFixed(2);
            currency = 'P' + currency;
            return currency;
        }

        

       
