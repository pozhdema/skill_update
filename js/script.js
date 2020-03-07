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
]

const sliderWrapper = document.getElementsByClassName('slider-wrap')[0];

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let now = document.getElementById("now");
let first = document.getElementById("first-page");
let last = document.getElementById("last-page");

let activePage = 1; // first 4 items
let activeSlide;
let slideList = [];
const pages = 50;

last.innerText = pages;

const incrementPage = () => {
    if (activePage < pages) {
        activePage++;
        now.innerText = activePage;
        changeActiveSlide();
    }
};

const decrementPage = () => {
    if (activePage > 1) {
        activePage--;
        now.innerText = activePage;
        changeActiveSlide();
    }
};

const setPage = (page) => {
    activePage = page;
    now.innerText = activePage
};

const changeActiveSlide = () => {
    activeSlide.classList.remove("active");
    activeSlide = slideList[activePage - 1];
    activeSlide.classList.add("active");
};

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
        newSlide.className = 'slide active';
        activeSlide = newSlide
    } else {
        newSlide.className = 'slide'
    }


    for (let j = 0; j < 4; j++) {
        const index = Math.floor(Math.random() * 4);
        newSlide.insertAdjacentHTML(
            'beforeend',
            sliderItem(sliderData[index])
        )
    }

    slideList.push(newSlide);
    sliderWrapper.append(newSlide);
}

prev.addEventListener("click", function (event) {
    decrementPage();
});

next.addEventListener("click", function (event) {
    incrementPage();
});

first.addEventListener("click", function (event) {
    setPage(1);
    changeActiveSlide();
});

last.addEventListener("click", function (event) {
    setPage(pages);
    changeActiveSlide();
});

now.innerHTML = (`${activePage}`);



