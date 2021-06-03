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

    
}