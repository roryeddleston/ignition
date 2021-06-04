$(document).ready(function() {
    $('.slider').flexslider({
        animation: 'slide',
        animationSpeed: 900,
        directionNav: false
    });
});

// article_hidden text
// articleExpand button

const expandBtn = document.querySelector('.articleExpand')
const extraText = document.querySelector('.article_hidden')

expandBtn.addEventListener('click', function() {
        if (extraText.style.display === "none") {
            extraText.style.display = "inline-block";
            expandBtn.innerHTML = "READ LESS";

        } else {
            extraText.style.display = 'none';
            expandBtn.innerHTML = "READ MORE"
        }
})


