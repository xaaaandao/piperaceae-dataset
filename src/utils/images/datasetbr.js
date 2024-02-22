function getImagesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
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
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
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
        case 'rgb':
            return getImagesRgb(minimum, size);
        case 'grayscale':
            return getImagesGrayscale(minimum, size);
        default:
            console.log("option invalid");
    }
}