// import "bootstrap/dist/css/bootstrap.min.css";
import { AppName } from "./components/AppName";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./app.css"

function App() {
  return (
    <>
      <AppName/>
      <TodoInput/>
      <TodoList/>
      <TodoList></TodoList>
      
    </>
  );
}

export default App;
