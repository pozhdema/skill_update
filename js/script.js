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

let activePage = 1; // first 4 items

const sliderWrapper = document.getElementsByClassName('slider-wrap')[0]

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

for (let i = 0; i < 50; i++) {
    const newSlider = document.createElement('div');
    newSlider.className = activePage === i + 1 ? 'slider active' : 'slider';

    for (let j = 0; j < 4; j++) {
        const index = Math.floor(Math.random() * 4);
        newSlider.insertAdjacentHTML(
            'beforeend',
            sliderItem(sliderData[index])
        )
    }
    sliderWrapper.append(newSlider)
}

// sliderWrapper.parentElement.replaceChild(newSlider, slider);
/*append items*/

/*Pagination*/

/*find: Prev, Next*/
/*add event listeners*/
/*increment/decrement activePage*/

