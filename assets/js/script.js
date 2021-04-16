
function openMobie() {
    var headerPopup=document.querySelector('.header__popup');
    headerPopup.classList.add('open__popup');
}
    

function closeMobie(){
    var headerPopup=document.querySelector('.header__popup');
    headerPopup.classList.remove('open__popup');
}

  function accBtnClick($e) {
    var accBtn = document.getElementsByClassName("item__button");
    var accPanel = document.getElementsByClassName("item__panel");
    for (var i = 0; i < accBtn.length; i++) {
      accBtn[i].onclick = function () {
        var setClasses = !this.classList.contains("active");
        setClass(accBtn, "active", "remove");
        setClass(accPanel, "show", "remove");
        this.nextElementSibling.style.maxHeight = null;
        if (setClasses) {
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
          this.nextElementSibling.style.maxHeight =
            this.nextElementSibling.scrollHeight + "px";
          this.parentNode.style.boxShadow = "#00000059 0 6px 15px -13px";
        }
      };
    }
  }
  
  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
      els[i].parentNode.style.boxShadow = "none";
    }
  }

  $(window).on("load resize",function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 4);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });


// hover img 
jQuery(document).ready(function($) {
  var hover = ('./assets/img/partner/mitech-client-logo-01-hover.png" alt="">')
  var img = ('./assets/img/partner/mitech-client-logo-01.png" alt="">')

  $("#client1").on("mouseenter mouseleave", function() {
    if ($("#client1 img").attr("src") == hover) {
      $("#client1 img").attr("src", img );
    } else {
      $("#client1 img").attr("src", hover);
    }
  });
});

$("#client1").mouseover(function(){this.src="./assets/img/partner/mitech-client-logo-01-hover.png"}).mouseout(function(){this.src="./assets/img/partner/mitech-client-logo-01.png"});

jQuery(document).ready(function($) {
  var hover = ('./assets/img/partner/mitech-client-logo-02-hover.png" alt="">')
  var img = ('./assets/img/partner/mitech-client-logo-02.png" alt="">')

  $("#client2").on("mouseenter mouseleave", function() {
    if ($("#client2 img").attr("src") == hover) {
      $("#client2 img").attr("src", img );
    } else {
      $("#client2 img").attr("src", hover);
    }
  });
});

$("#client2").mouseover(function(){this.src="./assets/img/partner/mitech-client-logo-02-hover.png"}).mouseout(function(){this.src="./assets/img/partner/mitech-client-logo-02.png"});

jQuery(document).ready(function($) {
  var hover = ('./assets/img/partner/mitech-client-logo-03-hover.png" alt="">')
  var img = ('./assets/img/partner/mitech-client-logo-03.png" alt="">')

  $("#client3").on("mouseenter mouseleave", function() {
    if ($("#client3 img").attr("src") == hover) {
      $("#client3 img").attr("src", img );
    } else {
      $("#client3 img").attr("src", hover);
    }
  });
});

$("#client3").mouseover(function(){this.src="./assets/img/partner/mitech-client-logo-03-hover.png"}).mouseout(function(){this.src="./assets/img/partner/mitech-client-logo-03.png"});

jQuery(document).ready(function($) {
  var hover = ('./assets/img/partner/mitech-client-logo-04-hover.png" alt="">')
  var img = ('./assets/img/partner/mitech-client-logo-04.png" alt="">')

  $("#client4").on("mouseenter mouseleave", function() {
    if ($("#client4 img").attr("src") == hover) {
      $("#client4 img").attr("src", img );
    } else {
      $("#client4 img").attr("src", hover);
    }
  });
});

$("#client4").mouseover(function(){this.src="./assets/img/partner/mitech-client-logo-04-hover.png"}).mouseout(function(){this.src="./assets/img/partner/mitech-client-logo-04.png"});

jQuery(document).ready(function($) {
  var hover = ('./assets/img/partner/mitech-client-logo-05-hover.png" alt="">')
  var img = ('./assets/img/partner/mitech-client-logo-05.png" alt="">')

  $("#client1").on("mouseenter mouseleave", function() {
    if ($("#client5 img").attr("src") == hover) {
      $("#client5 img").attr("src", img );
    } else {
      $("#client5 img").attr("src", hover);
    }
  });
});

$("#client5").mouseover(function(){this.src="./assets/img/partner/mitech-client-logo-05-hover.png"}).mouseout(function(){this.src="./assets/img/partner/mitech-client-logo-05.png"});

jQuery(document).ready(function($) {
  var hover = ('./assets/img/partner/mitech-client-logo-06-hover.png" alt="">')
  var img = ('./assets/img/partner/mitech-client-logo-06.png" alt="">')

  $("#client1").on("mouseenter mouseleave", function() {
    if ($("#client6 img").attr("src") == hover) {
      $("#client6 img").attr("src", img );
    } else {
      $("#client6 img").attr("src", hover);
    }
  });
});

$("#client6").mouseover(function(){this.src="./assets/img/partner/mitech-client-logo-06-hover.png"}).mouseout(function(){this.src="./assets/img/partner/mitech-client-logo-06.png"});

// hover img 
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
})