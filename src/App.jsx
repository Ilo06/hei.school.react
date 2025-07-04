import './App.css'
import About from './Components/About.jsx'
import Domains from './Components/Domains.jsx'
import Header from './Components/Header.jsx'
import Outlets from './Components/Outlets.jsx'
import Technology from "./Components/Technology.jsx";
import Partner from "./Components/Partner.jsx";
import Admission from "./Components/Admission.jsx";


function App() {

    return (
        <>
            <Header/>
            <About/>
            <Outlets/>
            <Domains/>
            <Admission/>
            <Technology/>
            <Partner/>
        </>
    )
}

export default App
