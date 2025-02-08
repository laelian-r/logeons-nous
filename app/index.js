import { Redirect } from "expo-router";

const page = () => {
    return <Redirect href={"/screens/home"} />;
};

export default page;


/*

    => 2 pages
    - Accueil
    - Détail des maisons

*/