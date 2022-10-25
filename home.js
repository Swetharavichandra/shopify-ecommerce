async function fetched() {
  let url = "./data.json";

  let res = await fetch(url);
  let data = await res.json();
  getDetails(data);
}
fetched();

function getDetails(object) {
  const main = document.getElementById("cards");
  object.map((value) => {
    const Div = document.createElement("div");
    Div.setAttribute("class", "card");
    const Img = document.createElement("img");
    Img.src = `${value.image}`;
    Img.setAttribute("class", "image2");

    const title = document.createElement("h5");
    title.innerText = `${value.title}`;
    title.setAttribute("id", "card-title");
    const description = document.createElement("p");
    description.innerText = `${value.description}`;
    description.setAttribute("class", "description");
    const price = document.createElement("p");
    price.innerText = `$ ${value.price}`;
    price.setAttribute("class", "price");
    const rating = document.createElement("p");
    rating.innerHTML = `<b>Rating:${value.rating.rate}</b>`;
    rating.setAttribute("class", "rating");
    const Btn = document.createElement("button");
    Btn.setAttribute("id", `${value.id}`);
    Btn.setAttribute("class", `cart`);
    Btn.innerText = "Add to Cart";
    Div.append(Img);
    Div.append(title);
    Div.append(description);
    Div.append(price);
    Div.append(rating);
    Div.append(Btn);
    main.append(Div);
    document.getElementById(`${value.id}`).addEventListener("click", () => {
      fullDetails(`${value.id}`, object);
      document.getElementById(`${value.id}`).disabled = true;
      document.getElementById(`${value.id}`).style.backgroundColor = "white";
      document.getElementById(`${value.id}`).style.color = "black";
      document.getElementById(`${value.id}`).style.cursor = "not-allowed";
    });
  });
}
let cart = {};
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}
function fullDetails(id, items) {
  items.map((value) => {
    if (value.id == id) {
      let cartItem = {
        title: value.title,
        price: value.price,
        image: value.image,
        description:value.description,
        rating:value.rating.rate,
      };
      cart[value.id] = cartItem;
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Item has been added to the cart!");
    }
  });
}
