import getImages from './images/datasetregions_north';
import getFeatures from './features/datasetregions_north';

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