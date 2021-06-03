import React, { useEffect, useRef, useState } from "react";


function usePrev(val) {
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
             className="btn btn_primary exercise-edit"
             >
                 Save
                 <span className="visually-hidden">new name for {props.name}</span>
             </button>
         </div>
        </form>
    );
}