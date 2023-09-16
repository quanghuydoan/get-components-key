      async function importNode(checkboxString: string) {
  let importComponent = await figma.importComponentByKeyAsync(checkboxString);
  let x = importComponent.createInstance();
  console.log(x.x);
  
}
      
      async function getInstanceNode(nodekk: string) {
          const value = await importNode(nodekk);
      }
      getInstanceNode(nodeKey);





    for (let i = 0; i < msg.selectedOptions.length; i++) {
      const nodeKey = msg.selectedOptions[i];
      async function fetchDataAsync() {
        try {
          const instanceNode = await importNode(nodeKey);
          console.log(instanceNode);
        }
        catch (error) {
          console.error("error", error);
        }
      }
      fetchDataAsync();
      console.log();
    }









          for (let i = 0; i < msg.selectedOptions.length; i++) {
      const nodeKey = msg.selectedOptions[i];
      async () => {
        const framed = (await figma.importComponentByKeyAsync(nodeKey)).clone();
        console.log(framed);
      }
    }