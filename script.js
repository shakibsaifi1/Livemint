

document.querySelectorAll('.tabsData li').forEach((tab, index) => {
  tab.addEventListener('click', function() {
      // Remove 'active' class from all tabs
      document.querySelectorAll('.tabsData li').forEach(tab => {
          tab.classList.remove('active');
      });

      // Hide all tab contents
      document.querySelectorAll('.showTabs > div').forEach(tabContent => {
          tabContent.classList.remove('showTab');
          tabContent.classList.add('hideTab'); // Ensure this class actually hides the content via CSS
      });

      // Add 'active' class to clicked tab
      this.classList.add('active');

      // Show the corresponding tab content
      const allTabContents = document.querySelectorAll('.showTabs > div');
      if (allTabContents[index]) {
          allTabContents[index].classList.add('showTab');
          allTabContents[index].classList.remove('hideTab');
      }
  });
});


// Initialize Swiper 
    var swiper = new Swiper(".swiperLive", {
      slidesPerView: 2.5,
      centeredSlides: false,
      spaceBetween: 16,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        0:{
          slidesPerView: 1.3,
        },
        
        950:{
          slidesPerView: 2.5,
        },
      }
    });    

    var swiper = new Swiper(".swiper-scrollbarClick", {
      slidesPerView: 5.5,
      centeredSlides: false,
      spaceBetween: 16,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        0:{
          slidesPerView: 2.5,
        },

        950:{
          slidesPerView: 5.5,
        },
      }
    });

    var swiper = new Swiper(".swiperStory", {
      slidesPerView: 2.5,
      centeredSlides: false,
      spaceBetween: 16,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        0:{
          slidesPerView: 1.5,
        },
        
        950:{
          slidesPerView: 2.5,
        },
      }
    });

    // This is Right navSec
      
    var loginClick = document.querySelector(".loginMyacc");
var myAccount = document.querySelector(".myAccount");
var bgShadow = document.querySelector(".bgShadow");

loginClick.addEventListener("click", function () {
    if (myAccount.style.display === "none") {
        myAccount.style.display = "block";
        bgShadow.style.display = "block";
    } else {
        myAccount.style.display = "none";
    }
});

var closebtn = document.querySelector(".closebtn");

closebtn.addEventListener("click", function () {
    if (myAccount.style.display === "block") {
        myAccount.style.display = "none";
        bgShadow.style.display = "none";
    } else {
        myAccount.style.display = "none";
    }
});

// right secNav end


// This is left navSec

      var openNav = document.querySelector('.openNav');
      var sidenav = document.querySelector('.sidenav');
      var bgShadow = document.querySelector('.bgShadow');

      openNav.addEventListener('click', function(){
        if(sidenav.style.display === "none") {
          sidenav.style.display = "block";
          bgShadow.style.display = "block";
        }
        else{
          sidenav.style.display = "none";
        }
      });

      var whiteOverly = document.querySelector('.whiteOverly');

      whiteOverly.addEventListener("click", function(){
        if(sidenav.style.display === "block") {
          sidenav.style.display = "none";
          bgShadow.style.display = "none";
        }
        else{
          sidenav.style.display = "none";
        }
      });

// left navSec end

// Back to Top the Button 

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // Show the button when user scrolls down 20px from the top of the document
      document.querySelector(".backtoTop").style.display = "block";
  } else {
      // Hide the button when user is at the top of the document
      document.querySelector(".backtoTop").style.display = "none";
  }
}

document.querySelector(".backtoTop").addEventListener("click", function () {
  // Smooth scroll to the top of the page when the button is clicked
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
});


// Top the Button end

    // This is jquery script

  $(document).ready(function(){
    $('.hideMenu').hide();
    $(".viewMore").click(function(){
        $(this).siblings(".hideMenu").slideDown();
        $(this).hide();
    });
    
    $(".viewLess").click(function(){
      $('.hideMenu').hide();
        $(this).parent(".hideMenu").slideUp();
        $(this).parents(".navSecBlock").find(".viewMore").show();
    });
});


    
    $(document).ready(function () {
      $(".subMenu > a").click(function (e) {
          e.preventDefault();
          $(this).siblings("ul").toggle();
      });
  });
  

    
    


