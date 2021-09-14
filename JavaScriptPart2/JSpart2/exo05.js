// onmouseover="this.src='../images-part2/image1_2.jpg';

// function changeImage() {

//     document.getElementById("img1").src="../images-part2/image1.jpg";
//     document.getElementById("img1").src="../images-part2/image1_2.jpg";

// }
// changeImage();

let img = function () {

    var tableElements = document.querySelectorAll(".img");

    tableElements.forEach(function(element) {
        element.addEventListener("mouseenter", function(target) {
        //   console.log(target.target.src)
        //   console.log(target.target.id)
          target.target.src = "../images-part2/image" + target.target.id + "_2.jpg";
        });
    });
    
  }
img();