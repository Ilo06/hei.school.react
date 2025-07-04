function Card({ image, title, text }) {
  return (
    <div className="bg-white cursor-pointer p-6 rounded-2xl max-w-sm hover:shadow-lg transition duration-300 w-1/3 py-6">
      <img src={image} alt={title} className=" mx-auto mb-4 w-36 h-36" />
      <h2 className="text-xl font-bold text-secondary-color text-center eb-garamond text-[24px]">{title}</h2>
      <p className="text-center px-5 text-primary-color mt-4 text-[17px]">{text}</p>
    </div>
  );
}

export default Card;