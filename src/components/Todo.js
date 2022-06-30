import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { services } from "../services";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    services
      .getTodo()
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  console.log(todo);
  return (
    <div className="todo">
      {todo.map((e) => (
        <form action="">
          <Row className="todo-row">
            <Col>
              <input type="radio" id="todo" />
              <label htmlFor="todo">{e.todo}</label>
            </Col>
            <Col>
              <button>edit</button>
              <button>del</button>
            </Col>
          </Row>
          <hr />
        </form>
      ))}
    </div>
  );
}
