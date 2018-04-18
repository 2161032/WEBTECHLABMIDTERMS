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
                var biketimeout = document.getElementById('biketimeout').value;
                var bikeprice = document.getElementById('bikeprice').value;
                transaction.executeSql('INSERT INTO bike_data(bikename, biketype, bikenumber, biketimein, biketimeout, bikeprice) values(?,?,?,?,?,?)', [bikename, biketype, bikenumber, biketimein, biketimeout, bikeprice], displayAll());
            
                document.getElementById('bikename').value = '';
                document.getElementById('biketype').value = '';
                document.getElementById('bikenumber').value = '';
                document.getElementById('biketimein').value = '';
                document.getElementById('biketimeout').value = '';
                document.getElementById('bikeprice').value = '';
            });
        }

        function error_log(error) {
            console.log(error.message);
        }
