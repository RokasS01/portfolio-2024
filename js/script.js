let toggleTheme = document.getElementById("toggle-theme");
let themeIcon = document.getElementById("theme-icon");

toggleTheme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.remove("bx-moon");
        themeIcon.classList.add("bx-sun");
    } else {
        themeIcon.classList.remove("bx-sun");
        themeIcon.classList.add("bx-moon");
    }
}

function choplifter_hide() {
    let choplifter_bg = document.getElementById("choplifter-background");
    let choplifter = document.getElementById("choplifter");

    choplifter_bg.style.top = '100%';
    choplifter.style.top = '100%';
}   

function choplifter_show() {
    let choplifter_bg = document.getElementById("choplifter-background");
    let choplifter = document.getElementById("choplifter");

    choplifter_bg.style.top = '0';
    choplifter.style.top = '38px';
}  

document.getElementById('like').addEventListener('click', function() {
    var likeDiv = document.getElementById('like');
    if (likeDiv.classList.contains('yes')) {
      likeDiv.classList.remove('yes');
    } else {
      likeDiv.classList.add('yes');
    }
});

function changeImage(src, clickedElement) {
    var mainImage = document.getElementById('mainImage');
    mainImage.classList.add('image-transition');

    mainImage.style.transform = 'translateX(-100%)';
    setTimeout(function() {
        mainImage.src = src;
        mainImage.style.transform = 'translateX(0)';
        setTimeout(function() {
            mainImage.classList.remove('image-transition');
        }, 300);
    }, 300);

    // Remove 'active' class from currently active image
    var currentActive = document.querySelector('.images .image.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }

    // Add 'active' class to clicked image's parent (.image)
    clickedElement.classList.add('active');
}





