    var table, row, cell1, cell2, cell3, cell4, cell5, cell6, a1, b1, c1, d1, e1, f1;    


    function myFunction() {
        table = document.getElementById("myTable");
        row = table.insertRow(1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);
		
		var a = document.getElementById("bikename");
        localStorage.setItem('bikename',a.value);
        a1 = localStorage.getItem('bikename');
        console.log(a1);
                          
        var b = document.getElementById("biketype");
        localStorage.setItem('biketype',b.value);
        b1 = localStorage.getItem('biketype');
        console.log(b1);
              
		var c = document.getElementById("bikenumber");
        localStorage.setItem('bikenumber',c.value);
        c1 = localStorage.getItem('bikenumber');
        console.log(c1);
              
        var d = document.getElementById("biketimein");
        localStorage.setItem('biketimein',d.value);
        d1 = localStorage.getItem('biketimein');
        console.log(d1);
                
		var e = document.getElementById("biketimeout");
        localStorage.setItem('biketimeout',e.value);
        e1 = localStorage.getItem('biketimeout');
        console.log(e1);
              
		var f = document.getElementById("bikeprice");
        localStorage.setItem('bikeprice',f.value);
        f1 = localStorage.getItem('bikeprice');
        console.log(f1);
                               
        cell1.innerHTML = a1; 
		cell2.innerHTML = b1;
		cell3.innerHTML = c1;
		cell4.innerHTML = d1;
		cell5.innerHTML = e1;
		cell6.innerHTML = f1;   
        
        }

        function relFunction(){
            if(document.getElementById("bikename").value != null){
                a1 = localStorage.getItem('bikename');
                          
                b1 = localStorage.getItem('biketype');
              
                c1 = localStorage.getItem('bikenumber');

                d1 = localStorage.getItem('biketimein');

                e1 = localStorage.getItem('biketid');
              
                f1 = localStorage.getItem('bikeprice');
                

                table = document.getElementById("myTable");
                row = table.insertRow(1);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell3 = row.insertCell(2);
                cell4 = row.insertCell(3);
                cell5 = row.insertCell(4);
                cell6 = row.insertCell(5);

                cell1.innerHTML = a1; 
                cell2.innerHTML = b1;
                cell3.innerHTML = c1;
                cell4.innerHTML = d1;
                cell5.innerHTML = e1;
                cell6.innerHTML = f1;
            } else{
                return alert("Nothing to load");
            }   
        }

        var total = 0;
                  
        //document.getElementById('saveInput').onsubmit;

        function myEntryFunction() {
            var entry = document.getElementById('bikeprice').value;
            var entry = parseFloat(entry);
                currency = currencyFormat(entry);
                document.getElementById('bikemyEntries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
                total += entry;
                document.getElementById('biketotal').innerHTML = currencyFormat(total);
                return false;
        }

        function currencyFormat(number) {
            var currency = parseFloat(number);
            currency = currency.toFixed(2);
            currency = 'P' + currency;
            return currency;
        }
