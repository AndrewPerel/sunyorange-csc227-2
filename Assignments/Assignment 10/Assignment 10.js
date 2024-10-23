function main() {
    document.getElementById("enterBTN").addEventListener("click", getTime);

    function getTime(e) {
        const timeZone = document.getElementById("timeZone").value;
        const URL = `http://worldtimeapi.org/api/timezone/${timeZone}`;

        const request = new XMLHttpRequest();

        request.open("GET", URL, true);
        request.addEventListener("load", result);
        request.send();

        function result(e) {
            if (e.target.status >= 400) {
                document.getElementById("status").innerHTML = `${e.target.status}`;
                return;
            }

            const fullResult = String(JSON.parse(e.target.responseText).datetime);
            document.getElementById("time").innerHTML = fullResult.substring(11, 16);
        }
    }
}

