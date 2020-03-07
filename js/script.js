// source data to generate slides
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
const pagination = document.getElementsByClassName('pagination')[0];
const now = document.getElementById("now");
const last = document.getElementById("last-page");

let activePage = 1; // current slide, contains first 4 items
let slideList = []; // list of the slides - link to the real DOM collection
const pages = 50; // max of slides; in real situation it will be: Math.ceil(items.length / itemsPerPage)

// setting the max pages in html
last.innerText = pages;


/*generation our items/slides*/

// function-template for slide item;
// returns a string
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

// create fragment to collect the slides
const fragment = document.createDocumentFragment();

for (let i = 0; i < pages; i++) {
    // create wrapper for items
    const newSlide = document.createElement('div');
    //define if current creating slide corresponds to active page
    newSlide.className = activePage === i + 1 ? 'slide active' : 'slide';

    // append into slide 4 items
    for (let j = 0; j < 4; j++) {
        const index = Math.floor(Math.random() * 4);
        newSlide.insertAdjacentHTML(
            'beforeend',
            sliderItem(sliderData[index])
        )
    }

    // save every slide to our list-link
    slideList.push(newSlide);
    // and inject him to the fragment
    fragment.append(newSlide);
}
// when slide list already done - append to real DOM
sliderWrapper.append(fragment);


/*navigation by slides(pages)*/

const incrementPage = () => {
    if (activePage < pages) setPage(activePage + 1)
};

const decrementPage = () => {
    if (activePage > 1) setPage(activePage - 1)
};

// change active page and change active slide
const setPage = (newPage) => {
    // if it not the same page
    if (newPage !== activePage) {
        // we have old active page and new active page
        // it means we can use only index without link to the active slide html
        slideList[activePage - 1].classList.remove("active");
        slideList[newPage - 1].classList.add("active");
        // save new page
        activePage = newPage;
        // change the html of current page
        now.innerText = activePage;
    }
};

pagination.addEventListener("click", function (event) {
    // this id of the clicked element
    const {id} = event.target;

    if (id === 'first-page') {
        setPage(1);
    } else if (id === 'last-page') {
        setPage(pages);
    } else if (id === 'prev') {
        decrementPage()
    } else if (id === 'next') {
        incrementPage()
    }
});
