<html>
    <body>
    <div id ="saveInput"></div>
    </body>
<script type="text/javascript">
    var db = opendatabase('brb', '1.0', 'BRB data',  2 * 1024 * 1024);
    var msg;

function loadAll() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS(ID UNIQUE PRIMARY KEY AUTOINCREMENT, name TEXT)');
        tx.executeSql('INSERT INTO LOGS (id, name, log) VALUES (1, "foobar")');
        tx.executeSql('INSERT INTO LOGS (id, name, log) VALUES (2, "logmsg")');   msg = '<p>Log message created and row inserted.</p>';
        document.querySelector('#saveInput').innerHTML = msg;
    });

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM LOGS', [], function(tx, results){
            var len = results.rows.length, i;
            msg = "<p>Found rows: " + len + "</p>";
            document.querySelector('#saveInput').innerHTML += msg;
            
            for (var i=0; i<len; i++) {
                msg = "<p><b>" + results.rows.item(i).log + "</b></p>"
                document.querySelector('#saveInput').innerHTML += msg;
            }
        }, null);
    });
    
     
function AddAll(){
    'use strict';
    db.transaction(function (tx) {
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var type = document.getElementById('type').value;
        var number = document.getElementById('number').value;
        var timein = document.getElementById('timein').value;
        var timeout = document.getElementById('timeout').value;
        var price = document.getElementById('price').value;
        tx.executeSql('Insert into data (name) values(?,?)', [], function('Insert into table (name)')
    );

}

function AddAll(){
    db.transaction(function (tx) {
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var type = document.getElementById('type').value;
        var number = document.getElementById('number').value;
        var timein = document.getElementById('timein').value;
        var timeout = document.getElementById('timeout').value;
        var price = document.getElementById('price').value;
        tx.executeSql('Insert into data (name) values(?,?)', [], function('Insert into table (name)
    ));
}

function del(id) {
db.transaction(function (tx){
    var result = confirm('You are about to delete this. Are you sure?');
    txt.executeSql('Delete data from table', [id], displayAll());
    }
)};
</script>
        </html>