function main() {
    document.getElementById("btnSave").addEventListener("click", function() {
        document.getElementById("optionTable").style = "visibility:hidden";
        saveTable();
    });

    function saveTable() {
        const inputs = document.querySelectorAll("input");

        for (const input of inputs) {
            input.readOnly = true;
        }
    }
}

function addRow() {
    const table = document.getElementById("mainTable");
    const newRow = table.insertRow();
    newRow.id = "newRow";
    const cell1 = newRow.insertCell();
    cell1.innerHTML = `            <td>
                <input type="text" id="input" placeholder="Enter name">
            </td>`;
    const cell2 = newRow.insertCell();
    cell2.innerHTML = `            <td>
                <input type="text" id="input" placeholder="Enter email">
            </td>`;
}