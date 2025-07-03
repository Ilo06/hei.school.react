import logo from "../assets/hei_logo.png"

function Header() {
    return(
        <>
            <header className="flex row justify-between items-center px-12 py-3 bg-primary-color">
                <img src={logo} width={75} height={75}/>
                <div className="links text-white">
                    <ul className="flex row gap-10 items-center ">
                        <li className="font-bold hover:text-secondary-color transition-all"><a href="http://">ACCUEIL</a></li>
                        <li className="font-bold hover:text-secondary-color transition-all"><a href="http://">ACTUALITÉS</a></li>
                        <li className="font-bold hover:text-secondary-color transition-all"><a href="http://">BOURSE D'ÉTUDES</a></li>
                        <li className="font-bold hover:text-secondary-color transition-all"><a href="http://">INSCRIPTION</a></li>
                        <li className="font-bold bg-secondary-color p-3 rounded-sm shadow-md shadow-gray-800"><a href="https://admin.hei.school">INTRANET</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header