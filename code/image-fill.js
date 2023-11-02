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
function uploadImageToFrame(frameName, imageFile) {
    return __awaiter(this, void 0, void 0, function* () {
        const nodes = figma.currentPage.findAll(node => node.name === frameName && (node.type === "FRAME" || node.type === "RECTANGLE" || node.type === "COMPONENT" || node.type === "COMPONENT_SET" || node.type === "INSTANCE"));
        for (const node of nodes) {
            if (node.type === "FRAME" || node.type === "RECTANGLE") {
                try {
                    // Create an image from the provided file content
                    const image = figma.createImage(imageFile);
                    // Create an image fill
                    const imageFill = {
                        type: 'IMAGE',
                        scaleMode: 'FILL',
                        imageHash: image.hash,
                    };
                    // Apply the image fill to the node
                    node.fills = [imageFill];
                }
                catch (error) {
                    console.error("Error creating image:", error);
                }
            }
        }
    });
}
// Listen for messages from the UI
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === 'uploadImage') {
        const { frameName, fileBuffer } = msg.data;
        // Convert the file buffer back to Uint8Array
        const imageFile = new Uint8Array(fileBuffer);
        yield uploadImageToFrame(frameName, imageFile);
    }
});
