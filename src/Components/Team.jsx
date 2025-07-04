// src/components/TeamCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import photoYannick from '../assets/yannick.jpg';
import photoTahina from '../assets/tahina.png';
import photoLou from '../assets/lou.jpg';
import photoMirado from '../assets/mirado.webp';

const teamMembers = [
  {
    name: 'Yannick Raharijaona',
    title: 'Responsable technique ML chez Rocket Science',
    location: 'Ottawa – Canada',
    photo: photoYannick,
  },
  {
    name: 'Dre Tahina Ralitera',
    title: 'Docteure-Ingénieure, CNRS France | Prix L’Oréal-UNESCO pour les Femmes en Science (2017)',
    location: '',
    photo: photoTahina,
  },
  {
    name: 'Dr Lou Maurica',
    title: 'Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI',
    location: '',
    photo: photoLou,
  },
  {
    name: 'Mirado RAFENOMAHENINTSOA',
    title: 'Data and Business Intelligence Specialist 5+',
    location: '',
    photo: photoMirado,

  }
];

export default function TeamCarousel() {
  return (
    <section className="bg-[#5b84c4] text-white py-12 px-4 text-center">
      <h2 className="font-bold mb-4 eb-garamond text-5xl">L'équipe pédagogique</h2>
      <p className="max-w-5xl mx-auto mb-8 text-white/90">
        Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence.
        Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-gray-900 rounded-xl p-6 mx-4 shadow-lg">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
              />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm mt-2">{member.title}</p>
              {member.location && <p className="text-xs text-gray-500 mt-1">{member.location}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
