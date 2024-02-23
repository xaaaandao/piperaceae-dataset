import {Box, Divider, Heading, Link, ListItem, OrderedList, Stack, Text, UnorderedList} from "@chakra-ui/react";
import React from "react";


class Paper extends React.Component {
    constructor() {
        super();
        this.state = {
            authors:  [
                {email: "alexandrey@utfpr.edu.br", name: "Alexandre Yuji Kajihara"},
                {email: "georgeazevedo08@gmail.com", name: "George Azevedo de Queiroz"},
                {email: "mcaxambu@utfpr.edu.br", name: "Marcelo Galeazzi Caxambú"},
                {email: "lesoliveira@inf.ufpr.br", name: "Luiz Eduardo S. Oliveira"},
                {email: "diegobertolini@utfpr.edu.br", name: "Diego Bertolini"},
                {email: "andreluis@utfpr.edu.br", name: "André Luis Schwerz"},
            ],
            tabs: [
                {value: 1, text: "[Paper] About paper and authors."},
                {value: 2, text: "[Image] About images and the process to segment the exsiccata."},
                {value: 3, text: "[Herbaria] About the herbaria of the samples."},
                {value: 4, text: "[Samples BR] Download samples (images or features) used in experiments with subsets BR."},
                {value: 5, text: "[Samples PR] Download samples (images or features) used in experiments with subsets PR."},
                {value: 6, text: "[Samples Regions] Download samples (images or features) used in experiments with subsets Regions."}
            ],
            abstract: "The collections of more than 3,500 herbaria in the world hold about 400 million specimens. Despite millions of specimens being digitized, thousands of plants have yet to be appropriately identified or reviewed because of the complex and time-consuming classification and the relatively low number of qualified expert taxonomists. Machine Learning techniques are promising alternatives for supporting plant identification. However, a common and frequent challenge is the lack of representative and reliable databases to produce robust classification systems. This issue often arises because some plant species are rare or require highly specialized expertise for identification. To overcome this difficulty, we introduce a new database of herbarium specimens of the Piperaceae Giseke family. The Piperaceae, also known as the pepper family, is a large botanical family with many species that are intrinsically complex to identify due to their similarities. We selected 10,514 specimens samples on the speciesLink repository of 235 Piperaceae species collected in Brazil. A comprehensive set of experiments evaluated segmentation, feature extraction, and classification algorithms for the dataset performance as reference values. The best performance combined non-handcrafted features (VGG16) and the Multilayer Perceptron classifier. We hope the database and our experiments described in this work will benefit the research community. The original database, segmented images, extracted features, and its different subsets are available for download at.",
            introduction: "This page provides details and links to download the data (images and features) of the work entitled",
            title: "A Database for Automatic Identification of Herbarium Specimens in Piperaceae Family"
        }

    }

    setInfoTabs(){
        return (
            <Text>
                Six tabs are composed on this page.
                <OrderedList>
                    {this.state.tabs.map(t => <ListItem key={t.value}>{t.text}</ListItem>)}
                </OrderedList>
            </Text>
        );
    }

    setAbstract(){
        return (
            <>
                <Heading>Abstract</Heading>
                <Text align="justify">{this.state.abstract}</Text>
            </>
        );
    }

    setAuthors(){
        return (
            <>
                <Heading>Authors</Heading>
                <OrderedList>
                    {this.state.authors.map(a => <ListItem key={a.email}>{a.name}</ListItem>)}
                </OrderedList>
            </>
        );
    }

    setIntroduction() {
        return (
            <Text align="justify">{this.state.introduction}<Text fontSize="lg"><strong>{this.state.title}</strong>.</Text></Text>
        );
    }

    render() {
        return (
            <Stack my={8}>
                <Box ml={2}>
                    <Stack direction="column" spacing={5}>
                        {this.setIntroduction()}
                        {this.setInfoTabs()}
                        <Divider/>
                        {this.setAbstract()}
                        {/*<Divider/>*/}
                        {/*{this.setAuthors()}*/}
                    </Stack>
                </Box>
            </Stack>
        );
    }
}

export default Paper;