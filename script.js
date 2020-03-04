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
        h3: 'SUBSENCE MONOCHROME',
        p: 'Web design in monochromatic colors for SUBSENCE agency.',
        i: 'web design',
        img: 'images/1-hover.png'
    },
    {
        button: 'SEE FULL PROJECT',
        h3: 'SUBSENCE MONOCHROME',
        p: 'Web design in monochromatic colors for SUBSENCE agency.',
        i: 'web design',
        img: 'images/1-hover.png'
    },
    {
        button: 'SEE FULL PROJECT',
        h3: 'SUBSENCE MONOCHROME',
        p: 'Web design in monochromatic colors for SUBSENCE agency.',
        i: 'web design',
        img: 'images/1-hover.png'
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

