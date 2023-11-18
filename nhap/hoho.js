"use strict";
// figma.showUI(__html__, { title: 'Banner Ads Generator', height: 504, width: 336 });
// figma.ui.onmessage = msg => {
//   if (msg.type === 'create-banner-ad') {
//     const nodes: SceneNode[] = [];
//     for (let i = 0; i < msg.selectedOptions.length; i++) {
//       const nodeKey = msg.selectedOptions[i];
//       const horizontal = 0;
//       async function test() {
//         const importedFrame = (await figma.importComponentByKeyAsync(nodeKey)).clone();
//         figma.currentPage.appendChild(importedFrame);
//         nodes.push(importedFrame);
//       }
//       test();
//       //nodes.push(importNode(nodeKey))
//       figma.currentPage.selection = nodes;
//       autoLayout(nodes)
//       figma.viewport.scrollAndZoomIntoView(nodes);
//     }
//   }
// }
