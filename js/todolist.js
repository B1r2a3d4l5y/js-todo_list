const todos = [];
const submitBtn = document.querySelector("#submitBtn");
// add todo function 
let addTodo = function() {
    let form_input = document.querySelector("#form_input");
    if(todos.indexOf(form_input)===-1)
    todos.push(form_input);
    form_input.value="";
}
submitBtn.addEventListener("click", function(){
    addTodo()
})