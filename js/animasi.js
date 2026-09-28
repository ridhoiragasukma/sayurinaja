// animasi elemen about
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".gambar-a, .card");
hiddenElements.forEach((el) => observer.observe(el));

// animasi icon profil medsos

const pageSection = document.querySelector(".page");
const socialIcons = document.querySelector(".icon-a");

const iconObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    socialIcons.classList.toggle("visible", !entry.isIntersecting);
  },
  { rootMargin: "-620px 0px 0px 0px" } 
);

iconObserver.observe(pageSection);
