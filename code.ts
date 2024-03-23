figma.showUI(__html__, { title: 'Get frame keys as JSON', height: 504, width: 336 });
figma.ui.onmessage = msg => {
  if (msg.type === 'create-banner-ad') {
    const allNode = figma.root.findAll();
    const page = figma.currentPage;
    // const nodes = page.children as ComponentNode[];
   
    const instanceNode = allNode.filter(node => { return node.type === "COMPONENT" && node.parent && node.parent.type === "PAGE" }) as ComponentNode[];

    const framesData = instanceNode.map(node => ({
      category: page.name,
      name: node.name,
      key: node.key,
    }));
    //console.log(framesData);
    figma.ui.postMessage({  type: 'framesData', data: framesData })
  }
}














