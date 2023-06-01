import data from "../../assets/pets.json" assert { type: "json" };

const idData = data;
idData.forEach((item, index) => {
  item["id"] = index;
});

// create mobile menu
function createMobileMenu() {
  const btnHamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const addOverlay = document.querySelector(".overlay");
  const body = document.body;

  btnHamburger.addEventListener("click", () => {
    btnHamburger.classList.toggle("hamburger-click");
    addOverlay.classList.toggle("overlay_active");
    mobileMenu.classList.toggle("mobile-menu_active");
    body.classList.toggle("scroll-block");
  });

  mobileMenu.querySelectorAll(".menu-item-link").forEach((link) =>
    link.addEventListener("click", () => {
      btnHamburger.classList.remove("hamburger-click");
      addOverlay.classList.remove("overlay_active");
      mobileMenu.classList.remove("mobile-menu_active");
      body.classList.remove("scroll-block");
    })
  );

  document.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("overlay_active") ||
      event.target.classList.contains("mobile-menu_active")
    ) {
      btnHamburger.classList.remove("hamburger-click");
      addOverlay.classList.remove("overlay_active");
      mobileMenu.classList.remove("mobile-menu_active");
      body.classList.remove("scroll-block");
      deleteDomElements(modalW);
    }
  });

  const anchor = document.querySelectorAll('a[href="#"]');
  console.log(anchor);
  anchor.forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const idLink = link.getAttribute("href").substring(1);
      console.log(idLink);
      document.getElementById(idLink).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    })
  );
}
createMobileMenu();

// create item card
const Data = data;
let NewData = [];
for (let i = 0; i < 6; i++) {
  NewData = NewData.concat(Data);
}

NewData.forEach((item, index) => {
  item["id"] = index;
});

// function mixarr(arr){
//   return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
// }
// let mixData= mixarr(NewData);

function createSliderElement(data) {
  function createImg(data) {
    const imageAttributes = [
      {
        prop: "src",
        value: `${data.img}`,
      },
      {
        prop: "alt",
        value: `${data.name}`,
      },
    ];

    const imageItem = createElement("img", ["img-card"], imageAttributes);

    return imageItem;
  }

  function createSliderTitle(data) {
    const item = createElement("h3", ["title-card"], null, `${data.name}`);

    return item;
  }
  //Button!!!
  function createSliderBtn(data) {
    const item = createElement(
      "button",
      ["btn", "btn-card-conteiner"],
      null,
      "Learn more"
    );
    item.addEventListener("click", (event) => {
      createModalWindow(data);
    });

    return item;
  }

  function createSliderItem(data) {
    const item = createElement(
      "div",
      ["card-conteiner", "swiper-slide"],
      [{ prop: "id", value: `${data.id}` }]
    );
    return item;
  }

  const itemSlider = createSliderItem(data);
  const imgSlider = createImg(data);
  const title = createSliderTitle(data);
  const btn = createSliderBtn(data);
  itemSlider.append(imgSlider, title, btn);
  itemSlider.addEventListener("click", (event) => {
    createModalWindow(data);
  });
  return itemSlider;
}

// create slider item
const swiperSlider = document.querySelector(".swiper-wrapper");

function createSliderListItems(data, parent) {
  data.forEach((item) => {
    const ItemCard = createSliderElement(item);
    parent.append(ItemCard);
  });
  return parent;
}

createSliderListItems(idData, swiperSlider);

// const swiper = new Swiper(".swiper", {

//   speed: 400,
//   direction: "horizontal",
//   loop: true,

//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       slidesPerGroup: 1,
//       spaceBetween: 30,
//     },

//     680: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//       spaceBetween: 40,
//     },

//     1280: {
//       slidesPerGroup: 3,
//       slidesPerView: 3,
//       spaceBetween: 90,
//     },
//   },

//   navigation: {
//     nextEl: ".button-next",
//     prevEl: ".button-prev",
//   },
// });

