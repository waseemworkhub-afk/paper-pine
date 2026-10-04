const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
$('#year').textContent = new Date().getFullYear();

// Cursor
const dot = $('.cursor-dot'), ring = $('.cursor-ring');
window.addEventListener('mousemove', e => {
  dot.style.left = e.clientX+'px'; dot.style.top = e.clientY+'px';
  ring.style.left = e.clientX+'px'; ring.style.top = e.clientY+'px';
});
$$('a,button,.case-play').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('big'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('big'));
});

// Hero reveal
window.addEventListener('load',()=>{
  if(window.gsap){ gsap.to('.reveal',{opacity:1,y:0,duration:1.05,stagger:.12,ease:'power3.out'}); }
});

// Method data
const steps = [
  ['THE HOOK','The first beat creates a pattern interrupt — a reason to stop scrolling before the viewer even knows what we\'re selling.'],
  ['THE ANGLE','The same product can mean ten different things. We find the perspective that makes this audience lean in.'],
  ['THE STORY','Information becomes memorable when it has movement: setup, tension, payoff. We build the ad around that arc.'],
  ['PSYCHOLOGY','Curiosity, contrast, social proof, desire, loss aversion — used with intention, never as empty tricks.'],
  ['THE VISUALS','Camera language, composition, pacing, transitions, sound and texture make the idea impossible to ignore.'],
  ['THE PITCH','The product earns its place in the story. We show the value without turning the film into a sales brochure.'],
  ['THE CTA','The final beat removes friction and tells the viewer exactly what to do next.'],
];
function setStep(i){
  $('#breakdownTitle').textContent=steps[i][0];
  $('#breakdownText').textContent=steps[i][1];
  $('#stepNo').textContent=String(i+1).padStart(2,'0');
  $$('.method-step').forEach((b,n)=>b.classList.toggle('active',n===i));
  if(window.gsap){ gsap.fromTo('.breakdown-copy h3',{opacity:.25,x:-15},{opacity:1,x:0,duration:.45}); gsap.fromTo('#breakdownText',{opacity:.25,y:8},{opacity:1,y:0,duration:.45}); }
}
$$('.method-step').forEach((b,i)=>b.addEventListener('click',()=>setStep(i)));

// Three.js 3D creative core
if(window.THREE){
 const canvas=$('#threeCanvas'), host=$('#scene3d');
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,2)); renderer.setSize(host.clientWidth,host.clientHeight,false);
 const scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(36,host.clientWidth/host.clientHeight,.1,100); camera.position.set(0,0,7);
 const group=new THREE.Group(); scene.add(group);
 const mat=new THREE.MeshStandardMaterial({color:0x0b0b0a,roughness:.35,metalness:.12});
 const cream=new THREE.MeshStandardMaterial({color:0xf5eddf,roughness:.45});
 const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.35,1),mat); group.add(core);
 const ring1=new THREE.Mesh(new THREE.TorusGeometry(1.8,.018,10,120),cream); ring1.rotation.x=Math.PI/2.3; group.add(ring1);
 const ring2=new THREE.Mesh(new THREE.TorusGeometry(2.15,.012,10,120),mat); ring2.rotation.y=Math.PI/2.7; group.add(ring2);
 for(let i=0;i<14;i++){
   const s=new THREE.Mesh(new THREE.BoxGeometry(.07,.07,.07),cream);
   const a=i/14*Math.PI*2; const r=2.5; s.position.set(Math.cos(a)*r,Math.sin(a*2)*.5,Math.sin(a)*r*.35); group.add(s);
 }
 scene.add(new THREE.AmbientLight(0xf5eddf,2)); const light=new THREE.PointLight(0xef743b,8,12); light.position.set(2,3,4); scene.add(light);
 let mx=0,my=0; window.addEventListener('mousemove',e=>{mx=(e.clientX/innerWidth-.5)*.35;my=(e.clientY/innerHeight-.5)*.25});
 function resize(){const w=host.clientWidth,h=host.clientHeight; renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}; addEventListener('resize',resize);
 function tick(){ requestAnimationFrame(tick); group.rotation.y += .0035; group.rotation.x += .0012; group.rotation.y += (mx-group.rotation.y*.08)*.002; group.rotation.x += (-my-group.rotation.x*.08)*.002; ring1.rotation.z += .002; ring2.rotation.x += .001; renderer.render(scene,camera)} tick();
}

// Scroll-triggered reveals and kinetic service rows
if(window.gsap){
 gsap.registerPlugin(ScrollTrigger);
 gsap.utils.toArray('.manifesto .big-statement,.method-heading,.services-intro,.work-heading,.about-grid,.belief,.contact-content').forEach(el=>{
   gsap.from(el,{scrollTrigger:{trigger:el,start:'top 84%'},opacity:0,y:55,duration:.9,ease:'power3.out'});
 });
 gsap.utils.toArray('.service-row').forEach((el,i)=>gsap.from(el,{scrollTrigger:{trigger:el,start:'top 92%'},opacity:0,x:-35,duration:.7,delay:i*.04,ease:'power2.out'}));
 gsap.to('.hero-mark',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1},y:140,rotation:18,scale:1.15});
 gsap.to('.contact-orbit',{scrollTrigger:{trigger:'.contact',start:'top bottom',end:'bottom top',scrub:2},x:-120,y:-100,rotation:80});
}

// Magnetic buttons
$$('.magnetic-button').forEach(btn=>{
 btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.18;btn.style.transform=`translate(${x}px,${y}px)`});
 btn.addEventListener('mouseleave',()=>btn.style.transform='');
});
