import{a,j as e}from"./jsx-runtime-C56M-QwW.js";import{M as i}from"./MessageFormattedString-Bstuiv0I.js";import"./index-Br2T16Vs.js";import"./index-BtL7HRcT.js";import"./client-BBH4BTIA.js";import"./index-CxImDXbn.js";import"./errorBoundary-B6B_XPg4.js";import"./Button-CZO7-6rR.js";import"./SharedHudVars-BT5CokiY.js";import"./PixelartIcon-ClZgX-iC.js";import"./useScrollBehavior-B9ZlPFZP.js";import"./globalState-BN_K5k3r.js";import"./assert-Dix6_GPv.js";import"./Screen-4r0qP8MH.js";const P=({playersLists:t,clientId:p,tablistHeader:m,tablistFooter:o,serverIP:u,style:c})=>a("div",{className:"playerlist-container",id:"playerlist-container",style:c,children:[a("span",{className:"playerlist-title",children:["Server IP: ",u]}),e("div",{className:"playerlist-header",children:e(i,{message:m})}),e("div",{className:"player-lists",children:t.map((y,g)=>e("div",{className:"player-list",children:y.map(r=>a("div",{className:`playerlist-entry${p===r.uuid?" active-player":""}`,id:`plist-player-${r.uuid}`,children:[e(i,{message:r.username}),a("div",{className:"playerlist-ping",children:[e("p",{className:"playerlist-ping-value",children:r.ping}),e("p",{className:"playerlist-ping-label",children:"ms"})]})]},r.uuid??r.username))},g))}),e("div",{className:"playerlist-footer",children:e(i,{message:o})})]});try{PlayerListOverlay.displayName="PlayerListOverlay",PlayerListOverlay.__docgenInfo={description:"",displayName:"PlayerListOverlay",props:{playersLists:{defaultValue:null,description:"",name:"playersLists",required:!0,type:{name:"PlayersLists"}},clientId:{defaultValue:null,description:"",name:"clientId",required:!0,type:{name:"string"}},tablistHeader:{defaultValue:null,description:"",name:"tablistHeader",required:!0,type:{name:"string | Record<string, any> | null"}},tablistFooter:{defaultValue:null,description:"",name:"tablistFooter",required:!0,type:{name:"string | Record<string, any> | null"}},serverIP:{defaultValue:null,description:"",name:"serverIP",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const x={component:P},s={args:{playersLists:[[{username:"Player 1",ping:10,uuid:"1"},{username:"Player 2",ping:20,uuid:"2"},{username:"Player 3",ping:30,uuid:"3"}]],clientId:"2",tablistHeader:"Header",tablistFooter:"Footer",serverIP:"95.163.228.101"}};var l,n,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    playersLists: [[{
      username: 'Player 1',
      ping: 10,
      uuid: '1'
    }, {
      username: 'Player 2',
      ping: 20,
      uuid: '2'
    }, {
      username: 'Player 3',
      ping: 30,
      uuid: '3'
    }]],
    clientId: '2',
    tablistHeader: 'Header',
    tablistFooter: 'Footer',
    serverIP: '95.163.228.101'
  }
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const j=["Primary"];export{s as Primary,j as __namedExportsOrder,x as default};
//# sourceMappingURL=PlayerListOverlay.stories-CBxxb5aS.js.map
