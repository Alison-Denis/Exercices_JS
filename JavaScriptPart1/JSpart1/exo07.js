function form1() {
    let regexText= /^[0-9]+$/;

    let birthday= document.getElementById("birthday").value;
    let footSize= document.getElementById("footSize").value;
    let result= ((((footSize * 2) + 5) * 50) - birthday) + 1771;

    if ((regexText.test(footSize) == false) && (regexText.test(birthday)) == false) {
        alert('Vous vous êtes trompés dans la pointure ET dans la date.');
    } else if (regexText.test(birthday) == false) {
        alert('Vous vous êtes trompés dans la date.');
    } else if (regexText.test(footSize) == false){
        alert('Vous vous êtes trompé dans la pointure');

    } else {
        return alert('{  Cette formule devrait donner un résultat où les 2 premiers chiffres représentent votre pointure, et les 2 derniers votre âge.  }'+'\n\n'+'Voici le résultat de ce calcul : '+'\n'+result);
    }
}