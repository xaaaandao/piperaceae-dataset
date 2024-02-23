function getFeaturesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1KdD88SVg47CJOkDtx1SMT2y4XtnizG_A?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1t-GF9Tz_EpRQjsYB80qBffqoWnjTG7yv?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1n-msXJAtMi_XXxsrDTyfvGOxPxoevjDH?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/13SUH4tfkkMvaJJZbgDnHcpN_aMgDnp_q?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1U24pkdlIwz6Oi646-4ta7Ge-MbDR8K_R?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1EU7bSn7h1UbXY0T08SM2TFOzRU6pyHKr?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1-tWCY-lQgvo4DZCxmCqC99TxZwwbmsbs?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/151on6z1wPcxUytLSwVg0mMl_XRCSRDZX?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/17y0xpIMIieYQmCGfddLRTY8xCOU7tfWi?usp=sharing';
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
            return 'https://drive.google.com/drive/folders/1F8vsXmhTvC3uq7ATi14CChL-apOXpV6I?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1u_hL5JthtoznQrzmUpozxzcQyeAzDtXB?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1aZGzZLFSk5hUPE7v9oafgOF8KKzytIUd?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1dnJbQ-wMNzVOwtxpcDGMKre2dp50djng?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1T_zmbhvlC1HopagE2lJ9FiY6S6HZW7lb?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1prnHwK1e1Q6lpmwrdYKutpcoF_59NcGp?usp=sharing';
        default:
            console.error('minimum is invalid.');
    }
}

function getFeaturesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/drive/folders/1xtNCBTkg69BB828b_qA41Qowcmcn6PyY?usp=sharing';
        case '10':
            return 'https://drive.google.com/drive/folders/1YD74-Q2nWBq8PZDzRvR87vk_yMM2tSRH?usp=sharing';
        case '20':
            return 'https://drive.google.com/drive/folders/1n7xxURjL3cCt-5BNPXW1t4oafGoFf1d9?usp=sharing';
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