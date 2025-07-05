import group1 from "../assets/Mask-group-1.webp"
import group2 from "../assets/Mask-group-2.webp"
import group3 from "../assets/Mask-group-3.webp"

function Learning() {
    return (
        <>
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
            <div className="flex row justify-around py-5 px-5 gap-5">
                <img src={group1} className='flex-1/3 w-50' />
                <img src={group2} className='flex-1/3 w-50' />
                <img src={group3} className='flex-1/3 w-50' />
            </div>
        </>

    )
}

export default Learning