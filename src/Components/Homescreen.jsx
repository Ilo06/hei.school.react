import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import cover from '../assets/coverimage.jpg';

function HeroCarousel() {
    const slides = [
        {
            title: "Haute École d'Informatique",
            description: '«Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.»',
            backgroundImage: cover,
        },
        {
            title: "Haute École d'Informatique",
            description: '«Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.»',
            backgroundImage: cover, 
        },
        {
            title: "Haute École d'Informatique",
            description: '« L’éducation est l’arme la plus puissante pour changer le monde » selon Nelson Mandela. « L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C’est notre mission.»',
            backgroundImage: cover, 
        },
    ];


    return (
        <div className="w-full h-screen">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                className="w-full h-full"
                style={{ height: '100%' }} 
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-screen bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-60" />

                            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 space-y-6 text-white">
                                <h1 className="text-6xl font-serif drop-shadow-lg eb-garamond mb-15">
                                    {slide.title}
                                </h1>
                                <p className="max-w-4xl text-xl drop-shadow  mb-10">
                                    {slide.description}
                                </p>
                                <div className="flex flex-wrap gap-20 justify-around mt-4">
                                    <button className="cursor-pointer font-bold bg-secondary-white text-blue-900  py-2 px-4 rounded">
                                        Inscrivez-vous ici
                                    </button>
                                    <button className="cursor-pointer font-bold bg-secondary-color text-white py-2 px-4 rounded">
                                        Emploi du temps
                                    </button>
                                    <button className="cursor-pointer font-bold bg-primary-color text-white py-2 px-4 rounded">
                                        Programme pédagogique
                                    </button>
                                </div>
                                <p className="mt-8 text-sm">
                                    Habilitation MESupRES, suivant l’arrêté n°31309/2023
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroCarousel;
