var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var array = document.getElementsByClassName('myImg');
for (var i = 0; i < array.length; i++) {
  var img = array[i];
  img.addEventListener("click",function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
  span.addEventListener("click", function(){
    modal.style.display = "none";
  });
}
