          var shortName='BRB_db';
          var version='0.1'
          var displayName='BRB_Database';
          var maxSize = 65536;  
          db = openDatabase(shortName, version, displayName, maxSize);

          function loadAll(){
            db.transaction(function(transaction) {
                transaction.executeSql (
                ' CREATE TABLE IF NOT EXISTS bike_data ' +
                ' (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
                ' bikename TEXT NOT NULL, ' + 
                ' biketype NOT NULL, ' + 
                ' bikenumber NOT NULL, ' + 
                ' biketimein NOT NULL, ' + 
                ' biketimeout NOT NULL, ' + 
                ' ctr NOT NULL, ' +
                ' bikeprice INTEGER NOT NULL);');
            });
          }   
          
            function displayAll(){        
                db.transaction(function(transaction) {
                    transaction.executeSql('SELECT * FROM bike_data', [], function(transaction,results) {
                        var n_rows = results.rows.length;
                        console.log("Number of users: "+n_rows+" ");
                    });
                }, error_log);
            }

        function addAll(){
            db.transaction(function (transaction) {
                var bikename = document.getElementById('bikename').value;
                var biketype = document.getElementById('biketype').value;
                var bikenumber = document.getElementById('bikenumber').value;
                var biketimein = document.getElementById('biketimein').value;
                var biketimeout = localStorage.getItem('biketimeout');
                var bikeprice = document.getElementById('bikeprice').value;
                if(biketimeout == '30MIN'){
                    var strArr = biketimein.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }
                     
                }else if(biketimeout == '1 MIN'){
                    var d = new Date();
                    var h = parseInt(d.getHours());
                    var m = parseInt(d.getMinutes());

                    var strArr = biketimein.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1])+1;
                    var ctr = hour+':'+min; 

                    if(h >= hour && m >= min){
                        var ctr = "DONE"; 
                    }     
                }else if(biketimeout == '1HR'){
                    var strArr = biketimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;                    
                }else if(biketimeout == '1HR 30MIN'){
                    var strArr = biketimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }                  
                }else if(biketimeout == '2HRS'){
                    var strArr = biketimein.split(":");
                    var hour = parseInt(strArr[0])+2;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;                    
                }else{
                    var ctr = "Free Time";
                }

                transaction.executeSql('INSERT INTO bike_data(bikename, biketype, bikenumber, biketimein, biketimeout, ctr, bikeprice) values(?,?,?,?,?,?,?)', [bikename, biketype, bikenumber, biketimein, biketimeout, ctr, bikeprice], displayAll());
                
                document.getElementById('bikename').value = '';
                document.getElementById('biketype').value = '';
                document.getElementById('bikenumber').value = '';
                document.getElementById('biketimein').value = '';
                document.getElementById('biketimeout').value = '';
                document.getElementById('bikeprice').value = '';
            });
        }
        function refAll(){
            db.transaction(function (transaction) {  
            transaction.executeSql('SELECT * FROM bike_data', [], function (transaction, results) {  
                var len = results.rows.length, i;  
                var str = '';  
                for (i = 0; i < len; i++) {  
                str += "<tr>";  
                str += "<td>" + results.rows.item(i).bikename + "</td>";  
                str += "<td>" + results.rows.item(i).biketype + "</td>";
                str += "<td>" + results.rows.item(i).bikenumber + "</td>";    
                str += "<td>" + results.rows.item(i).biketimein + "</td>"; 
                str += "<td>" + results.rows.item(i).biketimeout + "</td>";
                str += "<td>" + results.rows.item(i).bikeprice + "</td>"; 
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
