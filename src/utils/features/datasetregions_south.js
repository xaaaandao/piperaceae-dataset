function getFeaturesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1Br0rEHhIZBENLajfLnY85sagqbL3Bv2E?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/13XfMNEphWVbetqKvUdnsDlGV3XHqJv06?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1-11vjsGsLxjmr3sZSQWo0XPJEYj_RxFY?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1ys3ByZp4sgdI_pQkxQTYjJHPZLdc6yyi?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1gxbpynvxBkleyetrTvbpiZILSutQG8ZK?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1vVTixxeOl4pn4XjxD6nJ9KxrYneARebn?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1YiZpq0y4IT4aqahuuF5msgF_kf6epkk7?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1H1seFNr25dOKUy_yLGkqcCMwQIEpId-s?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1KNrBeK_OWEdRQH43e2fDiDjcfvvGc3L6?usp=sharing';
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
            return 'https://drive.google.com/drive/folders/1WQVKLdhptF3-1CBtsH7Yd9_7XM2ihDE4?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1LZM8VmBud2p4Yz4zyw4LO7_s91gONlCy?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/125aP3IVPxAMS8YYDn2b_u9X1048tMDwQ?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1evXLEp07vJxKytR0Z4ITKnIBz_PYQt9B?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1hwDmxfs0bMTxeM0rCm5HAvLk3fA-qN-v?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1W_k7obXPUJdXw8NOSocfaKA-iFPDas9V?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/19jYoWiMLkTGXoYm-yPm_V6_TBPrPJx-j?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1s3OMcHFomj6ePjYEluLpbSzwG0bZ5JHn?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1mDXqYSdk4-R7exS3HcJNlVavaUKAocLv?usp=sharing';
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