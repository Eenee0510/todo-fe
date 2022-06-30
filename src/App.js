import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <AddTodo />
    </div>
  );
}

export default App;
