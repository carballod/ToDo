import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../TodoItem";


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el Todo Pendiente de completar', () => {

        render( <TodoItem 
                    todo={ todo }
                    onToggleTodo={ onToggleTodoMock }
                    onDeleteTodo={ onDeleteTodoMock } 
                />);
        
        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

        // screen.debug();

    });

    test('Debe mostrar el Todo Completado', () => {

        todo.done = true;

        render( <TodoItem 
                    todo={ todo }
                    onToggleTodo={ onToggleTodoMock }
                    onDeleteTodo={ onDeleteTodoMock } 
                />);
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('Debe llamar el ToggleTodo cuando se hace click', () => {

        render( <TodoItem 
                    todo={ todo }
                    onToggleTodo={ onToggleTodoMock }
                    onDeleteTodo={ onDeleteTodoMock } 
                />);
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        // espera que haya sido llamado con ese argumento

    });

    test('button debe de llamar el deleteTodo', () => {

        render( <TodoItem 
                    todo={ todo }
                    onToggleTodo={ onToggleTodoMock }
                    onDeleteTodo={ onDeleteTodoMock } 
                />);
        
        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });

})