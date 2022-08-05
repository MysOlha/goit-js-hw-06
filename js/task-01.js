const categoriesEl = document.querySelectorAll('.item').length
console.log('Number of categories:', categoriesEl)



const ul = Array.from(document.querySelector('#categories').children);

for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
   
   
    console.log("Category:", category)
    console.log("Elements:", quantityElem) 

};






