import Home from './Home'
import BookingSuccess from './BookingSuccess.jsx'
import './App.css'

function App() {
  // Check if we're on the success page
  const isSuccessPage = window.location.pathname === '/success';
  

  return (
    <div className="container">
      {isSuccessPage ? <BookingSuccess /> : <Home />}
    </div>
  )
}

export default App