function main() {
    document.getElementById("retrieve").addEventListener("click", getIPAddress);

    function getIPAddress(e) {
        const URL = `https://api.ipify.org/?format=json`;
        const request = new XMLHttpRequest();

        request.open("GET", URL, true);
        request.addEventListener("load", result);
        request.send();

        function result(e) {
            if (e.target.status >= 400) {
                alert(e.target.status);
                return;
            }

            request.addEventListener("timeout", function (e) {
                alert(e.type);
            });

            const IPAddress = JSON.parse(e.target.response).ip;
            document.getElementById("display").innerHTML += "Your IP is " + IPAddress + "<br>";

            getGeoInfo(IPAddress);
        }
    }

    function getGeoInfo(IP) {
        const URL = `https://ipinfo.io/${IP}/geo`;
        const request = new XMLHttpRequest();

        request.open("GET", URL, true);
        request.addEventListener("load", result);
        request.send();

        function result(e) {
            if (e.target.status >= 400) {
                alert(e.target.status);
                return;
            }

            request.addEventListener("timeout", function (e) {
                alert(e.type);
            });

            const city = JSON.parse(e.target.response).city;
            const region = JSON.parse(e.target.response).region;
            const country = JSON.parse(e.target.response).country;
            document.getElementById("display").innerHTML += "Geo location is " + city + ", " + region + ", " + country;
        }
    }
}