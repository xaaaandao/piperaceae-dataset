import {Box, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {AiFillFolderOpen} from "react-icons/ai";

function getFolder(isSubFolder, text) {
    return <HStack paddingLeft={isSubFolder * 10}>
        <AiFillFolderOpen/> <Text style={{fontFamily: "Courier Prime"}}> {text} </Text>
    </HStack>;
}

function getStructure(items, type) {
    return <Box>
        <Heading>
            Structure file
        </Heading>
        <Text>
            The structure of the zip {type} file:
        </Text>
        <Box style={{backgroundColor: "#F6F6F6"}}>
            <VStack my={4} alignItems="left">
                {items.map((i) => {
                    return getFolder(i.isSubFolder, i.name);
                })}
            </VStack>
        </Box>
    </Box>;
}


export function getStructureOfFeaturesZip() {
    const features = [
        {isSubFolder: 0, name: 'a.zip'},
        {isSubFolder: 1, name: 'mobilenetv2'},
        {isSubFolder: 1, name: 'resnet50v2'},
        {isSubFolder: 1, name: 'vgg16'}
    ];
    return getStructure(features, 'features');
}

export function getStructureOfImagesZip() {
    const images = [
        {isSubFolder: 0, name: 'a.zip'},
        {isSubFolder: 1, name: 'specie-name-01'},
        {isSubFolder: 1, name: 'specie-name-02'},
        {isSubFolder: 1, name: 'specie-name-03'},
        {isSubFolder: 1, name: '...'}
    ];
    return getStructure(images, 'images');
}
