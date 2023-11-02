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
    height: 500,
});
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
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
});