// create modal window
function createModalWindow(data) {
  const body = document.body;

  const createImgModal = (data) => {
    const imageAttributes = [
      {
        prop: "src",
        value: `${data.img}`,
      },
      {
        prop: "alt",
        value: `${data.name}`,
      },
    ];

    const imageItem = createElement("img", ["modal-img"], imageAttributes);
    return imageItem;
  };

  function createTitle(data) {
    const title = createElement(
      "h3",
      ["modal-window-title"],
      null,
      `${data.name}`
    );
    return title;
  }

  function typeBread(data) {
    const itemTeg = createElement("span", null, null, `${data.breed}`);
    return itemTeg;
  }

  function typePets(data) {
    const bread = typeBread(data);
    const itemTeg = createElement("p", ["type-pets"], null, `${data.type} `);

    itemTeg.append(bread);
    return itemTeg;
  }

  function description(data) {
    const itemTeg = createElement(
      "p",
      ["description", "description-content"],
      null,
      `${data.description}`
    );
    return itemTeg;
  }

  function spanListAge(data) {
    const itemTeg = createElement("span", ["description"], null, `${data.age}`);
    return itemTeg;
  }
  function itemListAge(data) {
    const span = spanListAge(data);
    const itemTeg = createElement("li", ["description-title"], null, "Age: ");
    itemTeg.append(span);
    return itemTeg;
  }

  function spanListInoculations(data) {
    const span = createElement(
      "span",
      ["description"],
      null,
      `${data.inoculations}`
    );
    return span;
  }

  function itemListInoculations(data) {
    const itemList = createElement(
      "li",
      ["description-title"],
      null,
      "Inoculations: "
    );
    const span = spanListInoculations(data);
    itemList.append(span);
    return itemList;
  }

  function spanListDiseases() {
    const span = createElement(
      "span",
      ["description"],
      null,
      `${data.diseases}`
    );
    return span;
  }

  function itemListDiseases(data) {
    const itemList = createElement(
      "li",
      ["description-title"],
      null,
      "Diseases: "
    );
    const span = spanListDiseases(data);
    itemList.append(span);
    return itemList;
  }

  function spanListParasites(data) {
    const span = createElement(
      "span",
      ["description"],
      null,
      `${data.parasites}`
    );
    return span;
  }

  function itemListParasites(data) {
    const itemList = createElement(
      "li",
      ["description-title"],
      null,
      "Parasites: "
    );
    const span = spanListParasites(data);
    itemList.append(span);
    return itemList;
  }

  function createBtn() {
    const btn = createElement(
      "button",
      ["btn", "button-slider", "btn-modal"],
      null,
      "x",
      null,
      null
    );
    btn.addEventListener("click", deleteModal);
    return btn;
  }

  function createList() {
    const list = createElement("ul", ["description"]);
    return list;
  }

  function listDescription(data) {
    const listUL = createList();
    const ListAge = itemListAge(data);
    const ListInoculations = itemListInoculations(data);
    const ListDiseases = itemListDiseases(data);
    const ListParasites = itemListParasites(data);
    listUL.append(ListAge, ListInoculations, ListDiseases, ListParasites);

    return listUL;
  }

  function createInnerDiv(data) {
    const innerDiv = createElement("div", ["modal-window-content"]);
    const title = createTitle(data);
    const typePet = typePets(data);
    const descriptions = description(data);
    const lisDescription = listDescription(data);
    innerDiv.append(title, typePet, descriptions, lisDescription);

    return innerDiv;
  }
  function createWrapperModal() {
    const wrapperModal = createElement("div", ["wrapper-modal"]);
    wrapperModal.addEventListener("click", deleteModal);
    return wrapperModal;
  }

  function createModaldiv(data) {
    const modalWindows = createElement("div", ["modal-window"]);
    const ImgModal = createImgModal(data);
    const innerDiv = createInnerDiv(data);
    const btn = createBtn();
    modalWindows.append(ImgModal, innerDiv, btn);

    return modalWindows;
  }

  function modalWindow(data) {
    const wrapper = createWrapperModal();
    const modalWindows = createModaldiv(data);
    wrapper.append(modalWindows);
    body.classList.toggle("scroll-block");

    return wrapper;
  }

  document.body.append(modalWindow(data));

  function deleteModal(event) {
    let classes = event.target.classList;
    if (classes.contains("wrapper-modal") || classes.contains("btn-modal")) {
      document.querySelector(".wrapper-modal").remove();
      body.classList.toggle("scroll-block");
    }
  }
}

// create DOM element
function createElement(
  tag,
  classList,
  attributes,
  textContent,
  children,
  childrenAction,
  handlers
) {
  const element = document.createElement(tag);
  if (classList?.length) {
    element.classList.add(...classList);
  }

  if (attributes?.length) {
    attributes.forEach(({ prop, value }) => {
      element.setAttribute(prop, value);
    });
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (children) {
    element[childrenAction](...children);
  }

  if (handlers?.length) {
    handlers.forEach(({ event, handler }) => {
      element.setAttribute(event, handler);
    });
  }

  return element;
}
