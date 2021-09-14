function checkPass() {
    let mdp1 = document.getElementById("mdp1").value;
    let mdp2 = document.getElementById("mdp2").value;

    let input1 = document.getElementById('mdp1');
    let input2 = document.getElementById('mdp2');
    
    if (mdp1 == mdp2) {
        input1.style ='border: 1px solid green';
        input2.style = 'border:1px solid green';
        alert('YEAH !');

    } else if (mdp1 == '' || mdp2 == '') {
        alert('Veuillez compléter les deux champs svp');
        

    } else {
        input1.style = 'border:1px solid red;';
        input2.style ='border: 1px solid red';
        alert("Les deux mdp ne sont pas identiques");

    }
}