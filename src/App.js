import React from 'react';
import {
    ThemeProvider,
    theme,
    CSSReset,
    TabList,
    Tab,
    Tabs,
    Heading, TabPanels, TabPanel,
} from '@chakra-ui/react';
import Links from './pages/Links';
import Images from './pages/Images';
import Paper from './pages/Paper';


export default function App() {
    document.title="piperaceae-dataset"
    return (
        <ThemeProvider theme={theme}>
            <CSSReset/>
            <Heading textAlign="center">piperaceae-dataset</Heading>
            <Tabs size="md" variant="enclosed">
                <TabList>
                    <Tab>Paper</Tab>
                    <Tab>Links</Tab>
                    <Tab>Images</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Paper/>
                    </TabPanel>
                    <TabPanel>
                        <Links/>
                    </TabPanel>
                    <TabPanel>
                        <Images/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ThemeProvider>
    );
}