          var shortName='BRB_db';
          var version='0.1'
          var displayName='BRB_Database';
          var maxSize = 65536;  
          db = openDatabase(shortName, version, displayName, maxSize);

          function loadAll(){
            db.transaction(function(transaction) {
                transaction.executeSql (
                ' CREATE TABLE IF NOT EXISTS boat_data ' +
                ' (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
                ' boatname TEXT NOT NULL, ' + 
                ' boattype NOT NULL, ' + 
                ' boatnumber NOT NULL, ' + 
                ' boattimein NOT NULL, ' + 
                ' boattimeout NOT NULL, ' + 
                ' ctr NOT NULL, ' +
                ' boatprice INTEGER NOT NULL);');
            });
          }   
          
            function displayAll(){        
                db.transaction(function(transaction) {
                    transaction.executeSql('SELECT * FROM boat_data', [], function(transaction,results) {
                        var n_rows = results.rows.length;
                        console.log("Number of users: "+n_rows+" ");
                    });
                }, error_log);
            }

        function addAll(){
            db.transaction(function (transaction) {
                var boatname = document.getElementById('boatname').value;
                var boattype = document.getElementById('boattype').value;
                var boatnumber = document.getElementById('boatnumber').value;
                var boattimein = document.getElementById('boattimein').value;
                var boattimeout = localStorage.getItem('boattimeout');
                var boatprice = document.getElementById('boatprice').value;
                if(boattimeout == '30MIN'){
                    var strArr = boattimein.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }
                     
                } else if(boattimeout == '1HR'){
                    var strArr = boattimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;                    
                }else if(boattimeout == '1HR 30MIN'){
                    var strArr = boattimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }                  
                }else if(boattimeout == '2HRS'){
                    var strArr = boattimein.split(":");
                    var hour = parseInt(strArr[0])+2;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;                    
                }else{
                    var ctr = "Free Time";
                }

                transaction.executeSql('INSERT INTO boat_data(boatname, boattype, boatnumber, boattimein, boattimeout, ctr, boatprice) values(?,?,?,?,?,?,?)', [boatname, boattype, boatnumber, boattimein, boattimeout, ctr, boatprice], displayAll());
                
                document.getElementById('boatname').value = '';
                document.getElementById('boattype').value = '';
                document.getElementById('boatnumber').value = '';
                document.getElementById('boattimein').value = '';
                document.getElementById('boattimeout').value = '';
                document.getElementById('boatprice').value = '';
            });
        }
        function refAll(){
            db.transaction(function (transaction) {  
            transaction.executeSql('SELECT * FROM boat_data', [], function (transaction, results) {  
                var len = results.rows.length, i;  
                var str = '';  
                for (i = 0; i < len; i++) {  
                str += "<tr>";  
                str += "<td>" + results.rows.item(i).boatname + "</td>";  
                str += "<td>" + results.rows.item(i).boattype + "</td>";
                str += "<td>" + results.rows.item(i).boatnumber + "</td>";    
                str += "<td>" + results.rows.item(i).boattimein + "</td>"; 
                str += "<td>" + results.rows.item(i).boattimeout + "</td>";
                str += "<td>" + results.rows.item(i).boatprice + "</td>"; 
                str += "<td>" + results.rows.item(i).ctr+ "</td>"; 
                str += "</tr>";  
                document.getElementById("myTable").innerHTML += str;  
                str = '';  
                }  
            }, null);  
        });  
        }

        function returnTime(elementID){
            return localStorage.getItem(elementID);
        }

        function error_log(error) {
            console.log(error.message);
        }
