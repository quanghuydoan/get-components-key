figma.showUI(__html__, {
  width: 300,
  height: 400,
});

// Function to upload an image to a frame with a given name
async function uploadImageToFrame(frameName: string, imageFile: Uint8Array) {
  const nodes = figma.currentPage.findAll(node => node.name === frameName && (node.type === "FRAME" || node.type === "RECTANGLE" || node.type ==="COMPONENT"|| node.type ==="COMPONENT_SET"|| node.type ==="INSTANCE"));

  for (const node of nodes) {
    if (node.type === "FRAME" || node.type === "RECTANGLE") {
      try {
        // Create an image from the provided file content
        const image = figma.createImage(imageFile);

        // Create an image fill
        const imageFill: ImagePaint = {
          type: 'IMAGE',
          scaleMode: 'FILL', // You can change this as needed
          imageHash: image.hash,
        };

        // Apply the image fill to the node
        node.fills = [imageFill];
      } catch (error) {
        console.error("Error creating image:", error);
      }
    }
  }
}

// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'uploadImage') {
    const { frameName, fileBuffer } = msg.data;

    // Convert the file buffer back to Uint8Array
    const imageFile = new Uint8Array(fileBuffer);

    await uploadImageToFrame(frameName, imageFile);
  }
};
