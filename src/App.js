import React, { useState, useRef, useEffect } from "react";
import FormControl from "./components/Form.js";
import FilterButton from "./components/Filter.js";
import Exercise from "./components/Exercise.js";
import { nanoid } from "nanoid";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  
  const FILTER_MAP = {
    All: () => true,
    Active: exercise => !exercise.completed,
    Completed: exercise => exercise.completed
  };
  
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  
  function Trainer(props) {
    const [exercises, setExercises] = useState(props.exercises);
    const [filter, setFilter] = useState('All');
  
    function toggleExerciseCompleted(id) {
      const updatedExercises = exercises.map(exercise => {
        if (id === exercise.id) {
          return {...exercise, completed: !exercise.completed}
        }
        return exercise;
      });
      setExercises(updatedExercises);
    }
  
    function deleteExercise(id) {
      const remainingExercises = exercises.filter(exercise => id !== exercise.id);
      setExercises(remainingExercises);
    }
  
    function editExercise(id, newName) {
      const editedExerciseList = exercises.map(exercise => {
        if (id === exercise.id) {
          return {...exercise, name: newName}
        }
        return exercise;
      });
      setExercises(editedExerciseList);
    }
  
    const exerciseList = exercises.filter(FILTER_MAP[filter]).map(exercise => (
      <Exercise
        id={exercise.id}
        name={exercise.name}
        completed={exercise.completed}
        key={exercise.id}
        toggleExerciseCompleted={toggleExerciseCompleted}
        deleteExercise={deleteExercise}
        editExercise={editExercise}
      />
    ));
  
    const filterList = FILTER_NAMES
    .map(name => (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
      />
    ));
  
    function addExercise(name) {
      const newExercise = { id: "exercise-" + nanoid(), name: name, completed: false };
      setExercises([...exercises, newExercise]);
    }
  
  
    const exercisesNoun = exerciseList.length !== 1 ? 'exercises' : 'exercise';
    const headingText = `${exerciseList.length} ${exercisesNoun} remaining`;
  
    const listHeadingRef = useRef(null);
    const prevExerciseLength = usePrevious(exercises.length);
  
    useEffect(() => {
      if (exercises.length - prevExerciseLength === -1) {
        listHeadingRef.current.focus();
      }
    }, [exercises.length, prevExerciseLength]);
  
    return (
      <div className="exerciseapp stack-large">
        <FormControl addExercise={addExercise} />
        <div className="filters btn-group stack-exception">
          {filterList}
        </div>
        <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
          {headingText}
        </h2>
        <ul
          role="list"
          className="exercise-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {exerciseList}
        </ul>
      </div>
    );
  }
  
  export default Trainer;