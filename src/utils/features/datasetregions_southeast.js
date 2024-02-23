function getFeaturesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/11_A8SC7dzr6Jb97CDh7TR-H-qhO5wqs6?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1DSdfFE7OpqLZcNx8qDDOggAVs-k-yr7_?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1GZl03WFBKUsI3rLwYVpo5gARCjnFIjGM?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1I4hTczqwyqE-AmF5xk_5XwrOZBwshb91?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1gC-zRpT1GCMIM8ZMURcz6O3a6GqPlmiE?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1MTjq-Br2ntCQ0EmnffUadTIx2ScP6xwH?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1hw0YLrftlmsTe7AiGDdfZcjFf3RwYpO8?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1oTkGUcbzyQc95cyv5ejdGvuBtrYGYfzL?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1hg-xcVaKEEurDCn5f0tHA13maAcd7M5_?usp=sharing';
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
            return 'https://drive.google.com/drive/folders/1R4MRN0okCgVKp9TJ3IYAWd3KaiWnfYRc?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1-jDHUGPOxAytdFLkYQlw6j2YsAC705_M?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1VjqJVKbY0QcoDOMl4i-nwWSDuQM8t6v4?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/14ykn6zV9ptYgKy6uop0qtpk6yQpFB_Vh?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1BX3bylv0tvHNRsBNcUEmx051ixF7VGV3?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1Dqymz_eqOOQ2rrEhrkk9sbnQQ8-LhgJs?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/19n29RnGRUCmr64-pk3Z9L2u44CLZ9QQM?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1wCMZEdQgsGDitiaX6VGL6xi7pe3T7WlM?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1Sy5Z-7IO4Xie1dhImVXxi_6vblrMsEBz?usp=sharing';
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