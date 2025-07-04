import program from "../assets/program.webp"

function Program() {
    return (
        <section className='bg-white flex row gap-10 text-primary-color p-10'>
            <img src={program} alt="program" className='flex-1/2 w-[45vw]'/>
            <div className='flex flex-col gap-7 flex-1/2 text-left py-7'>
                <h1 className='eb-garamond text-5xl'>Le programme pédagogique</h1>
                <p>Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en
                    adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de
                    Master en Informatique reconnu par le MESupRes de Madagascar.</p>
                <button className='mt-10 size-fit helvetica text-lg px-4 py-3 border-4 rounded-sm border-primary-color text-primary-color font-semibold transition-all duration-300 hover:text-white hover:bg-primary-color hover:transition-all hover:duration-300'>Notre Programme</button>
            </div>
        </section>
    );
}

export default Program;