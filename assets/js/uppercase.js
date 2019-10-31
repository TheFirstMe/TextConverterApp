window.onload = () => {

    let textInput = document.querySelector("textarea[name=text]");
    let upperCaseTextInput = document.querySelector("textarea[name=uppercasetext]");

    textInput.addEventListener("input", textToUpperCaseText);

    function textToUpperCaseText() {
        let str = textInput.value;
        upperCaseTextInput.value = str.toUpperCase();
    }

    textToUpperCaseText();

}