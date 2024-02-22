import {
    Image,
    Box,
    Heading,
    Stack,
    VStack,
    TableCaption,
    Text, TableContainer, Table, Thead, Th, Tbody, Tr, Td, Link, Divider,
} from '@chakra-ui/react';
import ExampleExsiccata from '../figures/HUEFS0214753.jpg';
import ExsiccataResized from '../figures/HUEFS0214753.jpeg';
import ExsiccataMaskManual from '../figures/HUEFS0214753_mask_manual.jpg';
import ExsiccataMaskUNet from '../figures/HUEFS0214753_mask_unet.jpg';
import ExsiccataManual from '../figures/HUEFS0214753_manual.jpeg';
import ExsiccataUNet from '../figures/HUEFS0214753_unet.jpeg';
import '@fontsource/courier-prime';
import {captionFigure, introductionTextPage, unetText} from "./texts/TextImage";

function layoutExampleExsiccata(exsiccataResized, exsiccataMask, exsiccataUNet, isManual = false) {
    return (
        <Stack direction="row" spacing={4}>
            <VStack>
                <Text fontSize="2xl"> Image resized </Text>
                <Image src={exsiccataResized}/>
            </VStack>
            <VStack>
                <Text fontSize="2xl"> Mask {isManual ? "manual" : "U-Net"} </Text>
                <Image src={exsiccataMask}/>
            </VStack>
            <VStack>
                <Box width="110%">
                    <Text fontSize="2xl"> Exsiccata segmented </Text>
                </Box>
                <Image src={exsiccataUNet}/>
            </VStack>
        </Stack>
    );
}

function tableUNet() {
    const hyperparameters = [
        {hyperparameter: "Batch", value: 4},
        {hyperparameter: "Epoch", value: 75},
        {hyperparameter: "Learning rate", value: 0.001}
    ];
    return (<TableContainer>
        <Table size='sm'>
            <TableCaption><strong>Table 1</strong>: Main hyperparameters used in the U-Net</TableCaption>
            <Thead>
                <Th>Hyperparameter</Th>
                <Th>Value</Th>
            </Thead>
            <Tbody>
                {
                    hyperparameters.map((v) => {
                        return (
                            <Tr key={v.hyperparameter}>
                                <Td>{v.hyperparameter}</Td>
                                <Td>{v.value}</Td>
                            </Tr>
                        );
                    })}
            </Tbody>
        </Table>
    </TableContainer>);
}

export default function Images() {
    return (
        <Box ml={2}>
            <Stack direction="column" spacing={5}>
                {introductionTextPage}
                <Box width="50%" align="center" justifyContent="center">
                    {captionFigure}
                    <Image width="60%" height="60%" src={ExampleExsiccata}/>
                </Box>
                <Divider orientation='horizontal'/>
                <Heading size="lg" mb={5}>Images segmented</Heading>
                {unetText}
                <Box width="40%" alignItems="center">
                    {tableUNet()}
                </Box>
                <Box width="40%">
                    <Text align="center">
                        <strong>Figure 2</strong>
                    </Text>
                    {layoutExampleExsiccata(ExsiccataResized, ExsiccataMaskUNet, ExsiccataUNet)}
                    {layoutExampleExsiccata(ExsiccataResized, ExsiccataMaskManual, ExsiccataMaskManual, true)}
                </Box>
            </Stack>
        </Box>
    );
}