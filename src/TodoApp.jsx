import React, { useReducer } from 'react'


function TodoApp() {

    const [state, dispatch] = useReducer( first, second )


    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>


        </>
    )
}

export default TodoApp