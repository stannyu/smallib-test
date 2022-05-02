import './App.css';
import {Badge, Button} from "./lib";

function App() {
  return (
    <div className="App">
      <Button label='button title' handleClick={() => {console.log('handle click')}}/>
      <Badge value='3'/>
    </div>
  );
}

export default App;
