var toggleProduct = true;
function girar() {
    if (toggleProduct == true) {
        document.getElementById("svg").src = "./assets/vetor-x.svg"
        document.getElementById("product").src = "./assets/sofa.gif"
        toggleProduct = false;
    } else {
        document.getElementById("svg").src = "./assets/vetor-360.svg"
        document.getElementById("product").src = "./assets/sofa.png"
        toggleProduct = true;
    }
}