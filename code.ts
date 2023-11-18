
async function importNode(nodeKeyArray: string[]) {
  const importedNode: SceneNode[] = [];
  nodeKeyArray.forEach(nodeKey => {
    async function importByKey(key: string) {
      const importedFrame = (await figma.importComponentByKeyAsync(key)).clone();
      importedNode.push(importedFrame)
      return importedNode
    }
    importByKey(nodeKey);
  });

  const setLayoutProps = (frame: FrameNode) => {
    frame.name = 'Frameee';
    frame.layoutMode = "VERTICAL";
    frame.paddingTop = 10;
    frame.paddingRight = 10;
    frame.paddingBottom = 10;
    frame.paddingLeft = 10;
    frame.itemSpacing = 160;
  };

  if (importedNode.length > 1) {
    let parentConteiner = importedNode[0].parent;
    if (parentConteiner) {
      let frame = figma.createFrame();
      const group = figma.group(importedNode, parentConteiner);
      frame.x = group.x;
      frame.y = group.y;
      frame.backgrounds = [];
      frame.resize(group.width, group.height);
      setLayoutProps(frame);
      parentConteiner.appendChild(frame);
      figma.currentPage.selection = [frame];
    }
  }







}





figma.showUI(__html__, { title: 'Banner Ads Generator', height: 504, width: 336 });
figma.ui.onmessage = msg => {
  if (msg.type === 'create-banner-ad') {
    console.log('i was here');
    importNode(msg.selectedOptions);
    

  }
}














