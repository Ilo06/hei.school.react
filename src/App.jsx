import About from './Components/About.jsx'
import Domains from './Components/Domains.jsx'
import Header from './Components/Header.jsx'
import Outlets from './Components/Outlets.jsx'
import Technology from "./Components/Technology.jsx";
import Homepage from './Components/Homescreen.jsx';


function App() {
  return (
    <>
      <Header />
      <Homepage/>
      <About />
      <Outlets />
      <Domains />
      <Technology />
    </>
  )
}

export default App
