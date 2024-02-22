import {Box, Heading, Link, ListItem, Stack, Text, UnorderedList} from "@chakra-ui/react";
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
                <Heading size="sm">
                    {introductionTextPage}
                </Heading>
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