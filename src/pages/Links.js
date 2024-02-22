import {getDataset as getDatasetBr} from '../utils/datasetbr';
import {getDataset as getDatasetPr} from '../utils/datasetpr';
// import {getDataset as getDatasetRegion} from '../utils/datasetRegion';
import React, {useState} from 'react';
import {
    Alert,
    AlertTitle,
    AlertIcon,
    AlertDescription,
    Link,
    Box,
    FormLabel,
    Select,
    Stack,
    FormControl,
    Text,
    Button, Table, TableContainer, Thead, Tr, Th, Tbody, Td, Divider, Heading, UnorderedList,
} from '@chakra-ui/react';
import '@fontsource/courier-prime';
import {getStructureOfImagesZip, getStructureOfFeaturesZip} from "./StructureFile";
import * as ReactDOM from 'react-dom/client';
import * as d3 from 'd3';
import BrSamples5 from '../data/br_dataset/5/info_samples.csv';
import BrLevels5 from '../data/br_dataset/5/info_samples.csv';
import BrDataset5 from '../data/br_dataset/5/info_dataset.csv';
import BrSamples10 from '../data/br_dataset/10/info_samples.csv';
import BrLevels10 from '../data/br_dataset/10/info_samples.csv';
import BrDataset10 from '../data/br_dataset/10/info_dataset.csv';
import BrSamples20 from '../data/br_dataset/20/info_samples.csv';
import BrLevels20 from '../data/br_dataset/20/info_samples.csv';
import BrDataset20 from '../data/br_dataset/20/info_dataset.csv';
import PrSamples5 from '../data/pr_dataset/5/info_samples.csv';
import PrLevels5 from '../data/pr_dataset/5/info_samples.csv';
import PrDataset5 from '../data/pr_dataset/5/info_dataset.csv';
import PrSamples10 from '../data/pr_dataset/10/info_samples.csv';
import PrLevels10 from '../data/pr_dataset/10/info_samples.csv';
import PrDataset10 from '../data/pr_dataset/10/info_dataset.csv';
import PrSamples20 from '../data/pr_dataset/20/info_samples.csv';
import PrLevels20 from '../data/pr_dataset/20/info_samples.csv';
import PrDataset20 from '../data/pr_dataset/20/info_dataset.csv';
import RegionsNorthSamples5 from '../data/regions_dataset/North/5/info_samples.csv';
import RegionsNorthLevels5 from '../data/regions_dataset/North/5/info_samples.csv';
import RegionsNorthDataset5 from '../data/regions_dataset/North/5/info_dataset.csv';
import RegionsNorthSamples10 from '../data/regions_dataset/North/10/info_samples.csv';
import RegionsNorthLevels10 from '../data/regions_dataset/North/10/info_samples.csv';
import RegionsNorthDataset10 from '../data/regions_dataset/North/10/info_dataset.csv';
import RegionsNorthSamples20 from '../data/regions_dataset/North/20/info_samples.csv';
import RegionsNorthLevels20 from '../data/regions_dataset/North/20/info_samples.csv';
import RegionsNorthDataset20 from '../data/regions_dataset/North/20/info_dataset.csv';
import RegionsNortheastSamples5 from '../data/regions_dataset/Northeast/5/info_samples.csv';
import RegionsNortheastLevels5 from '../data/regions_dataset/Northeast/5/info_samples.csv';
import RegionsNortheastDataset5 from '../data/regions_dataset/Northeast/5/info_dataset.csv';
import RegionsNortheastSamples10 from '../data/regions_dataset/Northeast/10/info_samples.csv';
import RegionsNortheastLevels10 from '../data/regions_dataset/Northeast/10/info_samples.csv';
import RegionsNortheastDataset10 from '../data/regions_dataset/Northeast/10/info_dataset.csv';
import RegionsNortheastSamples20 from '../data/regions_dataset/Northeast/20/info_samples.csv';
import RegionsNortheastLevels20 from '../data/regions_dataset/Northeast/20/info_samples.csv';
import RegionsNortheastDataset20 from '../data/regions_dataset/Northeast/20/info_dataset.csv';
import RegionsMiddlewestSamples5 from '../data/regions_dataset/Middlewest/5/info_samples.csv';
import RegionsMiddlewestLevels5 from '../data/regions_dataset/Middlewest/5/info_samples.csv';
import RegionsMiddlewestDataset5 from '../data/regions_dataset/Middlewest/5/info_dataset.csv';
import RegionsMiddlewestSamples10 from '../data/regions_dataset/Middlewest/10/info_samples.csv';
import RegionsMiddlewestLevels10 from '../data/regions_dataset/Middlewest/10/info_samples.csv';
import RegionsMiddlewestDataset10 from '../data/regions_dataset/Middlewest/10/info_dataset.csv';
import RegionsMiddlewestSamples20 from '../data/regions_dataset/Middlewest/20/info_samples.csv';
import RegionsMiddlewestLevels20 from '../data/regions_dataset/Middlewest/20/info_samples.csv';
import RegionsMiddlewestDataset20 from '../data/regions_dataset/Middlewest/20/info_dataset.csv';
import RegionsSouthSamples5 from '../data/regions_dataset/South/5/info_samples.csv';
import RegionsSouthLevels5 from '../data/regions_dataset/South/5/info_samples.csv';
import RegionsSouthDataset5 from '../data/regions_dataset/South/5/info_dataset.csv';
import RegionsSouthSamples10 from '../data/regions_dataset/South/10/info_samples.csv';
import RegionsSouthLevels10 from '../data/regions_dataset/South/10/info_samples.csv';
import RegionsSouthDataset10 from '../data/regions_dataset/South/10/info_dataset.csv';
import RegionsSouthSamples20 from '../data/regions_dataset/South/20/info_samples.csv';
import RegionsSouthLevels20 from '../data/regions_dataset/South/20/info_samples.csv';
import RegionsSouthDataset20 from '../data/regions_dataset/South/20/info_dataset.csv';
import RegionsSoutheastSamples5 from '../data/regions_dataset/Southeast/5/info_samples.csv';
import RegionsSoutheastLevels5 from '../data/regions_dataset/Southeast/5/info_samples.csv';
import RegionsSoutheastDataset5 from '../data/regions_dataset/Southeast/5/info_dataset.csv';
import RegionsSoutheastSamples10 from '../data/regions_dataset/Southeast/10/info_samples.csv';
import RegionsSoutheastLevels10 from '../data/regions_dataset/Southeast/10/info_samples.csv';
import RegionsSoutheastDataset10 from '../data/regions_dataset/Southeast/10/info_dataset.csv';
import RegionsSoutheastSamples20 from '../data/regions_dataset/Southeast/20/info_samples.csv';
import RegionsSoutheastLevels20 from '../data/regions_dataset/Southeast/20/info_samples.csv';
import RegionsSoutheastDataset20 from '../data/regions_dataset/Southeast/20/info_dataset.csv';



