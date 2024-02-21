import {
    Image,
    Box,
    Heading,
    Stack,
    VStack,
    Text, TableContainer, Table, Thead, Th, Tbody, Tr, Td, Link, Divider,
} from '@chakra-ui/react';
import ExampleExsiccata from '../figures/HUEFS0214753.jpg';
import ExsiccataResized from '../figures/HUEFS0214753.jpeg';
import ExsiccataMaskManual from '../figures/HUEFS0214753_mask_manual.jpg';
import ExsiccataMaskUNet from '../figures/HUEFS0214753_mask_unet.jpg';
import ExsiccataManual from '../figures/HUEFS0214753_manual.jpeg';
import ExsiccataUNet from '../figures/HUEFS0214753_unet.jpeg';
import '@fontsource/courier-prime';


function getExsiccataSegmentedUNet() {
    return (
        <Stack direction="row" spacing={4}>
            <VStack>
                <Text fontSize="2xl"> Image resized </Text>
                <Image src={ExsiccataResized}/>
            </VStack>
            <VStack>
                <Text fontSize="2xl"> Mask U-Net </Text>
                <Image src={ExsiccataMaskUNet}/>
            </VStack>
            <VStack>
                <Text fontSize="2xl"> Exsiccata segmented </Text>
                <Image src={ExsiccataUNet}/>
            </VStack>
        </Stack>
    );
}

function getExsiccataSegmentedManual() {
    return (
        <Stack direction="row" spacing={4}>
            <VStack>
                <Text fontSize="2xl"> Image resized </Text>
                <Image src={ExsiccataResized}/>
            </VStack>
            <VStack>
                <Text fontSize="2xl"> Mask manual </Text>
                <Image src={ExsiccataMaskManual}/>
            </VStack>
            <VStack>
                <Text fontSize="2xl"> Exsiccata segmented</Text>
                <Image src={ExsiccataManual}/>
            </VStack>
        </Stack>
    );
}

function getTableUNet() {
    const values = [
        {hyperparameter: "Batch", value: 4},
        {hyperparameter: "Epoch", value: 75},
        {hyperparameter: "Learning rate", value: 0.001}
    ]
    return <TableContainer>
        <Table size='sm'>
            <Thead>
                <Th>Hyperparameter</Th>
                <Th>Value</Th>
            </Thead>
            <Tbody>
                {values.map((v) => {
                    return (
                        <Tr key={v.hyperparameter}>
                            <Td>{v.hyperparameter}</Td>
                            <Td>{v.value}</Td>
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    </TableContainer>;
}

export default function Images() {
    return (
        // <Box ml={2}>
        <Box ml={2}>
            <Stack direction="column" spacing={5}>
                <Text align="justify">
                    All the images used in the experiments are available in <Link style={{color: "blue"}}
                                                                                  href="https://specieslink.net/">speciesLink</Link>.
                    It's collected in Brazil and selected with the help of a specialist. In this link, we make available
                    the list of samples used. Figure 1 is an example of the exsiccata of Herbaria.
                </Text>
                <Box width="40%">
                    <Text align="center"><strong>Figure 1</strong> This exsiccata from Herbarium is an example of
                        Piperaceae
                        family.</Text>
                    <Image aspectRatio={3 / 4} src={ExampleExsiccata}/>
                </Box>
                <Divider orientation='horizontal'/>
                <Heading size="lg" mb={5}>Images segmented</Heading>
                <Text align="justify">
                    The available samples were segmented using the U-Net. The train was made using the dataset [1]. The
                    best hyperparameters of U-Net are available in Table 1.
                </Text>
                <Box width="40%" alignItems="center">
                    <Text align="center">
                        <strong>Table 1</strong>
                    </Text>
                    {getTableUNet()}
                </Box>
                <Box width="60%">
                    <Text align="center">
                        <strong>Figure 2</strong>
                    </Text>
                    {getExsiccataSegmentedUNet()}
                    {getExsiccataSegmentedManual()}
                </Box>
            </Stack>
        </Box>
    );
}