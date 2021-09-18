const form = document.querySelector("#picURL");
const text = document.querySelector("#returnText");
const language = document.querySelector("#returnLanguage");

let myHeaders = new Headers();
myHeaders.append("apikey", "FD00cuR4jklrGZnhXOHcn4GDFBlkhcJ9");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

form.addEventListener("submit", async function (e) {
    console.log("SDF");

    e.preventDefault();
    const URL = form.elements.query.value;
    await fetch(`https://api.promptapi.com/image_to_text/url?url=${URL}`, requestOptions)
        .then(response => response.json())
        .then(textData => {
            text.innerText = textData.all_text;
            strLang = textData.lang.toUpperCase()
            language.innerText = strLang;
        })
        .catch(error => console.log('error', error));

    form.elements.query.value = "";
})

