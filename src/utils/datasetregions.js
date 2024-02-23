import {getDataset as getDatasetNorth} from "./datasetregions_north";
import {getDataset as getDatasetNortheast} from "./datasetregions_northeast";
import {getDataset as getDatasetMiddlewest} from "./datasetregions_middlewest";
import {getDataset as getDatasetSouth} from "./datasetregions_south";
import {getDataset as getDatasetSoutheast} from "./datasetregions_southeast";

export function getDataset(color, minimum, region, size, type) {
    switch (region) {
        case 'North':
            return getDatasetNorth(color, minimum, size, type)
        case 'Northeast':
            return getDatasetNortheast(color, minimum, size, type)
        case 'Middlewest':
            return getDatasetMiddlewest(color, minimum, size, type)
        case 'South':
            return getDatasetSouth(color, minimum, size, type)
        case 'Southeast':
            return getDatasetSoutheast(color, minimum, size, type)
        default:
            console.error('region is invalid.');
    }
}