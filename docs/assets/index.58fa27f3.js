import{o,c as n,a as s,t as u,F as m,r as f,b,e as p,f as k}from"./@vue.fb17fe1a.js";import{I as y}from"./@iconify.a1767613.js";import{m as _}from"./moment.673caa58.js";import{m as x}from"./moment-timezone.9c033f5d.js";const $=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}};$();const v="4CjceKarKpy9KjZqTKi7jgD9JP9bVio2wvJNyF7Z3HUedLiNsFxvgwKYLF4gLSK72Uwk8EKbNspu2qj3ewnw4DrnnZXQ4d6k",w=["Gute Nacht, Simon!","Guten Morgen, Simon!","Guten Nachmittag, Simon!","Guten Abend, Simon!"],N=[{name:"Oasis",url:"https://oasis.local",icon:"server"},{name:"Plex",url:"https://app.plex.tv/desktop/",icon:"plex"},{name:"Sonarr",url:"http://192.168.192.2:8989",icon:"television-box"},{name:"Home Assistant",url:"http://192.168.192.2:8123",icon:"home-assistant"},{name:"AdGuard",url:"http://192.168.192.7:3000",icon:"shield-home-outline"},{name:"qBittorrent",url:"http://192.168.192.2:8080",icon:"cloud-download-outline"},{name:"ESPHome",url:"http://192.168.192.2:6052",icon:"chip"},{name:"Prowlarr",url:"http://192.168.192.2:9696/search",icon:"cloud-search"},{name:"Nextcloud",url:"https://cloud.b65.ch",icon:"cloud"},{name:"Bitwarden",url:"https://vault.b65.ch",icon:"book-lock"}],D=[{category:"Social Media",links:[{name:"Instagram",url:"https://instagram.com"},{name:"Facebook",url:"https://facebook.com"},{name:"TicTok",url:"https://tiktok.com"}]},{category:"News",links:[{name:"Reddit",url:"https://reddit.com/new"},{name:"Heise",url:"https://heise.de/"},{name:"Golem",url:"https://golem.de/"},{name:"Laravel News",url:"https://laravel-news.com/"}]},{category:"Dev",links:[{name:"Github",url:"https://github.com/"},{name:"Github Trending",url:"https://github.com/trending"}]},{category:"Cheatsheets",links:[{name:"Devdocs",url:"https://devdocs.io"},{name:"Devhints",url:"https://devhints.io"}]},{category:"Media",links:[{name:"YouTube",url:"https://youtube.com/feed/subscriptions"},{name:"Nox",url:"https://forum.nox.to"}]},{category:"Business",links:[{name:"Hetzner",url:"https://console.hetzner.cloud/projects"},{name:"Digitalocean",url:"https://cloud.digitalocean.com/login"},{name:"OpenSRS",url:"https://manage.opensrs.com/"},{name:"OpenProvider",url:"https://cp.openprovider.eu/account/dashboard.php"}]}],L={notsosecret:v,strings:w,apps:N,bookmarks:D},h=(c,r)=>{const a=c.__vccOpts||c;for(const[i,t]of r)a[i]=t;return a},S={data(){return{today:this.Moment().format("LLLL"),strings:this.Data.strings[Math.floor(new Date().getHours()/6)]}}},P={class:"mt-8 text-1xl font-bold"},F={class:"mt-4 text-5xl font-bold"};function G(c,r,a,i,t,e){return o(),n(m,null,[s("span",P,u(t.today),1),s("h1",F,u(t.strings),1)],64)}const K=h(S,[["render",G]]),M={data(){return{bookmarks:this.Data.bookmarks}}},O=s("h2",{class:"my-6 font-semibold text-xl text-gray-100 leading-tight"},"Bookmarks",-1),A={class:"mb-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"},B={class:"text-1xl font-bold text-indigo-300 uppercase mb-2"},I=["href"];function T(c,r,a,i,t,e){return o(),n(m,null,[O,s("div",A,[(o(!0),n(m,null,f(t.bookmarks,l=>(o(),n("dl",null,[s("dt",B,u(l.category),1),(o(!0),n(m,null,f(l.links,d=>(o(),n("dd",null,[s("a",{href:d.url,target:"_blank"},u(d.name),9,I)]))),256))]))),256))])],64)}const H=h(M,[["render",T]]),j={data(){return{apps:this.Data.apps}}},E=s("h2",{class:"my-6 font-semibold text-xl text-gray-100 leading-tight"},"Applications",-1),Z={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"},q=["href"],z={class:"ml-3"},C={class:"font-medium text-gray-800"},V={class:"text-sm text-gray-600"};function J(c,r,a,i,t,e){const l=b("Icon");return o(),n(m,null,[E,s("div",Z,[(o(!0),n(m,null,f(t.apps,d=>(o(),n("a",{href:d.url,target:"_blank",class:"flex items-center relative p-4 w-full bg-gray-100 rounded overflow-hidden shadow hover:shadow-md border-gray-400 border-l-8"},[p(l,{icon:"mdi-"+d.icon,class:"w-12 h-12 p-2 rounded bg-gray-700 text-gray-200"},null,8,["icon"]),s("div",z,[s("p",C,u(d.name),1),s("p",V,u(d.url),1)])],8,q))),256))])],64)}const R=h(j,[["render",J]]),U={data(){return{countdown:this.Moment("2022-11-13T12:00:00.000").fromNow()}}};function Y(c,r,a,i,t,e){return o(),n("span",null,"\u{1F1F9}\u{1F1ED} N\xE4chster Flug "+u(t.countdown),1)}const Q=h(U,[["render",Y]]),X={id:"container",class:"fade p-4 sm:p-8 md:p-18 lg:p-28"},W={__name:"App",setup(c){return(r,a)=>(o(),n("main",X,[p(K),p(R),p(H),p(Q)]))}};x.tz.setDefault("Europe/Zurich");_.locale("de");let g=k(W);g.component("Icon",y);g.config.globalProperties.Data=L;g.config.globalProperties.Moment=_;g.mount("#app");
