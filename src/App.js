import { useState, useEffect, useCallback } from 'react'
import { GiMagicBroom } from "react-icons/gi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from "./components/AppointmentInfo"
// import appointmentList from "./data.json"



function App() {

  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  // console.log (appointmentList);
  return (
    <div className="App container mx-auto mt-3 font-thin ">
      <h1 className = "text-5xl">
        <GiMagicBroom className="inline-block text-red-400 align-top"/>
         Bitch With A Broom.</h1>

         <AddAppointment />
         <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList
          .map(appointment => (
            <AppointmentInfo key={appointment.id}
            appointment={appointment}
          />
          ))
        }
      </ul>


    </div>
  );
}

export default App;
