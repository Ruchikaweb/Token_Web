// const element = document.getElementById("animationDemo");
// const animate = new mdb.Animate(element, {
//   animation: "tada",
//   animationStart: "onLoad",
//   animationDelay: "0",
//   animationDuration: "500",
//   animationReverse: "false",
//   animationRepeat: "false",
//   animationInterval: "0",
// });
// animate.init();
const element = document.getElementById("animationDemo");
const animate = new mdb.Animate(element, {
  animation: "slide-up",
  animationStart: "onHover",
  animationDelay: "0",
  animationDuration: "500",
  animationReverse: "false",
  animationRepeat: "false",
  animationInterval: "0",
});
animate.init();