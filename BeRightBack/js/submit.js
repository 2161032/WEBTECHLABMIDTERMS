    function myFunction() {
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
		
    if(typeof(Storage) !== "undefined"){
		var a = document.getElementById("name");
        localStorage.setItem('name',a.value);
        let a1 = localStorage.getItem('name');
        console.log(a1);
                          
        var b = document.getElementById("type");
        localStorage.setItem('type',b.value);
        let b1 = localStorage.getItem('type');
        console.log(b1);
              
		var c = document.getElementById("number");
        localStorage.setItem('number',c.value);
        let c1 = localStorage.getItem('number');
        console.log(c1);
              
        var d = document.getElementById("timein");
        localStorage.setItem('timein',d.value);
        let d1 = localStorage.getItem('timein');
        console.log(d1);
                
		var e = document.getElementById("timeout");
        localStorage.setItem('timeout',e.value);
        let e1 = localStorage.getItem('timeout');
        console.log(e1);
              
		var f = document.getElementById("price");
        localStorage.setItem('price',f.value);
        let f1 = localStorage.getItem('price');
        console.log(f1);
                               
        cell1.innerHTML = a1; 
		cell2.innerHTML = b1;
		cell3.innerHTML = c1;
		cell4.innerHTML = d1;
		cell5.innerHTML = e1;
		cell6.innerHTML = f1;
        } else{
            console.log("Your browser does not support localStorage");
        }   
        
        } 
