          var shortName='BRB_db';
          var version='0.1'
          var displayName='BRB_Database';
          var maxSize = 65536;  
          db = openDatabase(shortName, version, displayName, maxSize);

          function loadAll(){
            db.transaction(function(transaction) {
                transaction.executeSql (
                ' CREATE TABLE IF NOT EXISTS skate_data ' +
                ' (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
                ' skatename TEXT NOT NULL, ' + 
                ' skatetype NOT NULL, ' + 
                ' skatenumber NOT NULL, ' + 
                ' skatetimein NOT NULL, ' + 
                ' skatetimeout NOT NULL, ' + 
                ' ctr NOT NULL, ' +
                ' skateprice INTEGER NOT NULL);');
            });
          }   
          
            function displayAll(){        
                db.transaction(function(transaction) {
                    transaction.executeSql('SELECT * FROM skate_data', [], function(transaction,results) {
                        var n_rows = results.rows.length;
                        console.log("Number of users: "+n_rows+" ");
                    });
                }, error_log);
            }

        function addAll(){
            db.transaction(function (transaction) {
                var skatename = document.getElementById('skatename').value;
                var skatetype = document.getElementById('skatetype').value;
                var skatenumber = document.getElementById('skatenumber').value;
                var skatetimein = document.getElementById('skatetimein').value;
                var skatetimeout = localStorage.getItem('skatetimeout');
                var skateprice = document.getElementById('skateprice').value;
                if(skatetimeout == '30MIN'){
                    var strArr = skatetimein.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }
                     
                } else if(skatetimeout == '1HR'){
                    var strArr = skatetimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;                    
                }else if(skatetimeout == '1HR 30MIN'){
                    var strArr = skatetimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }                  
                }else if(skatetimeout == '2HRS'){
                    var strArr = skatetimein.split(":");
                    var hour = parseInt(strArr[0])+2;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;                    
                }else{
                    var ctr = "Free Time";
                }

                transaction.executeSql('INSERT INTO skate_data(skatename, skatetype, skatenumber, skatetimein, skatetimeout, ctr, skateprice) values(?,?,?,?,?,?,?)', [skatename, skatetype, skatenumber, skatetimein, skatetimeout, ctr, skateprice], displayAll());
                
                document.getElementById('skatename').value = '';
                document.getElementById('skatetype').value = '';
                document.getElementById('skatenumber').value = '';
                document.getElementById('skatetimein').value = '';
                document.getElementById('skatetimeout').value = '';
                document.getElementById('skateprice').value = '';
            });
        }
        function refAll(){
            db.transaction(function (transaction) {  
            transaction.executeSql('SELECT * FROM skate_data', [], function (transaction, results) {  
                var len = results.rows.length, i;  
                var str = '';  
                for (i = 0; i < len; i++) {  
                str += "<tr>";  
                str += "<td>" + results.rows.item(i).skatename + "</td>";  
                str += "<td>" + results.rows.item(i).skatetype + "</td>";
                str += "<td>" + results.rows.item(i).skatenumber + "</td>";    
                str += "<td>" + results.rows.item(i).skatetimein + "</td>"; 
                str += "<td>" + results.rows.item(i).skatetimeout + "</td>";
                str += "<td>" + results.rows.item(i).skateprice + "</td>"; 
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
