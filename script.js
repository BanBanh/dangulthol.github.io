function navFunc() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}
function copyName() {
  navigator.clipboard.writeText("Dang Nguyen");
}
function copyAddress() {
  navigator.clipboard.writeText("6080 Pepperell St, Halifax");
}
function copyPhone() {
  navigator.clipboard.writeText("+17827748989");
}
function copyEmail() {
  navigator.clipboard.writeText("Huhuyjuhu1@gmail.com");
}
