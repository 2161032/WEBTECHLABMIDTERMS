        function loadJSON(callback, fileloc) {
          var xobj = new XMLHttpRequest();
          xobj.overrideMimeType("application/json");
          xobj.open('GET', fileloc, true);
          xobj.onreadystatechange = function() {
          if (xobj.readyState == 4 && xobj.status == 200) {
            callback(xobj.responseText);
          }
        }
          xobj.send(null);
        }

        function addBikeName() {
          loadJSON(function(response) {
            bikeName(response);
          }, 'json/bikeName.json');
          function bikeName(jsoncall) {
            var objectName = JSON.parse(jsoncall);
            for(var i = 0; i < objectName.length; i++){
              var option = document.createElement("option");
              option.text = objectName[i].bike_name;
              option.value = objectName[i].bike_name;
              var select = document.getElementById("biketype");
              select.appendChild(option);
            }
          }
        }

        function addBikeType() {
          loadJSON(function(response) {
            bikeType(response);
          }, 'json/bikeType.json');
          function bikeType(jsoncall) {
            var objectType = JSON.parse(jsoncall);
            for(var i = 0; i < objectType.length; i++){
              var option = document.createElement("option");
              option.text = objectType[i].bike_number;
              option.value = objectType[i].bike_number;
              var select = document.getElementById("bikenumber");
              select.appendChild(option);
            }
          }
        } 

        function addBoatName() {
          loadJSON(function(response) {
            boatName(response);
          }, 'json/boatName.json');
          function boatName(jsoncall) {
            var objectName = JSON.parse(jsoncall);
            for(var i = 0; i < objectName.length; i++){
              var option = document.createElement("option");
              option.text = objectName[i].boat_name;
              option.value = objectName[i].boat_name;
              var select = document.getElementById("boattype");
              select.appendChild(option);
            }
          }
        }

        function addBoatType() {
          loadJSON(function(response) {
            boatType(response);
          }, 'json/boatType.json');
          function boatType(jsoncall) {
            var objectType = JSON.parse(jsoncall);
            for(var i = 0; i < objectType.length; i++){
              var option = document.createElement("option");
              option.text = objectType[i].boat_number;
              option.value = objectType[i].boat_number;
              var select = document.getElementById("boatnumber");
              select.appendChild(option);
            }
          }
        } 

        function addSkateName() {
          loadJSON(function(response) {
            skateName(response);
          }, 'json/skateName.json');
          function skateName(jsoncall) {
            var objectName = JSON.parse(jsoncall);
            for(var i = 0; i < objectName.length; i++){
              var option = document.createElement("option");
              option.text = objectName[i].skate_name;
              option.value = objectName[i].skate_name;
              var select = document.getElementById("skatetype");
              select.appendChild(option);
            }
          }
        }

        function addSkateType() {
          loadJSON(function(response) {
            skateType(response);
          }, 'json/skateType.json');
          function skateType(jsoncall) {
            var objectType = JSON.parse(jsoncall);
            for(var i = 0; i < objectType.length; i++){
              var option = document.createElement("option");
              option.text = objectType[i].skate_number;
              option.value = objectType[i].skate_number;
              var select = document.getElementById("skatenumber");
              select.appendChild(option);
            }
          }
        } 