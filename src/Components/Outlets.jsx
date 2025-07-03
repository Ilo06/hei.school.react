import outlets_image from '../assets/outlets_image.webp';

function Outlets() {
    return (
        <>
            <section className="flex flex-row items-center content-center px-16 py-6 gap-8">
                <div className="w-3/5">
                    <h1 className="text-left eb-garamond text-primary-color text-5xl">Quelques débouchés</h1>
                    <p className="text-left text-primary-color my-4 text-lg">
                        Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
                    </p>
                    <p className="text-left text-primary-color my-4 text-lg">
                        Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
                    </p>
                </div>
                <img src={outlets_image} className="w-2/5 object-cover" alt="Débouchés" />
            </section>
        </>
    );
}

export default Outlets;
