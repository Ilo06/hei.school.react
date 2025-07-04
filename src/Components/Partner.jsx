import nexta from "../assets/LOGO-NEXTA.webp"
import PN from "../assets/PN_Logo_baseline_color_ENG.png"
import yooz from "../assets/Yooz-2023-Logo-2.webp"
import etech from "../assets/logo-etech.png"
import emit from "../assets/logo_emit.png"
import numer from "../assets/Logo-Numer-vf.png"
import Bpartners from "../assets/bp-logo-full-1536x497.webp"
import YIF from "../assets/YIF_LOGO_512x512_BL_on_WH-1.webp"
import kante from "../assets/logo-kante-company-1.png"


function Partner() {
    return (
        <>
            <div className="flex flex-col gap-8 bg-white text-primary-color py-10">
                <h1 className="eb-garamond text-5xl">Nos partenaires</h1>
                <p className="text-lg w-[80%] mx-auto">L’employabilité de nos étudiants se base sur la pertinence  de
                    notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et
                    la collaboration des entreprises partenaires</p>
                <div className="flex flex-row justify-evenly">
                    <img src={nexta} alt="nexta" className='w-[79px] h-[43px]'/>
                    <img src={PN} alt="PN" className='w-[98px] h-[35px]'/>
                    <img src={yooz} alt="yooz" className='w-[93px] h-[31px]'/>
                    <img src={etech} alt="etech" className='w-[98px] h-[28px]'/>
                    <img src={emit} alt="emit" className='w-[83px] h-[42px]'/>
                </div>
                <div className="flex flex-row justify-evenly mt-6">
                    <img src={numer} alt="numer" className='w-[98px] h-[59px]'/>
                    <img src={Bpartners} alt="Bpartners" className='w-[97px] h-[32px]'/>
                    <img src={YIF} alt="YIF" className='w-[69px] h-[50px]'/>
                    <img src={kante} alt="kante " className='w-[78px] h-[78px]'/>
                </div>
            </div>
        </>
    )
}

export default Partner;