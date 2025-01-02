const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    switch ("body") {
      case "body":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  });
});
