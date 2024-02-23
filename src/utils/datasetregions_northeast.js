import getImages from './images/datasetregions_northeast';
import getFeatures from './features/datasetregions_northeast';

export function getDataset(color, minimum, size, type) {
    switch (type) {
        case 'images':
            return getImages(color, minimum, size);
        case 'features':
            return getFeatures(color, minimum, size);
        default:
            console.error('type is invalid.');
    }
}