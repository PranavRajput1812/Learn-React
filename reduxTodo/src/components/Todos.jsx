import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../Feature/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // State to manage the edited text
    const [editedText, setEditedText] = useState('');

    const handleUpdate = (id) => {
        // Dispatch the updateTodo action with the id and edited text
        dispatch(updateTodo({ id, newText: editedText }));
        // Clear the edited text state
        setEditedText('');
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                       
                        <div className="text-white">{todo.text}</div>
                        <div>
                             {/* Display editable text input */}
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            className="text-white bg-transparent border-b border-white focus:outline-none"
                        />
                            {/* Show Update button */}
                            <button
                                onClick={() => handleUpdate(todo.id)}
                                className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                            >
                                
                                Update
                            </button>
                            {/* Show X button */}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
