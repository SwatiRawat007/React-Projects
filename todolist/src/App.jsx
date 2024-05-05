import AppName from "./Components/AppName";
import AddTodo from"./Components/AddTodo";
import ToDoItem1 from "./Components/TODOItem1";
import ToDoItem2 from "./Components/TODOItem2";
import "./App.css";


function App() {
    return <center>   
  <AppName></AppName>
    <AddTodo></AddTodo>
  <div id="items">
    <ToDoItem1></ToDoItem1>
    <ToDoItem2></ToDoItem2>
    </div>
    </center>
  {/* <div class="container text-center">

 

</div> */}
}

export default App
