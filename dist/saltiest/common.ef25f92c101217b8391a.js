"use strict";(self.webpackChunksalt=self.webpackChunksalt||[]).push([[592],{98057:function(a,u,r){r.d(u,{Y:function(){return c}});var i=r(42693),p=r(57490),o=function(){return(o=Object.assign||function(e){for(var t,n=1,h=arguments.length;n<h;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c=function(){function e(t){this.http=t,this.API_URL="https://salty-suite.herokuapp.com/api/projects",this.httpOptions={headers:new i.WM({"Content-Type":"application/json"})}}return e.prototype.getProjects=function(t){var n={params:o({},t)};return this.http.get(""+this.API_URL,n)},e.prototype.getProjectById=function(t){return this.http.get(this.API_URL+"/"+t)},e.prototype.updateProject=function(t,n){return this.http.put(this.API_URL+"/"+t,n,this.httpOptions)},e.prototype.storeProject=function(t){return this.http.post(""+this.API_URL,t,this.httpOptions)},e.prototype.deleteProject=function(t){return this.http.delete(this.API_URL+"/"+t,this.httpOptions)},e.\u0275fac=function(n){return new(n||e)(p.LFG(i.eN))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);