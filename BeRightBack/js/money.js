        var total = 0;
                  
        //document.getElementById('saveInput').onsubmit;

        function myEntryFunction() {
            var entry = document.getElementById('price').value;
            var entry = parseFloat(entry);
                currency = currencyFormat(entry);
                document.getElementById('myEntries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
                total += entry;
                document.getElementById('total').innerHTML = currencyFormat(total);
                return false;
        }

        function currencyFormat(number) {
            var currency = parseFloat(number);
            currency = currency.toFixed(2);
            currency = 'P' + currency;
            return currency;
        }