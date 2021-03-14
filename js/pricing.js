//Accordion Menu

let button = document.querySelectorAll(".btnAcc");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        let selectedAttr = this.firstElementChild.firstElementChild;
        if (!this.nextElementSibling.classList.contains("show") && !this.classList.contains("active")) {
            document.querySelector(".item .text.show").classList.remove("show");
            let getAttr = document.querySelector(".item .btnAcc.active .photo img");
            getAttr.src = 'img/down-black.png';
            document.querySelector(".item .btnAcc.active").classList.remove("active");
            // console.log(this);
            // console.log(getAttr);
            this.nextElementSibling.classList.add("show");
            this.classList.add("active");
            this.firstElementChild.firstElementChild.src = 'img/icons8-sort-down-pricing.png';
        }
    })
}