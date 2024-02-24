import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AlertIcon,
    AccordionItem,
    AccordionPanel,
    Alert,
    AlertDescription,
    AlertTitle,
    Box,
    Button,
    FormControl,
    FormLabel,
    Link,
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
import * as PropTypes from "prop-types";
import {getDataset as getDatasetBR} from "../utils/datasetbr";
import {getDataset as getDatasetPR} from "../utils/datasetpr";
import {getDataset as getDatasetRegions} from "../utils/datasetregions";


Link.propTypes = {
    style: PropTypes.shape({color: PropTypes.string}),
    href: PropTypes.any,
    children: PropTypes.node
};

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
            showLink: false
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
        if ((this.state.size === "" || this.state.type === "" || this.state.color === "" || this.state.minimum === "") && ((this.props.dataset==="Regions" && this.state.region===""))){
            toast.error("Selects are empty!");
            this.setState({showLink: false});
        }
        if ((this.state.size !== "" && this.state.type !== "" && this.state.color !== "" && this.state.minimum !== "") || (this.props.dataset==="Regions" && this.state.region!=="")){
            this.dataLevels();
            this.dataSamples();
            this.setState({showLink: true});
        }
    }

    dataSamples() {
        if(this.props.dataset==="Regions"){
            const url = `http://localhost:3000/piperaceae-dataset/data/${this.props.dataset.toString().toLowerCase()}_dataset/${this.state.region}/${this.state.minimum}/info_samples.json`;
            this.fetchData("samples", url);
        } else {
            const url = `http://localhost:3000/piperaceae-dataset/data/${this.props.dataset.toString().toLowerCase()}_dataset/${this.state.minimum}/info_samples.json`;
            this.fetchData("samples", url);
        }
    }

    dataLevels() {
         if(this.props.dataset==="Regions"){
             const url = `http://localhost:3000/piperaceae-dataset/data/${this.props.dataset.toString().toLowerCase()}_dataset/${this.state.region}/${this.state.minimum}/info_levels.json`;
             this.fetchData("species", url);
         } else {
             const url = `http://localhost:3000/piperaceae-dataset/data/${this.props.dataset.toString().toLowerCase()}_dataset/${this.state.minimum}/info_levels.json`;
             this.fetchData("species", url);
         }
    }

    layoutSelect(handle, label, name, options, placeholder) {
        return (
            <Stack width="full">
                <FormLabel>{label}</FormLabel>
                <Select placeholder={placeholder} onChange={handle} name={name}>
                    {options.map((o) => {
                        return <option key={o} value={o}>{o}</option>;
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
                {this.props.dataset==="Regions" && this.layoutSelect(this.handleSelectChange, "Regions", "region", this.state.regions, "Choose the regions")}
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
                            <Td><Text as="i">{d.specific_epithet_trusted}</Text></Td>
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
                            <Td><Text as="i">{d.levels}</Text></Td>
                            <Td>{d.count}</Td>
                        </Tr>);
                    })}
                </Tbody>
            </Table>
        </TableContainer>;
    }



    getLink() {
        switch(this.props.dataset){
            case "BR":
                return getDatasetBR(this.state.color, this.state.minimum, this.state.size, this.state.type);
            case "PR":
                return getDatasetPR(this.state.color, this.state.minimum, this.state.size, this.state.type);
            case "Regions":
                return getDatasetRegions(this.state.color, this.state.minimum, this.state.region, this.state.size, this.state.type);
            default:
                console.error("dataset is invalid");
        }
    }

    showLink() {
        return (
            <Alert status="info" justifyContent="center">
                <AlertIcon/>
                <AlertTitle>I found the link!</AlertTitle>
                <AlertDescription><Link href={this.getLink()} style={{color: "blue"}}  isExternal>Link</Link> to download.</AlertDescription>
            </Alert>);
    }

    render() {
        return (
            <FormControl>
                <Text>{this.state.introduction} {this.props.dataset}.</Text>
                <Stack my={5}>
                    {this.setSelects()}
                    {this.state.showLink && this.showLink()}
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