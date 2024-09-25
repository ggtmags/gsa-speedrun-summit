const p1_img_rep = nodecg.Replicant('p1_img', 'gsa-speedrun-summit');
const p2_img_rep = nodecg.Replicant('p2_img', 'gsa-speedrun-summit');
const p3_img_rep = nodecg.Replicant('p3_img', 'gsa-speedrun-summit');
const p4_img_rep = nodecg.Replicant('p4_img', 'gsa-speedrun-summit');
const p5_img_rep = nodecg.Replicant('p5_img', 'gsa-speedrun-summit');
const p6_img_rep = nodecg.Replicant('p6_img', 'gsa-speedrun-summit');
const p7_img_rep = nodecg.Replicant('p7_img', 'gsa-speedrun-summit');
const p8_img_rep = nodecg.Replicant('p8_img', 'gsa-speedrun-summit');
const p9_img_rep = nodecg.Replicant('p9_img', 'gsa-speedrun-summit');
const p10_img_rep = nodecg.Replicant('p10_img', 'gsa-speedrun-summit');
const p11_img_rep = nodecg.Replicant('p11_img', 'gsa-speedrun-summit');
const p12_img_rep = nodecg.Replicant('p12_img', 'gsa-speedrun-summit');
const p13_img_rep = nodecg.Replicant('p13_img', 'gsa-speedrun-summit');
const p14_img_rep = nodecg.Replicant('p14_img', 'gsa-speedrun-summit');
const p15_img_rep = nodecg.Replicant('p15_img', 'gsa-speedrun-summit');
const p16_img_rep = nodecg.Replicant('p16_img', 'gsa-speedrun-summit');

const p1_role_rep = nodecg.Replicant('p1_role', 'gsa-speedrun-summit');
const p2_role_rep = nodecg.Replicant('p2_role', 'gsa-speedrun-summit');
const p3_role_rep = nodecg.Replicant('p3_role', 'gsa-speedrun-summit');
const p4_role_rep = nodecg.Replicant('p4_role', 'gsa-speedrun-summit');
const p5_role_rep = nodecg.Replicant('p5_role', 'gsa-speedrun-summit');
const p6_role_rep = nodecg.Replicant('p6_role', 'gsa-speedrun-summit');
const p7_role_rep = nodecg.Replicant('p7_role', 'gsa-speedrun-summit');
const p8_role_rep = nodecg.Replicant('p8_role', 'gsa-speedrun-summit');
const p9_role_rep = nodecg.Replicant('p9_role', 'gsa-speedrun-summit');
const p10_role_rep = nodecg.Replicant('p10_role', 'gsa-speedrun-summit');
const p11_role_rep = nodecg.Replicant('p11_role', 'gsa-speedrun-summit');
const p12_role_rep = nodecg.Replicant('p12_role', 'gsa-speedrun-summit');
const p13_role_rep = nodecg.Replicant('p13_role', 'gsa-speedrun-summit');
const p14_role_rep = nodecg.Replicant('p14_role', 'gsa-speedrun-summit');
const p15_role_rep = nodecg.Replicant('p15_role', 'gsa-speedrun-summit');
const p16_role_rep = nodecg.Replicant('p16_role', 'gsa-speedrun-summit');

p1_img_rep.on('change', (newValue, oldValue) => {	
	p1_img.src = "img/mafia/"+newValue+".png" ;
});	
p2_img_rep.on('change', (newValue, oldValue) => {	
	p2_img.src = "img/mafia/"+newValue+".png" ;
});	
p3_img_rep.on('change', (newValue, oldValue) => {	
	p3_img.src = "img/mafia/"+newValue+".png" ;
});	
p4_img_rep.on('change', (newValue, oldValue) => {	
	p4_img.src = "img/mafia/"+newValue+".png" ;
});	
p5_img_rep.on('change', (newValue, oldValue) => {	
	p5_img.src = "img/mafia/"+newValue+".png" ;
});	
p6_img_rep.on('change', (newValue, oldValue) => {	
	p6_img.src = "img/mafia/"+newValue+".png" ;
});	
p7_img_rep.on('change', (newValue, oldValue) => {	
	p7_img.src = "img/mafia/"+newValue+".png" ;
});	
p8_img_rep.on('change', (newValue, oldValue) => {	
	p8_img.src = "img/mafia/"+newValue+".png" ;
});	
p9_img_rep.on('change', (newValue, oldValue) => {	
	p9_img.src = "img/mafia/"+newValue+".png" ;
});	
p10_img_rep.on('change', (newValue, oldValue) => {	
	p10_img.src = "img/mafia/"+newValue+".png" ;
});	
p11_img_rep.on('change', (newValue, oldValue) => {	
	p11_img.src = "img/mafia/"+newValue+".png" ;
});	
p12_img_rep.on('change', (newValue, oldValue) => {	
	p12_img.src = "img/mafia/"+newValue+".png" ;
});	
p13_img_rep.on('change', (newValue, oldValue) => {	
	p13_img.src = "img/mafia/"+newValue+".png" ;
});	
p14_img_rep.on('change', (newValue, oldValue) => {	
	p14_img.src = "img/mafia/"+newValue+".png" ;
});	
p15_img_rep.on('change', (newValue, oldValue) => {	
	p15_img.src = "img/mafia/"+newValue+".png" ;
});	
p16_img_rep.on('change', (newValue, oldValue) => {	
	p16_img.src = "img/mafia/"+newValue+".png" ;
});	

p1_role_rep.on('change', (newValue, oldValue) => {	
	p1_role.innerText = `${newValue}` ;
});	
p2_role_rep.on('change', (newValue, oldValue) => {	
	p2_role.innerText = `${newValue}` ;
});	
p3_role_rep.on('change', (newValue, oldValue) => {	
	p3_role.innerText = `${newValue}` ;
});	
p4_role_rep.on('change', (newValue, oldValue) => {	
	p4_role.innerText = `${newValue}` ;
});	
p5_role_rep.on('change', (newValue, oldValue) => {	
	p5_role.innerText = `${newValue}` ;
});	
p6_role_rep.on('change', (newValue, oldValue) => {	
	p6_role.innerText = `${newValue}` ;
});	
p7_role_rep.on('change', (newValue, oldValue) => {	
	p7_role.innerText = `${newValue}` ;
});	
p8_role_rep.on('change', (newValue, oldValue) => {	
	p8_role.innerText = `${newValue}` ;
});	
p9_role_rep.on('change', (newValue, oldValue) => {	
	p9_role.innerText = `${newValue}` ;
});	
p10_role_rep.on('change', (newValue, oldValue) => {	
	p10_role.innerText = `${newValue}` ;
});	
p11_role_rep.on('change', (newValue, oldValue) => {	
	p11_role.innerText = `${newValue}` ;
});	
p12_role_rep.on('change', (newValue, oldValue) => {	
	p12_role.innerText = `${newValue}` ;
});	
p13_role_rep.on('change', (newValue, oldValue) => {	
	p13_role.innerText = `${newValue}` ;
});	
p14_role_rep.on('change', (newValue, oldValue) => {	
	p14_role.innerText = `${newValue}` ;
});	
p15_role_rep.on('change', (newValue, oldValue) => {	
	p15_role.innerText = `${newValue}` ;
});	
p16_role_rep.on('change', (newValue, oldValue) => {	
	p16_role.innerText = `${newValue}` ;
});	