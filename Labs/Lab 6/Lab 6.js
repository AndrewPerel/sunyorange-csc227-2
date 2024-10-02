const emailsIndex = {};

function index()
{
    if (emailsIndex.hasOwnProperty(document.getElementById("name").value))
    {
        alert("Name already in use");
    }

    else if (document.getElementById("name").value != "" && document.getElementById("email").value != "")
    {
        emailsIndex[document.getElementById("name").value] = document.getElementById("email").value;

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    }

    else
    {
        alert("One or more fields are empty");
    }
}

function retrieve()
{
    const textareaEMAIL = document.getElementById("textareaEMAIL");

    if (emailsIndex[document.getElementById("retrieveName").value] != undefined)
    {
        textareaEMAIL.value = "";
        textareaEMAIL.value += emailsIndex[document.getElementById("retrieveName").value];
    }

    else
    {
        alert("Field is empty or name does not exist")
    }
}