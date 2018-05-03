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
                if(results.rows.item(i).biketimeout == '30MIN'){
                    var strArr = results.rows.item(i).biketimein.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }
                     
                }else if(results.rows.item(i).biketimeout == '1 MIN'){
                    var numberBike = results.rows.item(i).bikenumber;
                    var strArr = results.rows.item(i).biketimein.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1])+1;
                    var ctr = hour+':'+min;  

                    var d = new Date();
                    var h = parseInt(d.getHours());
                    var m = parseInt(d.getMinutes());

                    if(h >= hour && min <= m){
                        //var ctr = results.rows.item(i).bikename++" with bike type "+results.rows.item(i).biketype+" and bike number "+results.rows.item(i).bikenumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "Bike", {
                                body: "DONE",
                                icon: "../img/BRBLogo.ico"
                            });
                        }
                    });*/
                    }
                }else if(results.rows.item(i).biketimeout == '1HR'){
                    var strArr = results.rows.item(i).biketimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;

                    var d = new Date();
                    var h = parseInt(d.getHours());
                    var m = parseInt(d.getMinutes());

                    if(h >= hour && min <= m){
                        //var ctr = results.rows.item(i).bikename++" with bike type "+results.rows.item(i).biketype+" and bike number "+results.rows.item(i).bikenumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "Bike", {
                                body: "DONE",
                                icon: "../img/BRBLogo.ico"
                            });
                        }
                    });*/
                    }                    
                }else if(results.rows.item(i).biketimeout == '1HR 30MIN'){
                    var strArr = results.rows.item(i).biketimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;

                        var d = new Date();
                        var h = parseInt(d.getHours());
                        var m = parseInt(d.getMinutes());

                    if(h >= hour && min <= m){
                        //var ctr = results.rows.item(i).bikename++" with bike type "+results.rows.item(i).biketype+" and bike number "+results.rows.item(i).bikenumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "Bike", {
                                body: "DONE",
                                icon: "../img/BRBLogo.ico"
                            });
                        }
                    });*/
                    }
                    }else{
                        var ctr = hour+':'+min;

                        var d = new Date();
                        var h = parseInt(d.getHours());
                        var m = parseInt(d.getMinutes());

                    if(h >= hour && min <= m){
                        //var ctr = results.rows.item(i).bikename++" with bike type "+results.rows.item(i).biketype+" and bike number "+results.rows.item(i).bikenumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "Bike", {
                                body: "DONE",
                                icon: "../img/BRBLogo.ico"
                            });
                        }
                    });*/
                    }
                    }                  
                }else if(results.rows.item(i).biketimeout == '2HRS'){
                    var strArr = results.rows.item(i).biketimein.split(":");
                    var hour = parseInt(strArr[0])+2;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;
                     
                    var d = new Date();
                    var h = parseInt(d.getHours());
                    var m = parseInt(d.getMinutes());

                    if(h >= hour && min <= m){
                        //var ctr = results.rows.item(i).bikename++" with bike type "+results.rows.item(i).biketype+" and bike number "+results.rows.item(i).bikenumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "Bike", {
                                body: "DONE",
                                icon: "../img/BRBLogo.ico"
                            });
                        }
                    });*/
                    }                   
                }else{
                    var ctr = "Free Time";
                }  

                str += "<tr>";  
                str += "<td>" + results.rows.item(i).bikename + "</td>";  
                str += "<td>" + results.rows.item(i).biketype + "</td>";
                str += "<td>" + results.rows.item(i).bikenumber + "</td>";    
                str += "<td>" + results.rows.item(i).biketimein + "</td>"; 
                str += "<td>" + results.rows.item(i).biketimeout + "</td>";
                str += "<td>" + results.rows.item(i).bikeprice + "</td>"; 
                str += "<td>" + ctr+ "</td>"; 
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
