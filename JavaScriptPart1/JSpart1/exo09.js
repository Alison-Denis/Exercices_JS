let ok = function () {

    var element1 = document.getElementById("img1");
    var element2 = document.getElementById("img2");
    var element3 = document.getElementById("img3");
    var element4 = document.getElementById("img4");
    var element5 = document.getElementById("img5");
    element1.addEventListener("mouseenter", function(target) {
    target.srcElement.src = "../images-part1/image2.jpg";
      });
      element2.addEventListener("mouseenter", function(target) {
      target.srcElement.src = "../images-part1/image2.jpg";
        });
        element3.addEventListener("mouseenter", function(target) {
        target.srcElement.src = "../images-part1/image2.jpg";
          });
          element4.addEventListener("mouseenter", function(target) {
          target.srcElement.src = "../images-part1/image2.jpg";
            });
            element5.addEventListener("mouseenter", function(target) {
            target.srcElement.src = "../images-part1/image2.jpg";
              });
  }
  ok();