const datasets = [
    {value: 'br', label: 'BR'},
    {value: 'pr', label: 'PR'},
    {value: 'regions', label: 'Regions'},
];

const types = [
    {value: 'features', label: 'Features'},
    {value: 'images', label: 'Images'}
];

const minimums = [
    {value: '5', label: '5'},
    {value: '10', label: '10'},
    {value: '20', label: '20'}
];

const colors = [
    {value: 'rgb', label: 'RGB'},
    {value: 'grayscale', label: 'GRAYSCALE'}
];

const sizes = [
    {value: '256', label: '256'},
    {value: '400', label: '400'},
    {value: '512', label: '512'}
];

const regions = [
    {value: 'north', label: 'North'},
    {value: 'northeast', label: 'Northeast'},
    {value: 'middlewest', label: 'Middle-west'},
    {value: 'south', label: 'South'},
    {value: 'southeast', label: 'Southeast'},
];

function datasetSampleBr(minimum) {
    switch(minimum){
        case "5":
            return BrSamples5;
        case "10":
            return BrSamples10;
        case "20":
            return BrSamples20;
        default:
            console.error("option invalid");
    }
}

function datasetSamplePr(minimum) {
    switch(minimum){
        case "5":
            return PrSamples5;
        case "10":
            return PrSamples10;
        case "20":
            return PrSamples20;
        default:
            console.error("option invalid");
    }
}


function datasetSampleChoose(dataset, minimum) {
    switch(dataset){
        case "br":
            return datasetSampleBr(minimum);
        case "pr":
            return datasetSamplePr(minimum);
        default:
            console.error("option invalid");

    }
}

function datasetInfoBr(minimum) {
    switch(minimum){
        case "5":
            return BrDataset5;
        case "10":
            return BrDataset10;
        case "20":
            return BrDataset20;
        default:
            console.error("option invalid");
    }
}

function datasetInfoPr(minimum) {
    switch(minimum){
        case "5":
            return PrDataset5;
        case "10":
            return PrDataset10;
        case "20":
            return PrDataset20;
        default:
            console.error("option invalid");
    }
}


function datasetInfoChoose(dataset, minimum) {
    switch(dataset){
        case "br":
            return datasetInfoBr(minimum);
        case "pr":
            return datasetInfoPr(minimum);
        default:
            console.error("option invalid");

    }
}

