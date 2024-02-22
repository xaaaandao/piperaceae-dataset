// import {getDataset as getDatasetBr} from '../utils/datasetbr';
// import {getDataset as getDatasetPr} from '../utils/datasetpr';
// // import {getDataset as getDatasetRegion} from '../utils/datasetRegion';
// import React, {useState} from 'react';
// import {
//     Alert,
//     AlertTitle,
//     AlertIcon,
//     AlertDescription,
//     Link,
//     Box,
//     FormLabel,
//     Select,
//     Stack,
//     FormControl,
//     Button, Divider, Table, TableContainer, Thead, Th, Tbody, Td, Tr, Text
// } from '@chakra-ui/react';
// import '@fontsource/courier-prime';
// import {getStructureOfImagesZip, getStructureOfFeaturesZip} from "./StructureFile";
// import useFetch from "../utils/useFetch";
//
// const datasets = [
//     {value: 'br', label: 'BR'},
//     {value: 'pr', label: 'PR'},
//     {value: 'regions', label: 'Regions'},
// ];
//
//
//

//

//
// function getLink(color, dataset, minimum, size, type) {
//     switch (dataset) {
//         case 'br':
//             return getDatasetBr(color, minimum, size, type);
//         case 'pr':
//             return getDatasetPr(color, minimum, size, type);
//         default:
//             console.error('option invalid');
//     }
// }
//

//
// function selectBase(handle, items, placeholder, title, value, disable = false) {
//     return <FormControl>
//         <FormLabel>{title}</FormLabel>
//         <Select placeholder={placeholder} onChange={handle} value={value} isDisabled={disable}>
//             {items.map((i) => {
//                 return <option key={value} value={i.value}>{i.label}</option>;
//             })}
//         </Select>
//     </FormControl>;
// }
//

// }
//
// export default function () {
//     const [data,setData] = useState([]);

//     const [dataset, setDataset] = useState("");
//     const [disableRegionSelect, setDisableRegionSelect] = useState(true);
//     const [type, setType] = useState("");
//     const [minimum, setMinimum] = useState("");
//     const [color, setColor] = useState("");
//     const [size, setSize] = useState("");
//     const [region, setRegion] = useState("");
//
//     const handleClick = () => {
//         if (selectsAreEmpty(color, dataset, minimum, size, type))
//             setSelectsEmpty(true);
//         else
//             setSelectsEmpty(false);
//     };
//
//
//     const handleChangeDataset = (event) => {
//         setDataset(event.target.value);
//         setDisableRegionSelect(event.target.value !== "regions");
//     };
//
//     const handleChangeType = (event) => {
//         setType(event.target.value);
//     };
//
//     const handleChangeMinimum = (event) => {
//         setMinimum(event.target.value);
//     };
//
//     const handleChangeColor = (event) => {
//         setColor(event.target.value);
//     };
//
//     const handleChangeSize = (event) => {
//         setSize(event.target.value);
//     };
//
//     const handleChangeRegion = (event) => {
//         setRegion(event.target.value);
//     };
//
//
//
//
//     return (
//         <Box>
//             <Stack my={5}>
//                 <Stack direction="row">
//                     {selectBase(handleChangeDataset, datasets, "Choose the dataset", "Dataset", dataset)}
//                     {selectBase(handleChangeType, types, "Choose the type", "Images or features", type)}
//                     {selectBase(handleChangeMinimum, minimums, "Choose the minimum", "Dataset", minimum)}
//                 </Stack>
//                 <Stack direction="row">
//                     {selectBase(handleChangeColor, colors, "Choose the color", "Color", color)}
//                     {selectBase(handleChangeSize, sizes, "Choose the size", "Image size", size)}
//                     {selectBase(handleChangeRegion, regions, "Choose the region", "Region", region, disableRegionSelect)}
//                 </Stack>
//                 {selectsEmpty === false && showLink()}
//                 {selectsEmpty && (showAlert())}
//
//                 <Divider my={2}/>
//                 {type === "images" && getStructureOfImagesZip()}
//                 {type === "features" && getStructureOfFeaturesZip()}

//
//             </Stack>
//         </Box>
//     );
// }