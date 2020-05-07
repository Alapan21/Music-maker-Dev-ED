window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const tabs = document.querySelectorAll(".tabs div");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});

function darkToggle() {
    var mainbody = document.body;
    mainbody.classList.toggle("dark-mode");
    var div = document.getElementById("btn-img");
    div.classList.toggle("dark-img");
}