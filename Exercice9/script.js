// votre code ici
const checkAge = (int) => {
    if (typeof int !== "number") {
        return "Veuillez saisir un nombre.";
    }

    if (int < 18) {
        return "Vous êtes mineur.";
    } else if (int >= 65) {
        return "Vous êtes senior.";
    }

    return "Vous êtes majeur.";
};
export default checkAge;
