import { render, screen } from "@testing-library/react";
import { TodoApp } from "../TodoApp";
import { useTodo } from "../hooks/useTodo";


jest.mock('../hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true}
        ],
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn()
    });

    test('Debe mostrar el componente correctamente', () => {

        render( <TodoApp />);

        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();

    });

})