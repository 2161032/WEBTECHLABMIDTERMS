    if ("Notification" in window) {
        let ask = Notification.requestPermission();
        ask.then(permission => {
            if( permission === "granted") {
                let msg = new Notification( "BRB", {
                    body: "You got a new notification!",
                    icon: "img/BRBLogo.ico"
            });
                msg.addEventListener("click", event => {    
                alert("Click Received");
                });
            }
        });
    }