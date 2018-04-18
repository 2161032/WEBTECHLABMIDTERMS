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
                
		var e = document.getElementById("boattid");
        localStorage.setItem('boattid',e.value);
        e1 = localStorage.getItem('boattid');
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
        
        }

        function relFunction(){
            if(document.getElementById("boatname").value != null){
                a1 = localStorage.getItem('boatname');
                          
                b1 = localStorage.getItem('boattype');
              
                c1 = localStorage.getItem('boatnumber');

                d1 = localStorage.getItem('boattimein');

                e1 = localStorage.getItem('boattid');
              
                f1 = localStorage.getItem('boatprice');
                

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
            var entry = document.getElementById('boatprice').value;
            var entry = parseFloat(entry);
                currency = currencyFormat(entry);
                document.getElementById('boatmyEntries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
                total += entry;
                document.getElementById('boattotal').innerHTML = currencyFormat(total);
                return false;
        }

        function currencyFormat(number) {
            var currency = parseFloat(number);
            currency = currency.toFixed(2);
            currency = 'P' + currency;
            return currency;
        }
