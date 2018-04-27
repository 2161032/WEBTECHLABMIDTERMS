if ("Notification" in window) {
        let ask = Notification.requestPermission();
        ask.then(permission => {
            if( permission === "granted") {
                let msg = new Notification( "BRB", {
                    body: "You can now receive notification!",
                    icon: "img/BRBLogo.ico"
            });
            }
        });
    }