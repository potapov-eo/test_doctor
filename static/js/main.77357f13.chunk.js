(this.webpackJsonptest_doctor=this.webpackJsonptest_doctor||[]).push([[0],{64:function(e,t,r){},65:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),i=r(13),c=r.n(i),a=(r(64),r(65),r(103)),d=r(24),l=r(7),m=r(14),s=r(98),p=r(102),u=r(101),j=r(95),f=r(99),b=r(100),O=r(97),h=function(e){return"".concat(new Date(e).toLocaleDateString("en-GB").replaceAll("/",".")," ").concat(new Date(e).toLocaleDateString("en-GB").replaceAll("/",":"))},y=function(e){return e.app.status},x=function(e){return e.app.error},_=function(e){return e.app.Employees},g=function(e){return e.app.workLogData},D=r(2),v=function(){var e=Object(l.g)().token,t=Object(m.c)(_).find((function(t){return t.id===Number(e)})),r=Object(m.c)(g),o=r.filter((function(t){return t.employee_id===Number(e)}));var i=o.map((function(e){return t=e.id,r=h(e.from),o=h(e.to),{id:t,enterTime:r,outTime:o};var t,r,o})),c=n.a.useMemo((function(){return function(e,t){return e.reduce((function(e,r){return t.filter((function(e){return new Date(r.to)>new Date(e.from)&&new Date(r.to)<new Date(e.to)})).length<3&&e.push(r.id),e}),[])}(o,r)}),[r,o]);return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsxs)("div",{children:[" ",t&&"Doctor: ".concat(t.lastName," ").concat(t.firstName," ").concat(t.middleName)," "]}),Object(D.jsx)(j.a,{component:O.a,elevation:3,children:Object(D.jsxs)(s.a,{"aria-label":"simple table",children:[Object(D.jsx)(f.a,{children:Object(D.jsxs)(b.a,{children:[Object(D.jsx)(u.a,{align:"center",children:"Log ID"}),Object(D.jsx)(u.a,{align:"center",children:"time from"}),Object(D.jsx)(u.a,{align:"center",children:"time to"})]})}),Object(D.jsx)(p.a,{children:i.map((function(e){return Object(D.jsxs)(b.a,{selected:c.includes(e.id),children:[Object(D.jsx)(u.a,{align:"center",scope:"row",children:e.id}),Object(D.jsx)(u.a,{align:"center",children:e.enterTime}),Object(D.jsx)(u.a,{align:"center",children:e.outTime})]},e.id)}))})]})})]})},N=function(){var e=Object(m.c)(_).sort((function(e,t){return e.lastName.localeCompare(t.lastName)})).map((function(e){return t=e.id,r="".concat(e.lastName," ").concat(e.firstName," ").concat(e.middleName),n=e.birthDate,o=new Date(n).toLocaleDateString("en-GB").replaceAll("/","."),{id:t,FIO:r,birthDate:o};var t,r,o,n}));return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(j.a,{component:O.a,elevation:3,children:Object(D.jsxs)(s.a,{"aria-label":"simple table",children:[Object(D.jsx)(f.a,{children:Object(D.jsxs)(b.a,{children:[Object(D.jsx)(u.a,{align:"center",children:"ID"}),Object(D.jsx)(u.a,{align:"center",children:"\u0424\u0418\u041e"}),Object(D.jsx)(u.a,{align:"center",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"})]})}),Object(D.jsx)(p.a,{children:e.map((function(e){return Object(D.jsxs)(b.a,{children:[Object(D.jsx)(u.a,{align:"center",scope:"row",children:e.id}),Object(D.jsx)(u.a,{align:"center",children:Object(D.jsx)(d.b,{to:"".concat(T.DOCTOR,"/").concat(e.id),children:e.FIO})}),Object(D.jsx)(u.a,{align:"center",children:e.birthDate})]},e.id)}))})]})})})},T={DOCTOR:"/doctor",DOCTORS:"/doctors"},w=function(){return Object(D.jsx)("div",{children:Object(D.jsxs)(l.d,{children:[Object(D.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(D.jsx)(l.a,{to:T.DOCTORS})}}),Object(D.jsx)(l.b,{path:"".concat(T.DOCTOR,"/:token"),render:function(){return Object(D.jsx)(v,{})}}),Object(D.jsx)(l.b,{path:T.DOCTOR,render:function(){return Object(D.jsx)(v,{})}}),Object(D.jsx)(l.b,{path:T.DOCTORS,render:function(){return Object(D.jsx)(N,{})}})]})})},E=r(32),S=r.n(E),P=r(46),k=r(19),A={"/api/employees":[{id:1,firstName:"\u041b\u0435\u043e\u043d\u0438\u0434",lastName:"\u0421\u0442\u0430\u0440\u043e\u043a\u0430\u0434\u043e\u043c\u0441\u043a\u0438\u0439",middleName:"\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447",birthDate:"1875-03-27",phone:"+79975669545"},{id:2,firstName:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",lastName:"\u0414\u0435\u043c\u0438\u0445\u043e\u0432",middleName:"\u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447",birthDate:"1916-06-18",phone:"+74951263366"},{id:3,firstName:"\u0412\u0438\u043a\u0442\u043e\u0440",lastName:"\u041a\u0430\u043b\u043d\u0431\u0435\u0440\u0437",middleName:"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u0438\u0447",birthDate:"1928-06-02",phone:"+37156698963"},{id:4,firstName:"\u0410\u043b\u043e\u0438\u0441",lastName:"\u0410\u043b\u044c\u0446\u0433\u0435\u0439\u043c\u0435\u0440",middleName:"\u042d\u0434\u0443\u0430\u0440\u0434\u043e\u0432\u0438\u0447",birthDate:"1864-06-14",phone:"+15559665599"},{id:5,firstName:"\u0410\u0432\u0438\u0446\u0435\u043d\u043d\u0430",lastName:"\u0421\u0438\u043d\u0430",middleName:"\u0410\u0431\u0443 \u0410\u043b\u0438 \u0418\u0431\u043d",birthDate:"1980-08-23",phone:"+15559171855"},{id:6,firstName:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",lastName:"\u0424\u043b\u0435\u043c\u0438\u043d\u0433",middleName:"\u0425\u0443\u0433\u043e\u0432\u0438\u0447",birthDate:"1881-08-06",phone:"+4569988569"}],"/api/employees/worklog":[{id:1,employee_id:1,from:"2021-03-04 04:44:44",to:"2021-03-04 06:46:09"},{id:2,employee_id:1,from:"2021-03-04 06:55:01",to:"2021-03-04 08:13:10"},{id:3,employee_id:1,from:"2021-03-04 09:11:45",to:"2021-03-04 10:55:34"},{id:4,employee_id:1,from:"2021-03-04 11:31:54",to:"2021-03-04 13:36:34"},{id:5,employee_id:1,from:"2021-03-04 14:40:52",to:"2021-03-04 21:31:27"},{id:6,employee_id:1,from:"2021-03-04 21:32:16",to:"2021-03-04 22:13:47"},{id:7,employee_id:1,from:"2021-03-04 22:44:21",to:"2021-03-04 22:47:15"},{id:8,employee_id:1,from:"2021-03-04 23:27:07",to:"2021-03-04 23:41:45"},{id:9,employee_id:1,from:"2021-03-04 23:41:54",to:"2021-03-04 23:44:51"},{id:10,employee_id:1,from:"2021-03-04 23:53:00",to:"2021-04-04 01:15:22"},{id:11,employee_id:2,from:"2021-03-04 03:44:44",to:"2021-03-04 03:46:09"},{id:12,employee_id:2,from:"2021-03-04 03:55:01",to:"2021-03-04 08:13:10"},{id:13,employee_id:2,from:"2021-03-04 09:11:43",to:"2021-03-04 10:55:37"},{id:14,employee_id:2,from:"2021-03-04 10:56:54",to:"2021-03-04 13:36:34"},{id:15,employee_id:2,from:"2021-03-04 13:40:52",to:"2021-03-04 15:31:27"},{id:16,employee_id:2,from:"2021-03-04 15:32:16",to:"2021-03-04 16:13:47"},{id:17,employee_id:3,from:"2021-03-04 00:00:16",to:"2021-03-04 12:00:47"},{id:18,employee_id:3,from:"2021-03-04 12:33:56",to:"2021-03-04 20:11:11"},{id:19,employee_id:4,from:"2021-03-04 00:12:12",to:"2021-03-04 04:07:09"},{id:20,employee_id:4,from:"2021-03-04 06:33:25",to:"2021-03-04 08:56:12"},{id:21,employee_id:4,from:"2021-03-04 09:02:45",to:"2021-03-04 10:11:11"},{id:22,employee_id:4,from:"2021-03-04 11:12:10",to:"2021-03-04 13:36:34"},{id:23,employee_id:4,from:"2021-03-04 13:16:52",to:"2021-03-04 14:31:27"},{id:24,employee_id:4,from:"2021-03-04 16:32:16",to:"2021-03-04 19:13:59"},{id:25,employee_id:4,from:"2021-03-04 19:44:21",to:"2021-03-04 22:54:15"},{id:26,employee_id:4,from:"2021-03-04 23:27:19",to:"2021-03-04 23:41:30"},{id:27,employee_id:5,from:"2021-03-04 11:12:12",to:"2021-03-04 12:07:09"},{id:28,employee_id:5,from:"2021-03-04 12:32:25",to:"2021-03-04 12:56:13"},{id:29,employee_id:5,from:"2021-03-04 14:02:17",to:"2021-03-04 14:11:08"},{id:30,employee_id:5,from:"2021-03-04 15:12:19",to:"2021-03-04 16:33:33"},{id:31,employee_id:5,from:"2021-03-04 18:25:52",to:"2021-03-04 20:31:12"},{id:32,employee_id:5,from:"2021-03-04 20:32:20",to:"2021-03-04 21:21:21"},{id:33,employee_id:5,from:"2021-03-04 22:44:21",to:"2021-03-04 22:54:15"},{id:34,employee_id:5,from:"2021-03-04 22:59:19",to:"2021-03-04 23:29:30"},{id:35,employee_id:6,from:"2021-03-04 02:15:44",to:"2021-03-04 04:46:09"},{id:36,employee_id:6,from:"2021-03-04 17:26:01",to:"2021-03-04 08:17:10"},{id:37,employee_id:6,from:"2021-03-04 09:29:45",to:"2021-03-04 11:32:34"},{id:38,employee_id:6,from:"2021-03-04 11:39:07",to:"2021-03-04 13:39:07"},{id:39,employee_id:6,from:"2021-03-04 14:15:52",to:"2021-03-04 19:01:08"},{id:40,employee_id:6,from:"2021-03-04 19:32:47",to:"2021-03-04 20:55:47"},{id:41,employee_id:6,from:"2021-03-04 22:59:00",to:"2021-03-04 23:09:15"},{id:42,employee_id:6,from:"2021-03-04 23:27:05",to:"2021-03-04 23:30:45"},{id:43,employee_id:6,from:"2021-03-04 23:30:54",to:"2021-03-04 23:50:01"},{id:44,employee_id:6,from:"2021-04-04 00:53:00",to:"2021-04-04 04:15:22"}]};function L(e){var t;return t=A[e],new Promise((function(e,r){return setTimeout(t?e:r,500,t)}))}var R={status:"succeeded",error:null,Employees:[],workLogData:[]},C=function(e){return{type:"APP/SET_STATUS",status:e}},F=function(e){return{type:"APP/SET_ERROR",error:e}},I=function(e){return{type:"APP/SET_EMPLOYEES",employees:e}},B=r(105),G=r(104);function M(e){return Object(D.jsx)(G.a,Object(k.a)({elevation:6,variant:"filled"},e))}function J(){var e=Object(m.c)(x),t=Object(m.b)(),r=function(e,r){"clickaway"!==r&&t(F(null))};return Object(D.jsx)(B.a,{open:!0,autoHideDuration:6e3,onClose:r,children:Object(D.jsx)(M,{onClose:r,severity:"error",children:e})})}var K=function(){var e=Object(m.b)(),t=Object(m.c)(y),r=Object(m.c)(x);return Object(o.useEffect)((function(){e(function(){var e=Object(P.a)(S.a.mark((function e(t){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(C("loading")),e.next=4,L("/api/employees/worklog");case 4:r=e.sent,t(C("succeeded")),t({type:"APP/SET_WORKLOG",workLogData:r}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(C("succeeded")),t(F("Error from response"));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(P.a)(S.a.mark((function e(t){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(C("loading")),e.next=4,L("/api/employees");case 4:r=e.sent,t(C("succeeded")),t(I(r)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(C("succeeded")),t(F("Error from response"));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(D.jsx)(d.a,{children:Object(D.jsxs)("div",{className:"App",children:[null!==r&&Object(D.jsx)(J,{}),"loading"===t&&Object(D.jsx)(a.a,{}),Object(D.jsx)(w,{})]})})},U=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,106)).then((function(t){var r=t.getCLS,o=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;r(e),o(e),n(e),i(e),c(e)}))},W=r(26),Y=r(49),H=Object(W.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(k.a)(Object(k.a)({},e),{},{status:t.status});case"APP/SET_ERROR":return Object(k.a)(Object(k.a)({},e),{},{error:t.error});case"APP/SET_EMPLOYEES":return Object(k.a)(Object(k.a)({},e),{},{Employees:t.employees});case"APP/SET_WORKLOG":return Object(k.a)(Object(k.a)({},e),{},{workLogData:t.workLogData});default:return e}}}),q=Object(W.d)(H,Object(W.a)(Y.a));c.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(m.a,{store:q,children:Object(D.jsx)(K,{})})}),document.getElementById("root")),U()}},[[73,1,2]]]);
//# sourceMappingURL=main.77357f13.chunk.js.map