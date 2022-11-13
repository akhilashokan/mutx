import './App.css'
import Banner from './components/banner'
import Contact from './components/contact'
import Cool from './components/cool'
import Forecasts from './components/forecasts'
import Header from './components/header'
import Others from './components/others'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Forecasts />
      <Others />
      <Cool />
      <Contact />
    </div>
  )
}

export default App
