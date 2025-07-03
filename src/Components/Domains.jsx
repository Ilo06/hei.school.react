import Card from "./Card.jsx";

function Domains() {
    return (
        <>
            <section className="bg-gray-100 my-5 py-10">
                <h1 className="text-5xl text-primary-color eb-garamond">Domaines</h1>
                <p className="text-center text-primary-color my-4 text-lg">Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
                <div className="cards_holder">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </section>

        </>
    );
}
export default Domains