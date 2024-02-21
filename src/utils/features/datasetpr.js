function getFeaturesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb(minimum, size) {
    switch (size) {
        case '256':
            return getFeaturesRgb256(minimum);
        case '400':
            return getFeaturesRgb400(minimum);
        case '512':
            return getFeaturesRgb512(minimum);
        default:
            console.error('image size is invalid.');
    }
}

function getFeaturesGrayscale256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://www.uol.com.br';
        case '10':
            return 'https://www.uol.com.br';
        case '20':
            return 'https://www.uol.com.br';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale(minimum, size) {
    switch (size) {
        case '256':
            return getFeaturesGrayscale256(minimum);
        case '400':
            return getFeaturesGrayscale400(minimum);
        case '512':
            return getFeaturesGrayscale512(minimum);
        default:
            console.error('image size is invalid.');
    }
}

export default function getFeatures(color, minimum, size) {
    switch (color) {
        case 'rgb':
            return getFeaturesRgb(minimum, size);
        case 'grayscale':
            return getFeaturesGrayscale(minimum, size);
        default:
            console.error('color of images is invalid.');
    }
}