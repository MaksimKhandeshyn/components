import "./App.css";
import { Greeting } from "./Greeting/Greeting";
import { Message } from "./Message/Message";
function App() {
  return (
    <>
      <Greeting name="Maksim"></Greeting>
      <Message text="Welcome to Our Web-Site"></Message>
    </>
  );
}

export default App;
