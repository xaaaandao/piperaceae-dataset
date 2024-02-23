import {Box, Heading, Link, ListItem, OrderedList, Stack, Text, UnorderedList} from "@chakra-ui/react";
import {abstract, introductionTextPage} from "./texts/TextPaper";


function createAuthor(email, name) {
    return (
        <ListItem>{name} (<Link href={`mailto: ${email}`} style={{color: "blue"}}>email</Link>)</ListItem>
    );
}

export default function Paper() {
    const authors = [
        {email: "alexandrey@utfpr.edu.br", name: "Alexandre Yuji Kajihara"},
        {email: "georgeazevedo08@gmail.com", name: "George Azevedo de Queiroz"},
        {email: "mcaxambu@utfpr.edu.br", name: "Marcelo Galeazzi Caxambú"},
        {email: "lesoliveira@inf.ufpr.br", name: "Luiz Eduardo S. Oliveira"},
        {email: "diegobertolini@utfpr.edu.br", name: "Diego Bertolini"},
        {email: "andreluis@utfpr.edu.br", name: "André Luis Schwerz"},
    ];
    return (
        <Box ml={2}>
            <Stack direction="column" spacing={5}>
                {introductionTextPage}
                <Text>
                    Six tabs are composed on this page.
                    <OrderedList>
                        <ListItem>[Paper] About paper and authors. </ListItem>
                        <ListItem>[Image] About images and the process to segment the exsiccata.</ListItem>
                        <ListItem>[Herbaria] About the herbaria of the samples.</ListItem>
                        <ListItem>[Samples BR] Download samples (images or features) used in experiments with subsets BR.</ListItem>
                        <ListItem>[Samples PR] Download samples (images or features) used in experiments with subsets PR.</ListItem>
                        <ListItem>[Samples Regions] Download samples (images or features) used in experiments with subsets Regions.</ListItem>
                    </OrderedList>
                </Text>
                <Heading>Abstract</Heading>
                {abstract}
                <Heading>Authors</Heading>
                <UnorderedList>
                    {/*{*/}
                    {/*    authors.map((a) => {*/}
                    {/*        return createAuthor(a.email, a.name);*/}
                    {/*    })*/}
                    {/*}*/}
                </UnorderedList>
            </Stack>
        </Box>
    );
}