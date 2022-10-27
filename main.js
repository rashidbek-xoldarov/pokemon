const wrapper = document.querySelector(".wrapper");
const elInput = document.querySelector(".form-input");
const elForm = document.querySelector(".site-form");
const elSearch = document.querySelector(".js-search");
const selectWeekness = document.querySelector(".js-weekness");
const selectType = document.querySelector(".js-type");
const selectFilter = document.querySelector(".js-filter");

const weeknessArr = [];
const typesArr = [];
const renderUi = function (arr, word = "") {
  wrapper.innerHTML = "";
  for (let item of arr) {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "card");
    const newImg = document.createElement("img");
    newImg.src = item.img;
    newImg.width = 200;
    newImg.height = 200;
    const title = document.createElement("h3");
    if (word && word.source !== "(?:)") {
      title.innerHTML = item.name.replace(word, `<mark>${word.source}</mark>`);
    } else {
      title.innerHTML = item.name;
    }
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
};

renderUi(pokemons);
addWeeknessList();
addTypeList();

function addWeeknessList() {
  pokemons.forEach((item) => {
    item.weaknesses.forEach((el) => {
      if (!weeknessArr.includes(el)) {
        weeknessArr.push(el);
      }
    });
  });

  weeknessArr.sort().forEach((item) => {
    const newOpt = document.createElement("option");
    newOpt.textContent = item;
    selectWeekness.appendChild(newOpt);
  });
}

function addTypeList() {
  pokemons.forEach((item) => {
    item.type.forEach((element) => {
      if (!typesArr.includes(element)) {
        typesArr.push(element);
      }
    });
  });
  typesArr.sort().forEach((item) => {
    const newOpt = document.createElement("option");
    newOpt.textContent = item;
    selectType.appendChild(newOpt);
  });
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const searchValue = elSearch.value;
  const regex = new RegExp(searchValue, "gi");
  const filteredArr = pokemons.filter(function (item) {
    return (
      item.name.match(searchValue) &&
      (item.weaknesses.includes(selectWeekness.value) ||
        selectWeekness.value == "all") &&
      (item.type.includes(selectType.value) || selectType.value == "all")
    );
  });

  const filterVal = selectFilter.value;

  if (filteredArr.length > 0) {
    if (filterVal === "a-z") {
      AZ(filteredArr, regex);
    } else if (filterVal === "z-a") {
      ZA(filteredArr, regex);
    } else if (filterVal === "toHigherHeight") {
      toHigherHeight(filteredArr, regex);
    } else if (filterVal === "toLowerHeight") {
      toLowerHeight(filteredArr, regex);
    } else if (filterVal === "toHigherWeight") {
      toHigherWeight(filteredArr, regex);
    } else if (filterVal === "toLowerWeight") {
      toLowerWeight(filteredArr, regex);
    }
  } else {
    alert("There is no this pokemon");
  }
});

const AZ = function (arr, regex) {
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return0;
    }
  });

  renderUi(arr, regex);
};

const ZA = function (arr, regex) {
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    } else {
      return0;
    }
  });

  renderUi(arr, regex);
};

const toHigherHeight = function (arr, regex) {
  arr.sort((a, b) => {
    if (a.height > b.height) {
      return -1;
    } else if (a.height < b.height) {
      return 1;
    } else {
      return 0;
    }
  });

  renderUi(arr, regex);
};

const toLowerHeight = function (arr, regex) {
  arr.sort((a, b) => {
    if (a.height > b.height) {
      return 1;
    } else if (a.height < b.height) {
      return -1;
    } else {
      return 0;
    }
  });

  renderUi(arr, regex);
};
const toHigherWeight = function (arr, regex) {
  arr.sort((a, b) => {
    if (a.weight > b.weight) {
      return -1;
    } else if (a.weight < b.weight) {
      return 1;
    } else {
      return 0;
    }
  });

  renderUi(arr, regex);
};

const toLowerWeight = function (arr, regex) {
  arr.sort((a, b) => {
    if (a.weight > b.weight) {
      return 1;
    } else if (a.weight < b.weight) {
      return -1;
    } else {
      return 0;
    }
  });

  renderUi(arr, regex);
};
