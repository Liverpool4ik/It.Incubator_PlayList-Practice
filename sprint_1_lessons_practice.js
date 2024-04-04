// // Создание элемента заголовка (h1) и добавление текста к этому элементу
// const titleElement = document.createElement("h1");
// titleElement.append("Hello from it-incubator");

// // Добавление элемента заголовка в тело документа
// document.body.append(titleElement);

// // Создание выпадающего списка (select)
// const techSelectElement = document.createElement("select");

// // Создание первого варианта (option) для выпадающего списка
// const techSelectOption0Element = document.createElement("option");
// techSelectOption0Element.value = 1;
// techSelectOption0Element.append("JS"); // Добавление текста 'JS' к первому варианту
// techSelectElement.append(techSelectOption0Element); // Добавление первого варианта в выпадающий список

// // Создание второго варианта (option) для выпадающего списка
// const techSelectOption1Element = document.createElement("option");
// techSelectOption1Element.value = 2;
// techSelectOption1Element.append("HTML"); // Добавление текста 'HTML' ко второму варианту
// techSelectElement.append(techSelectOption1Element); // Добавление второго варианта в выпадающий список

// // Добавление второго варианта в тело документа (вместо этого, вероятно, предполагалось добавить сам выпадающий список)
// document.body.append(techSelectElement);

// //============================================== OBJECTS =========================//
// //

// // data
// const info = {
// 	title: "it-incubator",
// 	graduatesCount: 2000,
// 	areYouChampion: true,
// };

// // render
// let pageTitleElement = document.createElement("h1");
// pageTitleElement.innerText = info.title;
// document.body.append(pageTitleElement);

// let graduatesCountElement = document.createElement("input");
// graduatesCountElement.value = info.graduatesCount;
// document.body.append(graduatesCountElement);

// let areYouChampionElement = document.createElement("input");
// areYouChampionElement.type = "checkbox";
// areYouChampionElement.checked = info.areYouChampion;
// document.body.append(areYouChampionElement);

//////////////////////========================================////////////////////////////////////
// data
const information = {
	title: "it-incubator",
	graduatesCount: 2000,
	areYouChampion: true,
	technologies: [
		{ title: "MY JS Course", year: 2012, costDollars: 200 },
		{ title: "My Back", year: 2015, costDollars: 400 },
		{ title: "My DevOps", year: 2020, costDollars: 500 },
	],
};
//render
const selectBlockElement = document.createElement("select");

let option0Element = document.createElement("option");
option0Element.append(information.technologies[0].title);
// selectBlockElement.append(option0Element);

let option1Element = document.createElement("option");
option1Element.append(information.technologies[1].costDollars);
// selectBlockElement.append(option1Element);

let option2Element = document.createElement("option");
option2Element.append(information.technologies[2].year);
// selectBlockElement.append(option2Element);

selectBlockElement.append(option0Element, option1Element, option2Element);

document.body.append(selectBlockElement);
