import About from './Components/About.jsx'
import Domains from './Components/Domains.jsx'
import Header from './Components/Header.jsx'
import Outlets from './Components/Outlets.jsx'
import Technology from "./Components/Technology.jsx";
import Partner from "./Components/Partner.jsx";
import Admission from "./Components/Admission.jsx";
import Homepage from './Components/Homescreen.jsx';
import Team from './Components/Team.jsx';
import Footer from './Components/Footer.jsx';


function App() {

    return (
        <>
            <Header/>
            <Homepage/>
            <About/>
            <Team/>
            <Outlets/>
            <Domains/>
            <Admission/>
            <Technology/>
            <Partner/>
            <Footer/>
        </>
    );
}

export default App
