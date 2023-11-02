figma.showUI(__html__, {
  width: 300,
  height: 500,
});



figma.ui.onmessage = async (msg) => {
  if (msg.type === 'changeText') {
    const { headline } = msg.data;
    //console.log(headline);
    // await figma.loadFontAsync({ family: "Barlow Condensed", style: "Bold" });
    // const textLayers = figma.currentPage.findAll((node) => node.type === "TEXT" && node.name === "Headline" );
    // textLayers.forEach((textLayer) => {
    //   if (textLayer.type === "TEXT") {
    //     console.log(textLayer.characters);

    //     textLayer.characters = headline;
    //   }
    // });
  }
};
