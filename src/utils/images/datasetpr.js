function getImagesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1O3BvMtgx5F5q2SMDlhnZEYllc3dDtlAW/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1Oe4JN2hthwvHljmNr9urKWDfwa8TuSuw/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/17s6OwVHRnBzcguv-QZCxJfw_7kdLNgpr/view?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getImagesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1aVdUIkfCtgTsfrdrlCNHN1-VeMGuKObP/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1t8tO9KWFrebNPaOadd_XqxGu77GuIdkl/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1hJcHYa6ZuMkAc8F0tFOdpFmDwKGaQKbl/view?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getImagesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1WY7BxTJf-r1yo-2bTAYQ257lIryxYvHM/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1xtmfDvBRY9cgqCCegVLPKcZFBqMWneHM/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1wqmi_AhDDPYtbWbf8_3r9ans3xy1uefr/view?usp=sharing';
        default:
            console.error('minimum is invalid.');
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
            console.error('image size is invalid.');
    }
}

function getImagesGrayscale256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/16UwJWgG8HtnWvxrnXaLX94Mu1KppYWph/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1OP2ZQZgg2bUNoTdG1H8yChbQnvJ5Y8VF/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1GiPlNrhaXuytK_oevte6ruxLb9V_BLfi/view?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getImagesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1KS_BIdexsSqr3eInl9v2uPWBcvSKFxta/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1RtECTuI6WwmfIJVMA4ZWy1FR8M6TZapr/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1IjyejOvgd-nbcIJ-gvnx0KMZIngohfPp/view?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getImagesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1oT5nmPM3z20pv3X-TUYpp3oH5GITrtpP/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1osAkHB3EFU62q6dy_Wm5DJ_BP6-TT96z/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1oiGKJ5JQO5uks8hxuktpWV_gJWGkROxJ/view?usp=sharing';
        default:
            console.error('minimum is invalid.');
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
            console.error('image size is invalid.');
    }
}

export default function getImages(color, minimum, size) {
    switch (color) {
        case 'rgb':
            return getImagesRgb(minimum, size);
        case 'grayscale':
            return getImagesGrayscale(minimum, size);
        default:
            console.error('color of images is invalid.');
    }
}