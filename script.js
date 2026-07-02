const properties=[
 {title:'MUKONO DEVELOPMENT LAND',type:'land',status:'FOR SALE',location:'Mukono / Seeta Area',price:'Contact for price',img:'assets/img8_1_.jpg',desc:'Green land suitable for residential, farming or investment development.'},
 {title:'BUKERERE ROAD RESIDENTIAL PLOT',type:'land',status:'FOR SALE',location:'Bukerere Road, Mukono',price:'Call for inspection',img:'assets/img7_1_.jpg',desc:'Good plot for a home, rentals or future resale investment.'},
 {title:'ESTATE LAND READY FOR CLEARING',type:'land',status:'FOR SALE',location:'Seeta - Mukono',price:'Negotiable',img:'assets/img3_1_.jpg',desc:'Development land with land clearing and surveying support available.'},
 {title:'SOLD LAND PROJECT',type:'land',status:'SOLD',location:'Mukono District',price:'Sold',img:'assets/img9_1_.jpg',desc:'Successfully marketed land with professional buyer support.'},
 {title:'MODERN FAMILY HOUSE',type:'house-sale',status:'FOR SALE',location:'Mukono',price:'Contact for inspection',img:'assets/img12_1_.jpg',desc:'Spacious family home with compound, secure access and premium finish.'},
 {title:'CLASSIC RESIDENTIAL HOUSE',type:'house-sale',status:'FOR SALE',location:'Seeta / Mukono',price:'Call for price',img:'assets/img13_1_.jpg',desc:'Good family house for buyers looking for comfort and location advantage.'},
 {title:'FIVE BEDROOM HOUSE',type:'house-rent',status:'FOR RENT',location:'Seeta / Mukono',price:'Call for rent',img:'assets/img14_1_.jpg',desc:'Comfortable rental home suitable for a family.'},
 {title:'SELF-CONTAINED RENTAL UNITS',type:'house-rent',status:'FOR RENT',location:'Seeta',price:'Budget friendly',img:'assets/img17_1_.jpg',desc:'Affordable rental rooms and self-contained options.'},
 {title:'APARTMENT BLOCK UNITS',type:'apartment',status:'FOR RENT',location:'Mukono',price:'Affordable monthly rent',img:'assets/img16_1_.jpg',desc:'Clean apartment units for tenants seeking convenience and security.'},
 {title:'ROOMS AND APARTMENTS',type:'apartment',status:'FOR RENT',location:'Mukono / Seeta',price:'Call for availability',img:'assets/img19_1_.jpg',desc:'Simple apartments and rooms available for quick occupation.'}
];
const grid=document.getElementById('propertyGrid');
function render(){
 const q=document.getElementById('searchInput').value.toLowerCase();
 const t=document.getElementById('typeFilter').value;
 const s=document.getElementById('statusFilter').value;
 const data=properties.filter(p=>(t==='all'||p.type===t)&&(s==='all'||p.status===s)&&(`${p.title} ${p.location} ${p.desc}`.toLowerCase().includes(q)));
 grid.innerHTML=data.map(p=>`<article class="card"><img src="${p.img}" alt="${p.title}"><div class="card-body"><span class="badge">${p.status}</span><h3>${p.title}</h3><p class="meta">${p.location}</p><p>${p.desc}</p><p class="price">${p.price}</p><a class="btn primary" href="https://wa.me/256767432176?text=Hello%20Lutonya%20Properties,%20I%20am%20interested%20in%20${encodeURIComponent(p.title)}">INQUIRE ON WHATSAPP</a></div></article>`).join('')||'<p>No matching properties found. Please change your filters.</p>';
}
['searchInput','typeFilter','statusFilter'].forEach(id=>document.getElementById(id).addEventListener('input',render));
document.querySelector('.menu-btn').addEventListener('click',()=>document.getElementById('navMenu').classList.toggle('open'));
window.addEventListener('scroll',()=>document.getElementById('header').classList.toggle('scrolled',window.scrollY>30));
document.getElementById('year').textContent=new Date().getFullYear();
function sendInquiry(e){e.preventDefault();const fields=[...e.target.elements].filter(el=>el.value).map(el=>el.value).join('%0A');location.href=`mailto:info@lutonya.com?subject=Lutonya Properties Inquiry&body=${fields}`}
render();
