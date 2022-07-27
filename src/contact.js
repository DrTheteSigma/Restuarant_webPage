export function contact(){
    const contentDiv = document.querySelector("#content")
    contentDiv.replaceChildren()


    const aboutus= document.createElement("div")
    aboutus.classList.add("contactdiv")
    aboutus.innerHTML="<div>We are KFC</div> <div>call us on 911</div>"
    contentDiv.appendChild(aboutus)
}