$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: false,
      margin: 30,
      items: 3,
      center: false,
      autoWidth: true,
      autoplay: false,
      smartSpeed:1000,
      autoplayHoverPause: true,
      
      
      
      
      
    });
  });

  function changeColorAndText(button) {
    if (button.classList.contains("clicked")) {
        button.style.backgroundColor = "#C81059";
        button.style.color = "#FFFFFF";
        button.textContent = "Выбрать тариф";
        button.classList.remove("clicked");
    } else {
        button.style.backgroundColor = "#0099C8";
        button.style.color = "#FFFFFF";
        button.textContent = "Тариф выбран";
        button.classList.add("clicked");
    }
}

