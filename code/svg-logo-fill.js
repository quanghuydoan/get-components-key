"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, {
    width: 300,
    height: 400,
});
// Function to upload an image to a frame with a given name
// async function importSVGFile(file: string) {
//   try {
//     // Create a new SVG node at the specified position
//     const svgNode = figma.createNodeFromSvg(file);
//     // Set the position of the SVG node
//     svgNode.x = 0;
//     svgNode.y = 0;
//     // Zoom to the newly created node to make sure it's in the view
//     figma.viewport.scrollAndZoomIntoView([svgNode]);
//     figma.notify('SVG imported successfully!');
//   } catch (error) {
//     console.error('Error importing SVG:', error);
//     figma.notify('Error importing SVG');
//   }
// }
// async function importSVGFile(svgFile: string, frameName: string) {
//   let nodes = figma.currentPage.findAll(node => node.name === frameName && node.type === "FRAME" );
//   for (const node of nodes) {
//     if (node.type === "FRAME") {
//       try {
//         // Create an image from the provided file content
//         const importedNode = figma.createNodeFromSvg(svgFile);
//         const xPos = 100;
//         const yPos = 100;
//         importedNode.x = xPos - node.x;
//         importedNode.y = yPos - node.y;
//         importedNode.resize(node.width, node.height);
//         node.appendChild(importedNode);
//       } catch (error) {
//         console.error('Error importing SVG:', error);
//         figma.notify('Error importing SVG');
//       }
//     }
//   }
// }
// async function importSVGFile(svgFile: string, frameName: string) {
//   let nodes = figma.currentPage.findAll(node => node.name === frameName && node.type === "FRAME" );
//   for (const node of nodes) {
//     if (node.type === "FRAME") {
//       try {
//         // Create an image from the provided file content
//         const importedNode = figma.createNodeFromSvg(svgFile);
//         const xPos = 100;
//         const yPos = 100;
//         importedNode.x = xPos - node.x;
//         importedNode.y = yPos - node.y;
//         importedNode.resize(node.width, node.height);
//         node.appendChild(importedNode);
//       } catch (error) {
//         console.error('Error importing SVG:', error);
//         figma.notify('Error importing SVG');
//       }
//     }
//   }
// }
function importSVGFile(svgFile, frameName) {
    return __awaiter(this, void 0, void 0, function* () {
        let nodes = figma.currentPage.findAll(node => node.name === frameName && node.type === "FRAME");
        for (const node of nodes) {
            if (node.type === "FRAME" && node.name === frameName) {
                const childSvgFrame = node.findAll(node => node.type === "GROUP");
                if (childSvgFrame) {
                    childSvgFrame.remove;
                }
                try {
                    // Create an image from the provided file content
                    const svgLogo = figma.createNodeFromSvg(svgFile);
                    svgLogo.x = 0;
                    svgLogo.y = 0;
                    // svgLogo.layoutSizingVertical: 'FIXED';
                    const scale = svgLogo.resize(node.width, node.height);
                    //svgLogo is importedNode
                    node.appendChild(svgLogo);
                }
                catch (error) {
                    console.error('Error importing SVG:', error);
                    figma.notify('Error importing SVG');
                }
            }
        }
    });
}
// Listen for messages from the UI
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === 'importSVG') {
        const { svgString, frameName, svgFile } = msg.data;
        console.log(svgString);
        console.log(frameName);
        console.log(svgFile);
        // const testSvgFrame = figma.createNodeFromSvg(svgFile);
        // testSvgFrame.resize(300, 300);
        yield importSVGFile(svgString, frameName);
    }
});
