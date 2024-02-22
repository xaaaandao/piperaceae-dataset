import {Box, Heading, Link, ListItem, Stack, Text, UnorderedList} from "@chakra-ui/react";


function createAuthor(email, name){
    return (
            <ListItem>{name} (<Link href={`mailto: ${email}`} style={{color: "blue"}}>email</Link>)</ListItem>
    );
}

export default function Paper() {
    return (
        <Box ml={2}>
            <Stack direction="column" spacing={5}>
                <Heading size="sm">
                    This page provides details and links to download the data (images and features) of the work entitled A Database for Automatic Identification of Herbarium Specimens in Piperaceae Family.
                </Heading>
                <Heading>Abstract</Heading>
                <Text align="justify">
                    The collections of more than 3,500 herbaria in the world hold about 400 million specimens. Despite
                    millions of specimens being digitized, thousands of plants have yet to be appropriately identified
                    or reviewed because of the complex and time-consuming classification and the relatively low number
                    of qualified expert taxonomists. Machine Learning techniques are promising alternatives for
                    supporting plant identification. However, a common and frequent challenge is the lack of
                    representative and reliable databases to produce robust classification systems. This issue often
                    arises because some plant species are rare or require highly specialized expertise for
                    identification. To overcome this difficulty, we introduce a new database of herbarium specimens of
                    the Piperaceae Giseke family. The Piperaceae, also known as the pepper family, is a large botanical
                    family with many species that are intrinsically complex to identify due to their similarities. We
                    selected 10,514 specimens samples on the speciesLink repository of 235 Piperaceae species collected
                    in Brazil. A comprehensive set of experiments evaluated segmentation, feature extraction, and
                    classification algorithms for the dataset performance as reference values. The best performance
                    combined non-handcrafted features (VGG16) and the Multilayer Perceptron classifier. We hope the
                    database and our experiments described in this work will benefit the research community. The
                    original database, segmented images, extracted features, and its different subsets are available for
                    download at.
                </Text>
                <Heading>Authors</Heading>
                <UnorderedList>
                    {createAuthor("alexandrey@utfpr.edu.br", "Alexandre Yuji Kajihara")}
                    {createAuthor("georgeazevedo08@gmail.com", "George Azevedo de Queiroz")}
                    {createAuthor("mcaxambu@utfpr.edu.br", "Marcelo Galeazzi Caxambú")}
                    {createAuthor("lesoliveira@inf.ufpr.br", "Luiz Eduardo S. Oliveira")}
                    {createAuthor("diegobertolini@utfpr.edu.br", "Diego Bertolini")}
                    {createAuthor("andreluis@utfpr.edu.br", "André Luis Schwerz")}
                </UnorderedList>
            </Stack>
        </Box>
);
}