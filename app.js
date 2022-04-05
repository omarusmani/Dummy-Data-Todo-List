let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    //console.log(arrayOfTodos)

}

const populateTodos = () => {
    var ol=document.getElementById("todo-list");
    for(i=0; i<arrayOfTodos.length; i++){
    var li=document.createElement('ol');
//li=document.createTextNode("title");
// li=(arrayOfTodos[i].title);
li.appendChild(document.createTextNode(arrayOfTodos[i].title));
    ol.append(li);
};
    //console.log(ol);
}