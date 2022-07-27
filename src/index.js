

import { homepage } from "./homepage"
import {contact} from "./contact"
import {menu} from "./menupage"


const homebutton = document.querySelector(".home")

const contactbutton = document.querySelector(".contact")

const menubutton = document.querySelector(".menu")
homepage()


homebutton.addEventListener("click", ()=>{
    homepage()
})


contactbutton.addEventListener("click", ()=>{
    contact()
})


menubutton.addEventListener("click", ()=>{
    menu()
})

