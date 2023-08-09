document.addEventListener("DOMContentLoaded", function () {
    var userIcon = document.getElementById("userIcon");
    var userForm = document.getElementById("userForm");

    userIcon.addEventListener("click", function () {
        userForm.classList.toggle("hidden");
    });
});