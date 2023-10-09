const todos=[
    {
        id:1,
        text:'meeting with boss',
        iscomplete:true
    },
    {
        id:2,
        text:'take out trash',
        iscomplete:false
    },
    {
        id:3,
        text:'|dentist appt',
        iscomplete:true
    },
]
//for( let todos of todo){
    console.log(todos.text)
//}
//todos.forEach(function(todo) {
//  console.log(todo.id)
//});

const todotext = todos.map(function(todos){
    return todos.text
});    

console.log(todotext)