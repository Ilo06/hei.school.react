function Admission() {
    return (
        <>
            <section className='flex flex-col gap-7 py-10 bg-tertiary-color text-white'>
                <h1 className='eb-garamond text-5xl'>Admission</h1>
                <p>Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :</p>
                <p>une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. </p>
                <div className='flex row gap-0 mx-auto w-[90vw]'>
                    <div className='bg-admission-first flex-1/3 py-6 text-left px-5'>
                        <h1 className='text-5xl font-semibold'>01</h1>
                        <div className='flex row gap-10 py-6'>
                            <p className='text-primary-color'><strong>Dépôt de dossiers :</strong> pour les bacheliers
                                de toutes séries
                                sans limite d’âge</p>
                            <i className='bxr bx-arrow-right-stroke font-bold text-8xl'></i>
                        </div>
                    </div>
                    <div className='bg-admission-second flex-1/3 py-6 text-left px-5'>
                        <h1 className='text-5xl font-semibold'>02</h1>
                        <div className='flex row gap-10 py-6'>
                            <p className='text-primary-color'><strong>Test de niveau :</strong> composé d’une épreuve de
                                français niveau
                                B2 et d’une épreuve de mathématiques niveau Terminale D</p>
                            <i className='bxr bx-arrow-right-stroke font-bold text-8xl'></i>
                        </div>
                    </div>
                    <div className='bg-admission-third flex-1/3 py-6 text-left px-5'>
                        <h1 className='text-5xl font-semibold'>03</h1>
                        <div className='flex row gap-10 py-6'>
                            <p className='text-primary-color'><strong>Inscription définitive</strong> (si test réussi)
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex row gap-10 justify-center'>
                    <button className='px-4 py-3 border-4 border-white font-semibold text-lg rounded-sm transition-all duration-300 hover:bg-primary-color hover:text-white hover:border-primary-color hover:transition-all hover:duration-300'>Inscrivez-vous ici</button>
                    <button className='px-4 py-3 font-semibold text-lg bg-primary-color rounded-sm transition-all duration-300 hover:bg-white hover:text-primary-color hover:transition-all hover:duration-300'>Résultat concours</button>
                </div>
            </section>
        </>
    )
}

export default Admission