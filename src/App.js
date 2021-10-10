import './App.css'
import Booking from './components/booking/Booking'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import Location from './components/location/Location'
import Cargo from './components/cargo/Cargo'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Booking />
      <Services />
      <br />
      <Location />
      <br />
      <Cargo />
    </div>
  )
}

export default App
