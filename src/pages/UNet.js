import {
    Box,
    Heading, Image,
    Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr, VStack
} from "@chakra-ui/react";
import React from "react";
import ExsiccataResized from '../figures/HUEFS0214753.jpeg';
import ExsiccataMaskManual from '../figures/HUEFS0214753_mask_manual.jpg';
import ExsiccataMaskUNet from '../figures/HUEFS0214753_mask_unet.jpg';
import ExsiccataManual from '../figures/HUEFS0214753_manual.jpeg';
import ExsiccataUNet from '../figures/HUEFS0214753_unet.jpeg';

class UNet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: "Main hyperparameters used in the U-Net",
            text: "The available samples were segmented using the U-Net. The train was made using the dataset [1].",
            hyperparameters: [
                {name: "Batch", value: 4},
                {name: "Epoch", value: 75},
                {name: "Learning rate", value: 0.001}
            ],
            theads: ["Hyperparameter", "Value"]
        };
    }

    layoutOriginalMaskSegmented(exsiccataResized, exsiccataMask, exsiccataSegmented, manual=true){
        return (
            <Stack direction="row" spacing={4}>
                <VStack>
                    <Text fontSize="2xl"> Image resized </Text>
                    <Image src={exsiccataResized}/>
                </VStack>
                <VStack>
                    <Text fontSize="2xl"> Mask {manual ? "manual" : "U-Net"} </Text>
                    <Image src={exsiccataMask}/>
                </VStack>
                <VStack>
                    <Text fontSize="2xl" noOfLines={1}> Exsiccata segmented </Text>
                    <Image src={exsiccataSegmented}/>
                </VStack>
            </Stack>
        );
    }

    table() {
        return (
            <Box width="40%" alignItems="center">
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption><strong>Table 1</strong>: {this.state.caption}</TableCaption>
                        <Thead>
                            {this.state.theads.map(th => <Th key={th}>{th}</Th>)}
                        </Thead>
                        <Tbody>
                            {this.state.hyperparameters.map((v) => {
                                return (
                                    <Tr key={v.name}>
                                        <Td>{v.name}</Td>
                                        <Td>{v.value}</Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }

    render() {
        return (
            <>
                <Heading size="lg" mb={5}>Images segmented</Heading>
                <Text>
                    {this.state.text}
                </Text>
                {this.table()}
                {this.layoutOriginalMaskSegmented(ExsiccataResized, ExsiccataMaskUNet, ExsiccataUNet, false)}
                {this.layoutOriginalMaskSegmented(ExsiccataResized, ExsiccataMaskManual, ExsiccataManual)}
            </>
        );
    };
}

export default UNet;