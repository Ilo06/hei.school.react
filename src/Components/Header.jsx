import logo from "../assets/hei.logo.png"

function Header() {
    return(
        <>
            <header className="flex row justify-between items-center px-12 py-5 bg-blue-950">
                <img src={logo} width={75} height={75}/>
                <div className="links text-white">
                    <ul className="flex row gap-10 items-center ">
                        <li className="font-bold hover:text-amber-400 transition-all"><a href="http://">ACCUEIL</a></li>
                        <li className="font-bold hover:text-amber-400 transition-all"><a href="http://">ACTUALITÉS</a></li>
                        <li className="font-bold hover:text-amber-400 transition-all"><a href="http://">BOURSE D'ÉTUDES</a></li>
                        <li className="font-bold hover:text-amber-400 transition-all"><a href="http://">INSCRIPTION</a></li>
                        <li className="font-bold bg-amber-400 p-3 rounded-sm shadow-md shadow-gray-800"><a href="http://">INTRANET</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header