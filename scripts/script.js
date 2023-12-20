// Load DOM Content
document.addEventListener('DOMContentLoaded', function () {
    //Set varible for querying all list item tags to add click function
    let toggleTags = document.querySelectorAll('.toggleTag');
    
    //Iterate through toggleTags array to add the click function
    toggleTags.forEach(function (tag) {
        tag.addEventListener('click', function () {
            //Set variable for the next sibling so that the toggle function is only for
            //that sibling div
            let divList = tag.nextElementSibling;
            console.log(divList);
            divList.classList.toggle('collapsed');
            divList.classList.toggle('openDiv');
        });
    });

    
    //Add toggle function for navigation bar ONLY for smaller screen widths
    function checkScreenWidth() {
        //Set variables
        let toggleNav = document.querySelector('.navMenu');
        let menu = document.querySelector('.navMenu ul');
        let navBar = document.querySelector('nav');

        // Check if the screen width is less than 700 pixels
        if (window.innerWidth < 700) {
            //Add toggle function
            toggleNav.addEventListener('click', function (){
                console.log("clicked nav menu");
                console.log(menu);
                menu.classList.toggle('navClosed');
                navBar.classList.toggle('open');
            });
        } else {
            // Remove toggle function if >= 700px
            menu.classList.remove('navClosed');
            navBar.classList.remove('open');
            toggleNav.removeEventListener('click', function (){
                console.log("clicked nav menu");
                console.log(menu);
                menu.classList.toggle('navClosed');
                navBar.classList.toggle('open');
            });
            //Set new media query class
            toggleNav.classList.add('large');
        }
    }

    // Initial check on page load
    checkScreenWidth();

    // Listen for window resize events
    window.addEventListener('resize', checkScreenWidth);
});
