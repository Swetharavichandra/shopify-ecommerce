const cartItems = JSON.parse(localStorage.getItem("cart"));
// console.log(cartItems);
if (cartItems) {
  document.getElementById("buyNow").style.display = "block";
}
const cartDetails = document.getElementById("cartDetails");
function getItem(items) {
  for (const key in items) {
    // console.log(cartItems[key]);
    const Div = document.createElement("div");
    Div.setAttribute("class", "card");
    Div.setAttribute("id", `${key}`);

    const Img = document.createElement("img");
    Img.src = `${cartItems[key].image}`;
    Img.setAttribute("class", "image2");

    const title = document.createElement("h5");
    title.innerText = `${cartItems[key].title}`;
    title.setAttribute("id", "cardtitle");

    const price = document.createElement("p");
    price.innerText = `$ ${cartItems[key].price}`;
    price.setAttribute("class", "price");


    const description = document.createElement("p");
    description.innerText = `${cartItems[key].description}`;
    description.setAttribute("class", "description");

    const rating = document.createElement("p");
    rating.innerHTML = `<b>Rating:${cartItems[key].rating}</b>`;
    rating.setAttribute("class", "rating");


    const Btn = document.createElement("button");
    Btn.innerText = "Remove";
    Btn.setAttribute("id", `${key}`);
    Btn.setAttribute("class", `cart`);
    Btn.style.backgroundColor = "plum";

    Div.append(Img);
    Div.append(title);
    Div.append(price);
    Div.append(description);
    Div.append(rating);
    Div.append(Btn);

    cartDetails.append(Div);
    document.getElementById(`${key}`).addEventListener("click", () => {
      deleteItem(`${key}`);
    });
  }
}
getItem(cartItems);
function deleteItem(key) {
  confirm("Would you like to delete the item!");
  const myDiv = document.getElementById(key);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  delete cartItems[key];
  cartDetails.removeChild(myDiv);
}



document.getElementById("buyNow").addEventListener("click", () => {
  localStorage.clear();

  cartDetails.innerHTML = "";
  document.getElementById("buyNow").style.display = "none";
  alert("The purchase has been done!");
});
