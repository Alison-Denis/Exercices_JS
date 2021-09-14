let exo6 = function () {

    var tableElements = document.querySelectorAll(".img");

    tableElements.forEach(function(element) {

        element.addEventListener("mouseenter", function(target) {
          target.target.src = "../images-part2/image" + target.target.id + "_2.jpg";
        });

        element.addEventListener("mouseleave", function(target) {
          console.log("alison , les chemin !!!!")
          target.target.src = "../images-part2/image" + target.target.id + ".jpg";
        });
        
    });
  }
exo6();