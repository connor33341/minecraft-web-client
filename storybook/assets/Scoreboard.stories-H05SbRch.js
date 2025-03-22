import{a as i,j as e}from"./jsx-runtime-C56M-QwW.js";import{M as s,r as y}from"./MessageFormattedString-Bstuiv0I.js";import"./index-Br2T16Vs.js";import"./index-BtL7HRcT.js";import"./client-BBH4BTIA.js";import"./index-CxImDXbn.js";import"./errorBoundary-B6B_XPg4.js";import"./Button-CZO7-6rR.js";import"./SharedHudVars-BT5CokiY.js";import"./PixelartIcon-ClZgX-iC.js";import"./useScrollBehavior-B9ZlPFZP.js";import"./globalState-BN_K5k3r.js";import"./assert-Dix6_GPv.js";import"./Screen-4r0qP8MH.js";function t({title:o,items:d,open:p,style:u}){return p?i("div",{className:"scoreboard-container",style:u,children:[e("div",{className:"scoreboard-title",children:e(s,{message:o})}),d.map(r=>{const n=r.displayName??r.name;return i("div",{className:"item-container",children:[e("div",{className:"item-name",children:e(s,{message:n})}),e("div",{className:"item-value",children:r.value})]},y(n)+"_"+r.value)})]}):null}try{t.displayName="Scoreboard",t.__docgenInfo={description:"",displayName:"Scoreboard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ScoreboardItems"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const F={component:t},a={args:{title:"Scoreboard",items:[{name:"item 1",value:9},{name:"item 2",value:8}],open:!0}};var m,l,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Scoreboard',
    items: [{
      name: 'item 1',
      value: 9
    }, {
      name: 'item 2',
      value: 8
    }],
    open: true
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const I=["Primary"];export{a as Primary,I as __namedExportsOrder,F as default};
//# sourceMappingURL=Scoreboard.stories-H05SbRch.js.map
