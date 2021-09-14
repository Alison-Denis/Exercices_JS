function form1() {
    let lastName= document.getElementById("lastName").value;
    let firstName= document.getElementById("firstName").value;
    let city= document.getElementById("City").value;
    let regexText= /^[a-zA-Zéèêëìîïòôöùüû]+$/;

//console.log(regexText.test(lastName));
    if (regexText.test(lastName) == false) {
        alert('Vous vous êtes trompés dans le nom.');
    } else if (regexText.test(firstName) == false) {
        alert('Vous vous êtes trompés dans le prénom.');
    } else if (regexText.test(city) == false) {
        alert('Vous vous êtes trompés dans la ville.');
    } else {
        return alert('Bonjour '+firstName+' !\n'+lastName+', quel drôle de nom...\nEst-ce qu\'il fait beau à '+city+' ?');
    }
}
