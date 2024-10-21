// navbar glass effect
const navbar = document.getElementById("navbar");

const sticky = navbar.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    console.log("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// auto slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log(n);
}
function currentSlide(n) {
  showSlides(slideIndex == n);
  console.log(n);
}

var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "flex";

  if (dots.length > 0 && slideIndex - 1 < dots.length) {
    dots[slideIndex - 1].style.backgroundColor = "#717171";
  }

  setTimeout(showSlides, 2000); 
}

// destination card
const assets = [
  {
    id: 1,
    name: "Air Terjun Dlundung",
    // description:
    //   "Terletak di Desa Kemloko, Kecamatan Trawas, Mojokerto, Air Terjun Dlundung memiliki ketinggian sekitar 50 meter dan dikelilingi hutan yang asri. Destinasi ini menawarkan keindahan alam yang alami, cocok untuk berenang, berfoto, dan trekking. Akses mudah dari pusat kota Mojokerto, sekitar 30 km. Nikmati suasana sejuk dan segar di sini!",
    asset: "../assets/air-terjun-dlundung.webp",
  },
  {
    id: 2,
    name: "Asset 2",
    // description: "This is asset 2",
    asset: "../assets/alun-alun-mojokerto.webp",
  },
  {
    id: 3,
    name: "Asset 3",
    // description: "This is asset 3",
    asset: "../assets/candi-bajang-ratu.png",
  },
  {
    id: 4,
    name: "Asset 3",
    // description: "This is asset 3",
    asset: "../assets/candi-bajang-ratu.png",
  },
  {
    id: 5,
    name: "Asset 3",
    // description: "This is asset 3",
    asset: "../assets/candi-bajang-ratu.png",
  },
  {
    id: 6,
    name: "Asset 3",
    // description: "This is asset 3",
    asset: "../assets/candi-bajang-ratu.png",
  },
];

function createCard(image) {
  const col = document.createElement("div");
  col.className = "col-md-3 kolom";
  col.style.marginBottom = "15px";
  col.style.maxHeight = "250px";
  

  const card = document.createElement("div");
  card.className = "card";
  card.style.border = "2px solid #8d6e63";
  card.style.backgroundColor = "#f5f5dc";
  card.style.height = "100%";
  card.style.boxShadow = "5px 5px 4px 0px rgba(56, 142, 60, 0.50)";
  card.style.padding =  "5px";


  const img = document.createElement("img");
  img.src = image.asset;
  img.alt = "image";
  img.className = "card-img-top";
  img.style.maxHeight = "160px"
  img.style.maxWidth = "270px";

  const cBody = document.createElement("div");
  cBody.className = "card-body";

  const tText = document.createElement("h6");
  tText.textContent = image.name;

  // const pText = document.createElement("p");
  // pText.textContent = image.description;

  cBody.appendChild(tText);
  // cBody.appendChild(pText);

  card.appendChild(img);
  card.appendChild(cBody);

  col.appendChild(card);

  return col;
}

const cardContainer = document.getElementById("cardContainer");

assets.forEach((asset) => {
  const card = createCard(asset);
  cardContainer.appendChild(card);
});
