import React from 'react';

const Todos = ({todos , deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map((todo)=>{
            return (
                <tr key={todo.id}>
                    <th scope="row">{todo.id}</th>
                        <td>{todo.detail}</td>
                        <td><button onClick={()=>{deleteTodo(todo.id)}}>Delete</button></td>
                </tr>   
            )
        })
    ) : (
        <tr><td>You do not have to do list</td></tr>
    );
    return(
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList}
                </tbody>
            </table>
        </div>
    );
}
export default Todos;