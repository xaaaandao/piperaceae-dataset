function getImagesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/14cLf7UPq5w9Jp6RXmaAPg0t-_fzaO-1I/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1LG07xZh1t-fF2okF7K-xj5Gq56M3Mmew/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1AGTg6gWZ6ghPk_9RgMWreSgnT4JtVLt-/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1T6LtraHVvcf5ui2z2CFBq8fA-hdJCei0/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1kc634xCq7IqDjmOzvU5xZvYa0afGBNDH/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1WvFEPvI1dI55Kj5-YKWeCZId3emiHiER/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}


function getImagesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1FeGBNmgSvo41NU_WiPM23NWE0i5Hft0N/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1f0J7wFUnCsdRpXOKoRovS_UrbAHbKAru/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1Gan7jR1_UVjP5ELrFGtkRB6vyZLsPpeI/view?usp=sharing';
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
            return 'https://drive.google.com/file/d/1naIkhGL4uvaoxbemLU53kLuWerElRldK/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1tL_j4P0lS9oSKlprhDlT_8tIiA6yTZC1/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1ofjjsuajI0iU2Q97YFv4LONOS5PrIK3P/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1T7sOZE8slXn-Or-rqyA25sO4VaUO17UA/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1kF7pG7Csjs6ZipuaRLNC_29YHmNjG4cn/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1VyzcbLKOge94cvaNHQYpudRgf_Zxc6IR/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1ntrvvbicYfqPzM06G_wsWTZPADaqxpzp/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1zrRX-UpZ0-rJKchSDoiy1IhVtjXQzaE4/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1oNEcOsgJyag_0FOo4ZgUBN1jXo6AC0if/view?usp=sharing';
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