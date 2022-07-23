import Counter from "./component/Counter"
import './App.css';


function App() {
  return (
    <div className="App">
      <Counter initial={ 9 } min={ 2 } max={ 10 }/>
    </div>
  );
}

export default App;
