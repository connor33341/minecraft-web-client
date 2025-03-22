import{a as c,j as r}from"./jsx-runtime-C56M-QwW.js";import{r as s}from"./index-BtL7HRcT.js";import{C as h,c as _,f as C,a as S}from"./MessageFormattedString-Bstuiv0I.js";import{B as d}from"./Button-CZO7-6rR.js";import"./index-Br2T16Vs.js";import"./client-BBH4BTIA.js";import"./index-CxImDXbn.js";import"./errorBoundary-B6B_XPg4.js";import"./PixelartIcon-ClZgX-iC.js";import"./useScrollBehavior-B9ZlPFZP.js";import"./globalState-BN_K5k3r.js";import"./assert-Dix6_GPv.js";import"./Screen-4r0qP8MH.js";import"./SharedHudVars-BT5CokiY.js";window.spamMessage=window.spamMessage??"";window.loadedData={language:{}};const K={component:h,render(n){const[p,i]=s.useState(n.messages),[f,x]=s.useState(!1),[u,l]=s.useState(n.opened);s.useEffect(()=>{const e=new AbortController;return addEventListener("keyup",t=>{t.code==="KeyY"&&(_.value="/",l(!0),t.stopImmediatePropagation()),t.code==="Escape"&&(l(!1),t.stopImmediatePropagation())},{signal:e.signal}),()=>e.abort()}),s.useEffect(()=>{i(n.messages)},[n.messages]),s.useEffect(()=>{if(!f)return;const e=()=>{const o=window.spamMessage?C(window.spamMessage):[{text:"tes"},{text:"t"}];i(a=>[...a,...Array.from({length:10}).map((g,k)=>{var w;return{id:(((w=a.at(-1))==null?void 0:w.id)??0)+k+1,parts:o}})])},t=setInterval(()=>e(),5e3);return e(),()=>clearInterval(t)},[f]);const E=()=>{for(const e of p)S(e,!1,()=>{i([...p])})};return c("div",{style:{marginTop:n.usingTouch?100:0},children:[c("div",{style:{fontSize:6,userSelect:"auto",color:"gray"},children:["Hint: you can capture needed message with ",r("code",{children:"bot.on('message', console.log)"}),", copy object, and assign it here to ",r("code",{children:"window.spamMessage"})," variable (but ensure the correct frame window is selected in devtools)"]}),r(h,{...n,opened:u,messages:p,onClose:()=>l(!1),fetchCompletionItems:async(e,t)=>{console.log("fetchCompletionItems"),await new Promise(a=>{setTimeout(a,0)});let o=["test",...Array.from({length:50}).map((a,g)=>`minecraft:hello${g}`)];return t==="/"&&(o=o.map(a=>`/${a}`)),o}}),c(d,{onClick:()=>l(e=>!e),children:["Open: ",u?"on":"off"]}),r(d,{onClick:()=>E(),children:"Fade"}),c(d,{onClick:()=>x(e=>!e),children:["Auto Spam: ",f?"on":"off"]}),r(d,{onClick:()=>i(n.messages),children:"Reset"})]})}},m={args:{usingTouch:!1,allowSelection:!1,messages:[{parts:[{bold:!1,italic:!1,underlined:!1,strikethrough:!1,obfuscated:!1,json:{insertion:"pviewer672",clickEvent:{action:"suggest_command",value:"/tell pviewer672 "},hoverEvent:{action:"show_entity",contents:{type:"minecraft:player",id:"ecd0eeb1-625e-3fea-b16e-cb449dcfa434",name:{text:"pviewer672"}}},text:"pviewer672"},text:"pviewer672",clickEvent:{action:"suggest_command",value:"/tell pviewer672 "},hoverEvent:{action:"show_entity",contents:{type:"minecraft:player",id:"ecd0eeb1-625e-3fea-b16e-cb449dcfa434",name:{text:"pviewer672"}}}},{text:" joined the game",color:"yellow",bold:!1,italic:!1,underlined:!1,strikethrough:!1,obfuscated:!1}],id:0}]}};var v,b,y;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    usingTouch: false,
    allowSelection: false,
    messages: [{
      parts: [{
        'bold': false,
        'italic': false,
        'underlined': false,
        'strikethrough': false,
        'obfuscated': false,
        'json': {
          'insertion': 'pviewer672',
          'clickEvent': {
            'action': 'suggest_command',
            'value': '/tell pviewer672 '
          },
          'hoverEvent': {
            'action': 'show_entity',
            'contents': {
              'type': 'minecraft:player',
              'id': 'ecd0eeb1-625e-3fea-b16e-cb449dcfa434',
              'name': {
                'text': 'pviewer672'
              }
            }
          },
          'text': 'pviewer672'
        },
        'text': 'pviewer672',
        'clickEvent': {
          'action': 'suggest_command',
          'value': '/tell pviewer672 '
        },
        'hoverEvent': {
          'action': 'show_entity',
          //@ts-expect-error
          'contents': {
            'type': 'minecraft:player',
            'id': 'ecd0eeb1-625e-3fea-b16e-cb449dcfa434',
            'name': {
              'text': 'pviewer672'
            }
          }
        }
      }, {
        'text': ' joined the game',
        'color': 'yellow',
        'bold': false,
        'italic': false,
        'underlined': false,
        'strikethrough': false,
        'obfuscated': false
      }],
      id: 0
    }]
    // opened: false,
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const L=["Primary"];export{m as Primary,L as __namedExportsOrder,K as default};
//# sourceMappingURL=Chat.stories-DQy4hFHu.js.map
