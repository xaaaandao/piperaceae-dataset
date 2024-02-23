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
import Datasets from './pages/Datasets';
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
                    <Tab>Samples BR</Tab>
                    <Tab>Samples PR</Tab>
                    <Tab>Samples Region</Tab>
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
                        <Datasets dataset="BR"/>
                    </TabPanel>
                    <TabPanel>
                        <Datasets dataset="PR"/>
                    </TabPanel>
                    <TabPanel>
                        <Datasets dataset="Regions"/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ThemeProvider>
    );
}