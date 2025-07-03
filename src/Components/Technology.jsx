import java from "../assets/Java.png"
import python from "../assets/python.png"
import c from "../assets/c.png"
import javascript from "../assets/JS.png"
import typescript from "../assets/TS.png"
import docker from "../assets/docker.png"
import next from "../assets/next.png"
import aws from "../assets/aws.png"
import react from "../assets/react.png"
import serverless from "../assets/serverless.png"
import openapi from "../assets/openapi.png"

function Technology() {
    return (
        <>
            <div className="flex flex-col gap-6 bg-secondary-white text-primary-color py-10">
                <h1 className="eb-garamond text-5xl">Les technos et langages utilisées</h1>
                <p className="text-lg w-[80%] mx-auto">Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et
                    JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel
                    et
                    du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le
                    monde.</p>
                <div className="flex flex-row justify-evenly">
                    <img src={java} alt="java" className='w-[122px] h-[122px]'/>
                    <img src={python} alt="python" className='w-[122px] h-[122px]'/>
                    <img src={c} alt="c" className='w-[122px] h-[122px]'/>
                    <img src={javascript} alt="javascript" className='w-[122px] h-[122px]'/>
                    <img src={typescript} alt="typescript" className='w-[122px] h-[122px]'/>
                </div>
                <div className="flex flex-row justify-evenly mt-6">
                    <img src={docker} alt="docker" className='w-[159px] h-[41px]'/>
                    <img src={next} alt="next" className='w-[100px] h-[60px]'/>
                    <img src={aws} alt="aws" className='w-[82px] h-[50px]'/>
                    <img src={serverless} alt="serverless" className='w-[167px] h-[50px]'/>
                    <img src={react} alt="react" className='w-[117px] h-[40px]'/>
                    <img src={openapi} alt="openapi" className='w-[150px] h-[70px]'/>
                </div>
            </div>
        </>
    )
}

export default Technology