function Learning() {
    return (
        <section className='flex row justify-evenly w-auto'>
            <div className='text-left bg-admission-first w-60 h-60 p-8 rounded-3xl flex flex-col gap-5'>
                <h1 className='text-5xl text-secondary-color font-bold'>25%</h1>
                <p className='text-primary-color font-semibold text-2xl'>Apprentissage théoriques en présentiel</p>
            </div>
            <div className='text-left bg-admission-first w-60 h-60 p-8 rounded-3xl flex flex-col gap-5'>
                <h1 className='text-5xl text-secondary-color font-bold'>25%</h1>
                <p className='text-primary-color font-semibold text-2xl'>Apprentissage sur supports numériques</p>
            </div>
            <div className='text-left bg-admission-first w-60 h-60 p-8 rounded-3xl flex flex-col gap-5'>
                <h1 className='text-5xl text-secondary-color font-bold'>25%</h1>
                <p className='text-primary-color font-semibold text-2xl'>Travaux individuels de l’étudiant</p>
            </div>
            <div className='text-left bg-admission-first w-60 h-60 p-8 rounded-3xl flex flex-col gap-5'>
                <h1 className='text-5xl text-secondary-color font-bold'>25%</h1>
                <p className='text-primary-color font-semibold text-2xl'>Apprentissage en entreprise</p>
            </div>
        </section>
    )
}

export default Learning