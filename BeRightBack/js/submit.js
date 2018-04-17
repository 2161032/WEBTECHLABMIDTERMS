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
		
		var a = document.getElementById("name");
        localStorage.setItem('name',a.value);
        a1 = localStorage.getItem('name');
        console.log(a1);
                          
        var b = document.getElementById("type");
        localStorage.setItem('type',b.value);
        b1 = localStorage.getItem('type');
        console.log(b1);
              
		var c = document.getElementById("number");
        localStorage.setItem('number',c.value);
        c1 = localStorage.getItem('number');
        console.log(c1);
              
        var d = document.getElementById("timein");
        localStorage.setItem('timein',d.value);
        d1 = localStorage.getItem('timein');
        console.log(d1);
                
		var e = document.getElementById("tid");
        localStorage.setItem('tid',e.value);
        e1 = localStorage.getItem('tid');
        console.log(e1);
              
		var f = document.getElementById("price");
        localStorage.setItem('price',f.value);
        f1 = localStorage.getItem('price');
        console.log(f1);
                               
        cell1.innerHTML = a1; 
		cell2.innerHTML = b1;
		cell3.innerHTML = c1;
		cell4.innerHTML = d1;
		cell5.innerHTML = e1;
		cell6.innerHTML = f1;   
        
        }

        function relFunction(){
            if(document.getElementById("name").value != null){
                a1 = localStorage.getItem('name');
                          
                b1 = localStorage.getItem('type');
              
                c1 = localStorage.getItem('number');

                d1 = localStorage.getItem('timein');

                e1 = localStorage.getItem('tid');
              
                f1 = localStorage.getItem('price');
                

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
            var entry = document.getElementById('price').value;
            var entry = parseFloat(entry);
                currency = currencyFormat(entry);
                document.getElementById('myEntries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
                total += entry;
                document.getElementById('total').innerHTML = currencyFormat(total);
                return false;
        }

        function currencyFormat(number) {
            var currency = parseFloat(number);
            currency = currency.toFixed(2);
            currency = 'P' + currency;
            return currency;
        }
