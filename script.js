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


const sliderItem = `
    <div class="slider-item">
        <button><a href="#">SEE FULL PROJECT</a></button>
        <div class="slider-text">
            <h3><span>SUBSENCE MONOCHROME</span></h3>
            <p>Web design in monochromatic colors for SUBSENCE agency.</p>
            <i>web design</i>
        </div>
    </div>
`

sliderData.forEach(function (item, index, arr) {

})

const fragment = document.createDocumentFragment();

/*append items*/

const slider = document.getElementsByClassName('slider')[0]

