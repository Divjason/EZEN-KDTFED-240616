// import products from "./products.js";
// console.log(products.data[0].img);

const productInfo = "./products.json";
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };

    // Removing Items
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // Making Items
    const createItem = (product) => {
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      h3.className = "name";
      h3.innerText = product.name;

      span.className = "price";
      span.innerText = price;

      attr.value = product.img;
      img.setAttributeNode(attr);

      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);
    };

    // Importing Items
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    // Newest
    const newlisting = document.querySelector(".newlisting");

    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newlisting.addEventListener("click", sortNew);

    // Ascending
    const asceButton = document.querySelector(".ascending");

    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    asceButton.addEventListener("click", sortAsce);

    // Descending
    const descButton = document.querySelector(".decending");

    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    descButton.addEventListener("click", sortDesc);

    // Search
    const searchBar = document.querySelector(".searchBar");

    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase();
      if (keyword === "") {
        removeItems();
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });

        removeItems();

        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    // Select Event
    const select = document.querySelector("select");

    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;

      const filtered = products.data.filter((product) => {
        return product.category === value;
      });

      removeItems();
      filtered.forEach((product) => {
        createItem(product);
      });
    };

    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.log(error);
  });
