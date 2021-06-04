import React, { useEffect, useRef, useState } from "react";


function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function Exercise(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    const wasEditing = usePrevious(isEditing);

    function handleChange(e) {
       setNewName(e.target.value)
        }

    function handleSubmit(e) {
        e.preventDefault();
        if(!newName.trim()) {
            return;
        }

        props.editExercise(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
         <div className="form-group">
             <label className="exercise-label" htmlFor={props.id}>
                 New name for {props.name}
             </label>
             <input
             id={props.id}
             className="exercise-text"
             type="text"
             value={newName || props.name}
             onChange={handleChange}
             ref={editFieldRef}
             />
         </div>
         <div className="btn-group">
             <button
             type="button"
             className="btn exercise-cancel"
             onClick={() => setEditing(false)}
             >
                 Cancel
                 <span className="visually-hidden">renaming {props.name}</span>
             </button>
             <button 
             type="submit"
             className="btn btn__primary exercise-edit"
             >
                 Save
                 <span className="visually-hidden">new name for {props.name}</span>
             </button>
         </div>
        </form>
    );

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleExerciseCompleted(props.id)}
                />
                <label className="exercise-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button
                type="button"
                className="btn"
                onClick={() => setEditing(true)}
                ref={editButtonRef}
                >
                    Edit
                    <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteExercise(props.id)}
                >
                    Delete
                    <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    useEffect(() => {
        if(!wasEditing && isEditing) {
            editFieldRef.current.focus();
        }
        if(wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);

    return <li className="exercise">{isEditing ? editingTemplate : viewTemplate}</li>;
}