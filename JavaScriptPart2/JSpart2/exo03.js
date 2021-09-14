let ok = function () {
    const box = document.getElementById("display");
    console.log(box);

    box.addEventListener('keyup', logKey);

function logKey(e) { //merci code ASCII
        let target = e.code;

        if (e.which <= 90 && e.which >= 48 || e.which >= 96 && e.which <= 105){
                alert("vous avez appuyez sur la touche : " + e.key);

        } else if (target == "Space") {
                alert("vous avez appuyez sur la touche Espace");
      }
    }
}

ok();