import {Link, Text} from "@chakra-ui/react";

function createLink (link, text) {
    return (<Link style={{color:"blue"}} href={link}>{text}</Link>);
}

export const introductionTextPage = <Text align="justify">All the images used in the experiments are available in {createLink("https://specieslink.net/", "speciesLink")}. It's collected in Brazil and selected with the help of a specialist. Figure 1 is an example of the exsiccata.</Text>;
export const captionFigure = <Text align="justify"><strong>Figure 1</strong> Example of Piper <Text as="i">umbellata</Text> from Herbário da Universidade Estadual de Feira de Santana (HUEFS)</Text>;
export const unetText =  <Text align="justify"> The available samples were segmented using the U-Net. The train was made using the dataset [{createLink("https://ieeexplore.ieee.org/document/9854444", "1")}]. The
best hyperparameters of U-Net are available in Table 1.</Text>;