import logo from '../assets/hei_logo.png'

function Footer() {
    return (
        <>
            <section className='bg-primary-color px-10 py-6 '>
                <img src={logo} alt="HEI Logo" className='w-23 ml-6' />
                <div className='flex row text-left justify-around px-10'>
                    <div className='flex-1/4'>
                        <p className='my-4 text-secondary-white pr-25 text-lg'>Formation habilitée par l’Etat suivant le système LMD</p>
                        <p className='my-4 text-secondary-white pr-25 text-lg'>Habilitation MESupRes n°31309/2023</p>
                    </div>
                    <div className='flex-1/4'>
                        <h3 className='text-secondary-white text-2xl font-bold'>Adresse</h3>
                        <p className='my-4 text-secondary-white'>II J 161 R Ambodivoanjo</p>
                        <p className='my-4 text-secondary-white'>Ivandry Antananarivo</p>
                        <p className='my-4 text-secondary-white'>101, Madagascar</p>
                    </div>
                    <div className='flex-1/4'>
                        <h3 className='text-secondary-white text-2xl font-bold'>Navigation</h3>
                        <p className='my-4  font-semibold text-secondary-color'>Accueil</p>
                        <p className='my-4 text-secondary-white font-semibold'>Actualités</p>
                        <p className='my-4 text-secondary-white font-semibold'>Bourse d’études</p>
                        <p className='my-4 text-secondary-white font-semibold'>Inscription</p>
                    </div>
                    <div className='text-secondary-color'>
                        <h3 className='text-secondary-white text-2xl font-bold'>Médias Sociaux</h3>
                        <i className='bxl text-2xl my-3 mx-1.5 text-secondary-white p-2 rounded-full  bx-facebook-circle bg-secondary-color'  ></i>
                        <i className='bxl text-2xl my-3 mx-1.5 text-secondary-white p-2 rounded-full  bx-linkedin-square bg-secondary-color'  ></i>
                        <i className='bxl text-2xl my-3 mx-1.5 text-secondary-white p-2 rounded-full  bx-instagram bg-secondary-color'  ></i>
                    </div>
                </div>

            </section>
            <p className='bg-secondary-white text-gray-600 font-bold text-lg py-2.5'>{new Date().getUTCFullYear()} © HEI Madagascar</p>
        </>
    );
}

export default Footer;