import{j as e,a as t}from"./jsx-runtime-C56M-QwW.js";import{b as d}from"./MessageFormattedString-Bstuiv0I.js";import{B as n}from"./Button-CZO7-6rR.js";import"./index-Br2T16Vs.js";import"./index-BtL7HRcT.js";import"./client-BBH4BTIA.js";import"./index-CxImDXbn.js";import"./errorBoundary-B6B_XPg4.js";import"./PixelartIcon-ClZgX-iC.js";import"./useScrollBehavior-B9ZlPFZP.js";import"./globalState-BN_K5k3r.js";import"./assert-Dix6_GPv.js";import"./Screen-4r0qP8MH.js";import"./SharedHudVars-BT5CokiY.js";const m=({dieReasonMessage:r,respawnCallback:i,disconnectCallback:l})=>e("div",{className:"deathScreen-container",children:t("div",{className:"deathScreen",children:[e("h1",{className:"deathScreen-title",children:"You Died!"}),e("h5",{className:"deathScreen-reason",children:e(d,{parts:r})}),t("div",{className:"deathScreen-buttons-grouped",children:[e(n,{label:"Respawn",onClick:()=>{i()}}),e(n,{label:"Disconnnect",onClick:()=>{l()}})]})]})});try{DeathScreen.displayName="DeathScreen",DeathScreen.__docgenInfo={description:"",displayName:"DeathScreen",props:{dieReasonMessage:{defaultValue:null,description:"",name:"dieReasonMessage",required:!0,type:{name:"MessageFormatPart[]"}},respawnCallback:{defaultValue:null,description:"",name:"respawnCallback",required:!0,type:{name:"() => void"}},disconnectCallback:{defaultValue:null,description:"",name:"disconnectCallback",required:!0,type:{name:"() => void"}}}}}catch{}const M={component:m},a={args:{dieReasonMessage:[{text:"test"}],respawnCallback(){},disconnectCallback(){}}};var s,o,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    dieReasonMessage: [{
      text: 'test'
    }],
    respawnCallback() {},
    disconnectCallback() {}
  }
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const v=["Primary"];export{a as Primary,v as __namedExportsOrder,M as default};
//# sourceMappingURL=DeathScreen.stories-CLionTTO.js.map
