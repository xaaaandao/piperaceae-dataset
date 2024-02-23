function getFeaturesRgb256(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/15Fcft-nHcmwvx3PAUi-surnFTatt-wkG?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1le--MVi0N2Mg-G3AWM5VJVL5iwXciaQR?usp=sharing';
        case 20:
            return  'https://drive.google.com/drive/folders/1cerXwAN_GLPvsMZVphbY3qenvTKnX5-g?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb400(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/1AVQhqlyN2eAP7rKL_V0e8WByU4GsHsiA?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1GubnPD6DDdoQGSh-b1Iq_gq1AWKtDxvc?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1WzpdfM_ol7vX3UW0DnO-YxMO0CZcR_j7?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb512(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/16nlcJ14TMPSnFVr5W3Q388emjhRLXoz8?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1dujjf1CEkrpJcY1i4nvkUfHyJHvIXPD7?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1-ZsEbL8NSnw0o_yv67apL2144_9L58oR?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb(minimum, size) {
    switch (size) {
        case 256:
            return getFeaturesRgb256(minimum);
        case 400:
            return getFeaturesRgb400(minimum);
        case 512:
            return getFeaturesRgb512(minimum);
        default:
            console.error('image size is invalid.');
    }
}

function getFeaturesGrayscale256(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/1s2BHKO3yXttJDxPexVf70NK0QX5XYt5o?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1W4aFBjN6NlvV_jsGrukjDqwqxdum3vtT?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/15FiAuYxKeGwN9jmI631kN7tCD9S9uqrr?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale400(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/1gOCOVS2Jp6Yc6lXPiOcBeHKGm4xKRuja?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1QX9lalUF9JVKk0uX-Mb7QJEX2NUWZawE?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1hlljZoNWC8gN_EITLSGDqfOMK54qkg4B?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale512(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/13aBsCzrwiMcJo9evxLnvPDRqyqxTLAOA?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1EtwG0eHK941LWKEUEa9ZX09FzOYVHNXn?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1caQkmJO1RoySCxIDpsTG8m1g61VD640I?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale(minimum, size) {
    switch (size) {
        case 256:
            return getFeaturesGrayscale256(minimum);
        case 400:
            return getFeaturesGrayscale400(minimum);
        case 512:
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