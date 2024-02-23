function getFeaturesRgb256(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/1eTHqUvWWf91ci7IbQvgfEATqaTG96uJx?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1GKe6GFCRiwrLnyJl5R_H0Xv4ntpPrd9m?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/18qm9ZNrDbqT0-CQx-Xx2su43xXaPlf-O?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb400(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/1xQeyun2T_z7EOCcVMKSpWfJ7FNS2TwoS?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1K9I-17wlskM_9aBgcjy-B7jBDvYP-lqO?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1WW57AHhyQYrKbAvdecEaZNEv_X8urLbN?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb512(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/1CbGEMU5AfCs87zY3SN6iDIb378EORDlP?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1V5m250MsUEz1Ax_jxaJZGpGIGorZ4TXP?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1-TCcHdl1x-d6tyvWV_ere0X-fTJxlCEw?usp=sharing';
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
            return 'https://drive.google.com/drive/folders/1HSsvInSMGG0REGZQok0eF3xikmGh_3TD?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1fqoq44dFXIAo0WHhLlCkhpQjpMoN1DQU?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1y0RK1OA2_hpS_a6_XtWBanoi-3iZ5Kyi?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale400(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/1SSnaF6fGAH4p6SshMU7S_r5ekN2au2-f?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1BmbP0jDVTssCJfAvkliM1tkvGrR0NV9-?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1NqI5n-VpYID9mUd7Ski71AQbtZRqdIf9?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale512(minimum) {
    switch (minimum) {
        case 5:
            return 'https://drive.google.com/drive/folders/1ceaAGYCppmQXAoc0_YrVmQbfjfwH7k5Y?usp=sharing';
        case 10:
            return 'https://drive.google.com/drive/folders/1kaLOBR092ufzz8hR7yBNEaDDuy6_AUIr?usp=sharing';
        case 20:
            return 'https://drive.google.com/drive/folders/1JtptAUIscXQ5_iFdMiSQPoO-6ZiswJrA?usp=sharing';
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