export default function Links() {
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );


    const [samples, setSamples] = useState([]);
    const [levels, setLevels] = useState(0);
    const [total, setTotal] = useState(0);
    function samplesTable() {
        return (
            <>
            <Heading>Samples used</Heading>
            <Text>This table shows a part of the samples used. More details in this <Link style={{color: "blue"}}>file</Link>.</Text>
            <Text>
            This other <Link style={{color: "blue"}}>file</Link> contains the species used in the dataset selected.
            </Text>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>seq</Th>
                            <Th>genus</Th>
                            <Th>specie</Th>
                            <Th>urls</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {samples.slice(0, 50).map((s) => {
                            return (<Tr key={s.seq}>
                                <Td>{s.seq}</Td>
                                <Td>{s.genus_trusted}</Td>
                                <Td>{s.specific_epithet_trusted}</Td>
                                <Td>{s.urls}</Td>
                            </Tr>);
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
            </>
        );
    }
    const [selectsEmpty, setSelectsEmpty] = useState("");
    const handleClick = () => {
        if (dataset === '' || type === '' || minimum === '' || color === '' || size === '') {// || region===''){
            setSelectsEmpty(true);
        } else {
            setSelectsEmpty(false);
            let datasetSample = datasetSampleChoose(dataset, minimum);
            d3.csv(datasetSample).then((datas) => {
                datas.map((d) => {
                    samples.push({
                        seq: d.seq,
                        genus_trusted: d.genus_trusted,
                        specific_epithet_trusted: d.specific_epithet_trusted,
                        urls: d.urls.toString()
                    });
                })
            })
            let datasetInfo = datasetInfoChoose(dataset, minimum);
            d3.csv(datasetInfo).then((datas) => {
                datas.map((d) => {
                    setLevels(d.levels);
                    setTotal(d.total);
                });
            })
        }

    };
    const [dataset, setDataset] = useState("");
    const [disableRegionSelect, setDisableRegionSelect] = useState(true);
    const handleChangeDataset = (event) => {
        setDataset(event.target.value);
        if (event.target.value==="regions"){
            setDisableRegionSelect(false);
        } else {
            setDisableRegionSelect(true);
        }
    };
    const [type, setType] = useState("");
    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const [minimum, setMinimum] = useState("");
    const handleChangeMinimum = (event) => {
        setMinimum(event.target.value);
    };
    const [color, setColor] = useState("");
    const handleChangeColor = (event) => {
        setColor(event.target.value);
    };
    const [size, setSize] = useState("");
    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };
    const [region, setRegion] = useState("");
    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    };
    const getLink = () => {
        switch (dataset) {
            case 'pr':
                return getDatasetPr(color, minimum, size, type);
            case 'br':
                return getDatasetBr(color, minimum, size, type);
            default:
                console.error('Dataset is invalid');
        }
    };
    const showAlert = () => {
        return (<Alert status="error" justifyContent="center">
            <AlertIcon/>
            <AlertTitle>Selects are empty!</AlertTitle>
            <AlertDescription>You must select the options above.</AlertDescription>
        </Alert>);
    };
    const showLink = () => {
        return (
            <Alert status="info" justifyContent="center">
                <AlertIcon/>
                <AlertTitle>I found the link!</AlertTitle>
                <AlertDescription>Your <Link href={getLink()} isExternal>link</Link> to download. This dataset contains <strong>{total}</strong> samples divided
                    in <strong>{levels}</strong> species.</AlertDescription>
            </Alert>
        );
    };


    function selects(handle, items, placeholder, title, value, disable=false) {
        return <FormControl>
            <FormLabel>{title}</FormLabel>
            <Select placeholder={placeholder} onChange={handle} value={value} isDisabled={disable}>
                {items.map((i) => {
                    return <option key={value} value={i.value}>{i.label}</option>;
                })}
            </Select>
        </FormControl>;
    }


    return (
        <Box>
            <Stack my={5}>
                <Stack direction="row">

                    {selects(handleChangeDataset, datasets, "Choose the dataset", "Dataset", dataset)}
                    {selects(handleChangeType, types, "Choose the type", "Images or features", type)}
                    {selects(handleChangeMinimum, minimums, "Choose the minimum", "Dataset", minimum)}
                </Stack>
                <Stack direction="row">
                    {selects(handleChangeColor, colors, "Choose the color", "Color", color)}
                    {selects(handleChangeSize, sizes, "Choose the size", "Image size", size)}
                    {selects(handleChangeRegion, regions, "Choose the region", "Region", region, disableRegionSelect)}
                </Stack>
                {selectsEmpty === false && showLink()}
                {selectsEmpty && showAlert()}
                <Button onClick={handleClick}>Get the URL!</Button>
                <Divider my={2}/>
                {type === "images" && getStructureOfImagesZip()}
                {type === "features" && getStructureOfFeaturesZip()}
                <Divider my={2}/>
                {selectsEmpty === false && samplesTable()}
            </Stack>
        </Box>
    );
}