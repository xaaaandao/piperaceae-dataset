import {Text, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";

class Herbaria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "This table contains all herbaria selected.",
            url: "http://localhost:3000/piperaceae-dataset/data/herbaria.json",
            theads: ["Acronym", "Count", "Name"],
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch(this.state.url);
            const jsonData = await response.json();
            this.setState({ data: jsonData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    tableHerbaria() {
        return (
            <TableContainer>
                <Table variant='striped' colorScheme='green'>
                    <Thead>
                        {this.state.theads.map(th => <Th>{th}</Th>)}
                    </Thead>
                    <Tbody>
                        {this.state.data.slice(0, 50).map((d) => {
                            return (<Tr key={d.acronym}>
                                <Td>{d.acronym}</Td>
                                <Td>{d.samples}</Td>
                                <Td>{d.name}</Td>
                            </Tr>);
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        );
    }

    render() {
        return (
            <>
                <Text>{this.state.introduction}</Text>
                {this.tableHerbaria()}
            </>
        );
    }
}

export default Herbaria;