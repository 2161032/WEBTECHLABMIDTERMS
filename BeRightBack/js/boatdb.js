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
                var boattimeout = document.getElementById('boattimeout').value;
                var boatprice = document.getElementById('boatprice').value;
                transaction.executeSql('INSERT INTO boat_data(boatname, boattype, boatnumber, boattimein, boattimeout, boatprice) values(?,?,?,?,?,?)', [boatname, boattype, boatnumber, boattimein, boattimeout, boatprice], displayAll());
            
                document.getElementById('boatname').value = '';
                document.getElementById('boattype').value = '';
                document.getElementById('boatnumber').value = '';
                document.getElementById('boattimein').value = '';
                document.getElementById('boattimeout').value = '';
                document.getElementById('boatprice').value = '';
            });
        }

        function error_log(error) {
            console.log(error.message);
        }