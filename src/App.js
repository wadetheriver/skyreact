import { GiMagicBroom } from "react-icons/gi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
// import './App.css';

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin ">
      <h1 className = "text-5xl">
        <GiMagicBroom className="inline-block text-red-400 align-top"/>
         Hello</h1>
         <AddAppointment />
         <Search />


    </div>
  );
}

export default App;
