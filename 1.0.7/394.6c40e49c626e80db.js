"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[394],{2394:(x,_,h)=>{h.r(_),h.d(_,{CompaniesModule:()=>T});var r=h(6895),m=h(1779),b=h(5861),p=h(8505),t=h(4650),d=h(6196),y=h(6153);function v(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"div",43)(1,"div",44)(2,"div")(3,"div",45),t._uU(4," Are you looking for employees? "),t.qZA(),t.TgZ(5,"div",46),t._uU(6," Start to post your jobs "),t.TgZ(7,"span"),t._uU(8,"FREE"),t.qZA(),t._uU(9," today! "),t.qZA()(),t.TgZ(10,"button",47),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.moveToRegister())}),t._uU(11,"Get Started"),t.qZA()()()}}function u(s,g){if(1&s&&(t.TgZ(0,"div",48)(1,"div",49)(2,"div",50)(3,"div",51)(4,"div",52),t._UZ(5,"img",53),t.qZA()()(),t.TgZ(6,"div",54)(7,"div",55)(8,"div",56),t._uU(9),t.qZA(),t.TgZ(10,"div",57),t._uU(11),t.ALo(12,"truncate"),t.qZA()()(),t._UZ(13,"hr"),t.TgZ(14,"div",58)(15,"div",59),t._UZ(16,"i",12),t.TgZ(17,"span"),t._uU(18),t.qZA()(),t.TgZ(19,"div",60)(20,"div",61),t._uU(21),t.qZA()()()()()),2&s){const e=g.$implicit,o=t.oxw();t.xp6(5),t.s9C("alt",e.name),t.Q6J("src",e.logo?e.logo:"./assets/imgs/shared/default_org_logo.svg",t.LSH),t.xp6(3),t.MGl("routerLink","/business-profile/",e.id,""),t.xp6(1),t.Oqu(e.name),t.xp6(2),t.Oqu(e.shortDescription?e.shortDescription:t.xi3(12,7,e.companyStory,50)),t.xp6(7),t.Oqu(e.location?e.location:"N/A"),t.xp6(3),t.hij("",o.getJobCount(e.id)," Jobs")}}function w(s,g){1&s&&(t.TgZ(0,"div",62)(1,"h3"),t._uU(2,"Sorry! No results found :("),t.qZA(),t._UZ(3,"img",63),t.qZA())}function a(s,g){1&s&&(t.TgZ(0,"div",64)(1,"h3"),t._uU(2,"No search results found"),t.qZA(),t._UZ(3,"img",65),t.TgZ(4,"p"),t._uU(5,"Try different keywords or location"),t.qZA()())}const i=function(s){return{active:s}};function n(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"li",24)(1,"a",66),t.NdJ("click",function(){const C=t.CHM(e).$implicit,f=t.oxw();return t.KtG(f.changePage(C))}),t._uU(2),t.qZA()()}if(2&s){const e=g.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(2,i,o.currentPage===e)),t.xp6(2),t.Oqu(e)}}const l=function(s){return{disabled:s}},Z=[{path:"",component:(()=>{class s{constructor(e,o){this.router=e,this.companyService=o,this.filteredCompanies=[],this.paginatedCompanies=[],this.currentPage=1,this.itemsPerPage=8,this.totalPages=0,this.pageLimit=5,this.startPage=1,this.endPage=5,this.pages=[],this.isSearchResultNotFound=!1,this.jobCounts={},this.loading=!1,this.serverError=!1,this.notFound=!1,this.forbidden=!1,this.corsError=!1,this.unexpectedError=!1}ngOnInit(){var e=this;return(0,b.Z)(function*(){yield e.getAllCompanies().subscribe(o=>{e.filteredCompanies=e.companyDataStore,e.sortCompaniesByType(),e.totalPages=Math.ceil(e.companyDataStore?.length/e.itemsPerPage),e.updatePaginationRange(),e.updatePaginatedCompanies(),e.prefetchJobCounts()})})()}ngAfterViewInit(){document.querySelectorAll(".material-icons").forEach(o=>{o.setAttribute("translate","no")})}getAllCompanies(){return this.loading=!0,this.companyService.fetchCompanies().pipe((0,p.b)(e=>{this.companyDataStore=e,this.loading=!1}))}sortCompaniesByType(){this.filteredCompanies?.sort((e,o)=>{const c={4:1,3:2,2:3};return c[e.companyLevel]-c[o.companyLevel]})}filterCompanies(){this.filteredCompanies=this.companyDataStore.filter(e=>{const o=!this.targetInput1||e.name?.toLowerCase().includes(this.targetInput1.toLowerCase()),c=!this.targetInput2||e.location?.toLowerCase().includes(this.targetInput2.toLowerCase());return o&&c}),this.isSearchResultNotFound=0===this.filteredCompanies.length,this.totalPages=Math.ceil(this.filteredCompanies.length/this.itemsPerPage),this.updatePaginationRange(),this.updatePaginatedCompanies()}prefetchJobCounts(){this.filteredCompanies?.forEach(e=>{this.companyService.fetchPostedJobsById(e.id).subscribe(o=>{this.jobCounts[e.id]=o[0]?.postedJobs.length||0})})}getJobCount(e){return this.jobCounts[e]??0}handleCompanySearch(e){this.targetInput1=e.value,this.filterCompanies()}handleLocationSearch(e){this.targetInput2=e.value,this.filterCompanies()}updatePaginatedCompanies(){const e=(this.currentPage-1)*this.itemsPerPage,o=e+this.itemsPerPage;this.paginatedCompanies=this.filteredCompanies?.filter(c=>null!==c.name)?.slice(e,o)}changePage(e){e>=1&&e<=this.totalPages&&(this.currentPage=e,this.updatePaginationRange(),this.updatePaginatedCompanies())}updatePaginationRange(){this.currentPage<=this.pageLimit?(this.startPage=1,this.endPage=Math.min(this.pageLimit,this.totalPages)):this.currentPage+this.pageLimit-1<=this.totalPages?(this.startPage=this.currentPage,this.endPage=Math.min(this.currentPage+this.pageLimit-1,this.totalPages)):(this.startPage=this.totalPages-this.pageLimit+1,this.endPage=this.totalPages),this.pages=Array.from({length:this.endPage-this.startPage+1},(e,o)=>o+this.startPage)}moveToRegister(){this.router.navigate(["/register"],{queryParams:{from:"companies"}})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(m.F0),t.Y36(d.J))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-companies"]],decls:56,vars:11,consts:[[1,"top-banner"],[1,"curved-div"],[1,"overlay"],[1,"d-flex","align-items-center","justify-content-center","flex-column","w-100","h100","banner-cont"],[1,"d-flex","align-items-center","justify-content-center","w-100"],[1,"search-box"],[1,"d-md-flex","align-items-center","justify-content-center"],[1,"d-sm-flex","align-items-center","justify-content-center","w-100"],[1,"search-items"],["aria-hidden","true",1,"fa","fa-building"],["type","text","placeholder","Search Company",3,"keyup"],[1,"d-none","d-sm-flex","vr-line"],["aria-hidden","true",1,"fa","fa-map-marker"],["type","text","placeholder","Location",3,"keyup"],[1,"search-button"],[1,"container"],["class","spec-card-1",4,"ngIf"],[1,"popular-companies"],[1,"row"],["class","col-12 col-sm-6 col-md-6 col-lg-3 mb-4 pt-4",4,"ngFor","ngForOf"],["class","no-results-found",4,"ngIf"],["class","search-result-not-found",4,"ngIf"],["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item",3,"ngClass"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"card-3"],[1,"d-md-flex","align-items-center","justify-content-between","card-content"],[2,"max-width","600px"],[1,"title-2","mb-3"],[1,"d-flex","align-items-center"],["routerLink","/job",1,"btn-1"],["routerLink","/learn-more-jobs",1,"btn-2"],[1,"mail-icon"],["stroke","currentColor","fill","none","stroke-width","2","viewBox","0 0 24 24","stroke-linecap","round","stroke-linejoin","round","height","1em","width","1em","xmlns","http://www.w3.org/2000/svg",1,"lg:text-[150px]","text-7xl","text-black/5","dark:text-white/5","ltr:-rotate-45","rtl:rotate-45"],["width","20","height","16","x","2","y","4","rx","2"],["d","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],[1,"pencil-icon"],["stroke","currentColor","fill","none","stroke-width","0","viewBox","0 0 16 16","height","1em","width","1em","xmlns","http://www.w3.org/2000/svg",1,"lg:text-[150px]","text-7xl","text-black/5","dark:text-white/5","rtl:-rotate-90"],["d","M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"],[1,"spec-card-1"],[1,"d-md-flex","align-items-center","justify-content-between","w-100"],[1,"title"],[1,"sub-title"],[1,"btn-1",3,"click"],[1,"col-12","col-sm-6","col-md-6","col-lg-3","mb-4","pt-4"],[1,"card-2"],[1,"card-top"],[1,"logo-icon-wrapper"],[1,"logo-icon"],[3,"src","alt"],[1,"card-content"],[1,"d-flex","flex-column","align-items-start"],[1,"company-name",3,"routerLink"],[1,"company-description"],[1,"card-bottom"],[1,"card-bottom-right"],[1,"card-bottom-left"],[1,"open-jobs"],[1,"no-results-found"],["src","./assets/imgs/shared/not-found.svg","alt","404"],[1,"search-result-not-found"],["src","./assets/imgs/shared/result_not_found.svg","alt","404"],[1,"page-link",3,"click"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.qZA(),t.TgZ(3,"div",3)(4,"h1"),t._uU(5,"Companies for you"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),t._UZ(11,"i",9),t.TgZ(12,"input",10),t.NdJ("keyup",function(f){return c.handleCompanySearch(f.target)}),t.qZA()(),t._UZ(13,"div",11),t.TgZ(14,"div",8),t._UZ(15,"i",12),t.TgZ(16,"input",13),t.NdJ("keyup",function(f){return c.handleLocationSearch(f.target)}),t.qZA()()(),t.TgZ(17,"button",14),t._uU(18,"Search"),t.qZA()()()()(),t.TgZ(19,"div",15),t.YNc(20,v,12,0,"div",16),t.TgZ(21,"div",17)(22,"div",18),t.YNc(23,u,22,10,"div",19),t.YNc(24,w,4,0,"div",20),t.YNc(25,a,6,0,"div",21),t.qZA(),t.TgZ(26,"nav",22)(27,"ul",23)(28,"li",24)(29,"a",25),t.NdJ("click",function(){return c.changePage(c.currentPage-1)}),t.TgZ(30,"span",26),t._uU(31,"\xab"),t.qZA()()(),t.YNc(32,n,3,4,"li",27),t.TgZ(33,"li",24)(34,"a",28),t.NdJ("click",function(){return c.changePage(c.currentPage+1)}),t.TgZ(35,"span",26),t._uU(36,"\xbb"),t.qZA()()()()()(),t.TgZ(37,"div",29)(38,"div",30)(39,"div",31)(40,"div",32),t._uU(41,"Explore a job now!"),t.qZA(),t.TgZ(42,"p"),t._uU(43,"Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."),t.qZA()(),t.TgZ(44,"div",33)(45,"button",34),t._uU(46,"Apply Now"),t.qZA(),t.TgZ(47,"button",35),t._uU(48,"Learn More"),t.qZA()()(),t.TgZ(49,"div",36),t.O4$(),t.TgZ(50,"svg",37),t._UZ(51,"rect",38)(52,"path",39),t.qZA()(),t.kcU(),t.TgZ(53,"div",40),t.O4$(),t.TgZ(54,"svg",41),t._UZ(55,"path",42),t.qZA()()()()),2&o&&(t.xp6(20),t.Q6J("ngIf",void 0===c.targetInput1&&void 0===c.targetInput2),t.xp6(3),t.Q6J("ngForOf",c.paginatedCompanies),t.xp6(1),t.Q6J("ngIf",0===(null==c.companyDataStore?null:c.companyDataStore.length)),t.xp6(1),t.Q6J("ngIf",c.isSearchResultNotFound),t.xp6(3),t.Q6J("ngClass",t.VKq(7,l,1===c.currentPage)),t.xp6(4),t.Q6J("ngForOf",c.pages),t.xp6(1),t.Q6J("ngClass",t.VKq(9,l,c.currentPage===c.totalPages)))},dependencies:[r.mk,r.sg,r.O5,m.rH,y.W],styles:[".search-box[_ngcontent-%COMP%]{width:100%;max-width:600px;min-height:60px;background-color:var(--color-surface-mixed-100);border-radius:5px;border:2px solid var(--color-surface-mixed-300);padding:10px;position:absolute;bottom:40px;z-index:9}.search-box[_ngcontent-%COMP%]   .vr-line[_ngcontent-%COMP%]{width:2px;height:40px;background-color:var(--color-code-100)}.search-box[_ngcontent-%COMP%]   .search-items[_ngcontent-%COMP%]{width:100%;height:60px;background-color:var(--color-surface-mixed-300);display:flex;align-items:center;justify-content:space-between;padding:0 10px}.search-box[_ngcontent-%COMP%]   .search-items[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;color:var(--color-primary-200)}.search-box[_ngcontent-%COMP%]   .search-items[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:100%;border:none;outline:none;background-color:var(--color-surface-mixed-300);color:var(--color-text-100);padding:0 10px}.search-box[_ngcontent-%COMP%]   .search-items[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:var(--color-text-500)}@media screen and (max-width: 768px){.search-box[_ngcontent-%COMP%]   .search-items[_ngcontent-%COMP%]{margin-bottom:12px}}.search-box[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]{height:60px;padding:0 20px;background-color:var(--color-primary-100);color:#fff;font-weight:500;outline:none;border:none;transition:all .3s ease-in-out}@media screen and (max-width: 768px){.search-box[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]{border-radius:5px;width:100%}}.spec-card-1[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-highlight-100);font-weight:550;text-decoration:underline}"]})}return s})()}];let M=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(Z),m.Bz]})}return s})();var A=h(5829);let T=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[r.ez,M,A.D]})}return s})()},6196:(x,_,h)=>{h.d(_,{J:()=>v});var r=h(529),m=h(2340),b=h(1135),p=h(8505),t=h(262),d=h(2843),y=h(4650);let v=(()=>{class u{constructor(a){this.http=a,this.baseUrl=m.N.apiUrl,this.companySubject=new b.X(null),this.company$=this.companySubject.asObservable(),this.companiesSubject=new b.X(null),this.companies$=this.companiesSubject.asObservable(),this.postedJobsSubject=new b.X(null),this.postedJobs$=this.postedJobsSubject.asObservable(),this.cacheInitialized=!1,this.companiesCacheInitialized=!1,this.postedJobsCacheInitialized=!1}fetchCompanies(){const a=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.companiesCacheInitialized||this.http.get(`${this.baseUrl}/company/all`,{headers:a}).subscribe(i=>{this.companiesSubject.next(i),this.companiesCacheInitialized=!0}),this.companies$}getCompany(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.baseUrl}/company/get/${a}`,{headers:i})}getCompaniesByType(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.baseUrl}/company/getByType/${a}`,{headers:i})}fetchFullCompany(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.cacheInitialized?this.company$:this.http.get(`${this.baseUrl}/batch/async/getCompany/${a}`,{headers:i}).pipe((0,p.b)(n=>{this.companySubject.next(n),this.cacheInitialized=!0}))}updateCompany(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/company/update`,a,{headers:i}).subscribe(n=>{this.clearCache(),this.fetchFullCompany(a.id)}),this.company$}updateLogoPic(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/company/update/updateLogo`,a,{headers:i}).subscribe(n=>{this.clearCache(),this.fetchFullCompany(a.id)}),this.company$}updateCoverPic(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/company/update/updateCover`,a,{headers:i}).subscribe(n=>{this.clearCache(),this.fetchFullCompany(a.id)}),this.company$}updateThumb1Pic(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/company/update/updateThumb1`,a,{headers:i}).subscribe(n=>{this.clearCache(),this.fetchFullCompany(a.id)}),this.company$}updateThumb2Pic(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/company/update/updateThumb2`,a,{headers:i}).subscribe(n=>{this.clearCache(),this.fetchFullCompany(a.id)}),this.company$}updateThumb3Pic(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/company/update/updateThumb3`,a,{headers:i}).subscribe(n=>{this.clearCache(),this.fetchFullCompany(a.id)}),this.company$}addSocial(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.post(`${this.baseUrl}/cmp_socials/add`,a,{headers:i}).pipe((0,p.b)(n=>{this.clearCache(),this.fetchFullCompany(a.companyId)}),(0,t.K)(n=>(0,d._)(n)))}editSocial(a,i){const n=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/cmp_socials/edit-single/${a}`,i,{headers:n}).pipe((0,p.b)(l=>{this.clearCache(),this.fetchFullCompany(i.companyId)}),(0,t.K)(l=>(0,d._)(l)))}updateNotifications(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/company/update/notifications`,a,{headers:i}).subscribe(n=>{}),this.company$}deleteCompany(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.delete(`${this.baseUrl}/company/delete/${a}`,{headers:i}).pipe((0,p.b)(n=>{this.clearCache(),this.fetchCompanies()}),(0,t.K)(n=>(0,d._)(n)))}addJobPost(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.post(`${this.baseUrl}/cmp_posted_jobs/add`,a,{headers:i}).pipe((0,p.b)(n=>{this.clearCache(),this.fetchFullCompany(a.companyId)}),(0,t.K)(n=>(0,d._)(n)))}fetchPostedJobsById(a){const i=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.baseUrl}/cmp_posted_jobs/getByCompanyId/${a}`,{headers:i}).pipe((0,p.b)(n=>{this.clearCache(),this.fetchFullCompany(a)}),(0,t.K)(n=>(0,d._)(n)))}fetchAllPostedJobs(){const a=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.postedJobsCacheInitialized?this.postedJobs$:this.http.get(`${this.baseUrl}/cmp_posted_jobs/getAll`,{headers:a}).pipe((0,p.b)(i=>{this.postedJobsSubject.next(i),this.postedJobsCacheInitialized=!0}),(0,t.K)(i=>(0,d._)(i)))}getPostedJob(a,i){const n=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.baseUrl}/cmp_posted_jobs/getByCompanyId/${a}/postedJob/${i}`,{headers:n})}updatePostedJob(a,i,n){const l=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.put(`${this.baseUrl}/cmp_posted_jobs/updateByCompanyId/${a}/postedJob/${i}`,n,{headers:l}).pipe((0,p.b)(P=>{this.clearPostedJobsCache(),this.fetchFullCompany(n.companyId)}),(0,t.K)(P=>(0,d._)(P)))}deletePostedJob(a,i){const n=new r.WM({Authorization:"Basic "+btoa("admin:password")});return this.http.delete(`${this.baseUrl}/cmp_posted_jobs/deleteByCompanyId/${a}/postedJob/${i}`,{headers:n}).pipe((0,p.b)(l=>{this.clearPostedJobsCache(),this.fetchFullCompany(a)}),(0,t.K)(l=>(0,d._)(l)))}clearCache(){this.cacheInitialized=!1,this.companySubject.next(null)}clearPostedJobsCache(){this.postedJobsCacheInitialized=!1,this.postedJobsSubject.next(null)}clearCompaniesCache(){this.companiesCacheInitialized=!1,this.companiesSubject.next(null)}static#t=this.\u0275fac=function(i){return new(i||u)(y.LFG(r.eN))};static#e=this.\u0275prov=y.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);