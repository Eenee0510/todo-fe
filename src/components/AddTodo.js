import React from "react";
import { services } from "../services";
import { useState, useEffect } from "react";
export default function AddTodo() {
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    services
      .postTodo({
        todo: e.todo,
      })
      .then((res) => {
        return res.json();
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="add-todo"
          type="text"
          name="todo"
          placeholder="what is next?"
        />
        <br />
        <div className="add-btn">
          <input type="submit" className="addbtn" value={`Add task`} />
        </div>
      </form>
    </div>
  );
}
