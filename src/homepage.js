export function homepage(){
//tag for the content div
const contentDiv = document.querySelector("#content")
contentDiv.replaceChildren()

//First elemnt
const title = document.createElement("h1")
title.innerText="KFC"
title.classList.add("title")
contentDiv.appendChild(title)

//picture
const pic = document.createElement("img")
pic.classList.add("front-pic")
pic.src="https://blog.logomyway.com/wp-content/uploads/2020/09/KFC-logo.jpg"
pic.alt="KFC LOGO"
contentDiv.appendChild(pic)



}
