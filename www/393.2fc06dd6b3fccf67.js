"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[393],{393:(x,g,l)=>{l.r(g),l.d(g,{ActualizarEventoPageModule:()=>F});var s=l(177),u=l(4341),r=l(9465),v=l(8986),d=l(467),e=l(3953),m=l(1990);function E(o,c){if(1&o){const i=e.RV6();e.j41(0,"div",4)(1,"ion-button",5),e.bIt("click",function(){e.eBV(i);const t=e.XpG();return e.Njj(t.nuevoEvento())}),e.EFF(2,"Crear Nuevo Evento"),e.k0s()()}}function f(o,c){1&o&&(e.j41(0,"div"),e.nrm(1,"ion-spinner",6),e.k0s())}function h(o,c){if(1&o){const i=e.RV6();e.j41(0,"ion-button",5),e.bIt("click",function(){e.eBV(i);const t=e.XpG(2);return e.Njj(t.actualizarEvento())}),e.EFF(1,"Actualizar"),e.k0s()}}function p(o,c){if(1&o){const i=e.RV6();e.j41(0,"ion-button",5),e.bIt("click",function(){e.eBV(i);const t=e.XpG(2);return e.Njj(t.deleteEvento())}),e.EFF(1,"Eliminar"),e.k0s()}}function b(o,c){if(1&o){const i=e.RV6();e.j41(0,"ion-button",5),e.bIt("click",function(){e.eBV(i);const t=e.XpG(2);return e.Njj(t.guardarNuevoEvento())}),e.EFF(1,"Guardar Nuevo Evento"),e.k0s()}}function j(o,c){if(1&o){const i=e.RV6();e.j41(0,"div",4)(1,"ion-list")(2,"ion-item")(3,"ion-label",7),e.EFF(4,"Nombre del Evento"),e.k0s(),e.j41(5,"ion-input",8),e.mxI("ngModelChange",function(t){e.eBV(i);const a=e.XpG();return e.DH7(a.event.nombreEvento,t)||(a.event.nombreEvento=t),e.Njj(t)}),e.k0s()(),e.j41(6,"ion-item")(7,"ion-label",7),e.EFF(8,"Fecha"),e.k0s(),e.j41(9,"ion-input",9),e.mxI("ngModelChange",function(t){e.eBV(i);const a=e.XpG();return e.DH7(a.event.fecha,t)||(a.event.fecha=t),e.Njj(t)}),e.k0s()(),e.j41(10,"ion-item")(11,"ion-label",7),e.EFF(12,"Lugar"),e.k0s(),e.j41(13,"ion-input",8),e.mxI("ngModelChange",function(t){e.eBV(i);const a=e.XpG();return e.DH7(a.event.lugar,t)||(a.event.lugar=t),e.Njj(t)}),e.k0s()(),e.j41(14,"ion-item")(15,"ion-label",7),e.EFF(16,"Descripci\xf3n"),e.k0s(),e.j41(17,"ion-textarea",8),e.mxI("ngModelChange",function(t){e.eBV(i);const a=e.XpG();return e.DH7(a.event.descripcion,t)||(a.event.descripcion=t),e.Njj(t)}),e.k0s()(),e.j41(18,"ion-item")(19,"ion-label"),e.EFF(20,"Imagen"),e.k0s(),e.j41(21,"input",10),e.bIt("change",function(t){e.eBV(i);const a=e.XpG();return e.Njj(a.onFileSelected(t))}),e.k0s()(),e.j41(22,"ion-item"),e.nrm(23,"ion-img",11),e.k0s()(),e.DNE(24,h,2,0,"ion-button",12)(25,p,2,0,"ion-button",12)(26,b,2,0,"ion-button",12),e.k0s()}if(2&o){const i=e.XpG();e.R7$(5),e.R50("ngModel",i.event.nombreEvento),e.R7$(4),e.R50("ngModel",i.event.fecha),e.R7$(4),e.R50("ngModel",i.event.lugar),e.R7$(4),e.R50("ngModel",i.event.descripcion),e.R7$(6),e.Y8G("src",i.event.imagen||i.imagen),e.R7$(),e.Y8G("ngIf",i.evento),e.R7$(),e.Y8G("ngIf",i.evento),e.R7$(),e.Y8G("ngIf",i.creandoEvento)}}function z(o,c){if(1&o){const i=e.RV6();e.j41(0,"ion-item",14),e.bIt("click",function(){const t=e.eBV(i).$implicit,a=e.XpG(2);return e.Njj(a.selectEvento(t))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s()()}if(2&o){const i=c.$implicit;e.R7$(2),e.JRh(i.nombreEvento)}}function A(o,c){if(1&o&&(e.j41(0,"ion-list"),e.DNE(1,z,3,1,"ion-item",13),e.k0s()),2&o){const i=e.XpG();e.R7$(),e.Y8G("ngForOf",i.eventos)}}const P=[{path:"",component:(()=>{var o;class c{constructor(n,t,a){this.apicrud=n,this.alertcontroller=t,this.router=a,this.eventos=[],this.evento=null,this.creandoEvento=!1,this.imagen="assets/default-event-image.png",this.event={imagen:"",nombreEvento:"",fecha:"",lugar:"",descripcion:""}}ngOnInit(){this.loadEventos()}loadEventos(){this.apicrud.getEventos().subscribe(n=>{this.eventos=n})}selectEvento(n){this.evento=n,this.creandoEvento=!1,this.event={id:n.id,imagen:n.imagen||this.imagen,nombreEvento:n.nombreEvento,fecha:n.fecha,lugar:n.lugar,descripcion:n.descripcion}}nuevoEvento(){this.creandoEvento=!0,this.evento=null,this.event={id:crypto.randomUUID(),imagen:"",nombreEvento:"",fecha:"",lugar:"",descripcion:""}}guardarNuevoEvento(){this.apicrud.postEventos(this.event).subscribe(()=>{this.creandoEvento=!1,this.loadEventos(),this.mensajeNuevo()})}deleteEvento(){this.evento&&this.apicrud.deleteEvento(this.evento).subscribe(()=>{this.deleteMensaje()})}actualizarEvento(){this.event&&this.apicrud.putEventos(this.event).subscribe(()=>{this.mensaje()})}onFileSelected(n){const t=n.target;if(t.files&&t.files.length>0){const a=t.files[0],_=new FileReader;_.onload=M=>{this.imagen=M.target.result,this.creandoEvento?this.event.imagen=this.imagen:this.evento&&(this.evento.imagen=this.imagen)},_.readAsDataURL(a)}else console.warn("No se seleccion\xf3 ning\xfan archivo.")}mensaje(){var n=this;return(0,d.A)(function*(){yield(yield n.alertcontroller.create({header:"Evento Actualizado",message:"El evento ha sido actualizado exitosamente",buttons:[{text:"OK",role:"confirm",handler:()=>{n.router.navigate(["/iniestudiante"])}}]})).present()})()}deleteMensaje(){var n=this;return(0,d.A)(function*(){yield(yield n.alertcontroller.create({header:"Evento Eliminado",message:"El evento ha sido eliminado exitosamente",buttons:[{text:"OK",role:"confirm",handler:()=>{n.router.navigate(["/iniestudiante"])}}]})).present()})()}mensajeNuevo(){var n=this;return(0,d.A)(function*(){yield(yield n.alertcontroller.create({header:"Evento Creado",message:"El nuevo evento ha sido creado exitosamente",buttons:[{text:"OK",role:"confirm",handler:()=>{n.router.navigate(["/iniestudiante"])}}]})).present()})()}}return(o=c).\u0275fac=function(n){return new(n||o)(e.rXU(m.U),e.rXU(r.hG),e.rXU(v.Ix))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-actualizar-evento"]],decls:11,vars:4,consts:[["slot","start"],["defaultHref","/iniestudiante","text","","color","dark"],["style","text-align: center;",4,"ngIf"],[4,"ngIf"],[2,"text-align","center"],[1,"boton",3,"click"],[1,"spinner-container"],["position","floating"],[3,"ngModelChange","ngModel"],["type","date",3,"ngModelChange","ngModel"],["type","file",3,"change"],[3,"src"],["class","boton",3,"click",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(n,t){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Gesti\xf3n de Eventos"),e.k0s(),e.j41(4,"ion-buttons",0),e.nrm(5,"ion-back-button",1),e.k0s()()(),e.j41(6,"ion-content"),e.DNE(7,E,3,0,"div",2)(8,f,2,0,"div",3)(9,j,27,8,"div",2)(10,A,2,1,"ion-list",3),e.k0s()),2&n&&(e.R7$(7),e.Y8G("ngIf",!t.evento&&!t.creandoEvento),e.R7$(),e.Y8G("ngIf",!t.event&&!t.creandoEvento),e.R7$(),e.Y8G("ngIf",t.evento||t.creandoEvento),e.R7$(),e.Y8G("ngIf",!t.evento&&!t.creandoEvento))},dependencies:[s.Sq,s.bT,u.BC,u.vS,r.Jm,r.QW,r.W9,r.eU,r.KW,r.$w,r.uz,r.he,r.nf,r.w2,r.nc,r.BC,r.ai,r.Gw,r.el],styles:[".boton[_ngcontent-%COMP%]{--background: #e4b312;--background-hover: #9ce0be;--background-activated: #dee4ab;--background-focused: #c8de05;--color: rgb(0, 0, 0);--border-radius: 15px;--border-color: #000;--border-style: solid;--border-width: 1px}#perUser[_ngcontent-%COMP%]{text-align:center;color:#e4b312}.menucolor[_ngcontent-%COMP%]{--color: #e4b312}.titulo[_ngcontent-%COMP%]{font-family:titulo,sans-serif;--color: #e4b312}.texto[_ngcontent-%COMP%]{font-family:texto,serif;color:#e4b312}.centrarfoto[_ngcontent-%COMP%]{text-align:center}"]}),c})()}];let k=(()=>{var o;class c{}return(o=c).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[v.iI.forChild(P),v.iI]}),c})(),F=(()=>{var o;class c{}return(o=c).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[s.MD,u.YN,r.bv,k]}),c})()}}]);