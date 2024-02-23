function getImagesRgb256(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/file/d/1FHPJsLptLEV3P6Xtu_KkJkcAhRymNWCR/view?usp=drive_link';
        case 10:
            return 'https://drive.google.com/file/d/1yi4fs0j-MX1iUm5EIuubETvLBhkruDbg/view?usp=drive_link';
        case 20:
            return 'https://drive.google.com/file/d/1EdKxwdlmg9JqRaHVWrXIqkmGSLW_fh4k/view?usp=drive_link';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb400(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/file/d/14WHtoXAASQ1X_eT2y6W4S2imV1iVA6aO/view?usp=drive_link';
        case 10:
            return 'https://drive.google.com/file/d/1Lo95UE4XwB43vye_CTOezv7jVjcNzFRw/view?usp=drive_link';
        case 20:
            return 'https://drive.google.com/file/d/1dwhQO2sta07t5fi13IexLZzz85HnRIxU/view?usp=drive_link';
        default:
            console.log("option invalid");
    }
}


function getImagesRgb512(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/file/d/1nj_0ed6KRxqH18Nx18-jWLeoUstVHAUg/view?usp=drive_link';
        case 10:
            return 'https://drive.google.com/file/d/1N_sUwHrDPq9lrTjx_oj2hyGvP2ULZ_zY/view?usp=drive_link';
        case 20:
            return 'https://drive.google.com/file/d/1nl44nQb-SRtNeJrTvRy8S4aOw24TfACK/view?usp=drive_link';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb(minimum, size) {
    switch (size) {
        case 256:
            return getImagesRgb256(minimum);
        case 400:
            return getImagesRgb400(minimum);
        case 512:
            return getImagesRgb512(minimum);
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale256(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/file/d/1fp9bRSJwc0PzqYw45A60BEf5NckSAsuE/view?usp=drive_link';
        case 10:
            return 'https://drive.google.com/file/d/1IX0MeeLW4MOb9Ta0KfIgwDCZQT8dpqlj/view?usp=drive_link';
        case 20:
            return 'https://drive.google.com/file/d/1gfvTm-oO58tfLHpXU7bBcjSkptE4V5v0/view?usp=drive_link';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale400(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/file/d/15SX3z988NP1Cj5CUIdeIeMw8cPQ4Z4FG/view?usp=drive_link';
        case 10:
            return 'https://drive.google.com/file/d/17RVsUBJeT6qYjm8J9piEfmPXVlvOv0Sz/view?usp=drive_link';
        case 20:
            return 'https://drive.google.com/file/d/13sF7sSe-qAcBgYr0_foczYQnHhzkIqjq/view?usp=drive_link';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale512(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/file/d/1AzEBZrgSVSp1igR3kTdpOb9b0c0dhezj/view?usp=drive_link';
        case 10:
            return 'https://drive.google.com/file/d/10ltWU4r8QtZz9Sl2r29thA0mIyL1WD8S/view?usp=drive_link';
        case 20:
            return 'https://drive.google.com/file/d/1EpF7AlN7uHVREnYnO52052oBafl_95e1/view?usp=drive_link';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale(minimum, size) {
    switch (size) {
        case 256:
            return getImagesGrayscale256(minimum);
        case 400:
            return getImagesGrayscale400(minimum);
        case 512:
            return getImagesGrayscale512(minimum);
        default:
            console.log("option invalid");
    }
}

export default function getImages(color, minimum, size) {
    switch (color) {
        case 'rgb':
            return getImagesRgb(minimum, size);
        case 'grayscale':
            return getImagesGrayscale(minimum, size);
        default:
            console.log("option invalid");
    }
}