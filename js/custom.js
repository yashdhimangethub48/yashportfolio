const counters = document.querySelectorAll('.counter');
let started = false;

function startCounter() {
    counters.forEach(counter => {

        const target = parseInt(counter.getAttribute('data-target'));
        const symbol = counter.getAttribute('data-symbol') || "";
        const duration = 2000;
        const stepTime = Math.max(Math.floor(duration / target), 10);

        let count = 0;

        const updateCount = () => {
            count++;

            // Add leading zero for single digit numbers like 05
            let displayNumber = count < 10 && target < 10 ? "0" + count : count;

            counter.innerText = displayNumber + symbol;

            if (count < target) {
                setTimeout(updateCount, stepTime);
            } else {
                counter.innerText = target < 10 ? "0" + target + symbol : target + symbol;
            }
        };

        updateCount();
    });
}

// Scroll Trigger
const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && !started){
        startCounter();
        started = true;
    }
}, { threshold: 0.4 });

observer.observe(document.querySelector('.counter-box').parentElement);



// work on js 
jQuery(document).ready(function () {
  var owl = jQuery('#work-on');
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 2},
      600: { items: 4 },
      992: { items: 6},
      1199: { items: 7 }
    }
  });
  jQuery('.owl-prev-event').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next-event').click(function () {
    owl.trigger('next.owl.carousel');
  });
  // Play/Pause toggle works fine
  var isAutoplayPaused = false;
  jQuery('.owl-pause3').on('click', function () {
    if (isAutoplayPaused) {
      owl.trigger('play.owl.autoplay');
    } else {
      owl.trigger('stop.owl.autoplay');
    }
    isAutoplayPaused = !isAutoplayPaused;
    jQuery('.owl-pay-icon3').toggleClass('fa-pause fa-play');
  });
});