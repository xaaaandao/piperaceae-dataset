import {
    Image,
    Box,
    Stack,
    Text,
    Divider
} from '@chakra-ui/react';
import ExampleExsiccata from '../figures/HUEFS0214753.jpg';

import '@fontsource/courier-prime';
import React from "react";
import UNet from "./UNet";


class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "All the images used in the experiments are available in speciesLink. It's collected in Brazil and selected with the help of a specialist. Figure 1 is an example of the exsiccata.",
            caption: "Example of Piper umbellata from Herbário da Universidade Estadual de Feira de Santana (HUEFS).",
        };
    }

    setIntroduction() {
        return (
            <Text>
                {this.state.introduction}
            </Text>
        );
    }

    exsiccataExample() {
        return (
            <Box width="50%" align="center" justifyContent="center">
                <Text>
                    {this.state.caption}
                </Text>
                <Image width="60%" height="60%" src={ExampleExsiccata}/>
            </Box>
        );
    }


    render() {
        return (
            <Box ml={2}>
                <Stack direction="column" spacing={5}>
                    {this.setIntroduction()}
                    {this.exsiccataExample()}
                    <Divider orientation='horizontal'/>
                    <UNet/>
                </Stack>
            </Box>
        );
    }
}

export default Images;