import React from 'react';
import {
    ThemeProvider,
    theme,
    CSSReset,
    TabList,
    Tab,
    Tabs,
    Heading,
    TabPanels,
    TabPanel
} from '@chakra-ui/react';
import Images from './pages/Images';
import Paper from './pages/Paper';
import Herbaria from './pages/Herbaria';
import Species from './pages/Species';
import Samples from './pages/Samples';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
    document.title="piperaceae-dataset"
    return (
        <ThemeProvider theme={theme}>
            <CSSReset/>
            <Heading textAlign="center">piperaceae-dataset</Heading>
            <Tabs size="md" variant="enclosed">
                <TabList>
                    <Tab>Paper</Tab>
                    {/*<Tab>Datasets</Tab>*/}
                    <Tab>Images</Tab>
                    <Tab>Herbaria</Tab>
                    <Tab>Species</Tab>
                    <Tab>Samples</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Paper/>
                    </TabPanel>
                    <TabPanel>
                        <Images/>
                    </TabPanel>
                    <TabPanel>
                        <Herbaria/>
                    </TabPanel>
                    <TabPanel>
                        <Species/>
                    </TabPanel>
                    <TabPanel>
                        <Samples dataset="br"/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ThemeProvider>
    );
}