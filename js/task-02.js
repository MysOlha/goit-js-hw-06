const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newListEl = document.querySelector('#ingredients')

const ingredientsEl = element => {
const newList = document.createElement('li');
newList.classList.add('.item')
newList.textContent = element

return newList


}


const allIngredients = ingredients.map(ingredientsEl)
newListEl.append(...allIngredients)

console.log(newListEl)






