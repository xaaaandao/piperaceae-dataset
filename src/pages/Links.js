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
    Button,
} from '@chakra-ui/react';
import '@fontsource/courier-prime';
import {getStructureOfImagesZip, getStructureOfFeaturesZip} from "./StructureFile";
import * as d3 from 'd3';
import dzinho from '../a.csv';

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


export default function Links() {
    const [selectsEmpty, setSelectsEmpty] = useState('');
    const handleClick = () => {
        if (dataset === '' || type === '' || minimum === '' || color === '' || size === '') {// || region===''){
            setSelectsEmpty(true);
        } else {
            setSelectsEmpty(false);
        }
        d3.csv(dzinho).then((data) => {
            // data.map((d) => {
            //     console.log(d);
            // });
            for (let i=1; i<data.length;i++){
                console.log(data[i]);
            }
        })
    };
    const [dataset, setDataset] = useState('');
    const handleChangeDataset = (event) => {
        setDataset(event.target.value);
    };
    const [type, setType] = useState('');
    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const [minimum, setMinimum] = useState('');
    const handleChangeMinimum = (event) => {
        setMinimum(event.target.value);
    };
    const [color, setColor] = useState('');
    const handleChangeColor = (event) => {
        setColor(event.target.value);
    };
    const [size, setSize] = useState('');
    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };
    const [region, setRegion] = useState('');
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
                <AlertDescription>Your <Link href={getLink()} isExternal>link</Link> to download.</AlertDescription>
            </Alert>
        );
    };


    function selects(handle, items, placeholder, title, value) {
        return <FormControl>
            <FormLabel>{title}</FormLabel>
            <Select placeholder={placeholder} onChange={handle} value={value}>
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
                    {selects(handleChangeRegion, regions, "Choose the region", "Region", region)}
                </Stack>
                {selectsEmpty === false && showLink()}
                {selectsEmpty && (showAlert())}
                <Button onClick={handleClick}>Get the URL!</Button>
                {getStructureOfImagesZip()}
                {getStructureOfFeaturesZip()}

            </Stack>
        </Box>

    );
}