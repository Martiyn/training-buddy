import React, { Component, Fragment } from 'react'
import ExerciseItem from './ExerciseItem.js'


class ExerciseList extends Component {
    render() {
        const {
            items,
            updateExercisesToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneExercise,
            handleDeleteDoneExercises
        } = this.props

        return (
            <Fragment>
                <h3 className="text-center">
                    ExerciseList
                </h3>

                <div className="row">
                    <div className="col-md-4">
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateExercisesToShow("all")}
                        >
                            All
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateExercisesToShow("done")}
                        >
                            Done
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateExercisesToShow("todo")}
                        >
                            To be done
                        </button>
                    </div>
                </div>

                {
                items.length === 0 ? '' :
                    <ul className="list-group my-5">
                        {
                            items.map(item => {
                                return (
                                    <ExerciseItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        completed={item.completed}
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                        handleDoneExercise={handleDoneExercise}
                                    />
                                )
                            })
                        }

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-block mt-1"
                                    onClick={handleDeleteDoneExercises}
                                >
                                    Delete done exercises
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-block mt-1"
                                    onClick={clearList}
                                >
                                    Delete all exercises
                                </button>
                            </div>
                        </div>
                    </ul>
                }
            </Fragment>
        )
    }
}

export default ExerciseList;