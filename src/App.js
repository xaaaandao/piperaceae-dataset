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
import Dataset from './pages/Dataset';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
    document.title="piperaceae-dataset";
    return (
        <ThemeProvider theme={theme}>
            <CSSReset/>
            <Heading textAlign="center">piperaceae-dataset</Heading>
            <Tabs size="md" variant="enclosed">
                <TabList>
                    <Tab>Paper</Tab>
                    <Tab>Images</Tab>
                    <Tab>Herbaria</Tab>
                    <Tab>Dataset BR</Tab>
                    <Tab>Dataset PR</Tab>
                    <Tab>Dataset Regions</Tab>
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
                        <Dataset dataset="BR"/>
                    </TabPanel>
                    <TabPanel>
                        <Dataset dataset="PR"/>
                    </TabPanel>
                    <TabPanel>
                        <Dataset dataset="Regions"/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ThemeProvider>
    );
}