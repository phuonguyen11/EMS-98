"use strict";(self.webpackChunke_learning_system=self.webpackChunke_learning_system||[]).push([[219],{9362:function(e,t,a){a.d(t,{o:function(){return s}});var r=a(6545),i=a(9574),n=a(9709);const s=e=>{(0,n.Xb)(i.I,e.email,e.password).then((t=>{console.log(t),(async(e,t)=>{const a=e.email,n=e.password,s=e.role;console.log(a,n,s),t&&(await(0,r.pl)((0,r.JU)(i.db,"users",t.uid),{uid:t.uid,email:a,password:n,role:s}),console.log("Create user successfully"))})(e,t.user)})).catch((e=>{console.log(e)}))}},2251:function(e,t,a){a.d(t,{p:function(){return s},s:function(){return n}});var r=a(6545),i=a(9574);const n=async e=>{const t=(0,r.IO)((0,r.hJ)(i.db,"users"),(0,r.ar)("role","==",e)),a=[];return(await(0,r.PL)(t)).forEach((e=>{a.push(e.data())})),a},s=async e=>{const t=(0,r.IO)((0,r.hJ)(i.db,"users"),(0,r.ar)("email","==",e)),a=[];return(await(0,r.PL)(t)).forEach((e=>{a.push(e.data())})),a}},7746:function(e,t,a){a.d(t,{$F:function(){return d},Jq:function(){return u},TF:function(){return o},u2:function(){return l},wi:function(){return c}});var r=a(9574),i=a(6545),n=a(7120),s=a(2251);const l=async(e,t)=>{const a=e.target,n=a.name.value,s=a.phone.value,l=a.identitycard.value,o=a.address.value;try{if(t)return await(0,i.r7)((0,i.JU)(r.db,"users",t.uid),{uid:t.uid,name:n,phone:s,identitycard:l,address:o}),console.log("Profile updated successfully"),"/"}catch(c){throw console.error("Error submitting profile:",c),c}},o=async(e,t)=>{try{if(e){const a=await(0,s.p)(e),n=t;a.length>0&&(await(0,i.r7)((0,i.JU)(r.db,"users",a[0].uid),{uid:a[0].uid,isActive:n}),console.log("Status updated successfully"))}}catch(a){throw console.error("Error updating status:",a),a}},c=async e=>{try{const t=e.email;if(t){const a=await(0,s.p)(t);a.length>0&&(await(0,i.r7)((0,i.JU)(r.db,"users",a[0].uid),{uid:a[0].uid,name:e.name,major:e.major,department:e.department,startDate:e.startDate}),console.log("Student Information updated successfully"))}}catch(t){throw console.error("Error updating information:",t),t}},d=async e=>{try{const t=e.email;if(t){const a=await(0,s.p)(t);a.length>0&&(await(0,i.r7)((0,i.JU)(r.db,"users",a[0].uid),{uid:a[0].uid,name:e.name,salary:e.salary,jobTitle:e.jobTitle,department:e.department,startDate:e.startDate}),console.log("Student Information updated successfully"))}}catch(t){throw console.error("Error updating information:",t),t}},u=async(e,t)=>{const a=(new Date).getTime(),s=e.target.file.files[0],l=(0,n.iH)(r.t,`avatar_${a}`);try{await(0,n.B0)(l,s);const e=await(0,n.Jt)(l);if(t)return await(0,i.r7)((0,i.JU)(r.db,"users",t.uid),{uid:t.uid,image:e}),console.log("Avatar updated successfully"),e}catch(o){throw console.error("Error submitting profile:",o),o}}},9726:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(9860),i=a(1689),n=a(5272),s=a(891),l=a(8119),o=a(6417);var c=e=>{let{color:t,outline:a,size:i,sx:n,...s}=e;const c=(0,r.Z)(),d=t&&!a&&{color:c.palette.background.paper,bgcolor:`${t}.main`},u=a&&{color:t?`${t}.main`:"primary.main",bgcolor:c.palette.background.paper,border:"2px solid",borderColor:t?`${t}.main`:"primary.main"};let h={};switch(i){case"badge":h={width:c.spacing(3.5),height:c.spacing(3.5)};break;case"xs":h={width:c.spacing(4.25),height:c.spacing(4.25)};break;case"sm":h={width:c.spacing(5),height:c.spacing(5)};break;case"lg":h={width:c.spacing(9),height:c.spacing(9)};break;case"xl":h={width:c.spacing(10.25),height:c.spacing(10.25)};break;case"md":h={width:c.spacing(7.5),height:c.spacing(7.5)};break;default:h={}}return(0,o.jsx)(l.Z,{sx:{...d,...u,...h,...n},...s})};var d=e=>{let{title:t,link:a,icon:l}=e;const d=(0,r.Z)();return(0,o.jsx)(i.Z,{title:t||"Reference",placement:"left",children:(0,o.jsxs)(n.Z,{disableRipple:!0,children:[!l&&(0,o.jsx)(c,{component:s.Z,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,o.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,o.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,o.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0",children:(0,o.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),l&&(0,o.jsx)(c,{component:s.Z,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:l})]})})}},475:function(e,t,a){a.d(t,{l:function(){return r}});const r="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"},7487:function(e,t,a){a.d(t,{v:function(){return r}});const r=e=>{let t=e.split(",").filter((e=>e&&e.trim()));console.log(t);let a=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;for(let r=0;r<t.length;r++)if(!a.test(t[r].replace(/\s/g,"")))return!1;return!(t.length>10)}},2219:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var r=a(7313),i=a(3497),n=a(9726),s=a(8268),l=a(9015),o=a(1806),c=a(1113),d=a(1405),u=a(4748),h=a(7551),p=a(1095),m=a(475),g=a(9778),x=a(2886),f=a(7746),b=a(6530),w=a(2181),j=a(9064),y=a(6417);const v=e=>{let{data:t,openModal:a}=e;const i=(0,r.useMemo)((()=>[{id:"teacher",header:"Teacher",columns:[{accessorFn:e=>`${e.name}`,id:"name",header:"Name",size:250,Cell:e=>{let{renderedCellValue:t,row:a}=e;return(0,y.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,y.jsx)("div",{style:{width:"30px",height:"30px",objectFit:"contain",borderRadius:"50%"},children:(0,y.jsx)("img",{alt:"avatar",width:"100%",height:"100%",src:a.original.image?a.original.image:m.l,loading:"lazy",style:{borderRadius:"50%"}})}),(0,y.jsx)("span",{children:t})]})}},{accessorKey:"email",enableClickToCopy:!0,filterVariant:"autocomplete",header:"Email",enableEditing:!1,size:300},{accessorKey:"isActive",accessorFn:e=>""+(e.isActive?"Active":"Inactive"),header:"Active Status",enableEditing:!1,size:100,Cell:e=>{let{cell:t}=e;return(0,y.jsx)(o.Z,{component:"span",sx:e=>({backgroundColor:"Active"===t.getValue()?e.palette.info.light:"#808080",borderRadius:"0.25rem",color:"#fff",maxWidth:"9ch",p:"0.25rem"}),children:t.getValue()})}}]},{id:"id",header:"Job Info",columns:[{accessorKey:"salary",enableHiding:!0,filterFn:"between",header:"Salary",size:200,Cell:e=>{var t,a;let{cell:r}=e;return(0,y.jsx)(o.Z,{component:"span",sx:e=>({backgroundColor:r.getValue()<15e6?e.palette.error.dark:r.getValue()>=15e6&&r.getValue()<3e7?e.palette.warning.dark:e.palette.success.dark,borderRadius:"0.25rem",color:"#fff",maxWidth:"9ch",p:"0.25rem"}),children:null===(t=Number(r.getValue()))||void 0===t||null===(a=t.toLocaleString)||void 0===a?void 0:a.call(t,"en-US",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0})})}},{accessorKey:"department",header:"Department",size:350},{accessorKey:"jobTitle",header:"Job Title",size:350},{accessorFn:e=>new Date(e.startDate),id:"startDate",header:"Start Date",filterVariant:"date",filterFn:"lessThan",sortingFn:"datetime",muiEditTextFieldProps:{type:"date",required:!0},Cell:e=>{var t;let{cell:a}=e;return null===(t=new Date(a.getValue()))||void 0===t?void 0:t.toLocaleDateString()},Header:e=>{let{column:t}=e;return(0,y.jsx)("em",{children:t.columnDef.header})},muiFilterTextFieldProps:{sx:{minWidth:"250px"}}}]}]),[]),n=(0,l.X0)({columns:i,data:t,enableEditing:!0,editDisplayMode:"modal",onEditingRowSave:async e=>{let{table:t,values:a}=e;console.log(a),await(0,f.$F)(a),t.setEditingRow(null)},onEditingRowCancel:()=>{},enableColumnFilterModes:!0,enableColumnOrdering:!0,enableGrouping:!0,enableColumnPinning:!0,enableFacetedValues:!0,enableRowActions:!0,enableRowSelection:!0,initialState:{showColumnFilters:!0,showGlobalFilter:!0,columnPinning:{left:["mrt-row-expand","mrt-row-select"],right:["mrt-row-actions"]}},paginationDisplayMode:"pages",positionToolbarAlertBanner:"bottom",muiSearchTextFieldProps:{size:"small",variant:"outlined"},muiPaginationProps:{color:"secondary",rowsPerPageOptions:[10,20,30],shape:"rounded",variant:"outlined"},renderDetailPanel:e=>{let{row:t}=e;return(0,y.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-around",left:"30px",maxWidth:"1000px",position:"sticky",width:"100%"},children:[(0,y.jsx)("div",{style:{width:"150px",height:"150px",objectFit:"contain",borderRadius:"50%"},children:(0,y.jsx)("img",{alt:"avatar",width:"100%",height:"100%",src:t.original.image?t.original.image:m.l,loading:"lazy",style:{borderRadius:"50%"}})}),(0,y.jsxs)(o.Z,{sx:{textAlign:"center"},children:[(0,y.jsx)(c.Z,{variant:"h4",children:"Department:"}),(0,y.jsx)(c.Z,{variant:"h1",children:t.original.department})]})]})},renderRowActionMenuItems:e=>{let{closeMenu:t}=e;return[(0,y.jsxs)(d.Z,{onClick:()=>{t()},sx:{m:0},children:[(0,y.jsx)(u.Z,{children:(0,y.jsx)(g.Z,{})}),"View Profile"]},0),(0,y.jsxs)(d.Z,{onClick:()=>{t()},sx:{m:0},children:[(0,y.jsx)(u.Z,{children:(0,y.jsx)(x.Z,{})}),"Send Email"]},1)]},renderTopToolbar:e=>{let{table:t}=e;return(0,y.jsxs)(o.Z,{sx:e=>({backgroundColor:(0,h.$n)(e.palette.background.default,.05),display:"flex",gap:"0.5rem",p:"8px",justifyContent:"space-between"}),children:[(0,y.jsxs)(o.Z,{sx:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[(0,y.jsx)(l.bw,{table:t}),(0,y.jsx)(l.kx,{table:t})]}),(0,y.jsx)(o.Z,{children:(0,y.jsxs)(o.Z,{sx:{display:"flex",gap:"0.5rem"},children:[(0,y.jsx)(p.Z,{color:"error",disabled:!t.getIsSomeRowsSelected(),onClick:async()=>{t.getSelectedRowModel().flatRows.map((e=>{(0,f.TF)(e.getValue("email"),!1),b.ZP.success("Deactivating "+e.getValue("name"))}))},variant:"contained",children:"Deactivate"}),(0,y.jsx)(p.Z,{color:"success",disabled:!t.getIsSomeRowsSelected(),onClick:async()=>{t.getSelectedRowModel().flatRows.map((e=>{(0,f.TF)(e.getValue("email"),!0),b.ZP.success("Activating "+e.getValue("name"))}))},variant:"contained",children:"Activate"}),(0,y.jsx)(p.Z,{color:"info",onClick:a,variant:"contained",children:"Add New Teacher Account"})]})})]})}});return(0,y.jsx)(l.P2,{table:n})};var Z=e=>{let{data:t,openModal:a}=e;return(0,y.jsxs)(j._,{dateAdapter:w.y,children:[(0,y.jsx)("div",{children:(0,y.jsx)(b.x7,{position:"top-right"})}),(0,y.jsx)(v,{data:t,openModal:a})]})},C=a(2251),k=a(5281),V=a(9019),A=a(4469),S=a(4631),D=a(3604),F=a(1550),P=a(6467),T=a(4117),M=a(7762),L=a(5480),R=a(7487),E=a(9362);var z=e=>{let{openAddDialog:t,handleAddDialogClose:a,fetchTeachers:i}=e;const[n,s]=(0,r.useState)(""),[l,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[u,h]=(0,r.useState)(""),m=()=>{s(""),o(""),d(""),h(""),a()};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(A.Z,{open:t,onClose:m,"aria-labelledby":"user-view-edit",sx:{"& .MuiPaper-root":{width:"100%",maxWidth:650,p:[2,10]}},"aria-describedby":"user-view-edit-description",children:[(0,y.jsx)(D.Z,{id:"user-view-edit",sx:{textAlign:"center",fontSize:"1.5rem !important"},children:"Add New Teacher Account"}),(0,y.jsxs)(P.Z,{children:[(0,y.jsx)(M.Z,{variant:"body2",id:"user-view-edit-description",sx:{textAlign:"center",mb:7},children:"Adding a new teacher account with the following information."}),(0,y.jsx)("form",{children:(0,y.jsxs)(V.ZP,{container:!0,spacing:6,children:[(0,y.jsx)(V.ZP,{item:!0,xs:12,sm:6,children:(0,y.jsxs)(F.Z,{error:""!==c,fullWidth:!0,children:[(0,y.jsx)(S.Z,{type:"email",error:""!==c,label:"Email",value:n,onChange:e=>{s(e.target.value),d("")}}),(0,y.jsx)(L.Z,{id:"component-error-text",children:c})]})}),(0,y.jsx)(V.ZP,{item:!0,xs:12,sm:6,children:(0,y.jsxs)(F.Z,{error:""!==u,fullWidth:!0,children:[(0,y.jsx)(S.Z,{error:""!==u,label:"Password",value:l,onChange:e=>{o(e.target.value),h("")}}),(0,y.jsx)(L.Z,{id:"component-error-text",children:u})]})})]})})]}),(0,y.jsxs)(T.Z,{sx:{justifyContent:"center"},children:[(0,y.jsx)(p.Z,{variant:"contained",sx:{mr:1},onClick:async()=>{if(""===n&&d("This field cannot be empty"),(0,R.v)(n)?""===l&&h("This field cannot be empty"):d("Must be a valid email"),""===n||""===l||!(0,R.v)(n))return;const e={email:n,password:l,role:"teacher"};await(0,E.o)(e),m(),i()},children:"Add"}),(0,y.jsx)(p.Z,{variant:"outlined",color:"secondary",onClick:m,children:"Cancel"})]})]})})};var I=()=>{const[e,t]=(0,r.useState)([]),[a,l]=(0,r.useState)(!1),o=async()=>{const e=await(0,C.s)("teacher");e&&t(e)};(0,r.useEffect)((()=>{o()}),[]);return(0,y.jsxs)(i.Z,{title:"Teacher Management",secondary:(0,y.jsx)(n.Z,{icon:(0,y.jsx)(s.Z,{fontSize:"small"}),link:"https://tablericons.com/"}),children:[e?(0,y.jsx)(Z,{data:e,openModal:()=>l(!0)}):(0,y.jsx)(k.Z,{}),(0,y.jsx)(z,{openAddDialog:a,handleAddDialogClose:()=>l(!1),fetchTeachers:o})]})}}}]);