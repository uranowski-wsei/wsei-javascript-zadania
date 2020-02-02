//Task 3
const buttonDelete = document.querySelector('.button')

buttonDelete.addEventListener("click", function(){
    this.parentElement.removeChild(buttonDelete)
})