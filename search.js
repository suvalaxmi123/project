
// const searchbox=document.querySelector('.searchbox')
// const search=document.querySelector('.search');
// const btn=document.querySelector('.btn');
// const clo=document.querySelector('.clo');
// btn.addEventListener('click',function(){
//     console.log(searchbox.classList.contains('active'));
//     if(searchbox.classList.contains('active')){
// search.value=""
//     }
//     else{
//         searchbox.classList.add('active');
//         search.focus();
//     }
// })
// clo.addEventListener('click',function(){
//     searchbox.classList.remove('active');
//     search.value="";
// })

// // Function to filter menu items based on search query
// function filterMenuItems(query) {
//     const menuBoxes = document.querySelectorAll('.menu-box');
//     menuBoxes.forEach(menuBox => {
//         const itemName = menuBox.querySelector('.content h3').textContent.toUpperCase();
//         if (itemName.includes(query.toUpperCase())) {
//             menuBox.style.display = 'block';
//         } else {
//             menuBox.style.display = 'none';
//         }
//     });
// }
const searchbox = document.querySelector('.searchbox');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const clo = document.querySelector('.clo');

btn.addEventListener('click', function() {
    if (searchbox.classList.contains('active')) {
        const searchQuery = search.value.trim();
        if (searchQuery !== "") {
            filterMenuItems(searchQuery.toLowerCase()); // Call filterMenuItems with the search query
        } else {
            alert("Please enter to search the flavour."); // Display an alert if the search query is empty
        }
    } else {
        searchbox.classList.add('active');
        search.focus();
    }
});

clo.addEventListener('click', function() {
    searchbox.classList.remove('active');
    search.value = "";
    showAllMenuItems(); // Function to display all menu items when search is cleared
});

// Function to filter menu items based on search query
function filterMenuItems(query) {
    const menuBoxes = document.querySelectorAll('.menu-box');
    let found = false;
    menuBoxes.forEach(menuBox => {
        const itemName = menuBox.querySelector('i').textContent.toLowerCase();
        if (itemName.includes(query)) {
            menuBox.style.display = 'block';
            found = true;
        } else {
            menuBox.style.display = 'none';
        }
    });
    if (!found) {
       
        alert("No flavors found. Please try again."); // Display an alert if no flavors match the search query
        showAllMenuItems();
    }
}

// Function to display all menu items
function showAllMenuItems() {
    const menuBoxes = document.querySelectorAll('.menu-box');
    menuBoxes.forEach(menuBox => {
        menuBox.style.display = 'block';
    });
}