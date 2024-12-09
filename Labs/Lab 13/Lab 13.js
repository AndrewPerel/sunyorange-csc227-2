async function getCats() {
    document.getElementById("catPicture").src = await getCatImage();
    document.getElementById("catFact").innerHTML = await getCatFact();

    document.getElementById("catPicture").style = "visibility: visible";
    document.getElementById("catFact").style = "visibility: visible";
}

async function getCatImage() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const json = await response.json();
    return json[0].url;
}

async function getCatFact() {
    const response = await fetch(`https://catfact.ninja/fact`);
    const json = await response.json();
    return json.fact;
}