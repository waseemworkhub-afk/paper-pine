/* ADD YOUR MEDIA HERE: paste file names/links in order. Empty slots show placeholders.
   Example: ugc:["ugc1.mp4","ugc2.mp4"]  — photo ads use images, e.g. photo:["a.jpg"] */
const MEDIA={ugc:[],showcase:[],films:[],cgi:[],photo:[],re:[]};
const LABEL={ugc:"UGC ad",showcase:"Product showcase",films:"Brand film",cgi:"CGI ad",photo:"Photo ad",re:""};
const RE=["Apartments","Hotels","Hostels","Realtors"];
const grids=document.querySelectorAll(".grid[data-k]");
grids.forEach(g=>{const k=g.dataset.k,n=+g.dataset.n,t=g.dataset.t;
for(let i=0;i<n;i++){const s=(MEDIA[k]||[])[i],b=document.createElement("div");
const cat=k==="re"?RE[i%4]:"";b.className="box "+(t==="photo"?"photo":t==="wide"?"wide":"");if(cat)b.dataset.cat=cat;
if(s){b.innerHTML=/\.(mp4|webm|mov)$/i.test(s)?`<video src="${s}" muted loop playsinline controls preload="metadata"></video>`:`<img src="${s}" alt="" loading="lazy">`}
else b.innerHTML=`<div class="ph ${t==="photo"?"pic":""}"><i></i>${cat?cat+" "+(Math.floor(i/4)+1):LABEL[k]+" "+(i+1)}</div>`;
g.appendChild(b)}});
const cw=document.querySelector(".chips");["All",...RE].forEach((c,i)=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",i===0);
b.onclick=()=>{cw.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));
document.querySelectorAll('[data-k="re"] .box').forEach(x=>x.style.display=(i===0||x.dataset.cat===c)?"":"none")};cw.appendChild(b)});
const hd=document.querySelector("header");addEventListener("scroll",()=>hd.classList.toggle("s",scrollY>8),{passive:true});
