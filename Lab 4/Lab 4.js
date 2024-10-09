function main()
{
    const textareaROSTER = document.getElementById("roster");

    textareaROSTER.value += `FirstName LastName
------------------\n`

    for (let n = 1; n < 6; n++) {
        textareaROSTER.value += document.getElementById("firstName" + String(n)).value + " " + document.getElementById("lastName" + String(n)).value + "\n";
    }
}