//Decleration
var sidebar = document.querySelectorAll('section');

function sectionInViewport(element) {
    "use strict";
    var rect = element.getBoundingClientRect();
    return (
        rect.top < 0
    );
}

function sectionInViewportBack(element) {
    "use strict";
    var rect = element.getBoundingClientRect();
    return (
        rect.top > 0
    );
}

document.addEventListener('scroll', function () {

    "use strict";
    if (sectionInViewport(sidebar[1])) {
        sidebar[1].classList.add('fixed');
    }

    if (sectionInViewportBack(sidebar[0])) {
        if (sidebar[1].classList.contains('fixed')) {
            sidebar[1].classList.remove('fixed');
        }
    }
});


