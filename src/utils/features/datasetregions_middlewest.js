function getFeaturesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1NwBxVL2lAB0DUsvdEfShnlNLLFxmX6-v?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1Q7VVBw2Qya2c3BfxFnwa2kc-tpNvbmVf?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1SfWR_5FyhNQpjWkwBK5-Kv6_2u1_OEaY?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/12oxe0J7xeEsnLFgrdAw62siScIpvSTEG?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/19P_oQPvUORLzcuNLBZ17J34FIU7OjEYz?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/10ws-_WvcuIUxahNCiToruYe4SFrFvYYd?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1w-d_dwY_0-tDLlPXd6QcSiGr-DWbLnQd?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1m-G-A-ub_-qC_NRsfKpoyvxmDZjZEErZ?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1fgCrUt7Jg-VitwAbekX_fVOwm9mQrKCh?usp=sharing';
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
            return 'https://drive.google.com/drive/folders/1J_QdUpkjRb8-GmCxPvDM2QWANl3O3Zrw?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1leeL4mSeLq82N5afSOvCk5aMj_ediJ0D?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/10Q-l6rMsp8o4b68v09gEz1srQ256cbyl?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1bilH0F6JaUcovx_T0ZTUiPJW-8dtdE2q?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1UywOsvuoXsw6XGEJcOnqtrt8MUMTp6F3?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1a19OGW6ZMRvBqps-1zXthnJmhkcQW_8U?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/17muX3Z0owmlv-zdz4cqw9u3YcSp8xRiu?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1GQM42Cj0FQWP40IjePE4hJmP-t29BBX7?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1IIbJRL_vaDX3GQm3NdGlK1wH-ItXQ-Yj?usp=sharing';
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