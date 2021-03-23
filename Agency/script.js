"use strict"
document.addEventListener("DOMContentLoaded", function () {
    // Dropdown navigation menu when click on the Menu Button
    const nav = document.getElementsByTagName("nav");
    const menu = document.getElementsByClassName("menu");
    const section = document.getElementsByTagName("section")
    const menuItem = nav[0].querySelector("ul").querySelectorAll("a");

    menu[0].onclick = function () {
        if (nav[0].classList.contains("dropdown")) {
            nav[0].classList.remove("dropdown");
        } else {
            nav[0].classList.add("dropdown");
        }
    }

    // Sticky navigation bar when scroll:
    onscroll = function () {
        if (pageYOffset > 50) {
            nav[0].classList.add("sticky");
        } else {
            nav[0].classList.remove("sticky");
        }
        for (let i = 0; i < section.length; i++) {
            if ((section[i].getBoundingClientRect().top < nav[0].offsetHeight) && (section[i].getBoundingClientRect().bottom > nav[0].offsetHeight)) {
                menuItem[i].classList.add("scroll-color");
            } else {
                menuItem[i].classList.remove("scroll-color");
            }
        }
    }


    // Validate form when submit:
    const submit = document.getElementById("submit");
    const input = document.querySelector(".form").querySelectorAll("input, textarea");
    const msg = document.getElementById("msg");
    const invalid = document.querySelector(".form").querySelectorAll(".invalid");
    const invalidMsg = document.getElementById("invalid-msg");

    msg.style.gridRowEnd = 4;
    submit.onclick = function validateForm() {
        let k = 4;
        for (let i = 0; i < input.length; i++) {
            if (input[i].value == "") {
                invalid[i].style.display = "list-item";
                if (i < input.length - 2) {
                    k++;
                }
            }
        }
        msg.style.gridRowEnd = k;
        invalidMsg.style.gridRowStart = k;
        return k;
    }


    //Red line disappears when focus:
    for (let j = 0; j < input.length; j++) {
        input[j].onfocus = function () {
            let h = getComputedStyle(msg).getPropertyValue("grid-row-end");
            if (invalid[j].style.display != "none") {
                invalid[j].style.display = "none";
                if (j < input.length - 2) {
                    h--;
                }
                msg.style.gridRowEnd = h;
                invalidMsg.style.gridRowStart = h;
            }
        }
    }

    //---------------
    // Modal
    const modal = document.getElementsByClassName("modal");
    const openModal = document.querySelector("#portfolio").querySelectorAll(".pfl-img");
    const closeModal = document.getElementsByClassName("modal-close");

    for (let i = 0; i < openModal.length; i++) {
        openModal[i].onclick = function () {
            modal[i].style.display = "block";
            document.body.style.overflowY = "hidden ";
        }
    }

    for (let x = 0; x < closeModal.length; x++) {
        closeModal[x].onclick = function () {
            for (let y = 0; y < modal.length; y++) {
                modal[y].style.display = "none";
            }
            document.body.style.overflowY = "auto";
        }
    }
}, false);