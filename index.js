// Skill tab

const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContetns) => {
      tabContetns.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    tab.classList.add("skills__active");
  });
});

// Filter

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

// Active link

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

// Work popup

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".pp__thumbnail a").href =
    portfolioItem.querySelector(".work__site").href;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

// Sevices modal

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".servicies__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((cls) => {
  cls.addEventListener("click", () => {
    modalViews.forEach((v) => {
      v.classList.remove("active-modal");
    });
  });
});

// Contact me

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;

  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((i) => {
  i.addEventListener("focus", focusFunc);
  i.addEventListener("blur", blurFunc);
});

// Scroll active

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((s) => {
    const sectionHeight = s.offsetHeight;
    const sectionTop = s.offsetTop - 50;
    const sectionId = s.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

// Send Email

const submit = document.getElementById("form-button");
const blurred = document.getElementsByClassName("blurred")[0];
submit.addEventListener("click", sendMail);

async function sendMail(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("subject");
  const mail = document.getElementById("email-modal-box");

  // blurred.classList.add("blur");
  const target = e.target;
  const parentNode = target.parentNode;

  try {
    if (name.value || email.value || message.value || phone.value) {
      mail.style.display = 'block';
      
      const re = await emailjs.sendForm(
        "service_2b2dv69",
        "template_jrxnf6h",
        parentNode,
        "user_cHmfISm7sED5Rr2y3J6Uv"
      );
      alert("Message Sent");
      blurred.classList.remove("blur");

      mail.style.display = "none";

      parentNode[0].value = "";
      parentNode[1].value = "";
      parentNode[2].value = "";
      parentNode[3].value = "";
    } else {
      throw new Error("Fill all fields!");
    }
  } catch (err) {
    alert(err.message);
  }
}

// Sidebar

const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}
