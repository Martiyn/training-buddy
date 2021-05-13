import React from 'react'

class ExerciseItem extends Component {
    render() {
        const {id , title, handleDelete, handleEdit, handleDoneExercise, completed} = this.props

        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className={`mt-1 mb-0 align-middle ${completed ? 'completed-exercise' : ''}`}>{title}</h6>
                <div className="exercise-icon">
                    <span 
                        className={`mx-2 ${completed ? 'text-success' : 'text-secondary'}`}
                        onClick={() => handleDoneExercise(id)}
                    >
                        <i className={`${completed ? 'far fa-check-square' : 'far fa-square'}`} />
                    </span>
                    <span 
                        className="mx-2 text-warning"
                        onClick={handleEdit}
                    >
                        <i className="fas fa-pen" />
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        onClick={handleDelete}
                    >
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        )
    }
}

export default ExerciseItem;