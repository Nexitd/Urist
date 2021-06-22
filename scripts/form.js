const nameInp = document.getElementById("name"),
    phoneInp = document.getElementById("phone");

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();

    nameInp.value = '';
    phoneInp.value = '';

});