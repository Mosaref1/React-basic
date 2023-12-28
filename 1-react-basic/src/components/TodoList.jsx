// eslint-disable-next-line no-unused-vars
import React from 'react'

const TodoList = () => {
    let todoName = "Go to work";
    let todoDate = '28/12/2023';
  return (
    <div>
        <div className="row mp-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4 text-center">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger mp-btn">
            Deleted
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoList;