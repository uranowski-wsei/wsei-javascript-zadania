//Task 0
const deleteOrder = document.querySelectorAll('.deleteBtn')
deleteOrder.forEach(button => {
    button.addEventListener("click", function(){
        let _parent = this.parentElement.parentElement
        let table = _parent.parentElement
        table.removeChild(_parent)
    })
});