import Card from "./Card.jsx";

import ia from "../assets/ia.png"
import cloud from "../assets/cloud.png"
import software from "../assets/software.png"

function Domains() {
    return (
        <>
            <section className="bg-gray-100 mt-5 py-15">
                <h1 className="text-5xl text-primary-color eb-garamond">Domaines</h1>
                <p className="text-center text-primary-color my-4 text-lg mb-15">Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
                <div className="cards_holder flex row align-middle justify-center gap-5 px-18">
                    <Card image={cloud} title="Cloud et cybersécurité" text="Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité." />
                    <Card image={ia} title="Intelligence artificielle" text="Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI." />
                    <Card image={software} title="Ingénierie logicielle" text="Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques." />
                </div>

            </section>

        </>
    );
}
export default Domains