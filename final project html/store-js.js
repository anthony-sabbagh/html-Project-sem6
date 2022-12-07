const parent = document.getElementById("grid");
const fcount = document.getElementById("fcount");
const blackbg = document.getElementById("blackbg");
const cart = document.getElementById("cart");
const close = document.getElementById("close");
const over = document.getElementById("over");

parent.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  event.target.parentNode.parentNode.parentNode.children[1].children[2].textContent =
    parseInt(
      event.target.parentNode.parentNode.parentNode.children[1].children[2]
        .textContent
    ) + 1;
  fcount.textContent = parseInt(fcount.textContent) + 1;

  const id = event.target.parentNode.parentNode.parentNode.id;
  const name =
    event.target.parentNode.parentNode.parentNode.children[1].children[0]
      .textContent;
  const price =
    event.target.parentNode.parentNode.parentNode.children[1].children[1]
      .textContent;
  const count =
    event.target.parentNode.parentNode.parentNode.children[1].children[2]
      .textContent;

  if (over.querySelector("#elt_" + id) != null) {
    over.querySelector("#elt_" + id).querySelector(".elts_count").textContent =
      "Count: " + count;
  } else {
    over.innerHTML +=
      '<ul class="elts" id="elt_' +
      id +
      '"><li class="elts_name">' +
      name +
      '</li><li class="elts_price">' +
      price +
      '</li><li class="elts_count">Count: ' +
      count +
      '</li><img src="led new/delete.png" alt="" class="delete" /></ul>';
  }

  over
    .querySelector("#elt_" + id)
    .querySelector(".delete")
    .addEventListener("click", (event) => {
      fcount.textContent =
        parseInt(fcount.textContent) -
        parseInt(
          document.getElementById(id).children[1].children[2].textContent
        );
      document.getElementById(id).children[1].children[2].textContent = "0";
      console.log(event.target.parentNode);
      event.target.parentNode.remove();
    });
});

cart.addEventListener("click", (event) => {
  blackbg.style.display = "flex";
  document.body.style.overflowY = "hidden";
});

close.addEventListener("click", (event) => {
  blackbg.style.display = "none";
  document.body.style.overflowY = "scroll";
});
