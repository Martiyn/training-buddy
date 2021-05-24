import React, { useState } from "react";

function FormControl(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addExercise(name);
    setName("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-exercise-input" className="label__lg">
          What exercise needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-exercise-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add exercise
      </button>
    </form>
  );
}

export default FormControl;