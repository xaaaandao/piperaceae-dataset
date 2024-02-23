function getFeaturesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1oOXpIlYRGvC5YpL5TMIWtkPQZ6QUbiWn?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1JTrct4_4-w9z1zzX-TCnWNDRzA-zBlDY?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/13iE2Xn6qkuMwYxeOG3ADpyAN0xHeqb1J?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1XfJ0kBMd0dSOgbGIUTYh3XRIrULa1C8d?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1Mt7ZinuTlrrHJXvf6cW2CDDx1VNzMKzx?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/16Aa3SqIBQMptkEOBDApCnzx-lEzSK8_-?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1hEeakzka5gv77TF6CVoBaiw_o3-08_Fs?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1dBvL3p2ik5c648J2n8C-nSiyo8TGB5io?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1PqBy82S6XpE2i2UvvaBtivG3YNrlpqZ3?usp=sharing';
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
            return 'https://drive.google.com/drive/folders/1lC33cAjx2Ft8E_0wK62Al76elpZMj07-?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1Wfl_vTeP6smQyJAPyJU-YYARw2GBl7QK?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1QIAz4nSMrGPnR3mY5be5rGpEVJGt-gqP?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1zXP8Z8RcisLj-iAmwKSKkvqcDcgs-P-S?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1wwpBdQwMN02oPWd8rtK49vghsC6x5pC-?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1nDxXRUpYS9ytffw--YDHBYM3PPCl1oWq?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1iRlh31ABtfhrImcEWSoa8I6pH8idbiWG?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1mioBGb2V3rKWp41XNjrQIZGcwplP07zf?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1GRpBKXCpWA8U6e1ovs6UY5lUqz_p0OEH?usp=sharing';
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
        case 'RGB':
            return getFeaturesRgb(minimum, size);
        case 'grayscale':
            return getFeaturesGrayscale(minimum, size);
        default:
            console.error('color of images is invalid.');
    }
}