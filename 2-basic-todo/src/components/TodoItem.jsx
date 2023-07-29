const TodoItem = ({todos, removeTodo}) => {

    return (
        <>
        {todos.map(todoItem => (
       <div key={todoItem.todoId} className="todoItem">
           <p>{todoItem.todoText}</p>
           <span onClick={() => removeTodo(todoItem.todoId)}>X</span>
       </div>
        ))}
       </>
    );
};

export default TodoItem;