const input = document.querySelector("input");
const click = document.querySelector("button");
const content = document.querySelector(".content");

click.addEventListener("click", () => {
  for (let i = 0; i < input.value; i++) {
    const result = document.createElement("p");
    // result.innerText = input.value
    // content.appendChild(result)
    const deneme = function () {
      if (i % 2 == 0) {
        result.classList = "red";
      } else {
        result.classList = "green";
      }

      result.innerText = i;
      content.appendChild(result);
    };

    deneme();
  }
});
