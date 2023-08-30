async function importNode(checkboxString: string) {
  let importComponent = await figma.importComponentByKeyAsync(checkboxString);
  importComponent.createInstance();
  console.log()
}

async function processCheckboxArray(Strings: any) {
  for (let checkboxString of Strings) {
    await importNode(checkboxString);
  }
}


figma.showUI(__html__, { title: 'Banner Ads Generator', height: 504, width: 336 });
figma.ui.onmessage = async msg => {
  if (msg.type === 'create-banner-ad') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.selectedOptions.length; i++) {
      const nodeKey = msg.selectedOptions[i];
      // const instanceNode = await importNode(nodeKey);
      async function getInstanceNode (nodekk: string): Promise<FrameNode> {
        const value = await importNode(nodekk);
        console.log(value);
      }
      getInstanceNode(nodeKey)
        .then((frame: FrameNode) => {
          console.log(frame.x);
          console.log(frame.width);
        })
        .catch ((error) => {
          console.error
        })
    }
  }
  // await figma.closePlugin();
}