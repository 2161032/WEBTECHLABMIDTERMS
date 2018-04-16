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
                ' name TEXT NOT NULL, ' + 
                ' type NOT NULL, ' + 
                ' number NOT NULL, ' + 
                ' timein NOT NULL, ' + 
                ' timeout NOT NULL, ' + 
                ' price INTEGER NOT NULL);');
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
                var name = document.getElementById('name').value;
                var type = document.getElementById('type').value;
                var number = document.getElementById('number').value;
                var timein = document.getElementById('timein').value;
                var timeout = document.getElementById('timeout').value;
                var price = document.getElementById('price').value;
                transaction.executeSql('INSERT INTO bike_data(name, type, number, timein, timeout, price) values(?,?,?,?,?,?)', [name, type, number, timein, timeout, price], displayAll());
            
                document.getElementById('name').value = '';
                document.getElementById('type').value = '';
                document.getElementById('number').value = '';
                document.getElementById('timein').value = '';
                document.getElementById('timeout').value = '';
                document.getElementById('price').value = '';
            });
        }

        function error_log(error) {
            console.log(error.message);
        }
