window.onload = () => {

    let textInput = document.querySelector("textarea[name=text]");
    let capitalTextInput = document.querySelector("textarea[name=capitalText]");

    textInput.addEventListener("input", textToCapitalText);

    function textToCapitalText() {
        let str = textInput.value;
        capitalTextInput.value = str.toUpperCase();
    }

    textToCapitalText();

}