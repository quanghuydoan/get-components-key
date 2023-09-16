async function importNode(checkboxString: string) {
  let importComponent = await figma.importComponentByKeyAsync(checkboxString);
  let x = importComponent.createInstance();
}

async function processCheckboxArray(Strings: any) {
  for (let checkboxString of Strings) {
    await importNode(checkboxString);
  }
}

figma.showUI(__html__, { title: 'Banner Ads Generator', height: 504, width: 336 });
figma.ui.onmessage = msg => {
  if (msg.type === 'create-banner-ad') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.selectedOptions.length; i++) {
      const nodeKey = msg.selectedOptions[i];
      const horizontal = 0;
      async function test(){
        const framed = (await figma.importComponentByKeyAsync(nodeKey)).clone();
        console.log(framed);
        framed.x = i * 300;
       
        figma.currentPage.appendChild(framed);
        nodes.push(framed);
      }
      test();
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
    }
  }
  // figma.closePlugin();
}




// function activateWhenUserClicksSubmit(msg){
//   const {keyword, hex} = msg;
//   const currentPage = figma.currentPage;
//   function testForKeyWord(node){
//       const isKeyword = new RegExp(keyword, 'gi');
//       if(node.name){
//           return isKeyword.test(node.name);
//       }
//       return false;
//   }
  //const selectedNode = figma.currentPage.selection[0];
  // const imageUrl = "https://cdn.osxdaily.com/wp-content/uploads/2022/10/macOS-Ventura-wallpaper-2.jpg";
  // const nodes = currentPage.findAll(testForKeyWord)
  // for(const node of nodes){
  //     node.fills = [{
  //       type: "IMAGE",
  //       imageHash: figma.createImage(imageUrl).hash,
  //       scaleMode: "FIT",
  //     }]
  // }



