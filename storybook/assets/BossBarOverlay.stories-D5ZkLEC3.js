import{a as o,j as r}from"./jsx-runtime-C56M-QwW.js";import{r as s}from"./index-BtL7HRcT.js";import{M as x}from"./MessageFormattedString-Bstuiv0I.js";import"./index-Br2T16Vs.js";import"./client-BBH4BTIA.js";import"./index-CxImDXbn.js";import"./errorBoundary-B6B_XPg4.js";import"./Button-CZO7-6rR.js";import"./SharedHudVars-BT5CokiY.js";import"./PixelartIcon-ClZgX-iC.js";import"./useScrollBehavior-B9ZlPFZP.js";import"./globalState-BN_K5k3r.js";import"./assert-Dix6_GPv.js";import"./Screen-4r0qP8MH.js";const i=["pink","blue","red","green","yellow","purple","white"],n=[0,6,10,12,20],S=({bar:e})=>{const[p,m]=s.useState({}),[y,u]=s.useState({}),[_,f]=s.useState({}),[g,h]=s.useState({}),[v,B]=s.useState({});return s.useEffect(()=>{m(e._title??e.title),u(t=>({...t,backgroundPositionY:`-${i.indexOf(e._color)*10}px`})),f(t=>({...t,width:`${e._health*100}%`,backgroundPositionY:`-${i.indexOf(e._color)*10+5}px`})),h(t=>({...t,backgroundPositionY:`-${n.indexOf(e._dividers)*10+70}px`})),B(t=>({...t,width:`${e._health*100}%`,backgroundPositionY:`-${n.indexOf(e._dividers)*10+75}px`}))},[e]),o("div",{className:"bossbar-container",children:[r("div",{className:"bossbar-title",children:r(x,{message:p})}),o("div",{className:"bossbar",style:y,children:[r("div",{className:"fill",style:_}),r("div",{className:"fill",style:g}),r("div",{className:"fill",style:v})]})]})};try{BossBarOverlay.displayName="BossBarOverlay",BossBarOverlay.__docgenInfo={description:"",displayName:"BossBarOverlay",props:{bar:{defaultValue:null,description:"",name:"bar",required:!0,type:{name:"BossBarType"}}}}}catch{}const I={component:S},a={args:{bar:{entityUUID:"uuid",title:{text:"Boss",translate:"test"},health:100,dividers:2,color:"red",shouldDarkenSky:!1,isDragonBar:!1,createFog:!1,shouldCreateFog:!1,_title:{text:"Boss",translate:"entity.minecraft.ender_dragon"},_color:"red",_dividers:2,_health:100,lastUpdated:0}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    bar: {
      entityUUID: 'uuid',
      title: ({
        text: 'Boss',
        translate: 'test'
      } as ChatMessage & {
        text: string;
        translate: string;
      }),
      health: 100,
      dividers: 2,
      color: 'red',
      shouldDarkenSky: false,
      isDragonBar: false,
      createFog: false,
      shouldCreateFog: false,
      _title: {
        text: 'Boss',
        translate: 'entity.minecraft.ender_dragon'
      },
      _color: 'red',
      _dividers: 2,
      _health: 100,
      lastUpdated: 0
    }
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const M=["Primary"];export{a as Primary,M as __namedExportsOrder,I as default};
//# sourceMappingURL=BossBarOverlay.stories-D5ZkLEC3.js.map
