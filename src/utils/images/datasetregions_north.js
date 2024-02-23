function getImagesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1JmvvMRzYVRLbhatTKcqoWE5U7zwdcW-j/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1uoU5Bum21UInDk2y-aCBtljcQgYRP4xE/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/159tEM_y9xpPycwwUTvIdIAN4PrdYhIML/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1ZO1gfaiLJnkeTMzHpVL86C1OmlRNS_V2/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/12SBk_hOeQN6G0uNPoHeUqdaRCBveLLcX/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1HQIMIl173sRCNo0bnj7Y18WhAk_wNuOM/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}


function getImagesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1ZwzP1ozXFyxnlvXZtHMq_eIXFxbPlBD0/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1X2VVjnLxc0uokvx00KcmVoure8iIigBX/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1Rm2X_KW4Hk6CYD3Ijz1MHNinZqcRGJIn/view?usp=sharing';
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
            return 'https://drive.google.com/file/d/1DOKK-1-U-BYJfdbLetZjEK0gAfxaD8Kt/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1NLgDBE_7r00div7v4aGnPGxj_fNkHF4m/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/15Z1Pckj4fyCIaWwXQ6zDnFaLJr276IqY/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/17yuimP28achv7juC11mFUTKmCtsyws00/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1OMz3wYgSa05X_2QehFrMvm8O-K7lwv5j/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1DbY20dAYWj7QC4wMCvYlTmqZB5OOGxaG/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1HUg4M7LoRFSWtO-I6QjrrrIpIMzTThKy/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1bxWWOtzadT30Mq-aKY5671zlF0xSzXRQ/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1ZwpEU28e7VEaJnM76g3_MGp1LcWRD-3e/view?usp=sharing';
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