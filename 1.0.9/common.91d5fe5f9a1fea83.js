"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{6153:(m,r,t)=>{t.d(r,{W:()=>l});var e=t(4650);let l=(()=>{class a{transform(d,o){return d?.length<=o?d:d?.substr(0,o)+"..."}static#e=this.\u0275fac=function(o){return new(o||a)};static#n=this.\u0275pipe=e.Yjl({name:"truncate",type:a,pure:!0})}return a})()},7700:(m,r,t)=>{t.d(r,{v:()=>a});var e=t(4650),l=t(1779);let a=(()=>{class s{constructor(o){this.router=o}moveToRegister(){this.router.navigate(["/register"],{queryParams:{from:"companies"}})}static#e=this.\u0275fac=function(g){return new(g||s)(e.Y36(l.F0))};static#n=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-hire-card1"]],decls:18,vars:0,consts:[[1,"hire-card"],[1,"row"],[1,"col-12","col-md-3"],[1,"d-none","d-md-block","h-100"],[1,"img-wrapper"],["src","./assets/imgs/cards/hire-card1.webp","alt","banner"],[1,"col-12","col-md-9"],[1,"text-wrapper","ps-3","ps-md-0"],[1,"content-wrapper"],[1,"get-started",3,"click"]],template:function(g,c){1&g&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA()()(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8)(9,"h1"),e._uU(10,"Ready to Hire the Best?"),e.qZA(),e.TgZ(11,"p"),e._uU(12,"Connect with qualified candidates fast. Start posting your job openings now for "),e.TgZ(13,"span"),e._uU(14,"FREE"),e.qZA(),e._uU(15,"!"),e.qZA(),e.TgZ(16,"button",9),e.NdJ("click",function(){return c.moveToRegister()}),e._uU(17,"Get Started Today"),e.qZA()()()()()())},styles:[".hire-card[_ngcontent-%COMP%]{width:100%;height:100%;margin:max(30px,3vw) 0;background-image:linear-gradient(to right,var(--color-primary-400),var(--color-primary-200) 30%,var(--color-secondary-200),var(--color-secondary-300))}.hire-card[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding-left:20px;display:flex;align-items:flex-end}.hire-card[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.hire-card[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding:20px 20px 20px 0;display:flex;flex-direction:column;align-items:center;justify-content:center}.hire-card[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{width:100%}.hire-card[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:max(32px,4vw);font-weight:700;color:#fff}.hire-card[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:max(16px,1.5vw);font-weight:400;color:#fff}.hire-card[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-highlight-100)}.hire-card[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{padding:10px 25px;border:1px solid #FFFFFF;outline:none;border-radius:12px;font-size:20px;font-weight:600;color:#fff;background-color:var(--color-secondary-100);cursor:pointer;transition:all .3s ease-in-out}.hire-card[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]:hover{background-color:var(--color-secondary-200)}"]})}return s})()},8517:(m,r,t)=>{t.d(r,{D:()=>_});var e=t(4650),l=t(4416),a=t(6613),s=t(6895),d=t(1779),o=t(3695);function g(p,w){1&p&&(e.TgZ(0,"div",26)(1,"i",27),e._uU(2,"verified"),e.qZA()())}function c(p,w){if(1&p&&(e.TgZ(0,"div",28),e._uU(1),e.ALo(2,"timeAgo"),e.qZA()),2&p){const i=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,null==i.p?null:i.p.datePosted))}}function v(p,w){if(1&p&&(e.TgZ(0,"div",29)(1,"span"),e._uU(2),e.qZA()()),2&p){const i=e.oxw();e.xp6(2),e.Oqu(null!=i.p&&i.p.employeeType?null==i.p?null:i.p.employeeType:"N/A")}}function h(p,w){if(1&p&&(e.TgZ(0,"div",29)(1,"span"),e._uU(2),e.qZA()()),2&p){const i=e.oxw();e.xp6(2),e.Oqu(null!=i.p&&i.p.category?null==i.p?null:i.p.category:"N/A")}}let _=(()=>{class p{constructor(i,u){this.employeeService=i,this.alertService=u,this.p={},this.userSavedIds=[],this.savedJobChanged=new e.vpe}saveFav(i){null!=this.employeeId?this.employeeService.saveFavJobs(this.employeeId,{jobId:i,status:"saved"}).subscribe(u=>{this.alertService.successMessage("Job Saved Successfully","Success"),this.savedJobChanged.emit()},u=>{this.alertService.errorMessage("Something went wrong. Please try again","Error")}):this.alertService.warningMessage("Please Login First to Save Jobs","Reminder")}removeFav(i){null!=this.employeeId?this.employeeService.removeFavJobs(this.employeeId,i).subscribe(u=>{this.alertService.successMessage("Job Removed Successfully","Success"),this.savedJobChanged.emit()},u=>{this.alertService.errorMessage("Something went wrong. Please try again","Error")}):this.alertService.warningMessage("Please Login First to Save Jobs","Reminder")}static#e=this.\u0275fac=function(u){return new(u||p)(e.Y36(l.G),e.Y36(a.m))};static#n=this.\u0275cmp=e.Xpm({type:p,selectors:[["app-job-post-card1"]],inputs:{p:"p",userSavedIds:"userSavedIds",employeeId:"employeeId"},outputs:{savedJobChanged:"savedJobChanged"},decls:35,vars:15,consts:[[1,"card-1"],[1,"card-l"],[1,"logo-icon-wrapper"],[1,"logo-icon"],[3,"src","alt"],[1,"card-r"],[1,"card-top"],[1,"company-name"],[1,"companyName"],["class","verified",4,"ngIf"],[1,"card-top-right"],[1,"visit-link-circle-card-1",3,"click"],[1,"material-icons",3,"ngClass"],[1,"card-content"],[1,"d-sm-flex","d-md-block","d-lg-flex","align-items-center","justify-content-between","w-100"],[1,"job-title",3,"routerLink"],["class","opens-ago",4,"ngIf"],[1,"location"],["aria-hidden","true",1,"fa","fa-map-marker"],[1,"d-flex","align-items-center","justify-content-start","gap-2"],["class","tag",4,"ngIf"],[1,"salary-range"],["aria-hidden","true",1,"fa","fa-usd"],[1,"card-bottom"],[1,"d-flex","align-items-center","justify-content-end","w-100"],[1,"apply-btn",3,"routerLink"],[1,"verified"],[1,"material-icons"],[1,"opens-ago"],[1,"tag"]],template:function(u,n){1&u&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA()()(),e.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8),e._uU(9),e.qZA(),e._uU(10,"\xa0 "),e.YNc(11,g,3,0,"div",9),e.qZA(),e.TgZ(12,"div",10)(13,"div",11),e.NdJ("click",function(){return n.userSavedIds&&n.userSavedIds.includes(n.p.id)?n.removeFav(n.p.id):n.saveFav(n.p.id)}),e.TgZ(14,"i",12),e._uU(15),e.qZA()()()(),e.TgZ(16,"div",13)(17,"div",14)(18,"div",15),e._uU(19),e.qZA(),e.YNc(20,c,3,3,"div",16),e.qZA(),e.TgZ(21,"div",17),e._UZ(22,"i",18),e.TgZ(23,"span"),e._uU(24),e.qZA()(),e.TgZ(25,"div",19),e.YNc(26,v,3,1,"div",20),e.YNc(27,h,3,1,"div",20),e.qZA(),e.TgZ(28,"div",21),e._UZ(29,"i",22),e._uU(30),e.qZA()(),e.TgZ(31,"div",23)(32,"div",24)(33,"button",25),e._uU(34,"Apply Now"),e.qZA()()()()()),2&u&&(e.xp6(4),e.s9C("src",null!=n.p&&n.p.companyLogo?null==n.p?null:n.p.companyLogo:"./assets/imgs/shared/default_org_logo.svg",e.LSH),e.s9C("alt",null!=n.p&&n.p.companyName?null==n.p?null:n.p.companyName:"N/A"),e.xp6(5),e.Oqu(null!=n.p&&n.p.companyName?null==n.p?null:n.p.companyName:"N/A"),e.xp6(2),e.Q6J("ngIf","3"==(null==n.p?null:n.p.companyLevel)||"4"==(null==n.p?null:n.p.companyLevel)),e.xp6(3),e.Q6J("ngClass",n.userSavedIds&&n.userSavedIds.includes(n.p.id)?"liked":""),e.xp6(1),e.Oqu(n.userSavedIds&&n.userSavedIds.includes(n.p.id)?"favorite":"favorite_border"),e.xp6(3),e.MGl("routerLink","/job-details/",n.p.id,""),e.xp6(1),e.Oqu(null!=n.p&&n.p.title?null==n.p?null:n.p.title:"N/A"),e.xp6(1),e.Q6J("ngIf",null==n.p?null:n.p.datePosted),e.xp6(4),e.Oqu(null!=n.p&&n.p.location?null==n.p?null:n.p.location:"N/A"),e.xp6(2),e.Q6J("ngIf",null==n.p?null:n.p.employeeType),e.xp6(1),e.Q6J("ngIf",null==n.p?null:n.p.category),e.xp6(3),e.AsE(" $",null!=n.p&&n.p.minSalary?null==n.p?null:n.p.minSalary:"N/A"," - $",null!=n.p&&n.p.maxSalary?null==n.p?null:n.p.maxSalary:"N/A",""),e.xp6(3),e.MGl("routerLink","/job-details/",n.p.id,""))},dependencies:[s.O5,d.rH,s.mk,o.e],styles:[".card-1[_ngcontent-%COMP%]{border-radius:20px;display:flex;padding:12px}.card-1[_ngcontent-%COMP%]   .card-l[_ngcontent-%COMP%]{padding:0 5px;height:-moz-fit-content;height:fit-content}.card-1[_ngcontent-%COMP%]   .card-l[_ngcontent-%COMP%]   .logo-icon-wrapper[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:var(--color-surface-300)}.card-1[_ngcontent-%COMP%]   .card-l[_ngcontent-%COMP%]   .logo-icon-wrapper[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden}.card-1[_ngcontent-%COMP%]   .card-l[_ngcontent-%COMP%]   .logo-icon-wrapper[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]{width:100%;padding:0 5px}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:5px}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;color:var(--color-text-200)}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   .companyName[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:var(--color-text-100)}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   .verified[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#3498db;font-size:20px}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:5px;padding:5px}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:5px;font-size:16px;color:var(--color-text-200)}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--color-text-200);transition:color .3s ease-in-out}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--color-primary-200)}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .opens-ago[_ngcontent-%COMP%]{font-size:14px;color:var(--color-text-200)}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{text-align:center;padding:4px 6px;background-color:var(--color-surface-400);border-radius:5px;color:var(--color-text-200);font-size:12px}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .salary-range[_ngcontent-%COMP%]{color:var(--color-text-200);font-size:14px}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .salary-range[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#2ecc71;font-size:16px}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%]{padding:0;background-color:transparent}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;padding:5px 20px;border-radius:20px;background-color:var(--color-primary-100);color:#fff;font-size:16px;font-weight:600;cursor:pointer;border:none;outline:none}.card-1[_ngcontent-%COMP%]   .card-r[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%]:hover{background-color:var(--color-primary-300)}.card-top-right[_ngcontent-%COMP%]   .visit-link-circle-card-1[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--color-primary-200);background-color:var(--color-primary-600-opacity-9);transition:all .3s ease-in-out;cursor:pointer}.card-top-right[_ngcontent-%COMP%]   .visit-link-circle-card-1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px}.card-top-right[_ngcontent-%COMP%]   .visit-link-circle-card-1[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%]{color:red}.card-top-right[_ngcontent-%COMP%]:hover   .visit-link-circle-card-1[_ngcontent-%COMP%]{background-color:var(--color-primary-200);color:#fff}"]})}return p})()},7055:(m,r,t)=>{t.d(r,{w:()=>l});var e=t(4650);let l=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#n=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-not-found"]],decls:9,vars:0,consts:[[1,"not-found"],[1,"d-flex","align-items-center","justify-content-center"],[1,"d-flex","flex-column","align-items-center","justify-content-center"],[1,"img-wrapper"],["src","./assets/imgs/shared/not-found.svg","alt","not found"],[1,"caption"],[1,"value"]],template:function(o,g){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Seems this page is didn't exist :("),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"404"),e.qZA()()()())},styles:["@keyframes _ngcontent-%COMP%_up-down{0%{transform:translateY(0)}50%{transform:translateY(20px)}to{transform:translateY(0)}}.not-found[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 60px);display:flex;align-items:center;justify-content:center;flex-direction:column}.not-found[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{font-size:32px;font-weight:600;color:var(--color-text-300)}.not-found[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:48px;font-weight:600;color:var(--color-text-100)}.not-found[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]{width:200px;height:200px;animation:_ngcontent-%COMP%_up-down 2s ease-in-out infinite}.not-found[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"]})}return a})()},100:(m,r,t)=>{t.r(r),t.d(r,{NotFoundModule:()=>g});var e=t(6895),l=t(1779),a=t(7055),s=t(4650);const d=[{path:"",component:a.w}];let o=(()=>{class c{static#e=this.\u0275fac=function(_){return new(_||c)};static#n=this.\u0275mod=s.oAB({type:c});static#t=this.\u0275inj=s.cJS({imports:[l.Bz.forChild(d),l.Bz]})}return c})(),g=(()=>{class c{static#e=this.\u0275fac=function(_){return new(_||c)};static#n=this.\u0275mod=s.oAB({type:c});static#t=this.\u0275inj=s.cJS({imports:[e.ez,o]})}return c})()},8666:(m,r,t)=>{t.d(r,{n:()=>l});var e=t(4650);let l=(()=>{class a{constructor(){}incrementValue(d,o,g=50,c=1){let v=0;d>=100?c=10:d>=1e3&&(c=100);const h=()=>{v<d?(v+=c,o(v),setTimeout(h,g)):o(d)};h()}static#e=this.\u0275fac=function(o){return new(o||a)};static#n=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},1374:(m,r,t)=>{t.d(r,{l:()=>e});var e={data:[{id:"101",category:"Common Questions",questions:[{id:"1",question:"Tell me about yourself.",overview:"I am an overview",viewCount:0,answers:[{id:"a-1",by:"John Doe",position:"Software Engineer",date:"11/02/2023",answer:"I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer. I am the first sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0},{id:"a-2",by:"Sarah Doe",position:"Business Analyst",date:"11/02/2023",answer:"I am the second sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0},{id:"a-3",by:"Mary Doe",position:"Product Manager",date:"11/02/2023",answer:"I am the third sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0}]},{id:"2",question:"What is your greatest fear?",overview:"I am an overview",viewCount:0,answers:[{id:"a-1",by:"John Doe",position:"Software Engineer",date:"11/02/2023",answer:"I am the first sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0},{id:"a-2",by:"Sarah Doe",position:"Business Analyst",date:"11/02/2023",answer:"I am the second sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0},{id:"a-3",by:"Mary Doe",position:"Product Manager",date:"11/02/2023",answer:"I am the third sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0}]}]},{id:"102",category:"Technical",questions:[{id:"3",question:"What is your greatest fear?",overview:"I am an overview",viewCount:0,answers:[{id:"a-1",by:"John Doe",position:"Software Engineer",date:"11/02/2023",answer:"I am the first sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0},{id:"a-2",by:"Sarah Doe",position:"Business Analyst",date:"11/02/2023",answer:"I am the second sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0},{id:"a-3",by:"Mary Doe",position:"Product Manager",date:"11/02/2023",answer:"I am the third sample answer",video:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",viewCount:0}]}]},{id:"103",category:"Behavioral Questions",questions:[{id:"4",question:"Describe a time you faced a challenge at work.",overview:"Behavioral questions assess how candidates handle difficult situations.",viewCount:0,answers:[{id:"a-1",by:"Alex Johnson",position:"Marketing Manager",date:"10/11/2023",answer:"I once faced a challenge where a major campaign deadline was approaching, and our design team was short-staffed. I took the initiative to bring in freelancers, prioritize tasks, and ensure we met the deadline without compromising on quality.",video:"https://www.youtube.com/watch?v=example1",viewCount:0},{id:"a-2",by:"James Lee",position:"Project Manager",date:"10/11/2023",answer:"We were behind on a critical project due to unforeseen technical issues. I coordinated with the team, reassigned tasks based on skill sets, and organized daily check-ins to ensure progress. We were able to deliver the project within the extended deadline.",video:"https://www.youtube.com/watch?v=example2",viewCount:0}]},{id:"5",question:"How do you handle criticism?",overview:"This question aims to see how well a candidate takes feedback.",viewCount:0,answers:[{id:"a-1",by:"Emma Davis",position:"Content Strategist",date:"10/11/2023",answer:"I see criticism as an opportunity for growth. Recently, I received feedback on my presentation skills. I took that feedback, joined a speaking club, and worked on improving. Now, I am more confident during presentations.",video:"https://www.youtube.com/watch?v=example3",viewCount:0},{id:"a-2",by:"Liam Brown",position:"Data Analyst",date:"10/11/2023",answer:"I value constructive criticism as it helps me improve. After receiving feedback on my reports, I collaborated with my supervisor to learn best practices and adjusted my reporting style to align with team expectations.",video:"https://www.youtube.com/watch?v=example4",viewCount:0}]}]},{id:"104",category:"Technical Questions",questions:[{id:"6",question:"What is polymorphism in Object-Oriented Programming?",overview:"A technical question testing understanding of core programming concepts.",viewCount:0,answers:[{id:"a-1",by:"Michael Smith",position:"Senior Software Developer",date:"10/11/2023",answer:"Polymorphism allows objects to be treated as instances of their parent class. It enables one interface to be used for a general class of actions, with specific implementations depending on the object type.",video:"https://www.youtube.com/watch?v=example5",viewCount:0},{id:"a-2",by:"Sophia Wilson",position:"Full Stack Developer",date:"10/11/2023",answer:"In OOP, polymorphism refers to the ability of different classes to provide their own implementation of methods that share the same name. This helps in writing flexible and reusable code.",video:"https://www.youtube.com/watch?v=example6",viewCount:0}]}]}]}},2885:(m,r,t)=>{t.d(r,{Y:()=>e});var e=[{id:1,name:"Software Development and Engineering",subCategories:[{id:1,name:"Backend Developer"},{id:2,name:"DevOps Engineer"},{id:3,name:"Embedded Systems Engineer"},{id:4,name:"Frontend Developer"},{id:5,name:"Full Stack Developer"},{id:6,name:"Mobile App Developer"},{id:7,name:"Web Developer"},{id:13,name:"Other"}]},{id:2,name:"Sales and Marketing",subCategories:[{id:1,name:"Area Sales Manager"},{id:2,name:"Brand Manager"},{id:3,name:"Business Development Manager"},{id:4,name:"Digital marketing manager"},{id:5,name:"Key Account Manager"},{id:6,name:"Marketing Manager"},{id:7,name:"Sales Executive"},{id:8,name:"Sales Manager"},{id:9,name:"Sales Representative"},{id:10,name:"Social Media Manager"},{id:11,name:"Regional Sales Manager"},{id:12,name:"Other"}]},{id:3,name:"Finance and Accounting",subCategories:[{id:1,name:"Accounts Assistant"},{id:2,name:"Accounts Executive"},{id:3,name:"Assistant Accounts"},{id:4,name:"Business controller"},{id:5,name:"finance Manager"},{id:6,name:"financial Analyst"},{id:7,name:"financial Controller"},{id:8,name:"Internal Auditor"},{id:9,name:"Tax Accountant"},{id:10,name:"Other"}]},{id:4,name:"Business management and Analysis",subCategories:[{id:1,name:"Business Analyst"},{id:2,name:"Business Intelligence Analyst"},{id:3,name:"Data Analyst"},{id:4,name:"Financial Analyst"},{id:5,name:"Management trainee"},{id:6,name:"Operations Manager"},{id:7,name:"Project Manager"},{id:8,name:"Other"}]},{id:5,name:"Human Resources",subCategories:[{id:1,name:"Admin Officer"},{id:2,name:"Assistant Manager - Human Resources"},{id:3,name:"Environment , Health and Safety Executive"},{id:4,name:"Environment , Health and Safety Manager"},{id:5,name:"HR Business Partner"},{id:6,name:"HR services Manager"},{id:7,name:"Human Resource Assistant"},{id:8,name:"Human Resource Executive"},{id:9,name:"Human Resource Manager"},{id:10,name:"payroll Specialist"},{id:11,name:"Training and Development Executive"},{id:12,name:"Training and Development Manager"},{id:13,name:"Other"}]},{id:6,name:"Manufacturing and operations",subCategories:[{id:1,name:"Demand Planner"},{id:2,name:"Factory Manager"},{id:3,name:"Production Executive"},{id:4,name:"Production Manager"},{id:5,name:"Production Planner"},{id:6,name:"Quality Assurance Executive"},{id:7,name:"Quality Assurance Manager"},{id:8,name:"Safety and Health Executive"},{id:9,name:"Shift Executive"},{id:10,name:"Shift Manager "},{id:14,name:"Other"}]},{id:7,name:"Engineering",subCategories:[{id:1,name:"Automation Engineer"},{id:2,name:"Chemical and Process Engineer"},{id:3,name:"Electrical Engineer"},{id:4,name:"engineering Manager"},{id:5,name:"Environment , Health and Safety Manager"},{id:6,name:"Factory Engineer"},{id:7,name:"Maintenance Engineer"},{id:8,name:"Mechanical Engineer"},{id:9,name:"Plant Engineer"},{id:10,name:"Project Manager"},{id:11,name:"Other"}]},{id:8,name:"Other",subCategories:[]}]},4197:(m,r,t)=>{t.d(r,{N:()=>a});var e=t(5829),l=t(4650);let a=(()=>{class s{static#e=this.\u0275fac=function(g){return new(g||s)};static#n=this.\u0275mod=l.oAB({type:s});static#t=this.\u0275inj=l.cJS({imports:[e.D]})}return s})()}}]);