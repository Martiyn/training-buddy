import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Trainer from './App.js'


const TRAIN = [
  {id: "exercise-0", name: "Pull ups (10)", completed: false},
  {id: "exercise-1", name: "Bench press (5)", completed: false},
  {id: "exercise-2", name: "Bicep curls (12)", completed: false}
]

ReactDOM.render(
  <React.StrictMode>
    <Trainer exercises={TRAIN} />
  </React.StrictMode>,
  document.getElementById('root')
);
