function createTwoDivs() {
  var rows = 16;
  var cols = 16;
  var container_width = 640;
  var container_height = 640;
  var div_width = container_width/cols;
  var div_height = container_height/rows;
  const container = document.getElementById("container");
  container.innerHTML = ''; // Clear any existing content

  for (var i=0; i<rows; i++){
    for (var j=0; j<cols; j++){
        const new_div = document.createElement("div");
        new_div.classList.add("flex-item");

        //Set position
        new_div.style.left = j*div_width + "px";
        new_div.style.top = i*div_height + "px";

        new_div.addEventListener('mouseover', function(){
          new_div.classList.add('hovered');
        })

        container.appendChild(new_div);
    }
  }
}
