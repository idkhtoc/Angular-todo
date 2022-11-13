"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[339],{3339:(ot,u,r)=>{r.r(u),r.d(u,{DetailModule:()=>at});var c=r(6895),_=r(4976),m=r(4523),t=r(8256),k=r(1135),C=r(6858),T=r(8945);let p=(()=>{class a{constructor(e,n,o){this.http=e,this.boardsService=n,this.router=o,this.board=new k.X(null),this.board$=this.board.asObservable(),this.comments=new k.X([]),this.comments$=this.comments.asObservable(),this._setBoard=s=>{this.board.next(s)},this._setComments=(s,d)=>{this._setBoard(s),this.getComments(d)}}get boardId(){return this.board.getValue()?._id||""}getComments(e){this.comments.next(this.board.getValue().tasks.find(n=>n._id===e).comments)}getBoardById(e){this.board.next(null),this.http.getBoardById(e).subscribe(this._setBoard)}deleteBoard(){this.boardsService.deleteBoard(this.boardId,()=>this.router.navigateByUrl("/boards"))}changeBoardColumnColor(e,n){this.http.changeBoardColumnColor(this.boardId,e,n).subscribe(this._setBoard)}addTask(e,n){this.http.addTask(this.boardId,e,n).subscribe(this._setBoard)}updateTask(e,n){this.http.updateTask(this.boardId,e,n).subscribe(this._setBoard)}deleteTask(e){this.http.deleteTask(this.boardId,e).subscribe(this._setBoard)}setNewTaskStatus(e,n){this.http.setNewTaskStatus(this.boardId,e,n).subscribe(this._setBoard)}toggleArchiveTask(e){this.http.toggleArchiveTask(this.boardId,e).subscribe(this._setBoard)}addComment(e,n){this.http.addComment(this.boardId,e,n).subscribe(o=>this._setComments(o,e))}deleteComment(e,n){this.http.deleteComment(this.boardId,e,n).subscribe(o=>this._setComments(o,e))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(C.O),t.LFG(T.E),t.LFG(_.F0))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var f=r(355),v=r(3446),M=r(6745),l=r(433),x=r(6622);function E(a,i){if(1&a&&(t.TgZ(0,"p",7),t._uU(1),t.ALo(2,"description"),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Oqu(t.xi3(2,1,e.task.name,128))}}function b(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"textarea",8),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.taskUpdatingValue=o)}),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("ngModel",e.taskUpdatingValue)}}function O(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"a",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openModal())}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.hij("Comments: ",e.task.comments.length,"")}}function w(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",10)(1,"button",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.setTaskUpdating())}),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"button",13),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.archiveTask())}),t._UZ(4,"img",14),t.qZA()()}}function A(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",10)(1,"button",15),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateTask())}),t._UZ(2,"img",16),t.qZA(),t.TgZ(3,"button",17),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.deleteTask())}),t._UZ(4,"img",18),t.qZA()()}}const D=function(a){return{task:!0,updating:a}};let P=(()=>{class a{constructor(){this.isTaskUpdating=!1,this.dragStartEvent=new t.vpe,this.openModalEvent=new t.vpe,this.updateTaskEvent=new t.vpe,this.deleteTaskEvent=new t.vpe,this.archiveTaskEvent=new t.vpe,this.setTaskUpdatingEvent=new t.vpe,this.taskUpdatingValue=""}ngOnInit(){this.taskUpdatingValue=this.task.name}setTaskUpdating(){this.setTaskUpdatingEvent.emit()}deleteTask(){this.deleteTaskEvent.emit()}updateTask(){this.updateTaskEvent.emit(this.taskUpdatingValue)}archiveTask(){this.archiveTaskEvent.emit()}dragStart(e){setTimeout(()=>e.target.classList.add("invisible"),0),this.dragStartEvent.emit()}dragEnd(e){e.target.classList.remove("invisible")}openModal(){this.openModalEvent.emit()}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-task"]],inputs:{task:"task",isTaskUpdating:"isTaskUpdating"},outputs:{dragStartEvent:"dragStartEvent",openModalEvent:"openModalEvent",updateTaskEvent:"updateTaskEvent",deleteTaskEvent:"deleteTaskEvent",archiveTaskEvent:"archiveTaskEvent",setTaskUpdatingEvent:"setTaskUpdatingEvent"},decls:10,vars:13,consts:[[3,"ngClass","draggable","dragstart","dragend"],[1,"task__info"],["class","task__info-name",4,"ngIf"],["class","task__info-name_active","name","taskName","maxlength","128",3,"ngModel","ngModelChange",4,"ngIf"],[1,"task__info-date"],["class","task__info-comments",3,"click",4,"ngIf"],["class","buttons",4,"ngIf"],[1,"task__info-name"],["name","taskName","maxlength","128",1,"task__info-name_active",3,"ngModel","ngModelChange"],[1,"task__info-comments",3,"click"],[1,"buttons"],[1,"change",3,"click"],["src","../../../../../assets/change.svg","alt","change","draggable","false"],[1,"archive",3,"click"],["src","../../../../../assets/archive.svg","alt","archive","draggable","false"],[1,"update",3,"click"],["src","../../../../../assets/check.svg","alt","check","draggable","false"],[1,"delete",3,"click"],["src","../../../../../assets/trashbin.svg","alt","trashbin","draggable","false"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.NdJ("dragstart",function(s){return n.dragStart(s)})("dragend",function(s){return n.dragEnd(s)}),t.TgZ(1,"div",1),t.YNc(2,E,3,4,"p",2),t.YNc(3,b,1,1,"textarea",3),t.TgZ(4,"p",4),t._uU(5),t.ALo(6,"date"),t.qZA(),t.YNc(7,O,2,1,"a",5),t.qZA(),t.YNc(8,w,5,0,"div",6),t.YNc(9,A,5,0,"div",6),t.qZA()),2&e&&(t.Q6J("ngClass",t.VKq(11,D,n.isTaskUpdating))("draggable",!n.isTaskUpdating),t.xp6(2),t.Q6J("ngIf",!n.isTaskUpdating),t.xp6(1),t.Q6J("ngIf",n.isTaskUpdating),t.xp6(2),t.Oqu(t.xi3(6,8,n.task.created_date,"HH:mm MMM/dd/Y")),t.xp6(2),t.Q6J("ngIf",!n.isTaskUpdating),t.xp6(1),t.Q6J("ngIf",!n.isTaskUpdating),t.xp6(1),t.Q6J("ngIf",n.isTaskUpdating))},dependencies:[c.mk,c.O5,l.Fj,l.JJ,l.nD,l.On,c.uU,x.O],styles:[".task[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;font-size:1.2rem;background:#fff;padding:.5rem;cursor:grab}.task[_ngcontent-%COMP%]:active{cursor:grabbing}.task.invisible[_ngcontent-%COMP%]{opacity:.7}.task[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:15%;background:transparent;border:none;cursor:pointer;margin-left:.5rem}.task[_ngcontent-%COMP%]   .change[_ngcontent-%COMP%]{width:10%}.task[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.task[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin-right:1rem;width:10%}.task[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.task__info[_ngcontent-%COMP%]{height:min-content;max-width:80%}.task__info-name[_ngcontent-%COMP%]{max-width:80%;word-wrap:break-word}.task__info-name_active[_ngcontent-%COMP%]{width:100%;font-size:1rem;padding:.5rem;min-height:3rem;resize:vertical;overflow:hidden;border:none;background:#898989}.task__info-comments[_ngcontent-%COMP%]{margin-top:1rem;font-size:1rem;color:#6e6e6e;cursor:pointer}.task__info-date[_ngcontent-%COMP%]{font-size:1rem;margin-top:.5rem;font-weight:400}"],changeDetection:0}),a})(),Z=(()=>{class a{constructor(){this.addTaskEvent=new t.vpe,this.closeModalEvent=new t.vpe,this.name=""}ngOnInit(){}addTask(){this.addTaskEvent.emit(this.name),this.name=""}closeModal(){this.closeModalEvent.emit()}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-add-task-modal"]],outputs:{addTaskEvent:"addTaskEvent",closeModalEvent:"closeModalEvent"},decls:7,vars:1,consts:[[1,"task-modal"],["name","taskName","maxlength","128",1,"task__name",3,"ngModel","ngModelChange"],[1,"buttons"],[1,"add",3,"click"],["src","../../../../../assets/check.svg","alt","check"],[1,"close",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"textarea",1),t.NdJ("ngModelChange",function(s){return n.name=s}),t.qZA(),t.TgZ(2,"div",2)(3,"button",3),t.NdJ("click",function(){return n.addTask()}),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){return n.closeModal()}),t._uU(6," \u274c "),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngModel",n.name))},dependencies:[l.Fj,l.JJ,l.nD,l.On],styles:[".task-modal[_ngcontent-%COMP%]{width:100%;background:#fff;display:flex;gap:.5rem;margin-bottom:1rem;padding:.5rem}.task-modal[_ngcontent-%COMP%]   .task__name[_ngcontent-%COMP%]{border:none;background:#898989;font-size:1rem;padding:.5rem;width:70%;min-height:3rem;resize:vertical}.task-modal[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:30%;display:flex;gap:.5rem}.task-modal[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;height:100%;width:50%;font-size:1.2rem}"],changeDetection:0}),a})(),y=(()=>{class a{constructor(e){this.detailService=e}onDragenter(e){e.preventDefault()}onDrop(e){this.prevStatus!==this.status&&this.detailService.setNewTaskStatus(this.taskId,this.status)}onDragover(e){e.preventDefault()}onDragleave(e){e.preventDefault()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p))},a.\u0275dir=t.lG2({type:a,selectors:[["","appDraglist",""]],hostBindings:function(e,n){1&e&&t.NdJ("dragenter",function(s){return n.onDragenter(s)})("drop",function(s){return n.onDrop(s)})("dragover",function(s){return n.onDragover(s)})("dragleave",function(s){return n.onDragleave(s)})},inputs:{status:"status",taskId:"taskId",prevStatus:"prevStatus"}}),a})(),U=(()=>{class a{constructor(e){this.ref=e}ngOnInit(){this.setStyles()}ngOnChanges(e){e.color&&this.setStyles()}toRgb(e){const n=e.slice(1).match(/.{1,2}/g);return`${parseInt(n[0],16)}, ${parseInt(n[1],16)}, ${parseInt(n[2],16)}`}setStyles(){const e=this.toRgb(this.color||"#50a0a5"),n=`0 0 10px 8px rgba(${e}, .3)`;this.ref.nativeElement.querySelector(".tasks-content").style.boxShadow=n,this.ref.nativeElement.querySelector("h2").style.color=`rgba(${e}, .7)`}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.SBq))},a.\u0275dir=t.lG2({type:a,selectors:[["","appColumnColor",""]],inputs:{color:"color"},features:[t.TTD]}),a})(),h=(()=>{class a{transform(e,n,o){return e.filter(s=>(!o||s.status===o)&&(n?s.is_archived:!s.is_archived))}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275pipe=t.Yjl({name:"filterTasks",type:a,pure:!0}),a})();function I(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"app-task",9),t.NdJ("dragStartEvent",function(){const s=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.dragStart(s))})("openModalEvent",function(){const s=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.openTaskModal(s._id))})("updateTaskEvent",function(o){const d=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.updateTask(o,d.name,d._id))})("archiveTaskEvent",function(){const s=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.archiveTask(s._id))})("deleteTaskEvent",function(){const s=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.deleteTask(s._id))})("setTaskUpdatingEvent",function(){const s=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.setTaskUpdating(s._id))}),t.qZA()}if(2&a){const e=i.$implicit,n=t.oxw(2);t.Q6J("task",e)("isTaskUpdating",e._id===n.taskUpdating)}}function F(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"app-add-task-modal",10),t.NdJ("addTaskEvent",function(o){t.CHM(e);const s=t.oxw().$implicit,d=t.oxw();return t.KtG(d.addTask(o,s))})("closeModalEvent",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.toggleAddForm())}),t.qZA()}}function J(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"input",4),t.NdJ("delayedInput",function(o){const d=t.CHM(e).$implicit,g=t.oxw();return t.KtG(g.colorChange(o,d))}),t.qZA(),t.TgZ(3,"h2"),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t.YNc(6,I,1,2,"app-task",6),t.ALo(7,"filterTasks"),t.qZA(),t.YNc(8,F,1,0,"app-add-task-modal",7),t.TgZ(9,"button",8),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.toggleAddForm(s))}),t._uU(10,"+"),t.qZA()()()}if(2&a){const e=i.$implicit,n=t.oxw();t.Q6J("status",e)("taskId",n.dragTaskId)("prevStatus",n.prevStatus)("color",n.colors[e]),t.xp6(2),t.Q6J("defaultValue",n.colors[e]||"#50a0a5")("delayTime",600),t.xp6(2),t.Oqu(n.title(e)),t.xp6(2),t.Q6J("ngForOf",t.Dn7(7,9,n.tasks,!1,e)),t.xp6(2),t.Q6J("ngIf",n.openedAddForm===e)}}const S=function(a,i,e){return[a,i,e]};let H=(()=>{class a{constructor(){this.Status=m.qb,this.openTaskModalEvent=new t.vpe,this.updateTaskEvent=new t.vpe,this.addTaskEvent=new t.vpe,this.colorChangeEvent=new t.vpe,this.deleteTaskEvent=new t.vpe,this.archiveTaskEvent=new t.vpe,this.setTaskUpdatingEvent=new t.vpe}ngOnInit(){}toggleAddForm(e){this.openedAddForm=e}openTaskModal(e){this.openTaskModalEvent.emit(e)}addTask(e,n){this.openedAddForm=void 0,e&&n&&this.addTaskEvent.emit({name:e,status:n})}updateTask(e,n,o){this.updateTaskEvent.emit({name:e,prevName:n,id:o})}setTaskUpdating(e){this.setTaskUpdatingEvent.emit(e)}deleteTask(e){this.deleteTaskEvent.emit(e)}archiveTask(e){this.archiveTaskEvent.emit(e)}dragStart(e){this.dragTaskId=e._id,this.prevStatus=e.status}title(e){return e===m.qb.TD?"ToDo":e===m.qb.D?"Done":"In Progress"}colorChange(e,n){this.colorChangeEvent.emit({color:e.target.value,status:n})}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tasks"]],inputs:{tasks:"tasks",colors:"colors",taskUpdating:"taskUpdating"},outputs:{openTaskModalEvent:"openTaskModalEvent",updateTaskEvent:"updateTaskEvent",addTaskEvent:"addTaskEvent",colorChangeEvent:"colorChangeEvent",deleteTaskEvent:"deleteTaskEvent",archiveTaskEvent:"archiveTaskEvent",setTaskUpdatingEvent:"setTaskUpdatingEvent"},decls:2,vars:5,consts:[[1,"tasks"],["appDraglist","","appColumnColor","",3,"status","taskId","prevStatus","color",4,"ngFor","ngForOf"],["appDraglist","","appColumnColor","",3,"status","taskId","prevStatus","color"],[1,"tasks-content"],["type","color","name","color","appDelayedInput","",3,"defaultValue","delayTime","delayedInput"],[1,"tasks-wrapper"],[3,"task","isTaskUpdating","dragStartEvent","openModalEvent","updateTaskEvent","archiveTaskEvent","deleteTaskEvent","setTaskUpdatingEvent",4,"ngFor","ngForOf"],[3,"addTaskEvent","closeModalEvent",4,"ngIf"],[1,"add-btn",3,"click"],[3,"task","isTaskUpdating","dragStartEvent","openModalEvent","updateTaskEvent","archiveTaskEvent","deleteTaskEvent","setTaskUpdatingEvent"],[3,"addTaskEvent","closeModalEvent"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,J,11,13,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",t.kEZ(1,S,n.Status.TD,n.Status.IP,n.Status.D)))},dependencies:[c.sg,c.O5,M.M,P,Z,y,U,h],styles:["[_nghost-%COMP%]{flex:1}.tasks[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:3rem;width:100%;min-height:80vh}.tasks[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-height:100%;width:30%}.tasks-content[_ngcontent-%COMP%]{position:relative;padding:.5rem;height:-moz-fit-content;height:fit-content;background:rgba(169,169,169,.4)}.tasks-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem}.tasks-content[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%]{position:absolute;right:.5rem;top:.5rem;background:none;border:none;cursor:pointer;width:2rem;height:2rem}.tasks-content[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%]::-webkit-color-swatch-wrapper{padding:0}.tasks-content[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%]::-webkit-color-swatch{border:none}.tasks-content[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]{background:#fff;width:100%;font-size:1.2rem;border:none;cursor:pointer;transition:all .5s ease-in}.tasks-content[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:hover{opacity:.8}"],changeDetection:0}),a})();function N(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"h4",9),t._uU(3),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.TgZ(7,"button",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.deleteComment(s._id))}),t._UZ(8,"img",12),t.qZA()()}if(2&a){const e=i.$implicit;t.xp6(3),t.hij(" ",e.comment," "),t.xp6(2),t.Oqu(t.xi3(6,2,e.created_date,"HH:mm MMM/dd/Y"))}}function G(a,i){if(1&a&&(t.TgZ(0,"div",5),t.YNc(1,N,9,5,"div",6),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.comments)}}function K(a,i){1&a&&(t.TgZ(0,"p"),t._uU(1,"There are no comments("),t.qZA())}function B(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13)(1,"input",14),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.commentAddValue=o)}),t.qZA(),t.TgZ(2,"button",15),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.addComment())}),t._UZ(3,"img",16),t.qZA(),t.TgZ(4,"button",17),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.toggleCommentAdd())}),t._uU(5,"\u274c"),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.commentAddValue)}}let q=(()=>{class a{constructor(){this.comments=[],this.isCommentAdd=!1,this.closeModalEvent=new t.vpe,this.addCommentEvent=new t.vpe,this.deleteCommentEvent=new t.vpe,this.toggleCommentAddEvent=new t.vpe,this.commentAddValue=""}ngOnInit(){}closeModal(){this.closeModalEvent.emit()}addComment(){this.toggleCommentAdd(),this.commentAddValue&&(this.addCommentEvent.emit(this.commentAddValue),this.commentAddValue="")}deleteComment(e){this.deleteCommentEvent.emit(e)}toggleCommentAdd(){this.toggleCommentAddEvent.emit()}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-task-comments-modal"]],inputs:{comments:"comments",isCommentAdd:"isCommentAdd"},outputs:{closeModalEvent:"closeModalEvent",addCommentEvent:"addCommentEvent",deleteCommentEvent:"deleteCommentEvent",toggleCommentAddEvent:"toggleCommentAddEvent"},decls:6,vars:3,consts:[[3,"closeModalEvent"],["class","comments",4,"ngIf"],[4,"ngIf"],["class","add-comment",4,"ngIf"],[1,"add",3,"click"],[1,"comments"],["class","comment",4,"ngFor","ngForOf"],[1,"comment"],[1,"comment__info"],[1,"comment__info-text"],[1,"comment__info-date"],[1,"delete-comment",3,"click"],["src","../../../../../assets/trashbin.svg","alt","delete"],[1,"add-comment"],["type","text","name","comment",3,"ngModel","ngModelChange"],[1,"add-comment-btn",3,"click"],["src","../../../../../assets/check.svg","alt","add"],[1,"close-add",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"app-modal",0),t.NdJ("closeModalEvent",function(){return n.closeModal()}),t.YNc(1,G,2,1,"div",1),t.YNc(2,K,2,0,"p",2),t.YNc(3,B,6,1,"div",3),t.TgZ(4,"button",4),t.NdJ("click",function(){return n.toggleCommentAdd()}),t._uU(5,"Add Comment"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",null==n.comments?null:n.comments.length),t.xp6(1),t.Q6J("ngIf",!(null!=n.comments&&n.comments.length)),t.xp6(1),t.Q6J("ngIf",n.isCommentAdd))},dependencies:[c.sg,c.O5,v.z,l.Fj,l.JJ,l.On,c.uU],styles:["[_nghost-%COMP%]{width:100%}.comments[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;padding:0 .5rem;gap:1rem;height:60%;overflow-y:scroll}.comments[_ngcontent-%COMP%]::-webkit-scrollbar{width:.5rem;background:none}.comments[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#000000}.comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{display:flex;background:#b8b8b8;padding:.5rem}.comments[_ngcontent-%COMP%]   .comment__info[_ngcontent-%COMP%]{width:80%}.comments[_ngcontent-%COMP%]   .comment__info-text[_ngcontent-%COMP%]{word-break:break-all;margin-bottom:1rem}.comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .delete-comment[_ngcontent-%COMP%]{margin-left:auto;background:none;border:none;cursor:pointer;width:5%;height:100%}.add[_ngcontent-%COMP%]{background:#6ce772;border:none;font-size:1.2rem;padding:.5rem;width:80%;cursor:pointer;transition:all .5s ease;margin-top:1rem}.add[_ngcontent-%COMP%]:hover{opacity:.7}.add-comment[_ngcontent-%COMP%]{display:flex;width:100%;padding:0 1rem;justify-content:space-between;margin-top:1rem}.add-comment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;background:#a0a0a0;padding:.5rem;font-size:1rem;width:70%}.add-comment[_ngcontent-%COMP%]   .add-comment-btn[_ngcontent-%COMP%]{background:none;border:none;width:10%;cursor:pointer}.add-comment[_ngcontent-%COMP%]   .close-add[_ngcontent-%COMP%]{background:none;border:none;font-size:1.2rem;width:10%;cursor:pointer}"],changeDetection:0}),a})();var Q=r(486);function V(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"app-task-comments-modal",6),t.NdJ("closeModalEvent",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.closeTaskModal())})("addCommentEvent",function(o){t.CHM(e);const s=t.oxw(2);return t.KtG(s.addComment(o))})("deleteCommentEvent",function(o){t.CHM(e);const s=t.oxw(2);return t.KtG(s.deleteComment(o))})("toggleCommentAddEvent",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.toggleCommentAdd())}),t.ALo(1,"async"),t.qZA()}if(2&a){const e=t.oxw(2);t.Q6J("isCommentAdd",e.isCommentAdd)("comments",t.lcZ(1,2,e.comments))}}function Y(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"app-modal",7),t.NdJ("closeModalEvent",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.toggleDescModal())}),t.TgZ(1,"p",8),t._uU(2),t.qZA()()}if(2&a){const e=t.oxw().ngIf;t.xp6(2),t.hij("Description: ",e.description||"There is no description(","")}}function $(a,i){1&a&&(t.TgZ(0,"p"),t._uU(1,"There are no archived tasks("),t.qZA())}function z(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"p",14),t._uU(3),t.qZA(),t.TgZ(4,"p",15),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.TgZ(7,"div",16)(8,"button",17),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw(3);return t.KtG(d.toggleArchiveTask(s._id))}),t._UZ(9,"img",18),t.qZA(),t.TgZ(10,"button",17),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw(3);return t.KtG(d.deleteTask(s._id))}),t._UZ(11,"img",19),t.qZA()()()}if(2&a){const e=i.$implicit;t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu(t.xi3(6,2,e.created_date,"HH:mm MMM/dd/Y"))}}function L(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"app-modal",7),t.NdJ("closeModalEvent",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.toggleArchiveModal())}),t.YNc(1,$,2,0,"p",9),t.ALo(2,"filterTasks"),t.TgZ(3,"div",10),t.YNc(4,z,12,5,"div",11),t.ALo(5,"filterTasks"),t.qZA()()}if(2&a){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf",!t.xi3(2,2,e.tasks,!0).length),t.xp6(3),t.Q6J("ngForOf",t.xi3(5,5,e.tasks,!0))}}function j(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"main",1)(1,"app-filter-header",2),t.NdJ("searchEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.search(o))})("selectFilterDirectionEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.setFilterDirection(o))})("selectFilterValueEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.setFilterValue(o))})("deleteBoardEvent",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.deleteBoard())})("openDescModalEvent",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.toggleDescModal())})("openArchiveModalEvent",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.toggleArchiveModal())}),t.qZA(),t.TgZ(2,"app-tasks",3),t.NdJ("openTaskModalEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.openTaskModal(o))})("addTaskEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.addTask(o))})("updateTaskEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.updateTask(o))})("setTaskUpdatingEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.setTaskUpdating(o))})("deleteTaskEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.deleteTask(o))})("archiveTaskEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleArchiveTask(o))})("colorChangeEvent",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.colorChange(o))}),t.ALo(3,"filter"),t.qZA(),t.YNc(4,V,2,4,"app-task-comments-modal",4),t.YNc(5,Y,3,1,"app-modal",5),t.YNc(6,L,6,8,"app-modal",5),t.qZA()}if(2&a){const e=i.ngIf,n=t.oxw();t.xp6(1),t.Q6J("title",e.name)("filterType",n.filterType),t.xp6(1),t.Q6J("tasks",t.gM2(3,8,e.tasks,n.searchValue,n.filterDirection,n.filterValue))("colors",e.colors)("taskUpdating",n.taskUpdating),t.xp6(2),t.Q6J("ngIf",n.isTaskModalOpen),t.xp6(1),t.Q6J("ngIf",n.isDescModalOpen),t.xp6(1),t.Q6J("ngIf",n.isArchiveModalOpen)}}const X=[{path:"",component:(()=>{class a{constructor(e,n){this.route=e,this.detailService=n,this.filterType=m.vA.tasks,this.searchValue="",this.filterValue=m.wn.date,this.filterDirection=!1,this.isDescModalOpen=!1,this.isTaskModalOpen=!1,this.isArchiveModalOpen=!1,this.isCommentAdd=!1}ngOnInit(){this.board=this.detailService.board$,this.comments=this.detailService.comments$,this.routeSubscription=this.route.params.subscribe(e=>{this.detailService.boardId!==e.id&&this.detailService.getBoardById(e.id)})}ngOnDestroy(){this.routeSubscription.unsubscribe()}search(e){this.searchValue=e}setFilterDirection(e){this.filterDirection=e}setFilterValue(e){this.filterValue=e}deleteBoard(){this.detailService.deleteBoard()}addTask(e){this.detailService.addTask(e.name,e.status)}updateTask(e){this.taskUpdating="",e.name&&e.name!==e.prevName&&this.detailService.updateTask(e.id,e.name)}setTaskUpdating(e){this.taskUpdating=e}deleteTask(e){this.detailService.deleteTask(e)}toggleArchiveTask(e){this.detailService.toggleArchiveTask(e)}colorChange(e){this.detailService.changeBoardColumnColor(e.status,e.color)}openTaskModal(e){this.taskId=e,this.detailService.getComments(e),this.isTaskModalOpen=!0}closeTaskModal(){this.isTaskModalOpen=!1}toggleDescModal(){this.isDescModalOpen=!this.isDescModalOpen}toggleArchiveModal(){this.isArchiveModalOpen=!this.isArchiveModalOpen}toggleCommentAdd(){this.isCommentAdd=!this.isCommentAdd}addComment(e){this.detailService.addComment(this.taskId,e)}deleteComment(e){this.detailService.deleteComment(this.taskId,e)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(_.gz),t.Y36(p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-detail"]],decls:2,vars:3,consts:[["class","detail",4,"ngIf"],[1,"detail"],[3,"title","filterType","searchEvent","selectFilterDirectionEvent","selectFilterValueEvent","deleteBoardEvent","openDescModalEvent","openArchiveModalEvent"],[3,"tasks","colors","taskUpdating","openTaskModalEvent","addTaskEvent","updateTaskEvent","setTaskUpdatingEvent","deleteTaskEvent","archiveTaskEvent","colorChangeEvent"],[3,"isCommentAdd","comments","closeModalEvent","addCommentEvent","deleteCommentEvent","toggleCommentAddEvent",4,"ngIf"],[3,"closeModalEvent",4,"ngIf"],[3,"isCommentAdd","comments","closeModalEvent","addCommentEvent","deleteCommentEvent","toggleCommentAddEvent"],[3,"closeModalEvent"],[1,"description"],[4,"ngIf"],[1,"archived-tasks"],["class","archived-task",4,"ngFor","ngForOf"],[1,"archived-task"],[1,"archived-task__info"],[1,"archived-task__info-name"],[1,"archived-task__info-date"],[1,"buttons"],[3,"click"],["src","../../../../assets/disarchive.svg","alt","disarchive"],["src","../../../../assets/trashbin.svg","alt","delete"]],template:function(e,n){1&e&&(t.YNc(0,j,7,13,"main",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.board))},dependencies:[c.sg,c.O5,f.B,v.z,H,q,c.Ov,c.uU,Q.g,h],styles:[".detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;min-height:95vh;background:#f5f5f5}.detail[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{word-break:break-all;font-size:1rem}.detail[_ngcontent-%COMP%]   .archived-tasks[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;width:100%}.detail[_ngcontent-%COMP%]   .archived-tasks[_ngcontent-%COMP%]   .archived-task[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:-moz-fit-content;height:fit-content;padding:1rem;box-shadow:0 0 14px 5px #0006}.detail[_ngcontent-%COMP%]   .archived-tasks[_ngcontent-%COMP%]   .archived-task__info[_ngcontent-%COMP%]{max-width:70%;height:-moz-fit-content;height:fit-content}.detail[_ngcontent-%COMP%]   .archived-tasks[_ngcontent-%COMP%]   .archived-task__info-name[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;word-wrap:break-word}.detail[_ngcontent-%COMP%]   .archived-tasks[_ngcontent-%COMP%]   .archived-task[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:20%;display:flex;gap:2rem}.detail[_ngcontent-%COMP%]   .archived-tasks[_ngcontent-%COMP%]   .archived-task[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer}.detail[_ngcontent-%COMP%]   .archived-tasks[_ngcontent-%COMP%]   .archived-task[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"]}),a})()}];let R=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[_.Bz.forChild(X),_.Bz]}),a})();var W=r(4466),tt=r(3911),et=r(3239),nt=r(8975);let at=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[p],imports:[c.ez,R,W.m,tt.o,l.u5,et.F,nt.d]}),a})()}}]);