function main()
{
    const textareaROSTER = document.getElementById("roster");

    textareaROSTER.value += "FirstName LastName\n";
    textareaROSTER.value += "------------------\n";
    textareaROSTER.value += document.getElementById("firstName1").value + " " + document.getElementById("lastName1").value + "\n";
    textareaROSTER.value += document.getElementById("firstName2").value + " " + document.getElementById("lastName2").value + "\n";
    textareaROSTER.value += document.getElementById("firstName3").value + " " + document.getElementById("lastName3").value + "\n";
    textareaROSTER.value += document.getElementById("firstName4").value + " " + document.getElementById("lastName4").value + "\n";
    textareaROSTER.value += document.getElementById("firstName5").value + " " + document.getElementById("lastName5").value + "\n";
}