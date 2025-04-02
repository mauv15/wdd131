document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");
    const gallery = document.querySelector(".gallery");
    const navMenu = document.getElementById("nav-menu");
    const menuToggle = document.getElementById("menu-toggle");

    // Update footer date info
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Tijuana Mexico Temple",
        location: "Tijuana, Baja California, Mexico",
        dedicated: "2015, December, 13",
        area: 33367,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
    },
    {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
    },
    {
        templeName: "Sapporo Japan Temple",
        location: "Sapporo, Hokkaido, japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
    },
    {
        templeName: "Philadelphia Pennsylvania Temple",
        location: "Philadelphia, Pennsylvania",
        dedicated: "2016, September, 18",
        area: 61466,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/philadelphia-pennsylvania-temple/philadelphia-pennsylvania-temple-3351-main.jpg"
    },
    {
        templeName: "Fort Collins Colorado Temple",
        location: "Fort Collins, Colorado",
        dedicated: "2016, October, 16",
        area: 42000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/fort-collins-colorado-temple/fort-collins-colorado-temple-50577-main.jpg"
    },
  ];

  function displayTemples(filteredTemples) {
    gallery.innerHTML = ""; // Clear existing content
    filteredTemples.forEach(temple => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const caption = document.createElement("figcaption");
        const details = document.createElement("p");

        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        caption.textContent = temple.templeName;
        details.innerHTML = `<strong>Location:</strong> ${temple.location}<br>
                             <strong>Dedicated:</strong> ${temple.dedicated}<br>
                             <strong>Area:</strong> ${temple.area} sq. ft.`;
        
        figure.appendChild(img);
        figure.appendChild(caption);
        figure.appendChild(details);
        gallery.appendChild(figure);
    });
}

displayTemples(temples);

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const filter = event.target.textContent;
        let filteredTemples = [];
        
        if (filter === "Home") {
            filteredTemples = temples;
        } else if (filter === "Old") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if (filter === "New") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if (filter === "Large") {
            filteredTemples = temples.filter(t => t.area > 90000);
        } else if (filter === "Small") {
            filteredTemples = temples.filter(t => t.area < 10000);
        }
        
        displayTemples(filteredTemples);
    });
});
});
