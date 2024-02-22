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
import * as d3 from 'd3';
import BrSamples5 from '../data/br_dataset/5/info_samples.csv';
import BrDataset5 from '../data/br_dataset/5/info_dataset.csv';

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


function TheadSamplesTable() {
    return <Tr>
        <Th>seq</Th>
        <Th>genus_trusted</Th>
        <Th>specific_epithet_trusted</Th>
    </Tr>;
}

export default function Links() {
    const [samples, setSamples] = useState([]);
    const [levels, setLevels] = useState(0);
    const [total, setTotal] = useState(0);
    const samplesTable = () => {
        function getThead() {
            return <Tr>
                <Th>seq</Th>
                <Th>genus</Th>
                <Th>specie</Th>
                <Th>urls</Th>
            </Tr>;
        }

        function getSamples() {
            return samples.slice(0, 10).map((s) => {
                return (<Tr key={s.seq}>
                    <Td>{s.seq}</Td>
                    <Td>{s.genus_trusted}</Td>
                    <Td>{s.specific_epithet_trusted}</Td>
                    <Td>{s.urls}</Td>
                </Tr>);
            });
        }

        function getSamplesT() {
            return (
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <Thead>
                            {getThead()}
                        </Thead>
                        <Tbody>
                            {getSamples()}
                        </Tbody>
                    </Table>
                </TableContainer>);
        }

        return (
            <>
                <Heading>Samples used</Heading>
                <Text>This table shows a part of the samples used. More details download this <Link
                    style={{color: "blue"}}>file</Link>.</Text>
                {getSamplesT()}
            </>
        );
    }
    const [selectsEmpty, setSelectsEmpty] = useState('');
    const handleClick = () => {
        if (dataset === '' || type === '' || minimum === '' || color === '' || size === '') {// || region===''){
            setSelectsEmpty(true);
        } else {
            setSelectsEmpty(false);
            d3.csv(BrSamples5).then((datas) => {
                datas.map((d) => {
                    samples.push({
                        seq: d.seq,
                        genus_trusted: d.genus_trusted,
                        specific_epithet_trusted: d.specific_epithet_trusted,
                        urls: d.urls.toString()
                    });
                })
            })
            d3.csv(BrDataset5).then((datas) => {
                datas.map((d) => {
                    setLevels(d.levels);
                    // console.log(d.total)
                    setTotal(d.total);
                });
            })
        }

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
                <AlertDescription>Your <Link href={getLink()} isExternal>link</Link> to download. This dataset contains <strong>{total}</strong> samples divided
                    in <strong>{levels}</strong> species.</AlertDescription>
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