import {getDataset as getDatasetBr} from '../utils/datasetbr';
import {getDataset as getDatasetPr} from '../utils/datasetpr';
// import {getDataset as getDatasetRegion} from '../utils/datasetRegion';
import React, {useEffect, useState} from 'react';
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
    Button, Divider
} from '@chakra-ui/react';
import '@fontsource/courier-prime';
import {getStructureOfImagesZip, getStructureOfFeaturesZip} from "./StructureFile";


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

function showAlert() {
    return (<Alert status="error" justifyContent="center">
        <AlertIcon/>
        <AlertTitle>Selects are empty!</AlertTitle>
        <AlertDescription>You must select the options above.</AlertDescription>
    </Alert>);
}

function showLink(color, dataset, minimum, size, type) {
    return (
        <Alert status="info" justifyContent="center">
            <AlertIcon/>
            <AlertTitle>I found the link!</AlertTitle>
            <AlertDescription>Your <Link href={getLink(color, dataset, minimum, size, type)} isExternal>link</Link> to
                download.</AlertDescription>
        </Alert>);
}

function getLink(color, dataset, minimum, size, type) {
    switch (dataset) {
        case 'br':
            return getDatasetBr(color, minimum, size, type);
        case 'pr':
            return getDatasetPr(color, minimum, size, type);
        default:
            console.error('option invalid');
    }
}

function selectsAreEmpty(color, dataset, minimum, size, type) {
    return dataset === '' || type === '' || minimum === '' || color === '' || size === '';
}

function selectBase(handle, items, placeholder, title, value, disable = false) {
    return <FormControl>
        <FormLabel>{title}</FormLabel>
        <Select placeholder={placeholder} onChange={handle} value={value} isDisabled={disable}>
            {items.map((i) => {
                return <option key={value} value={i.value}>{i.label}</option>;
            })}
        </Select>
    </FormControl>;
}



export default function Datasets() {
    const [data,setData] = useState([]);
    const [selectsEmpty, setSelectsEmpty] = useState('');
    const [dataset, setDataset] = useState("");
    const [disableRegionSelect, setDisableRegionSelect] = useState(true);
    const [type, setType] = useState("");
    const [minimum, setMinimum] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [region, setRegion] = useState("");

    const handleClick = () => {
        if (selectsAreEmpty(color, dataset, minimum, size, type))
            setSelectsEmpty(true);
        else
            setSelectsEmpty(false);
    };


    const handleChangeDataset = (event) => {
        setDataset(event.target.value);
        setDisableRegionSelect(event.target.value !== "regions");
    };

    const handleChangeType = (event) => {
        setType(event.target.value);
    };

    const handleChangeMinimum = (event) => {
        setMinimum(event.target.value);
    };

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    };

    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };

    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    };

    const getData = ()=>{
        const header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        fetch('http://localhost:3000/piperaceae-dataset/data/br_dataset/5/info_samples.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    };

    useEffect(() => {
        getData()
    }, []);

    return (
        <Box>
            <Stack my={5}>
                <Stack direction="row">
                    {selectBase(handleChangeDataset, datasets, "Choose the dataset", "Dataset", dataset)}
                    {selectBase(handleChangeType, types, "Choose the type", "Images or features", type)}
                    {selectBase(handleChangeMinimum, minimums, "Choose the minimum", "Dataset", minimum)}
                </Stack>
                <Stack direction="row">
                    {selectBase(handleChangeColor, colors, "Choose the color", "Color", color)}
                    {selectBase(handleChangeSize, sizes, "Choose the size", "Image size", size)}
                    {selectBase(handleChangeRegion, regions, "Choose the region", "Region", region, disableRegionSelect)}
                </Stack>
                {selectsEmpty === false && showLink()}
                {selectsEmpty && (showAlert())}
                <Button onClick={handleClick}>Get the URL!</Button>
                <Divider my={2}/>
                {type === "images" && getStructureOfImagesZip()}
                {type === "features" && getStructureOfFeaturesZip()}
                {data.map((d) => {
                    console.log(d);
                })}
            </Stack>
        </Box>
    );
}