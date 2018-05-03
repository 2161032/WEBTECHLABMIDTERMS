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
                if(results.rows.item(i).boattimeout == '30MIN'){
                    var strArr = results.rows.item(i).boattimein.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1]) + 30;

                    if(min > 60){
                        min = min - 60;
                        hour++;
                        var ctr = hour+':'+min;
                    }else{
                        var ctr = hour+':'+min;
                    }
                     
                }else if(results.rows.item(i).boattimeout == '1 MIN'){
                    var numberboat = results.rows.item(i).boatnumber;
                    var strArr = results.rows.item(i).boattimein.split(":");
                    var hour = parseInt(strArr[0]);
                    var min = parseInt(strArr[1])+1;
                    var ctr = hour+':'+min;  

                    var d = new Date();
                    var h = parseInt(d.getHours());
                    var m = parseInt(d.getMinutes());

                    if(h >= hour && min <= m){
                        //var ctr = results.rows.item(i).boatname++" with boat type "+results.rows.item(i).boattype+" and boat number "+results.rows.item(i).boatnumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "boat", {
                                body: "DONE",
                                icon: "../img/BRBLogo.ico"
                            });
                        }
                    });*/
                    }
                }else if(results.rows.item(i).boattimeout == '1HR'){
                    var strArr = results.rows.item(i).boattimein.split(":");
                    var hour = parseInt(strArr[0])+1;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;

                    var d = new Date();
                    var h = parseInt(d.getHours());
                    var m = parseInt(d.getMinutes());

                    if(h >= hour && min <= m){
                        //var ctr = results.rows.item(i).boatname++" with boat type "+results.rows.item(i).boattype+" and boat number "+results.rows.item(i).boatnumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "boat", {
                                body: "DONE",
                                icon: "../img/BRBLogo.ico"
                            });
                        }
                    });*/
                    }                    
                }else if(results.rows.item(i).boattimeout == '1HR 30MIN'){
                    var strArr = results.rows.item(i).boattimein.split(":");
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
                        //var ctr = results.rows.item(i).boatname++" with boat type "+results.rows.item(i).boattype+" and boat number "+results.rows.item(i).boatnumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "boat", {
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
                        //var ctr = results.rows.item(i).boatname++" with boat type "+results.rows.item(i).boattype+" and boat number "+results.rows.item(i).boatnumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "boat", {
                                body: "DONE",
                                icon: "../img/BRBLogo.ico"
                            });
                        }
                    });*/
                    }
                    }                  
                }else if(results.rows.item(i).boattimeout == '2HRS'){
                    var strArr = results.rows.item(i).boattimein.split(":");
                    var hour = parseInt(strArr[0])+2;
                    var min = parseInt(strArr[1]);
                    var ctr = hour+':'+min;
                     
                    var d = new Date();
                    var h = parseInt(d.getHours());
                    var m = parseInt(d.getMinutes());

                    if(h >= hour && min <= m){
                        //var ctr = results.rows.item(i).boatname++" with boat type "+results.rows.item(i).boattype+" and boat number "+results.rows.item(i).boatnumber+" has already exceeded his/her time at "+hour+':'+min;
                        var ctr = 'DONE at '+hour+':'+min;
                        /*let ask = Notification.requestPermission();
                            ask.then(permission => {
                            if( permission === "granted") {
                                let msg = new Notification( "boat", {
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
                str += "<td>" + results.rows.item(i).boatname + "</td>";  
                str += "<td>" + results.rows.item(i).boattype + "</td>";
                str += "<td>" + results.rows.item(i).boatnumber + "</td>";    
                str += "<td>" + results.rows.item(i).boattimein + "</td>"; 
                str += "<td>" + results.rows.item(i).boattimeout + "</td>";
                str += "<td>" + results.rows.item(i).boatprice + "</td>"; 
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
