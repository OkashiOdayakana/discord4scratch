// Scratch Extension for Discord (https://discordapp.com)

(function(ext) {

    ext.auth = "";
    ext.useragent = "Discord4Scratch (https://github.com/guscaplan/discord4scratch, v0.1)";

    ext.set_auth = function(auth) {
        ext.auth = auth;
    };

    ext.send_message = function(channel, content) {
        if (ext.auth != "") {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log(xhttp.responseText);
                }
            };
            xhttp.open("GET", "https://aeurofish.com/proxy.php?url=https://discordapp.com/api/channels/"+channel+"/messages&Authorization="+ext.auth+"&content="+content);
            xhttp.send();
        } else {
            alert("Please set auth!");
        }
    };

    ext._shutdown = function() {
        console.log('Shutting down...');
    };

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Set Auth %n', 'set_auth', "Auth Token"],
            [' ', 'Send Message %n, %n', 'send_message', "Channel ID", 'Message'],
        ]
    };

    ScratchExtensions.register('Discord for Scratch', descriptor, ext);
})({});
