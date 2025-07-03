import about_image from "../assets/about_image.webp"
function About(){
    return(
        <>
            <div className="about flex row gap-10 bg-white text-primary-color px-10 py-5">
                <div className='about__image flex-1/2 py-30'>
                    <img src={about_image} alt="about_image"/>
                </div>
                <div className='flex flex-col gap-7 about__description flex-1/2 text-left py-7'>
                    <h1 className='eb-garamond text-5xl'>À propos de nous</h1>
                    <h2 className='flex row text-2xl font-bold'><i className='bxr bx-education text-6xl text-secondary-color'></i> <h2 className='my-auto'>+3ans</h2></h2>
                    <p className='text-lg'>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique.
                        Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de
                        Madagascar et du monde entier.</p>
                    <h2 className='flex row text-2xl font-bold'><i className='bxr  bx-people-diversity text-6xl text-secondary-color'></i> <h2 className='my-auto'>+250 étudiants</h2></h2>
                    <p className='text-lg'>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre
                        formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de
                        la “grande famille HEI”.</p>
                    <h2 className='flex row text-2xl font-bold'><i className='bxr  bx-medal-star text-6xl text-secondary-color'></i> <h2 className='my-auto'>Notre mission</h2></h2>
                    <p className='text-lg'>Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence
                        artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le
                        développement de Madagascar.</p>
                </div>
            </div>
        </>
    );
}
export default About