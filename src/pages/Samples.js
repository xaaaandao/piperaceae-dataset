import {
    Accordion, AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle, Box, Button, Divider,
    FormControl,
    FormLabel, Menu, MenuButton, MenuItem, MenuList,
    Select,
    Stack, Table, TableContainer, Tbody, Td,
    Text, Th, Thead, Tr
} from "@chakra-ui/react";
import React, {useState} from "react";
import { toast } from "react-toastify";
import * as PropTypes from "prop-types";
import useFetch from "../utils/useFetch";

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

function showLink() {
    return (
        <Alert status="info" justifyContent="center">
            <AlertIcon/>
            <AlertTitle>I found the link!</AlertTitle>
            <AlertDescription>Link to download.</AlertDescription>
        </Alert>);
}

export default function Samples(dataset) {
    const [type, setType] = useState("");
    const [minimum, setMinimum] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [region, setRegion] = useState("");
    const [select, setSelect] = useState(false);
    const options = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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


    function selectsAreChosen() {
        return type === "" || minimum === "" || color === "" || size === "";
    }

    const handleClick = (event) => {
        setSelect(!selectsAreChosen())
        if (selectsAreChosen()){
            toast.error("Selects are empty!");
        }
    }

    function layoutSelect(handle, label, options, placeholder, value) {
        return (
            <Stack width="full">
                <FormLabel>{label}</FormLabel>
                <Select placeholder={placeholder} onChange={handle} value={value}>
                    {options.map((o) => {
                        return <option key={value} value={o.value}>{o.label}</option>;
                    })}
                </Select>
            </Stack>);
    }

    function TableSpecies() {
        const url = 'http://localhost:3000/piperaceae-dataset/data/br_dataset/5/info_levels.json';
        const { data, error, loading } = useFetch(url, options);
        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>An error occurred: {error.message}</p>;
        }
        if (data) {
            return (
                <TableContainer>
                    <Table variant='striped' colorScheme='green'>
                        <Thead>
                            <Th>Specie</Th>
                            <Th>Count</Th>
                        </Thead>
                        <Tbody>
                            {data.slice(0, 50).map((d) => {
                                console.log(d);
                                return (<Tr key={d.levels}>
                                    <Td>{d.levels}</Td>
                                    <Td>{d.count}</Td>
                                </Tr>);
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            );
        }
        return null;
    }
    function TableSamples() {
        const url = 'http://localhost:3000/piperaceae-dataset/data/br_dataset/5/info_samples.json';
        const { data, error, loading } = useFetch(url, options);
        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>An error occurred: {error.message}</p>;
        }
        if (data) {
            return (
                <TableContainer>
                    <Table variant='striped' colorScheme='green'>
                        <Thead>
                            <Th>Seq</Th>
                            <Th>Genus</Th>
                            <Th>Species</Th>
                            <Th>County</Th>
                            <Th>State</Th>
                            <Th>URLs</Th>
                        </Thead>
                        <Tbody>
                            {data.slice(0, 50).map((d) => {
                                return (<Tr key={d.seq}>
                                    <Td>{d.seq}</Td>
                                    <Td>{d.genus_trusted}</Td>
                                    <Td><Text as='i'>{d.specific_epithet_trusted}</Text></Td>
                                    <Td>{d.county}</Td>
                                    <Td>{d.state_province}</Td>
                                    <Td>{d.urls.toString()}</Td>
                                </Tr>);
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            );
        }
        return null;
    }

    return (
        <FormControl>
            <Text>This tab provides data of Samples .</Text>
            <Stack my={5}>
                <Stack direction="row">
                    {layoutSelect(handleChangeType, "Image or features", types, "Choose the type", type)}
                    {layoutSelect(handleChangeColor, "Color", colors, "Choose the color", color)}
                    {layoutSelect(handleChangeMinimum, "Minimum", minimums, "Choose the minimums", minimum)}
                    {layoutSelect(handleChangeSize, "Image size", sizes, "Choose the sizes", size)}
                </Stack>
                <Button onClick={handleClick}>Get the link!</Button>
                {select && showLink()}
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    See any samples used.
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text>All the samples used are available in this file.</Text>
                            {TableSamples()}
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    See any species chosen.
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text>All the species chosen are available in this file.</Text>
                            {TableSpecies()}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Stack>
        </FormControl>
    );
}