function getImagesRgb256(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1ZMZXdlO-ibHCumH4c1zsME7NdN5xji7V/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1uxlmYuVp43MRyIMGiAo0zpqrfn7spaWd/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1IWX8Cpo0i8bCNbzB8dygvzbU8lDqPByA/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesRgb400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1y0TQQZED1mxI1SbmEz6QyFyYqVBuy3c5/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1zc50itAKhlhDJgLScxnLtAeF2oa_oxpy/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1sNW1RehxkrKW4MZsHyz1c0QVxQPEJAvd/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}


function getImagesRgb512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1QAexLPhqKBXx4cMSTLoDCXaqPaMgAnUN/view?usp=drive_link';
        case '10':
            return 'https://drive.google.com/file/d/1DF9LCIUtz7i5xST2mlCc42GSsXrfYY7_/view?usp=drive_link';
        case '20':
            return 'https://drive.google.com/file/d/1wDEHx-vyhON-h9KZz3Ikpjnw2Q_V8zMg/view?usp=drive_link';
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
            return 'https://drive.google.com/file/d/1kmwhXA7hB-8hHxhnISBMgfIyjmkFu9vg/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/167kmTFZ0TwYiIJcvpGbkG9HMvbeoyMcV/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/156jPP5swQZgya4sKnQkHd-uxWLcI6H3l/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale400(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1omlswOVnekDntUAvncXgfB6_JoHubsPY/view?usp=sharing';
        case '10':
            return 'https://drive.google.com/file/d/1GdYlP6Flc9gsrnhsyPvOVKiK0EDDBj5h/view?usp=sharing';
        case '20':
            return 'https://drive.google.com/file/d/1D9KUPSGY_cEobc-nKskKQQN3nUvXb1s-/view?usp=sharing';
        default:
            console.log("option invalid");
    }
}

function getImagesGrayscale512(minimum) {
    switch (minimum) {
        case '5':
            return 'https://drive.google.com/file/d/1cuYEOWPzdOq37IJFX490IaU8NVkEivqW/view?usp=drive_link';
        case '10':
            return 'https://drive.google.com/file/d/1P0uNIbkMx6JKQnSvDrgyEzPGIUvo1PEB/view?usp=drive_link';
        case '20':
            return 'https://drive.google.com/file/d/1oNPpqCTBG6w0rkAJNnQ3GbSPU60Z-Aaw/view?usp=drive_link';
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