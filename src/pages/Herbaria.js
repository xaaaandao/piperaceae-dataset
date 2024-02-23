// import useFetch from "../utils/useFetch";
// import {Text, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
// import React from "react";
//
// export default function Herbaria(){
//     function TableHerbaria() {
//         const options = {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         };
//         const url = 'http://localhost:3000/piperaceae-dataset/data/herbaria.json';
//         const { data, error, loading } = useFetch(url, options);
//         if (loading) {
//             return <p>Loading...</p>;
//         }
//         if (error) {
//             return <p>An error occurred: {error.message}</p>;
//         }
//         if (data) {
//             return (
//                 <TableContainer>
//                     <Table variant='striped' colorScheme='green'>
//                         <Thead>
//                             <Th></Th>
//                             <Th></Th>
//                             <Th></Th>
//                         </Thead>
//                         <Tbody>
//                             {data.slice(0, 50).map((d) => {
//                                 return (<Tr key={d.acronym}>
//                                     <Td>{d.acronym}</Td>
//                                     <Td>{d.samples}</Td>
//                                     <Td>{d.name}</Td>
//                                 </Tr>);
//                             })}
//                         </Tbody>
//                     </Table>
//                 </TableContainer>
//             );
//         }
//         return null;
//     }
//     return(
//         <>
//             <Text> </Text>
//             {TableHerbaria()}
//         </>
//     );
// }

class Herbaria extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            introduction: "This table contains all herbaria selected.",
            theads: ["Acronym", "Count", "Name"]
        }
    }

    // render() {
    //     return (
    //
    //     );
    // }
}

export default Herbaria;