"use strict";(self.webpackChunke_learning_system=self.webpackChunke_learning_system||[]).push([[422],{2251:function(e,r,t){t.d(r,{p:function(){return i},s:function(){return o}});var n=t(6545),a=t(9574);const o=async e=>{const r=(0,n.IO)((0,n.hJ)(a.db,"users"),(0,n.ar)("role","==",e)),t=[];return(await(0,n.PL)(r)).forEach((e=>{t.push(e.data())})),t},i=async e=>{const r=(0,n.IO)((0,n.hJ)(a.db,"users"),(0,n.ar)("email","==",e)),t=[];return(await(0,n.PL)(r)).forEach((e=>{t.push(e.data())})),t}},7746:function(e,r,t){t.d(r,{$F:function(){return u},Jq:function(){return d},TF:function(){return l},u2:function(){return s},wi:function(){return c}});var n=t(9574),a=t(6545),o=t(7120),i=t(2251);const s=async(e,r)=>{const t=e.target,o=t.name.value,i=t.phone.value,s=t.identitycard.value,l=t.address.value;try{if(r)return await(0,a.r7)((0,a.JU)(n.db,"users",r.uid),{uid:r.uid,name:o,phone:i,identitycard:s,address:l}),console.log("Profile updated successfully"),"/"}catch(c){throw console.error("Error submitting profile:",c),c}},l=async(e,r)=>{try{if(e){const t=await(0,i.p)(e),o=r;t.length>0&&(await(0,a.r7)((0,a.JU)(n.db,"users",t[0].uid),{uid:t[0].uid,isActive:o}),console.log("Status updated successfully"))}}catch(t){throw console.error("Error updating status:",t),t}},c=async e=>{try{const r=e.email;if(r){const t=await(0,i.p)(r);t.length>0&&(await(0,a.r7)((0,a.JU)(n.db,"users",t[0].uid),{uid:t[0].uid,name:e.name,major:e.major,department:e.department,startDate:e.startDate}),console.log("Student Information updated successfully"))}}catch(r){throw console.error("Error updating information:",r),r}},u=async e=>{try{const r=e.email;if(r){const t=await(0,i.p)(r);t.length>0&&(await(0,a.r7)((0,a.JU)(n.db,"users",t[0].uid),{uid:t[0].uid,name:e.name,salary:e.salary,jobTitle:e.jobTitle,department:e.department,startDate:e.startDate}),console.log("Student Information updated successfully"))}}catch(r){throw console.error("Error updating information:",r),r}},d=async(e,r)=>{const t=(new Date).getTime(),i=e.target.file.files[0],s=(0,o.iH)(n.t,`avatar_${t}`);try{await(0,o.B0)(s,i);const e=await(0,o.Jt)(s);if(r)return await(0,a.r7)((0,a.JU)(n.db,"users",r.uid),{uid:r.uid,image:e}),console.log("Avatar updated successfully"),e}catch(l){throw console.error("Error submitting profile:",l),l}}},5184:function(e,r,t){var n=t(3984),a=t(1113),o=t(891),i=t(6417);r.Z=()=>(0,i.jsxs)(n.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(a.Z,{variant:"subtitle2",component:o.Z,target:"_blank",underline:"hover",children:"EMS-98"}),(0,i.jsx)(a.Z,{variant:"subtitle2",component:o.Z,target:"_blank",underline:"hover",children:"\xa9 98 Team"})]})},5992:function(e,r,t){t.r(r);var n=t(9860),a=t(4813),o=t(9019),i=t(5281),s=t(8119),l=t(1095),c=t(3984),u=t(1113),d=t(4631),m=t(9536),h=t(5184),f=t(7746),p=t(7313),y=t(9574),x=t(2742),v=t(3497),g=t(6417);r.default=()=>{const e=(0,n.Z)(),r=(0,a.Z)(e.breakpoints.down("md")),[t,Z]=(0,p.useState)(null),[b,w]=(0,p.useState)(!1),[j,k]=(0,p.useState)(!1),S=async()=>{try{const e=y.I.currentUser;if(e){const r=await(0,x.m)(e);Z(r)}}catch(e){console.error("Error fetching user data: ",e)}};(0,p.useEffect)((()=>{S()}),[]);return t?(0,g.jsx)(v.Z,{children:(0,g.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,g.jsx)(o.ZP,{item:!0,xs:12,children:(0,g.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:j?(0,g.jsx)(i.Z,{}):(0,g.jsx)(o.ZP,{item:!0,xs:12,children:(0,g.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,g.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsxs)(o.ZP,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:[(0,g.jsx)(o.ZP,{item:!0,sx:{mb:2},children:(0,g.jsx)(s.Z,{alt:"User Avatar",src:t.image,sx:{width:200,height:200}})}),(0,g.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{await(0,f.Jq)(e,y.I.currentUser),console.log("Profile image updated successfully"),w(!b)}catch(r){console.error("Error updating profile image:",r)}},children:[(0,g.jsx)("input",{style:{display:"none"},type:"file",id:"file",name:"file"}),(0,g.jsx)("label",{htmlFor:"file",children:(0,g.jsx)("span",{children:"Add an avatar"})}),(0,g.jsx)(l.Z,{color:"primary",type:"submit",onClick:()=>S(),children:"Update Profile Image"})]})]})}),(0,g.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsxs)(o.ZP,{container:!0,direction:"column",children:[(0,g.jsxs)(c.Z,{alignItems:"center",justifyContent:"center",spacing:1,sx:{mb:8},children:[(0,g.jsx)(u.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h0":"h1",children:"Account Settings"}),(0,g.jsx)(u.Z,{variant:"subtitle1",color:e.palette.secondary.main,gutterBottom:!0,align:"center",children:"Update your account information here"})]}),(0,g.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{k(!0),await(0,f.u2)(e,y.I.currentUser),console.log("Profile information updated successfully"),w(!0)}catch(r){console.error("Error updating profile information:",r)}finally{k(!1),S()}},children:[(0,g.jsx)(d.Z,{id:"name",label:"Full Name",defaultValue:t.name,fullWidth:!0,sx:{mb:3}}),(0,g.jsx)(d.Z,{id:"phone",label:"Phone Number",defaultValue:t.phone,fullWidth:!0,sx:{mb:3}}),(0,g.jsx)(d.Z,{id:"identitycard",label:"Identity Card",defaultValue:t.identitycard,fullWidth:!0,sx:{mb:3}}),(0,g.jsx)(d.Z,{id:"address",label:"Address",defaultValue:t.address,fullWidth:!0,sx:{mb:3}}),(0,g.jsx)(l.Z,{type:"submit",variant:"contained",color:"primary",onClick:()=>S(),children:"Update Information"})]})]})}),(0,g.jsx)(o.ZP,{item:!0,xs:12,children:(0,g.jsx)(m.Z,{})})]})})})}),(0,g.jsx)(o.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,g.jsx)(h.Z,{})})]})}):(0,g.jsx)(v.Z,{title:"Please wait we are getting your information!"})}},5281:function(e,r,t){t.d(r,{Z:function(){return D}});var n=t(3366),a=t(7462),o=t(7313),i=t(4146),s=t(1921),l=t(686),c=t(1615),u=t(7342),d=t(7592),m=t(7430),h=t(2298);function f(e){return(0,h.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p=t(6417);const y=["className","color","disableShrink","size","style","thickness","value","variant"];let x,v,g,Z,b=e=>e;const w=44,j=(0,l.F4)(x||(x=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,l.F4)(v||(v=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),S=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})((e=>{let{ownerState:r,theme:t}=e;return(0,a.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&(0,l.iv)(g||(g=b`
      animation: ${0} 1.4s linear infinite;
    `),j)})),P=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),C=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((e=>{let{ownerState:r,theme:t}=e;return(0,a.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(Z||(Z=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k)}));var D=o.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:d=!1,size:m=40,style:h,thickness:x=3.6,value:v=0,variant:g="indeterminate"}=t,Z=(0,n.Z)(t,y),b=(0,a.Z)({},t,{color:l,disableShrink:d,size:m,thickness:x,value:v,variant:g}),j=(e=>{const{classes:r,variant:t,color:n,disableShrink:a}=e,o={root:["root",t,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,a&&"circleDisableShrink"]};return(0,s.Z)(o,f,r)})(b),k={},D={},I={};if("determinate"===g){const e=2*Math.PI*((w-x)/2);k.strokeDasharray=e.toFixed(3),I["aria-valuenow"]=Math.round(v),k.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,p.jsx)(S,(0,a.Z)({className:(0,i.Z)(j.root,o),style:(0,a.Z)({width:m,height:m},D,h),ownerState:b,ref:r,role:"progressbar"},I,Z,{children:(0,p.jsx)(P,{className:j.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,p.jsx)(C,{className:j.circle,style:k,ownerState:b,cx:w,cy:w,r:(w-x)/2,fill:"none",strokeWidth:x})})}))}))},891:function(e,r,t){t.d(r,{Z:function(){return S}});var n=t(3366),a=t(7462),o=t(7313),i=t(4146),s=t(1921),l=t(1615),c=t(7592),u=t(7342),d=t(7037),m=t(6983),h=t(1113),f=t(7430),p=t(2298);function y(e){return(0,p.ZP)("MuiLink",e)}var x=(0,f.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),v=t(6428),g=t(7551);const Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=e=>{let{theme:r,ownerState:t}=e;const n=(e=>Z[e]||e)(t.color),a=(0,v.DW)(r,`palette.${n}`,!1)||t.color,o=(0,v.DW)(r,`palette.${n}Channel`);return"vars"in r&&o?`rgba(${o} / 0.4)`:(0,g.Fq)(a,.4)},w=t(6417);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,c.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`underline${(0,l.Z)(t.underline)}`],"button"===t.component&&r.button]}})((e=>{let{theme:r,ownerState:t}=e;return(0,a.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:b({theme:r,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})}));var S=o.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiLink"}),{className:c,color:h="primary",component:f="a",onBlur:p,onFocus:x,TypographyClasses:v,underline:g="always",variant:b="inherit",sx:S}=t,P=(0,n.Z)(t,j),{isFocusVisibleRef:C,onBlur:D,onFocus:I,ref:$}=(0,d.Z)(),[F,M]=o.useState(!1),A=(0,m.Z)(r,$),E=(0,a.Z)({},t,{color:h,component:f,focusVisible:F,underline:g,variant:b}),U=(e=>{const{classes:r,component:t,focusVisible:n,underline:a}=e,o={root:["root",`underline${(0,l.Z)(a)}`,"button"===t&&"button",n&&"focusVisible"]};return(0,s.Z)(o,y,r)})(E);return(0,w.jsx)(k,(0,a.Z)({color:h,className:(0,i.Z)(U.root,c),classes:v,component:f,onBlur:e=>{D(e),!1===C.current&&M(!1),p&&p(e)},onFocus:e=>{I(e),!0===C.current&&M(!0),x&&x(e)},ref:A,ownerState:E,variant:b,sx:[...Object.keys(Z).includes(h)?[]:[{color:h}],...Array.isArray(S)?S:[S]]},P))}))}}]);