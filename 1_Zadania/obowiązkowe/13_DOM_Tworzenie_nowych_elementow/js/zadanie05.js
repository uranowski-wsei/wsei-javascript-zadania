//Task 5
const moveToNext = document.querySelectorAll('.moveBtn')
const list1 = document.querySelector('#list1')
const list2 = document.querySelector('#list2')
for(let counter = 0; counter < moveToNext.length; counter++){
    moveToNext[counter].addEventListener("click", function(){
        let toAppend = this.parentElement.parentElement === list1 ? list2 : list1
        toAppend.appendChild(this.parentElement)
    })
}