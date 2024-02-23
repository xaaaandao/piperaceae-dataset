function getImagesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1MJRzI27t0yC9N2Um5cjI0FB0Iol9M8-I/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1_XF9e2k_uEmBJ94UqZakdQdQAC1Hm1k0/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1PTkuG5bFhKY_0WmPkVnKSodWD3QqRvMp/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1Xxg_oj4hEhhcThmEAG_vph4uw6ySLp3w/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1y1xPgKIafEB6UZzrWe8T0ny-u9akjSdK/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1pweqdd7LjG1U5vLATpJINZESBrDsY5eM/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}


function getImagesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1fYP7hkCbrmlarsuROMMh5ZXx2m2xuCYF/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1nVO4IZh3lNE1BRMYjfAxl705wW7CgHsR/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1lDS_yTOgpG44zNn4c8lhH3v3p0LMWrBH/view?usp=sharing';
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
            return 'https://drive.google.com/file/d/18zcNJHhE__x3hhO-dcrVItqEvIJK62Ya/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1DbZzRwrfxeTDBDpUg-aOkjZP9M9Qd5jy/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1AsvBcfurddiUt8mryCuJtasr3tCl3CU2/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/13QrY6N6RPheeJoi49Bme4-n3rgiyy8WC/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1N8BBHOT5UvxLu61ArrSf3f_TLUsAMCGe/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1EezGlu5O4RKcc6MGPBx5J4H7BCzWKvHP/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1WeRiU8bZq3gvDY0d5Wnl-z3EN9oQzJFZ/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1MUth8Hf8wBp773b0xkVJPeG8iT53rT_f/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/144kypwtAJQCx7rsjhrVxgMsq60vJM6fr/view?usp=sharing';
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