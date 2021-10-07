var textInp = document.querySelector("#inpText");
var btnTranslate = document.querySelector("#btn-translate");
var translatedOut = document.querySelector("#txtOutput");

btnTranslate.addEventListener("click", clickEventHandler);

function clickEventHandler() {
    const text = textInp.value;
    var url = "https://api.funtranslations.com/translate/yoda.json?text=" + text;
    // var url = "https://lessonfourapi.pnchinmay.repl.co/translate/yoda.json?text=" + text
    console.log(text)

    fetch(url)
        .then(response => response.json())
        .then(json => {
            var result = json.contents.translated;
            console.log(json);
            console.log(result);
            translatedOut.innerText = result;
        })
        .catch(errorHandler)

}

function errorHandler(error) {
    console.log(error);
    alert("Something wrong with the server :(\nPlease try again after sometime")
}