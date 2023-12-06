import "./App.css";
import Counter from "./components/Counter";
import ExponentFive from "./components/ExponentFive";
import ExponentFour from "./components/ExponentFour";
import ExponentSix from "./components/ExponentSix";
import ExponentThree from "./components/ExponentThree";
import ExponentTwo from "./components/ExponentTwo";


function App () {
  //const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo />
        <ExponentThree />
        <ExponentFour />
        <ExponentFive />
        <ExponentSix />
      </div>
    </div>
  );
}

export default App;
