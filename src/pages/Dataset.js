import {
    Accordion, AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    FormControl,
    FormLabel,
    Select,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import React from "react";
import { toast } from "react-toastify";

class Dataset extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            introduction: "This tab provides data of Samples ",
            types: ["features", "images"],
            colors: ["RGB", "grayscale"],
            minimums: [5, 10, 20],
            sizes: [256, 400, 512],
            regions: ["North", "Northeast", "Middlewest", "South", "Southeast"],
            type: "",
            color: "",
            minimum: "",
            size: "",
            region: "",
            samples: [],
            species: [],
            thsSamples: ["Seq", "Genus", "Species", "URLs"],
            thsSpecies: ["Species", "Count"],
        }
    }

    fetchData = async (name, url) => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            this.setState({[name]: jsonData});
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    handleSelectChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

     handleClick(event) {
        if (this.state.size === "" || this.state.type === "" || this.state.color === "" || this.state.minimum === ""){
            toast.error("Selects are empty!");
        }
        if (this.state.size !== "" && this.state.type !== "" && this.state.color !== "" && this.state.minimum !== ""){
            this.dataLevels();
            this.dataSamples();
        }
    }

    dataSamples() {
        const url = `http://localhost:3000/piperaceae-dataset/data/${this.props.dataset.toString().toLowerCase()}_dataset/${this.state.minimum}/info_samples.json`;
        this.fetchData("samples", url);
    }

    dataLevels() {
        const url = `http://localhost:3000/piperaceae-dataset/data/${this.props.dataset.toString().toLowerCase()}_dataset/${this.state.minimum}/info_levels.json`;
        this.fetchData("species", url);
    }

    layoutSelect(handle, label, name, options, placeholder) {
        return (
            <Stack width="full">
                <FormLabel>{label}</FormLabel>
                <Select placeholder={placeholder} onChange={handle} name={name}>
                    {options.map((o) => {
                        return <option key={o} value={o.toString().toLowerCase()}>{o}</option>;
                    })}
                </Select>
            </Stack>);
    }

    setSelects() {
        return (
            <Stack direction="row">
                {this.layoutSelect(this.handleSelectChange, "Image or features", "type", this.state.types, "Choose the type")}
                {this.layoutSelect(this.handleSelectChange, "Color", "color", this.state.colors, "Choose the color")}
                {this.layoutSelect(this.handleSelectChange, "Minimum", "minimum", this.state.minimums, "Choose the minimums")}
                {this.layoutSelect(this.handleSelectChange, "Image size", "size", this.state.sizes, "Choose the sizes")}
                {/*{this.props.dataset==="Regions" && this.layoutSelect(this.handleSelectChange, "Regions", "region", this.state.regions, "Choose the regions")}*/}
            </Stack>
        );
    }

    accordionTable(textAccordion, textInnerAccordion, samples=true){
        return (
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{bg: 'green', color: 'white'}}>
                        <Box as="span" flex='1' textAlign='left'>
                            {textAccordion}
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Text>{textInnerAccordion}</Text>
                    {samples?this.tableSamples():this.tableSpecies()}
                </AccordionPanel>
            </AccordionItem>
        );
    }

    tableSamples() {
        return (<TableContainer>
            <Table variant='striped' colorScheme='green'>
                <Thead>
                    {this.state.thsSamples.map(th => <Th>{th}</Th>)}
                </Thead>
                <Tbody>
                    {this.state.samples.slice(0, 50).map((d) => {
                        return (<Tr key={d.seq}>
                            <Td>{d.seq}</Td>
                            <Td>{d.genus_trusted}</Td>
                            <Td>{d.specific_epithet_trusted}</Td>
                            <Td>{d.urls.toString()}</Td>
                        </Tr>);
                    })}
                </Tbody>
            </Table>
        </TableContainer>);
    }

    tableSpecies() {
        return <TableContainer>
            <Table variant='striped' colorScheme='green'>
                <Thead>
                    {this.state.thsSpecies.map(th => <Th>{th}</Th>)}
                </Thead>
                <Tbody>
                    {this.state.species.slice(0, 50).map((d) => {
                        return (<Tr key={d.seq}>
                            <Td>{d.levels}</Td>
                            <Td>{d.count}</Td>
                        </Tr>);
                    })}
                </Tbody>
            </Table>
        </TableContainer>;
    }

    showLink() {
        return (
            <Alert status="info" justifyContent="center">
                <AlertIcon/>
                <AlertTitle>I found the link!</AlertTitle>
                <AlertDescription>Link to download.</AlertDescription>
            </Alert>);
    }

    render() {
        return (
            <FormControl>
                <Text>{this.state.introduction} {this.props.dataset}.</Text>
                <Stack my={5}>
                    {this.setSelects()}
                    <Button onClick={this.handleClick}>Get the link!</Button>
                    <Accordion allowToggle>
                        {this.accordionTable("See any samples used.","", )}
                        {this.accordionTable("See any species used.","", false)}
                    </Accordion>
                </Stack>
            </FormControl>
        );
    }
}

export default Dataset;