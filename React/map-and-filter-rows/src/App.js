import './App.css';
import People from "./components/People";


const data = [
  {
    id: 1,
    name: "Odin",
    hobby: "Poetry"
  },
  {
    id: 2,
    name: "Thor",
    hobby: "MMA"
  },
  {
    id: 3,
    name: "Idunn",
    hobby: "Cooking"
  },
  {
    id: 4,
    name: "Thora",
    hobby: "Powerlifting"
  },
]

function App() {
  return (
    <div className="App">
      <People data={data} />
    </div>
  );
}

export default App;
