function getImagesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/16e6zMskNFLAMSAMs-j7nZWYl1G4dzaAu/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1SziAVOBbes8TjG-AfbtF-22o2IExfmT2/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1Sp-hcngaeTvu_tHZJmUErpO5eVztaggq/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/16RoxcKbSf1qwV-aNeJGoO1NRQNw3V_3q/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1FaSsxODizo-NE6054fXiz7OaFZyvAQli/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1A4LZdbQyftd608go7l5zCQC0rquxSCT6/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}


function getImagesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/17HrwGPLkBKTDw_fC9MPTeedCtsi6joZK/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/11MtP3YNH51BDp5fG9dRs3kkwRHUdGWm_/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/118LLqu_v-_u-6zESs-M386yOWOIbTK3y/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb(minimum, size) {
    switch (size) {
        case '256':
            return getImagesRgb256(minimum);
        case '400':
            return getImagesRgb400(minimum);
        case '512':
            return getImagesRgb512(minimum);
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1_DFm-KSN4jSJdzGDEzmdLEpLyCE-4oQz/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1h72T9G81lWKPt3eQUAKpIGOz1wEhxD6A/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1emFWR_rTsWw8OyBMCYTiPH3BsOFSasV7/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1Kn-G2xI9KDU5oHS_CZheXX0e1mZepQsr/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1skWfId7Ywk9X0sKi4jJ3G___p-ogWmP-/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1dt0k50zm7qObwZwRBL_8R7zZiHD5rwYX/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/14eyNK-Q-E3EXV_xMbom9YOOy258FMZfr/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1XVyaBQ_31iW0Rv9Nq9wWRXONVhTHWjJF/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1JsR4L8QbA2gjtpfQmD_zgkIdDJ-4NBt5/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale(minimum, size) {
    switch (size) {
        case '256':
            return getImagesGrayscale256(minimum);
        case '400':
            return getImagesGrayscale400(minimum);
        case '512':
            return getImagesGrayscale512(minimum);
        default:
            console.log("option invalid");
    }
}

export default function getImages(color, minimum, size) {
    switch (color) {
        case 'RGB':
            return getImagesRgb(minimum, size);
        case 'grayscale':
            return getImagesGrayscale(minimum, size);
        default:
            console.log("option invalid");
    }
}