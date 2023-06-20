// get button selectors 
let addbutton = document.querySelector("#add");
let clearbutton = document.querySelector("#remove");
// todos 
const todos = [];
//addbtn 
addbutton.addEventListener("click", ()=> {
    addTodos();
    printTodos();
    
})
//addTodos()
function addTodos() {
    let input = document.querySelector("#input").value;
   todos.push(input);
   input.value = "";
   console.log(todos)
}
// prinTodos
function printTodos() {
    


}


