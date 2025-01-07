"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[951],{951:(k,f,r)=>{r.r(f),r.d(f,{SystemNotificationsModule:()=>N});var l=r(177),d=r(3331),s=r(9417),t=r(4438),u=r(4299),g=r(2617);function p(i,m){1&i&&(t.j41(0,"div",20),t.EFF(1," Message is required and should be less than 200 characters. "),t.k0s())}function h(i,m){1&i&&(t.j41(0,"div",20),t.EFF(1," Start time is required. "),t.k0s())}function b(i,m){if(1&i){const o=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td")(6,"button",21),t.bIt("click",function(){const n=t.eBV(o).$implicit,a=t.XpG();return t.Njj(a.deleteNotification(n.id))}),t.EFF(7,"Delete"),t.k0s()(),t.j41(8,"td")(9,"button",22),t.bIt("click",function(){const n=t.eBV(o).$implicit,a=t.XpG();return t.Njj(a.updateStatus(n.id))}),t.EFF(10,"Change"),t.k0s()()()}if(2&i){const o=m.$implicit;t.R7$(2),t.JRh(o.message),t.R7$(2),t.JRh(o.active)}}const y=[{path:"",component:(()=>{class i{constructor(o,e,n){this.fb=o,this.notificationService=e,this.alertService=n,this.notifications=[],this.notificationForm=this.fb.group({message:["",[s.k0.required,s.k0.maxLength(200)]],startTime:["",s.k0.required],endTime:[""],url:[""],active:[!0]})}ngOnInit(){this.loadNotifications()}loadNotifications(){this.notificationService.getAllNotifications().subscribe(o=>{this.notifications=o},o=>{console.error("Error loading notifications",o)})}onSubmit(){this.notificationForm.valid&&this.notificationService.createNotification(this.notificationForm.value).subscribe(o=>{this.notificationForm.reset({active:!0}),this.alertService.successMessage("Notification created successfully","Success")},o=>{this.alertService.errorMessage("Something went wrong. Please try again.","Error")})}deleteNotification(o){confirm("Are you sure you want to delete this notification?")&&this.notificationService.deleteNotification(o).subscribe(e=>{this.loadNotifications(),this.alertService.successMessage("Notification deleted successfully","Success")},e=>{this.alertService.errorMessage("Something went wrong. Please try again.","Error")})}updateStatus(o){confirm("Are you sure you want to update the status of this notification?")&&this.notificationService.updateStatus(o).subscribe(e=>{this.loadNotifications(),this.alertService.successMessage("Notification updated successfully","Success")},e=>{this.alertService.errorMessage("Something went wrong. Please try again.","Error")})}static{this.\u0275fac=function(e){return new(e||i)(t.rXU(s.ok),t.rXU(u.i),t.rXU(g.n))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-system-notifications"]],decls:45,vars:5,consts:[[1,"notification-form-container"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","message"],["id","message","formControlName","message","rows","3","placeholder","Enter notification message",1,"form-control"],["class","error",4,"ngIf"],["for","startTime"],["type","datetime-local","id","startTime","formControlName","startTime",1,"form-control"],["for","endTime"],["type","datetime-local","id","endTime","formControlName","endTime",1,"form-control"],["for","url"],["type","text","id","url","formControlName","url",1,"form-control"],["for","active"],["type","checkbox","id","active","formControlName","active"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"container"],[1,"card-1"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"error"],[1,"delete",3,"click"],[1,"change-visibility",3,"click"]],template:function(e,n){if(1&e&&(t.j41(0,"div",0)(1,"h2"),t.EFF(2,"Add New Notification"),t.k0s(),t.j41(3,"form",1),t.bIt("ngSubmit",function(){return n.onSubmit()}),t.j41(4,"div",2)(5,"label",3),t.EFF(6,"Message"),t.k0s(),t.nrm(7,"textarea",4),t.DNE(8,p,2,0,"div",5),t.k0s(),t.j41(9,"div",2)(10,"label",6),t.EFF(11,"Start Time"),t.k0s(),t.nrm(12,"input",7),t.DNE(13,h,2,0,"div",5),t.k0s(),t.j41(14,"div",2)(15,"label",8),t.EFF(16,"End Time"),t.k0s(),t.nrm(17,"input",9),t.k0s(),t.j41(18,"div",2)(19,"label",10),t.EFF(20,"URL"),t.k0s(),t.nrm(21,"input",11),t.k0s(),t.j41(22,"div",2)(23,"label",12),t.EFF(24,"Active\xa0"),t.k0s(),t.nrm(25,"input",13),t.k0s(),t.j41(26,"button",14),t.EFF(27,"Add Notification"),t.k0s()()(),t.j41(28,"div",15)(29,"div",16)(30,"h4"),t.EFF(31,"Manage Notifications"),t.k0s(),t.j41(32,"table",17)(33,"thead")(34,"tr")(35,"th",18),t.EFF(36,"Message"),t.k0s(),t.j41(37,"th",18),t.EFF(38,"Active"),t.k0s(),t.j41(39,"th",18),t.EFF(40,"Delete"),t.k0s(),t.j41(41,"th",18),t.EFF(42,"Active Status"),t.k0s()()(),t.j41(43,"tbody"),t.DNE(44,b,11,2,"tr",19),t.k0s()()()()),2&e){let a,c;t.R7$(3),t.Y8G("formGroup",n.notificationForm),t.R7$(5),t.Y8G("ngIf",(null==(a=n.notificationForm.get("message"))?null:a.invalid)&&(null==(a=n.notificationForm.get("message"))?null:a.touched)),t.R7$(5),t.Y8G("ngIf",(null==(c=n.notificationForm.get("startTime"))?null:c.invalid)&&(null==(c=n.notificationForm.get("startTime"))?null:c.touched)),t.R7$(13),t.Y8G("disabled",n.notificationForm.invalid),t.R7$(18),t.Y8G("ngForOf",n.notifications)}},dependencies:[l.Sq,l.bT,s.qT,s.me,s.Zm,s.BC,s.cb,s.j4,s.JD],styles:[".notification-form-container[_ngcontent-%COMP%]{max-width:500px;margin:20px auto;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9}.notification-form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;color:#111;margin-bottom:15px;border-bottom:2px solid #ddd;padding-bottom:5px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}.form-control[_ngcontent-%COMP%]{width:100%;padding:8px;box-sizing:border-box}.btn[_ngcontent-%COMP%]{display:block;width:100%;padding:10px;font-size:16px}.error[_ngcontent-%COMP%]{color:red;font-size:12px}.delete[_ngcontent-%COMP%], .change-visibility[_ngcontent-%COMP%]{cursor:pointer;padding:5px 10px;border:none;outline:none;border-radius:8px;color:#fff}.delete[_ngcontent-%COMP%]{background-color:red}.change-visibility[_ngcontent-%COMP%]{background-color:green}"]})}}return i})(),canActivate:[r(7123).N]}];let S=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[d.iI.forChild(y),d.iI]})}}return i})(),N=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[l.MD,S,s.X1]})}}return i})()}}]);