

/*
Add event listeners to the `.expand_button` buttons
*/

function expandArticleBody() {
  // your code here
  // Find the article in which the button that was clicked belongs
  // If text is V, set display property of article body to none
  // Also set text on bottom to >
  //If not a V then set it to block instead
  const articleButtons = document.querySelectorAll(".expand_button")
  articleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let newThing = event.target.closest("article")
      let children = newThing.children[1]
      let btn = event.target.closest(".expand_button")
      if (children.style.display == "block") {
        children.style.display = "none" 
        btn.innerText = ">"
        
      } else {
        children.style.display = "block"
      btn.innerText = "V"
      }
      
     
      
    })
  })

}
/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  // your code here
  const highlightButton = document.querySelectorAll(".highlightBtn")
  
  highlightButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      let newThing = event.target.closest("article")
      console.log(newThing)
      let btn = event.target.closest(".highlightBtn")
      let children = newThing.children[1]
      console.log(children)
      if (btn.innerText === "+") {
        btn.innerText = "-"
      children.classList.add("highlight")  
      
      } else {
        btn.innerText = "+"
      children.classList.remove("highlight")
      }
      console.log()
    })
  })
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
