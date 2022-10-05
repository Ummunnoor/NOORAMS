const categoryList = document.querySelector(".header-container ul");
let activeCategory = 1;

const categories = [
    {
        id: 1,
        name: 'Staff',
    },
    {
        id: 2,
        name: 'Flight',
    },
    {
        id: 3,
        name: 'Book',
    },
];
const getCategoryById = (id) => categories.find(c => c.id == id);
const getAllCategories = () => categories;
const renderCategories = () => {
    categoryList.innerHTML = "";
    getAllCategories().forEach(category => {
        var li = document.createElement('li');
        li.textContent = category.name;
        if (category.id == activeCategory) li.classList.add('click');
        li.dataset.itemId = category.id;
        categoryList.appendChild(li);
    });  

    listenOnCategoryItems();
}
const listenOnCategoryItems = () => {
    const allCateryItems = document.querySelectorAll(".header-container li");

    allCateryItems.forEach(item => {
        item.addEventListener('click', e => {
            switchActiveCategory(e.target.dataset.itemId);
           renderCategories();
        })
    })
}

const switchActiveCategory = (id) => {
    activeCategory = id;

    let currentActive = document.querySelector(' .click');
    currentActive?.classList.remove('click');

    let newActive = document.querySelector(`li[data-item-id="${activeCategory}"]`);
    newActive.classList.add('click')
}
renderCategories();

const addStaff = [
    {
         id: 1,
        firstName: 'Khaleelah',
         lastName: 'Uthman',
        phoneNumber: '09035459984',
        emailId: 'uthmnkhaleelah2@gmail.com',
        gender: 'female' 

    },
    
    
];
const edittStaff = [
    {
         id: 1,
        firstName: 'Khaleelah',
         lastName: 'Uthman',
        phoneNumber: '09035459984',
        emailId: 'uthmnkhaleelah2@gmail.com',
        gender: 'female' 

    },
    
    
];
const deleteStaff = [
    {
         id: 1,
        firstName: 'Khaleelah',
         lastName: 'Uthman',
        phoneNumber: '09035459984',
        emailId: 'uthmnkhaleelah2@gmail.com',
        gender: 'female' 

    },
    
    
]
const addFlight = [
    {

    }
]