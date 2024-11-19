function main() {
    document.getElementById("enterBTN").addEventListener("click", getTime);

    function getTime(e) {
        const timeZone = document.getElementById("timeZone").value;
        const URL = `http://worldtimeapi.org/api/timezone/${timeZone}`;

        const request = new XMLHttpRequest();

        request.open("GET", URL, true);
        request.addEventListener("load", (e) => {
            if (e.target.status >= 400) {
                document.getElementById("status").innerHTML = `${e.target.status}`;
                return;
            }

            request.addEventListener("timeout", function (e) {
                document.getElementById("status").innerHTML =
                    e.type;
            });

            const fullResult = JSON.parse(e.target.responseText).datetime;
            document.getElementById("time").innerHTML = fullResult.substring(11, 16);
        }
        );
        request.send();
    }
}
