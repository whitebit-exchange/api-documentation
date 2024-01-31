(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{6879:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/private/http-auth",function(){return n(5506)}])},5506:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return o}});var r=n(5893),l=n(2673),i=n(2643);let o=[{depth:3,value:"How to use:",id:"how-to-use"},{depth:3,value:"Requirements:",id:"requirements"},{depth:3,value:"Body data",id:"body-data"},{depth:3,value:"Headers",id:"headers"},{depth:3,value:"Examples of auth",id:"examples-of-auth"},{depth:3,value:"Errors:",id:"errors"}];function t(s){let e=Object.assign({h1:"h1",h3:"h3",ol:"ol",li:"li",a:"a",em:"em",strong:"strong",p:"p",code:"code",pre:"pre",span:"span",hr:"hr"},(0,i.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Private HTTP API Authentication"}),"\n",(0,r.jsx)(e.h3,{id:"how-to-use",children:"How to use:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Go to your account on ",(0,r.jsx)(e.a,{href:"https://whitebit.com/settings/api",children:"whitebit.com/settings/api"}),"."]}),"\n",(0,r.jsx)(e.li,{children:"Select the appropriate configuration tab for your API keys. Different API keys allow access to different API calls."}),"\n",(0,r.jsx)(e.li,{children:"Generate an API key."}),"\n",(0,r.jsxs)(e.li,{children:["Enable IP restrictions by specifying up to 5 trusted IPs ",(0,r.jsxs)(e.em,{children:["(optional, ",(0,r.jsx)(e.strong,{children:"recommended"}),")"]})]}),"\n",(0,r.jsx)(e.li,{children:'Enable Endpoint access restrictions. Select only those endpoints, that you are going to use and click "Apply" button.'}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"requirements",children:"Requirements:"}),"\n",(0,r.jsxs)(e.p,{children:["Auth request should be using ",(0,r.jsx)(e.code,{children:"POST"})," method and should include:"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#body-data",children:"Body data"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#headers",children:"Headers"})}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"body-data",children:"Body data"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"JSON"})," that includes:"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"'request'"})," - a request path without the domain name. Example: ",(0,r.jsx)(e.code,{children:"'/api/v4/trade-account/balance'"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"./../glossary#nonce",children:(0,r.jsx)(e.strong,{children:"'nonce'"})})," - a number that is always ",(0,r.jsx)(e.strong,{children:"greater"})," than the previous request’s nonce number. Example: ",(0,r.jsx)(e.code,{children:"'1594297865'"}),". A good method of creating a ",(0,r.jsx)(e.strong,{children:"nonce"})," is to use the unix timestamp in milliseconds. This way you'll always get an incrementing number, but make sure not to send two API calls at the same time, otherwise their nonce will be identical."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"'nonceWindow'"})," - boolean. In cases when you can’t guarantee consecutive increment of ",(0,r.jsx)(e.a,{href:"./../glossary#nonce",children:(0,r.jsx)(e.strong,{children:"nonce"})})," you can use ",(0,r.jsx)(e.strong,{children:"nonceWindow"})," field. If it set to true nonce validation will be work a bit different. You have to passed nonce as unix timestamp in milliseconds. The api will validate that your nonce enter the range of current time +/- 5 seconds (5000 milliseconds). Also your nonce will be checked as unique, to avoid double spending. This feature can be useful in high-frequency concurrent systems when a lot of requests is being generated in a short period of time."]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"params of request"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Example:"}),"\n",(0,r.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'    "request": "/api/v4/trade-account/balance",'})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'    "nonce": 1594297865,'})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'    "nonceWindow": true,'})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'    "ticker": "BTC"'})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.h3,{id:"headers",children:"Headers"}),"\n",(0,r.jsxs)(e.p,{children:["With every request you need to provide next ",(0,r.jsx)(e.strong,{children:"headers"}),":"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"'Content-type': 'application/json'"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"'X-TXC-APIKEY': api_key"})," - where api_key is your public WhiteBit API key"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"'X-TXC-PAYLOAD': payload'"})," - where payload is base64-encoded body data"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"'X-TXC-SIGNATURE': signature"})," - where signature is ",(0,r.jsx)(e.code,{children:"hex(HMAC_SHA512(payload), key=api_secret))"})]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"examples-of-auth",children:"Examples of auth"}),"\n",(0,r.jsxs)(e.p,{children:["To help you get started with our API, we've created the ",(0,r.jsx)(e.a,{href:"https://github.com/whitebit-exchange/api-quickstart",children:"API Quick start helper"})," library. It supports the following languages:"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". Python"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". PHP"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". NodeJS"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". Go"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". JavaScript"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"6"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". Kotlin"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"7"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". DotNet"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"8"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". Ruby"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"9"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". C++"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:". Rust"})]})]})}),"\n",(0,r.jsx)(e.h3,{id:"errors",children:"Errors:"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:'"Too many requests."'})," - this error occurs if the ",(0,r.jsx)(e.a,{href:"./../glossary#nonce",children:(0,r.jsx)(e.strong,{children:"“nonce”"})})," in your current request is equal or is lower than the one in the previous request."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Too many requests."'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:'"This action is unauthorized. Enable your key in API settings"'})," - this error occurs when you are using disabled API key. You can enable your API key in account API settings ",(0,r.jsx)(e.a,{href:"https://whitebit.com/settings/api",children:"https://whitebit.com/settings/api"}),". Note: Your API key is disabled automatically after disabling 2FA. Also, the API key will be disabled if the request is received from unknown IP (if IP access restrictions are turned on)."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"This action is unauthorized. Enable your key in API settings"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:'"You don\'t have permission to use this endpoint. Please contact support for more details"'}),' - this error occurs when you are using an endpoint that is disabled for a specific API key in API key settings. You can enable endpoint by editing "Endpoint access restrictions" for this API key in account settings ',(0,r.jsx)(e.a,{href:"https://whitebit.com/settings/api",children:"https://whitebit.com/settings/api"}),"."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ["})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"You don\'t have permission to use this endpoint. Please contact support for more details"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:'"Invalid payload"'})," - this error occurs when the data that was provided in the body of the request doesn't match the ",(0,r.jsx)(e.strong,{children:"base64-decoded"})," payload."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Invalid payload."'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:'"Unauthorized request."'})," - this error occurs if the request was signed incorrectly."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Unauthorized request."'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsxs)(e.strong,{children:['"',(0,r.jsx)(e.a,{href:"./../glossary#nonce",children:"Nonce"}),' not provided."']})," - this error occurs if your request is missing ",(0,r.jsx)(e.strong,{children:'"nonce"'})," in the request body."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Nonce not provided."'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsxs)(e.strong,{children:['"Your ',(0,r.jsx)(e.a,{href:"./../glossary#nonce",children:"nonce"}),' is more than 5 seconds lesser than the current nonce"']})," - this error occurs if ",(0,r.jsx)(e.strong,{children:"nonceWindow"})," set to true, but you passed not a valid timestamp in ",(0,r.jsx)(e.strong,{children:"nonce"})," - it should be current timestamp in milliseconds."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Your nonce is more than 5 seconds lesser than the current nonce"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:'"Invalid nonceWindow."'})," - this error occurs if ",(0,r.jsx)(e.strong,{children:"nonceWindow"})," is not boolean."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Invalid nonceWindow."'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:'"Request not provided."'})," - this error occurs if your request is missing ",(0,r.jsx)(e.strong,{children:'"request"'})," path in the request body."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"message"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Request not provided."'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"result"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"success"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.hr,{})]})}e.default=(0,l.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/private/http-auth.md",route:"/private/http-auth",title:"Private HTTP API Authentication",headings:o},pageNextRoute:"/private/http-auth"})}},function(s){s.O(0,[673,888,774,179],function(){return s(s.s=6879)}),_N_E=s.O()}]);