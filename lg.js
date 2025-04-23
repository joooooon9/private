//intersection Observer api 사용으로 
// video 자동재생 자동정지
// observe는 감지 unobserve는 감지해제
const targetvideo = document.querySelectorAll(".video1")
const videoplayer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.25 });

targetvideo.forEach(video => {
    videoplayer.observe(video);
});

// 드롭다운 메뉴
document.addEventListener("DOMContentLoaded", function () {
    const menuItem = document.querySelector(".nav-menu");
    const dropdown = document.querySelector(".dropdown");
    const subcategories = document.querySelectorAll(".sub-menu div");
    const submenus = document.querySelectorAll(".sub-menu-items");

    menuItem.addEventListener("mouseenter", function () {
        dropdown.style.display = "flex";
    });

    menuItem.addEventListener("mouseleave", function () {
        dropdown.style.display = "none";
    });

    if (menuItem.getAttribute("data-title") == '0') {
    
        document.getElementById("1").style.display = "flex";
        
        subcategories.forEach(category => {
            category.addEventListener("mouseover", function () {
                const target = this.getAttribute("data-target");

                submenus.forEach(submenu => {
                    submenu.style.display = "none";
                });
                document.getElementById(target).style.display = "flex";
            });
        });

        dropdown.addEventListener("mouseleave", function () {
            submenus.forEach(submenu => {
                submenu.style.display = "none";
            });
            document.getElementById("1").style.display = "flex";
        });
    }

});

/* 기존 방법
const openbtn = document.querySelector(".all-button");
const view_menu = document.querySelector(".open-menu")
openbtn.addEventListener('click',function() {
    if(view_menu.style.display = "none")
    {
        view_menu.style.display = "block";
    }else{
        view_menu.style.display = "none";
    }
});
*/
//css에서 active주고 하는 방법
const openbtn = document.querySelector(".all-button");
const openbtn_img = document.querySelector(".all-button span img");
const view_menu = document.querySelector(".open-menu")
openbtn.addEventListener('click', function () {
    openbtn_img.classList.toggle("active");
    view_menu.classList.toggle("active");
});


// window.addEventListener("scroll", function () {
//     let topBtn = document.querySelector(".top-btn");
//     let chatBtn = this.document.querySelector(".chat-btn"); 
//     if (window.scrollY > 500) {
//         topBtn.classList.add("show");
//         chatBtn.stop.animate([
//             {transform: 'translateY(0px)'},
//             {transform: 'translateY(-70px)'}
//         ],{
//             fill: "forwards"
//         })
//         console.log("test")
//     } else {
//         topBtn.classList.remove("show");
//         chatBtn.animate([
//             {transform: 'translateY(70px)'},
//             {transform: 'translateY(0px)'}
//         ],{
//             fill: "forwards"
//         })
//     }
// });

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $(".chat-btn").stop(true, true).animate({ top: '-70px' }, 500);
        $(".top-btn").addClass("show");
    } else {
        $(".top-btn").removeClass("show");
        $(".chat-btn").stop(true, true).animate({ top: '0px' });
    }
});

$(".chat-btn").click(function () {
    $(".chat-menu").toggleClass("active");
    console.log("채팅버튼 클릭");
});

document.querySelector(".top-btn").addEventListener("click", function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

