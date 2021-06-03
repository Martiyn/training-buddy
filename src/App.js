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

function App(props) {
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
        if(id === exercise.id) {
            return {...exercise, name: newName}
        }
        return exercise;
    })
    setExercises(editedExerciseList)
}

}