function main() {
    let selectedColor = "white";

    //Waits for a cell to be clicked to change its color
    const th = document.querySelectorAll("th");

    th.forEach(function (cells) {
        cells.addEventListener("click", updateColor);
    });

    //Wait for a color to be selected
    const td = document.querySelectorAll("td");

    td.forEach(function (colors) {
        colors.addEventListener("click", selectColor);
    });

    function updateColor(e) {
        e.target.style.background = selectedColor;
    }

    function selectColor(e) {
        document.querySelectorAll("td").forEach(element => {
            element.style.border = "1px solid black";
        });

        e.target.style.border = "3px solid black";

        selectedColor = e.target.style.backgroundColor;
    }
}

