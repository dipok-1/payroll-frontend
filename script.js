// Toggle the navigation menu for mobile view
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

// Toggle the "active" class to show/hide the menu
navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


const startedbtn = document.getElementById("cta-btn");
startedbtn.addEventListener("click",()=>{
    const link = "add-employee.html";
    window.location.href = link;
})