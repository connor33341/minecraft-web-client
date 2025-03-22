import{a as f,j as t}from"./jsx-runtime-C56M-QwW.js";import{r as l}from"./index-BtL7HRcT.js";import{M as i}from"./MessageFormattedString-Bstuiv0I.js";import{T as y}from"./Transition-CJNCeww3.js";import"./index-Br2T16Vs.js";import"./client-BBH4BTIA.js";import"./index-CxImDXbn.js";import"./errorBoundary-B6B_XPg4.js";import"./Button-CZO7-6rR.js";import"./SharedHudVars-BT5CokiY.js";import"./PixelartIcon-ClZgX-iC.js";import"./useScrollBehavior-B9ZlPFZP.js";import"./globalState-BN_K5k3r.js";import"./assert-Dix6_GPv.js";import"./Screen-4r0qP8MH.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DjogQCva.js";const s=({title:u,subtitle:E,actionBar:h,transitionTimes:e,openTitle:n=!1,openActionBar:o=!1})=>{const[O,_]=l.useState(!1),[S,d]=l.useState(!0),c=500,p=1e3,v={opacity:1,transition:`${e.fadeIn}ms ease-in-out all`},N={opacity:0,transition:`${e.fadeOut}ms ease-in-out all`},m={entering:v,entered:{opacity:1},exiting:N,exited:{opacity:0}};return l.useEffect(()=>{!O&&(n||o)&&_(!0)},[n,o]),f("div",{className:"title-container",children:[t(y,{in:n,timeout:{enter:(e==null?void 0:e.fadeIn)??c,exit:(e==null?void 0:e.fadeOut)??p},mountOnEnter:!0,unmountOnExit:!0,enter:S,onExiting:()=>{d(a=>!1)},onExited:()=>{d(a=>!0)},children:a=>f("div",{style:{...m[a]},children:[t("h1",{className:"message-title",children:t(i,{message:u})}),t("h4",{className:"message-subtitle",children:t(i,{message:E})})]})}),t(y,{in:o,timeout:{enter:(e==null?void 0:e.fadeIn)??c,exit:(e==null?void 0:e.fadeOut)??p},mountOnEnter:!0,unmountOnExit:!0,children:a=>t("div",{style:{...m[a]},children:t("div",{className:"action-bar",children:t(i,{message:h})})})})]})};try{s.displayName="Title",s.__docgenInfo={description:"",displayName:"Title",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | Record<string, any>"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string | Record<string, any>"}},actionBar:{defaultValue:null,description:"",name:"actionBar",required:!0,type:{name:"string | Record<string, any>"}},transitionTimes:{defaultValue:null,description:"",name:"transitionTimes",required:!0,type:{name:"AnimationTimes"}},openTitle:{defaultValue:{value:"false"},description:"",name:"openTitle",required:!1,type:{name:"boolean"}},openActionBar:{defaultValue:{value:"false"},description:"",name:"openActionBar",required:!1,type:{name:"boolean"}}}}}catch{}const J={component:s},r={args:{openTitle:!1,openActionBar:!1,title:{text:"New title"},subtitle:{text:"Subtitle"},actionBar:{text:"Action bar text"},transitionTimes:{fadeIn:500,stay:3500,fadeOut:1e3}}};var x,g,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    openTitle: false,
    openActionBar: false,
    title: {
      text: 'New title'
    },
    subtitle: {
      text: 'Subtitle'
    },
    actionBar: {
      text: 'Action bar text'
    },
    transitionTimes: {
      fadeIn: 500,
      stay: 3500,
      fadeOut: 1000
    }
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const K=["Primary"];export{r as Primary,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Title.stories-dduoT4ix.js.map
