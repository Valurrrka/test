const btnScr = document.querySelector(".button-scroll-to");
const srchScr = document.querySelector(".search-scroll-to");
const btnScrMob = document.querySelector(".button-scroll-to-mob");
const srchScrMob = document.querySelector(".search-scroll-to-mob");
const scrollTo = document.getElementById("order_form");

btnScr.addEventListener("click", function (e) {
  const scrollToCoords = scrollTo.getBoundingClientRect();

  window.scrollTo(scrollToCoords);
});

srchScr.addEventListener("click", function (e) {
  const scrollToCoords = scrollTo.getBoundingClientRect();

  window.scrollTo(scrollToCoords);
});

btnScrMob.addEventListener("click", function (e) {
  const scrollToCoords = scrollTo.getBoundingClientRect();

  window.scrollTo(scrollToCoords);
});

srchScrMob.addEventListener("click", function (e) {
  const scrollToCoords = scrollTo.getBoundingClientRect();

  window.scrollTo(scrollToCoords);
});

//popup on scroll
function scrollPopup() {
  const commentScroll = document.querySelector(".comment-block");
  const modalWindow = document.querySelector(".popup");
  const modalWindowBtn = document.getElementById("popup-button");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        modalWindow.style.visibility = "visible";
        //bodyOverflow.style.overflow = "hidden";
      }
    });
    modalWindowBtn.addEventListener("click", function () {
      modalWindow.style.visibility = "hidden";

      window.scrollTo(
        document.getElementById("order_form").getBoundingClientRect()
      );
    });
  });

  observer.observe(commentScroll);
}
scrollPopup();
