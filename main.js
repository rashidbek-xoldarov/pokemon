const wrapper = document.querySelector(".wrapper");
const elInput = document.querySelector(".form-input");

const renderUi = function (arr) {
  wrapper.innerHTML = "";

  for (let item of arr) {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "card");
    const newImg = document.createElement("img");
    newImg.src = item.img;
    newImg.width = 200;
    newImg.height = 200;
    const title = document.createElement("h3");
    title.textContent = item.name;
    title.setAttribute("class", "title");
    const order = document.createElement("span");
    order.textContent = item.num;
    order.setAttribute("class", "order");
    const candy = document.createElement("h3");
    candy.textContent = item.candy;
    candy.setAttribute("class", "candy");
    mainDiv.appendChild(order);
    mainDiv.appendChild(title);
    mainDiv.appendChild(newImg);
    mainDiv.appendChild(candy);

    wrapper.appendChild(mainDiv);
  }
  console.log("work");
};

renderUi(pokemons);

elInput.addEventListener("keyup", function (evt) {
  const valInput = evt.target.value;
  const newArr = pokemons.filter((item) => {
    return item.name.toLocaleLowerCase().includes(valInput);
  });
  console.log(newArr);
  renderUi(newArr);
});

// Ex 1
// const unli = ["a", "e", "i", "u", "o"];
// const val = prompt("So'zni kiriting");

// let result = 0;

// for (let letter of val) {
//   if (unli.includes(letter)) {
//     result++;
//   }
// }

// console.log(result);

// Ex 2

// const arr = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4, 45, 4];
// arr.forEach((item, index) => {
//   if (item === 4) {
//     arr.splice(index, 1);
//   }
// });

// console.log(arr);

// Ex 3
// const arr = [3, 5, 23, 12, 65, 87, 4, 6, 2, 4];

// if (arr[0] % 2 == 0) {
//   arr[0] = 2;
// } else {
//   arr[0] = 11;
// }

// console.log(arr);

// Ex 4
// const arr = [3, 5, 23, 12, 65, 87, 4, 6, 2, 4];

// let a = arr[0] + arr[arr.length - 1];
// console.log(a);
