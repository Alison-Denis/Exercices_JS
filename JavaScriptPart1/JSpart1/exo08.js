function form1() {
    let regexText= /^[0-9]+$/;

    let age= document.getElementById("age").value;

    if ((!regexText.test(age))) {
        alert('** ATTENTION ** \n Vous n\'avez pas entrer un âge (une valeur numérique) !');

    } else if (age > 0 && age < 18) {
        alert('**FUN FACT** \n Vous ne pouvez pas encore boire d\'alcool car vous êters mineur.')

    } else if (age >= 18 && age < 70) {
        alert('Bravo vous êtes majeur, vous pouvez regarder des animés Hentai.');
    } else if (age >= 70 && age < 100) {
        alert('**FUN FACT** \n Vous entrez dans le 3ème âge, faites gaffe aux escaliers.');
    } else if (age >= 100) {
        alert('Vous êtes le/labienvenu au "Club des Centenaires".');
    }

     else {
        return alert('{  Cette formule devrait donner un résultat où les 2 premiers chiffres représentent votre pointure, et les 2 derniers votre âge.  }'+'\n\n'+'Voici le résultat de ce calcul : '+'\n'+result);
    }
}