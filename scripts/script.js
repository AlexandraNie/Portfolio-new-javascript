'use strict';


$(window).on("load", function () {
    /*setTimeout(function () {*/
     let containerLoader = $(".container_loader");
     containerLoader.children(".loading").remove();
    /*}, 2000);*/
})





document.querySelector ('.menu-back-arrow').onclick = function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
}





particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 4000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 3,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "../project_images/star.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 55,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 5,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode":  "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});





document.getElementById('smallMenu').onclick = function () {
    document.getElementById('menu').classList.add('open');
    document.getElementById('smallMenu').classList.add('closeSmallMenu');

}


document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
        document.getElementById('smallMenu').classList.remove('closeSmallMenu');
    }
})



document.querySelector ('.menu-back-arrow').onclick = function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
}




//JQuery - Show more//

/*let not_visible = $('#not_visible');
let not_visible_two = $('#not_visible_two');

not_visible.hide();
not_visible_two.hide();




$('#mockups_more').on("click", function () {
if(not_visible.is(":hidden")) {
    not_visible.show();
    $('#more_projects').text("Less projects");
    $('#more_projects_en').text("Less projects");
    $('#more_projects_ua').text("Меньше проектів");
    $('#arrow_down').addClass('rotation_change');
    $('#mockups_even_more').show();
}else {
    $('#not_visible').hide();
    $('#more_projects').text("More project");
    $('#more_projects_en').text("More project");
    $('#more_projects_ua').text("Більше проектів");
    $('#arrow_down').removeClass('rotation_change');
    $('#mockups_even_more').hide();
    not_visible_two.hide();
}
})



$('#mockups_even_more').on("click", function () {
    if(not_visible_two.is(":hidden")) {
        not_visible_two.show();
        $('#more_projects').text("Less projects");
        $('#more_projects_en').text("Less projects");
        $('#more_projects_ua').text("Меньше проектів");
        $('#arrow_down').addClass('rotation_change');
        $('#mockups_even_more').hide();
    }else {
        $('#more_projects').text( "More project");
        $('#more_projects_en').text( "More project");
        $('#more_projects_ua').text("Більше проектів");
        $('#arrow_down').removeClass('rotation_change');
        not_visible_two.hide();
        $('#mockups_even_more').show();
        not_visible.hide();
    }
})*/







//JavaScript -Show more//

let mockups_more = document.getElementById('mockups_more');
let mockups_even_more = document.getElementById('mockups_even_more');
let not_visible = document.getElementById('not_visible');
let not_visible_two = document.getElementById('not_visible_two');
let more_projects = document.getElementById('more_projects');
let arrow_down = document.getElementById('arrow_down');
let more_projects_ua = document.getElementById('more_projects_ua');
let more_projects_en =  document.getElementById('more_projects_en');
let book = document.getElementById('book');

not_visible.style.display = 'none';
not_visible_two.style.display = 'none';

mockups_more.onclick = function () {
    if (not_visible.style.display === "none") {
        not_visible.style.display = "block";
        more_projects.innerHTML = "Less projects";
        more_projects_en.innerHTML = "Less projects";
        more_projects_ua.innerHTML = "Меньше проектів";
        arrow_down.classList.add('rotation_change');
        mockups_even_more.style.display = "block";
    }else {
        more_projects.innerHTML = "More project";
        more_projects_en.innerHTML = "More project";
        more_projects_ua.innerHTML = "Більше проектів";
        arrow_down.classList.remove('rotation_change');
        not_visible.style.display = 'none';
        mockups_even_more.style.display = "none";
        not_visible_two.style.display = 'none';


    }
}

mockups_even_more.onclick = function () {
    if(not_visible_two.style.display === "none") {
        not_visible_two.style.display = "block";
        more_projects.innerHTML = "Less projects";
        more_projects_en.innerHTML = "Less projects";
        more_projects_ua.innerHTML = "Меньше проектів";
        arrow_down.classList.add('rotation_change');
        mockups_even_more.style.display = "none";
    }
    else {
        more_projects.innerHTML = "More project";
        more_projects_en.innerHTML = "More project";
        more_projects_ua.innerHTML = "Більше проектів";
        arrow_down.classList.remove('rotation_change');
        not_visible_two.style.display = 'none';
        mockups_even_more.style.display = "block";
        not_visible_two.style.display = "none";
    }
}









let popupVisible = document.getElementById('popupVisible');
let buttonForm = document.getElementById('buttonForm');
let bodyShadow = document.getElementById('bodyShadow');
let closeFormPopup = document.getElementById('closeFormPopup');
let prices = document.getElementById('prices');



buttonForm.onclick = (e) => {
    e.stopPropagation();
    popupVisible.style.display = 'none';
    prices.style.display = 'block';
    bodyShadow.style.display = 'block';
    closeFormPopup.style.display = 'block';
}



document.body.onclick = closeTooltips;
closeFormPopup.onclick = closeTooltips;
function closeTooltips() {
    bodyShadow.style.display = 'none';
    bodyShadow.style.background = "rgba(0, 0, 0, 0.9)";
    popupVisible.style.display = 'block';
    closeFormPopup.style.display = 'none';
    prices.style.display = 'none';



    $('#full_name').val("");
    $('#phone').val("");
    $('#mail').val("");
    $('#fullName').val("");
    $('#telephone').val("");
}







let deButton = document.getElementById('de_button');
let enButton = document.getElementById('en_button');
let uaButton = document.getElementById('ua_button');


deButton.onclick = (e) => {
    e.stopPropagation();
    let deContents = document.querySelectorAll('.de_content');
    let enContents = document.querySelectorAll('.en_content');
    let uaContents = document.querySelectorAll('.ua_content');
    for (let deContent of deContents) {
        deContent.style.display = 'block';
    }
    for (let enContent of enContents) {
        enContent.style.display = 'none';
    }
    for (let uaContent of uaContents) {
        uaContent.style.display = 'none';
    }
}

enButton.onclick = (e) => {
    e.stopPropagation();
    let deContents = document.querySelectorAll('.de_content');
    let enContents = document.querySelectorAll('.en_content');
    let uaContents = document.querySelectorAll('.ua_content');
    for (let deContent of deContents) {
        deContent.style.display = 'none';
    }
    for (let enContent of enContents) {
        enContent.style.display = 'block';
    }
    for (let uaContent of uaContents) {
        uaContent.style.display = 'none';
    }
}

uaButton.onclick = (e) => {

    e.stopPropagation();
    let deContents = document.querySelectorAll('.de_content');
    let enContents = document.querySelectorAll('.en_content');
    let uaContents = document.querySelectorAll('.ua_content');
    for (let deContent of deContents) {
        deContent.style.display = 'none';
    }
    for (let enContent of enContents) {
        enContent.style.display = 'none';
    }
    for (let uaContent of uaContents) {
        uaContent.style.display = 'block';


    }
}



























