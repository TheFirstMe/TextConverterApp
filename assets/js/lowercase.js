window.onload = () => {

    let textInput = document.querySelector("textarea[name=text]");
    let lowerCaseTextInput = document.querySelector("textarea[name=lowercasetext]");

    textInput.addEventListener("input", textToLowerCaseText);

    function textToLowerCaseText() {
        let str = textInput.value;
        lowerCaseTextInput.value = str.toLowerCase();
    }

    textToLowerCaseText();

}