function register() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
    } else {
        alert("Thank you " + name + "! We will contact you soon.");
    }
}
