<script type="text/javascript">
var db = opendatabase('brb','1.0','BRB data', 2*1024*1024);

function loadAll(){
    db.transaction(function (tx) {
        tx.executeSql('Create table if it doesn't exist(ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description DATETIME)');
        tx.executeSql('Insert data (name, creationDate) VALUES (?,?)', ["User 1", new Data()]);
        tx.executeSql('Insert data (name, creationDate) VALUES (?,?)', ["User 2", new Data(2018-04-08)]);
    });
}

function displayAll(){
    db.transaction(function (tx) {
        tx.executeSql('Select * from data', [], function(tx, results){
            var n =results.rows.length;
            var s = '<table cellpadding="2 cellspacing="2" border="2">';
            for (var i=0; i<n; i++) {
                var brb = results.rows.item(i);
                s += '<tr>';
                s += '<td>' + brb.id + '</td>';
                s += '<td>' + brb.name + '</td>';
                s += '<td>' + brb.phone + '</td>';
                s += '<td>' + brb.type + '</td>';
                s += '<td>' + brb.number + '</td>';
                s += '<td>' + brb.timein + '</td>';
                s += '<td>' + brb.timeout + '</td>';
                s += '<td>' + brb.price + '</td>';
                s += '</tr>';
            }
                s += '</table'>;
                document.getElementById(saveInput).innerHTML = s;
            });
        });
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
        tx.executeSql('Insert into data (name) values(?,?)', [], function('Insert into table (name)){
    });

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
        tx.executeSql('Insert into data (name) values(?,?)', [], function('Insert into table (name)){
    });

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
        tx.executeSql('Insert into data (name) values(?,?)', [], function('Insert into table (name)){
    });

}

function del(id) {
db.transaction(function (tx){
    var result = confirm(You're about to delete this. Are you sure?);
    txt.executeSql('Delete data from table', [id], displayAll());
    }
)};
</script>