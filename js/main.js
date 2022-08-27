import jsonFile from "../data.json" assert { type: "json" };

// SECTION
const sectionDataGraphic = document.querySelector(
  ".section-data-graphic section"
);

const heightColumn = 150;
let actualHeight = [];
const arrayFile = [];
let MAXIMUM = 0;

jsonFile.forEach((element, index) => {
  // MAXIMUM ?
  arrayFile.push(parseFloat(element.amount));
  // we create structure
  sectionDataGraphic.innerHTML += `
          <div>
            <div class="section-data-graphic__amount">$${element.amount}</div>
            <div class="section-data-graphic__bars"></div>
            <div class="section-data-graphic__day">${element.day}</div>
          </div>
        `;
});

// MAXIMUM is
MAXIMUM = Math.max(...arrayFile);

const maximumHeight = parseInt((heightColumn * MAXIMUM) / MAXIMUM);

// BAR
let bar = document.querySelectorAll(".section-data-graphic__bars");
bar = [...bar];

// AMOUNT
let amountSelected = document.querySelectorAll(".section-data-graphic__amount");

amountSelected = [...amountSelected];

bar.forEach((element, index) => {
  // FORMULA to calculate bar height
  actualHeight[index] = parseInt(
    (heightColumn * element.parentNode.children[0].innerHTML.slice(1)) / MAXIMUM
  );

  element.style.height = `${actualHeight[index]}px`;
  element.style.marginTop = "37px";

  // DIFFERENT COLOR TO SUPERIOR AMOUNT
  if (actualHeight[index] == maximumHeight) {
    element.style.backgroundColor = "hsl(186, 34%, 60%)";
  }

  // EVENT OVER BAR --> APPEAR AMOUNT
  element.addEventListener("mouseover", () => {
    amountSelected[index].style = "display: block";
  });

  // IF YOU LEAVE EVENT OVER BAR --> DISAPPEAR AMOUNT
  element.addEventListener("mouseout", () => {
    amountSelected[index].style = "display: none";
  });
});
