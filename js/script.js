/*generate items*/

const sliderData = [
    {
        button: 'SEE FULL PROJECT',
        h3: 'SUBSENCE MONOCHROME',
        p: 'Web design in monochromatic colors for SUBSENCE agency.',
        i: 'web design',
        img: 'images/1-hover.png'
    },
    {
        button: 'SEE FULL PROJECT',
        h3: 'DESIGN AGENCY BUSINESS CARD',
        p: 'Logotype and business card design for ARTDESIGN agency.',
        i: 'branding',
        img: 'images/3-hover.png'
    },
    {
        button: 'SEE FULL PROJECT',
        h3: 'FIXEDGEAR SHOP PHOTOSHOOT',
        p: 'Photoshoot for the annual issue of the fixed gear and road bikes magazine.',
        i: 'photography',
        img: 'images/2-hover.png'
    },
    {
        button: 'SEE FULL PROJECT',
        h3: 'EDITOR\'S PERSONAL PAGE',
        p: 'Web page created for Ryan Fields a famous US editor.',
        i: 'web design',
        img: 'images/4-hover.png'
    },
];

const sliderWrapper = document.getElementsByClassName('slider-wrap')[0];

let now = document.getElementById("now");
let last = document.getElementById("last-page");
let pagination = document.getElementsByClassName("pagination")[0];

let activePage = 1; // first 4 items
let slideList = [];
const pages = 50;

last.innerText = pages;


const incrementPage = () => {
    if (activePage < pages) {
        changeActiveSlide(activePage + 1);
    }
};

const decrementPage = () => {
    if (activePage > 1) {
        changeActiveSlide(activePage - 1);
    }
};

const changeActiveSlide = (newPage) => {
    if (activePage !== newPage) {
        slideList[activePage - 1].classList.remove("active");
        slideList[newPage - 1].classList.add("active");
        activePage = newPage;
        now.innerText = activePage;
    }
};

const fragment = document.createDocumentFragment();

const sliderItem = ({img, button, h3, p, i}) => (
    `
        <div class="slider-item" style="background: url(${img})">
            <button><a href="#">${button}</a></button>
            <div class="slider-text">
                <h3><span>${h3}</span></h3>
                <p>${p}</p>
                <i>${i}</i>
            </div>
        </div>
`);

for (let i = 0; i < pages; i++) {
    const newSlide = document.createElement('div');
    if (activePage === i + 1) {
        newSlide.className = "slide active";
    } else {
        newSlide.className = 'slide';
    }

    for (let j = 0; j < 4; j++) {
        const index = Math.floor(Math.random() * 4);
        newSlide.insertAdjacentHTML(
            'beforeend',
            sliderItem(sliderData[index])
        )
    }

    slideList.push(newSlide);
    fragment.append(newSlide);
    sliderWrapper.append(fragment);
}

pagination.addEventListener("click", function (event) {
    if (event.target.id === 'prev') {
        decrementPage();
    } else if (event.target.id === 'next') {
        incrementPage();
    } else if (event.target.id === 'first-page') {
        changeActiveSlide(1);
    } else if (event.target.id === 'last-page') {
        changeActiveSlide(pages);
    }
});



