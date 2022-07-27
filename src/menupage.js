export function menu(){
    
    const contentDiv= document.querySelector("#content")
    contentDiv.replaceChildren()
    
    //Sandwiches title
    const sandwiches = document.createElement("div")
    sandwiches.classList.add("menu-title")
    sandwiches.innerText="The Sandwiches:"
    contentDiv.appendChild(sandwiches)
    //sandwiches container
    const sandwichcointainer = document.createElement('div')
    sandwichcointainer.classList.add("containersmenu")

    //sandwiches items
    const sand1 = document.createElement("div")
    sand1.classList.add("scitems")
    sand1.innerHTML="<h1>Zinger Sandwich</h1> <div>The zing sandwich is made with love with freedom ingredients from the kfc paradise. This is one of the top sellers</div>"

    const sand2 = document.createElement("div")
    sand2.classList.add("scitems")
    sand2.innerHTML="<h1>Zinger Sandwich</h1> <div>The zing sandwich is made with love with freedom ingredients from the kfc paradise. This is one of the top sellers</div>"

    const sand3 = document.createElement("div")
    sand3.classList.add("scitems")
    sand3.innerHTML="<h1>Zinger Sandwich</h1> <div>The zing sandwich is made with love with freedom ingredients from the kfc paradise. This is one of the top sellers</div>"

    const sand4 = document.createElement("div")
    sand4.classList.add("scitems")
    sand4.innerHTML="<h1>Zinger Sandwich</h1> <div>The zing sandwich is made with love with freedom ingredients from the kfc paradise. This is one of the top sellers</div>"

    const sand5 = document.createElement("div")
    sand5.classList.add("scitems")
    sand5.innerHTML="<h1>Zinger Sandwich</h1> <div>The zing sandwich is made with love with freedom ingredients from the kfc paradise. This is one of the top sellers</div>"

    sandwichcointainer.appendChild(sand1)
    sandwichcointainer.appendChild(sand2)
    sandwichcointainer.appendChild(sand3)
    sandwichcointainer.appendChild(sand4)
    sandwichcointainer.appendChild(sand5)
    contentDiv.appendChild(sandwichcointainer)
 
    //salads title
    const salads = document.createElement("div")
    salads.classList.add("menu-title")
    salads.innerText="The Salads:"
    contentDiv.appendChild(salads)
    //salads cointainer
    const saladcontainer=document.createElement("div")
    saladcontainer.classList.add("containersmenu")
    //salad items

    const salad1 = document.createElement("div")
    salad1.classList.add("scitems")
    salad1.innerHTML="<h1>Greek Salad</h1> <div>This greek salad has the highest quality ingredients in the whole NA. You will probably order a second after you taste it</div>"

    const salad2 = document.createElement("div")
    salad2.classList.add("scitems")
    salad2.innerHTML="<h1>Greek Salad</h1> <div>This greek salad has the highest quality ingredients in the whole NA. You will probably order a second after you taste it</div>"

    const salad3 = document.createElement("div")
    salad3.classList.add("scitems")
    salad3.innerHTML="<h1>Greek Salad</h1> <div>This greek salad has the highest quality ingredients in the whole NA. You will probably order a second after you taste it</div>"

    const salad4 = document.createElement("div")
    salad4.classList.add("scitems")
    salad4.innerHTML="<h1>Greek Salad</h1> <div>This greek salad has the highest quality ingredients in the whole NA. You will probably order a second after you taste it</div>"



    saladcontainer.appendChild(salad1)
    saladcontainer.appendChild(salad2)
    saladcontainer.appendChild(salad3)
    saladcontainer.appendChild(salad4)

    contentDiv.appendChild(saladcontainer)
}