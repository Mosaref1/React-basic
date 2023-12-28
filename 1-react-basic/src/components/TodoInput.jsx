/* eslint-disable no-unused-vars */
import React from "react";

const TodoInput = () => {
  return (
    <div>
      <div className="row mp-row">
        <div className="col-6">
          <input type="text" placeholder="Enter product name" />
        </div>
        <div className="col-4 text-center"><h3>Date</h3></div>
        <div className="col-2">
          <button type="button" className="mp-btn btn btn-success">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
