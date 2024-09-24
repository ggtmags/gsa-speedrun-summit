const fma_a1_rep = nodecg.Replicant('fma_a1', 'gsa-speedrun-summit');
const fma_a2_rep = nodecg.Replicant('fma_a2', 'gsa-speedrun-summit');
const fma_a3_rep = nodecg.Replicant('fma_a3', 'gsa-speedrun-summit');
const fma_a4_rep = nodecg.Replicant('fma_a4', 'gsa-speedrun-summit');
const fma_a5_rep = nodecg.Replicant('fma_a5', 'gsa-speedrun-summit');
const fma_p1_rep = nodecg.Replicant('fma_p1', 'gsa-speedrun-summit');
const fma_p2_rep = nodecg.Replicant('fma_p2', 'gsa-speedrun-summit');
const fma_p3_rep = nodecg.Replicant('fma_p3', 'gsa-speedrun-summit');
const fma_p4_rep = nodecg.Replicant('fma_p4', 'gsa-speedrun-summit');
const fma_p5_rep = nodecg.Replicant('fma_p5', 'gsa-speedrun-summit');
const fmb_a1_rep = nodecg.Replicant('fmb_a1', 'gsa-speedrun-summit');
const fmb_a2_rep = nodecg.Replicant('fmb_a2', 'gsa-speedrun-summit');
const fmb_a3_rep = nodecg.Replicant('fmb_a3', 'gsa-speedrun-summit');
const fmb_a4_rep = nodecg.Replicant('fmb_a4', 'gsa-speedrun-summit');
const fmb_a5_rep = nodecg.Replicant('fmb_a5', 'gsa-speedrun-summit');
const fmb_p1_rep = nodecg.Replicant('fmb_p1', 'gsa-speedrun-summit');
const fmb_p2_rep = nodecg.Replicant('fmb_p2', 'gsa-speedrun-summit');
const fmb_p3_rep = nodecg.Replicant('fmb_p3', 'gsa-speedrun-summit');
const fmb_p4_rep = nodecg.Replicant('fmb_p4', 'gsa-speedrun-summit');
const fmb_p5_rep = nodecg.Replicant('fmb_p5', 'gsa-speedrun-summit');

const fma_tps_rep = nodecg.Replicant('fma_tps', 'gsa-speedrun-summit');
const fmb_tps_rep = nodecg.Replicant('fmb_tps', 'gsa-speedrun-summit');

const fma_a1_s_rep = nodecg.Replicant('fma_a1_s', 'gsa-speedrun-summit');
const fma_a2_s_rep = nodecg.Replicant('fma_a2_s', 'gsa-speedrun-summit');
const fma_a3_s_rep = nodecg.Replicant('fma_a3_s', 'gsa-speedrun-summit');
const fma_a4_s_rep = nodecg.Replicant('fma_a4_s', 'gsa-speedrun-summit');
const fma_a5_s_rep = nodecg.Replicant('fma_a5_s', 'gsa-speedrun-summit');
const fma_p1_s_rep = nodecg.Replicant('fma_p1_s', 'gsa-speedrun-summit');
const fma_p2_s_rep = nodecg.Replicant('fma_p2_s', 'gsa-speedrun-summit');
const fma_p3_s_rep = nodecg.Replicant('fma_p3_s', 'gsa-speedrun-summit');
const fma_p4_s_rep = nodecg.Replicant('fma_p4_s', 'gsa-speedrun-summit');
const fma_p5_s_rep = nodecg.Replicant('fma_p5_s', 'gsa-speedrun-summit');
const fmb_a1_s_rep = nodecg.Replicant('fmb_a1_s', 'gsa-speedrun-summit');
const fmb_a2_s_rep = nodecg.Replicant('fmb_a2_s', 'gsa-speedrun-summit');
const fmb_a3_s_rep = nodecg.Replicant('fmb_a3_s', 'gsa-speedrun-summit');
const fmb_a4_s_rep = nodecg.Replicant('fmb_a4_s', 'gsa-speedrun-summit');
const fmb_a5_s_rep = nodecg.Replicant('fmb_a5_s', 'gsa-speedrun-summit');
const fmb_p1_s_rep = nodecg.Replicant('fmb_p1_s', 'gsa-speedrun-summit');
const fmb_p2_s_rep = nodecg.Replicant('fmb_p2_s', 'gsa-speedrun-summit');
const fmb_p3_s_rep = nodecg.Replicant('fmb_p3_s', 'gsa-speedrun-summit');
const fmb_p4_s_rep = nodecg.Replicant('fmb_p4_s', 'gsa-speedrun-summit');
const fmb_p5_s_rep = nodecg.Replicant('fmb_p5_s', 'gsa-speedrun-summit');


fma_a1_rep.on('change', (newValue, oldValue) => {	
	fma_a1.innerText = `${newValue}` ;
});	
fma_a2_rep.on('change', (newValue, oldValue) => {	
	fma_a2.innerText = `${newValue}` ;
});	
fma_a3_rep.on('change', (newValue, oldValue) => {	
	fma_a3.innerText = `${newValue}` ;
});	
fma_a4_rep.on('change', (newValue, oldValue) => {	
	fma_a4.innerText = `${newValue}` ;
});	
fma_a5_rep.on('change', (newValue, oldValue) => {	
	fma_a5.innerText = `${newValue}` ;
});	
fma_p1_rep.on('change', (newValue, oldValue) => {	
	fma_p1.innerText = `${newValue}` ;
});	
fma_p2_rep.on('change', (newValue, oldValue) => {	
	fma_p2.innerText = `${newValue}` ;
});	
fma_p3_rep.on('change', (newValue, oldValue) => {	
	fma_p3.innerText = `${newValue}` ;
});	
fma_p4_rep.on('change', (newValue, oldValue) => {	
	fma_p4.innerText = `${newValue}` ;
});	
fma_p5_rep.on('change', (newValue, oldValue) => {	
	fma_p5.innerText = `${newValue}` ;
});	
fmb_a1_rep.on('change', (newValue, oldValue) => {	
	fmb_a1.innerText = `${newValue}` ;
});	
fmb_a2_rep.on('change', (newValue, oldValue) => {	
	fmb_a2.innerText = `${newValue}` ;
});	
fmb_a3_rep.on('change', (newValue, oldValue) => {	
	fmb_a3.innerText = `${newValue}` ;
});	
fmb_a4_rep.on('change', (newValue, oldValue) => {	
	fmb_a4.innerText = `${newValue}` ;
});	
fmb_a5_rep.on('change', (newValue, oldValue) => {	
	fmb_a5.innerText = `${newValue}` ;
});	
fmb_p1_rep.on('change', (newValue, oldValue) => {	
	fmb_p1.innerText = `${newValue}` ;
});	
fmb_p2_rep.on('change', (newValue, oldValue) => {	
	fmb_p2.innerText = `${newValue}` ;
});	
fmb_p3_rep.on('change', (newValue, oldValue) => {	
	fmb_p3.innerText = `${newValue}` ;
});	
fmb_p4_rep.on('change', (newValue, oldValue) => {	
	fmb_p4.innerText = `${newValue}` ;
});	
fmb_p5_rep.on('change', (newValue, oldValue) => {	
	fmb_p5.innerText = `${newValue}` ;
});	

fma_tps_rep.on('change', (newValue, oldValue) => {	
	totalscore.innerText = `${newValue}` ;  
});	
fmb_tps_rep.on('change', (newValue, oldValue) => {	
	totalscore.innerText = `${newValue}` ;  
});

console.log(fma_tps_rep.value);

fma_a1_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_a1_s_rep.value == "hide"){
        document.getElementById("fma_a1").classList.add("hidden");
    } else {
        document.getElementById("fma_a1").classList.remove("hidden");
    }
});	
fma_p1_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_p1_s_rep.value == "hide"){
        document.getElementById("fma_p1").classList.add("hidden");
    } else {
        document.getElementById("fma_p1").classList.remove("hidden");
    }
});	

fma_a2_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_a2_s_rep.value == "hide"){
        document.getElementById("fma_a2").classList.add("hidden");
    } else {
        document.getElementById("fma_a2").classList.remove("hidden");
    }
});	
fma_p2_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_p2_s_rep.value == "hide"){
        document.getElementById("fma_p2").classList.add("hidden");
    } else {
        document.getElementById("fma_p2").classList.remove("hidden");
    }
});	

fma_a3_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_a3_s_rep.value == "hide"){
        document.getElementById("fma_a3").classList.add("hidden");
    } else {
        document.getElementById("fma_a3").classList.remove("hidden");
    }
});	
fma_p3_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_p3_s_rep.value == "hide"){
        document.getElementById("fma_p3").classList.add("hidden");
    } else {
        document.getElementById("fma_p3").classList.remove("hidden");
    }
});	

fma_a4_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_a4_s_rep.value == "hide"){
        document.getElementById("fma_a4").classList.add("hidden");
    } else {
        document.getElementById("fma_a4").classList.remove("hidden");
    }
});	
fma_p4_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_p4_s_rep.value == "hide"){
        document.getElementById("fma_p4").classList.add("hidden");
    } else {
        document.getElementById("fma_p4").classList.remove("hidden");
    }
});	

fma_a5_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_a5_s_rep.value == "hide"){
        document.getElementById("fma_a5").classList.add("hidden");
    } else {
        document.getElementById("fma_a5").classList.remove("hidden");
    }
});	
fma_p5_s_rep.on('change', (newValue, oldValue) => {	
    if (fma_p5_s_rep.value == "hide"){
        document.getElementById("fma_p5").classList.add("hidden");
    } else {
        document.getElementById("fma_p5").classList.remove("hidden");
    }
});	

// B SIDE!

fmb_a1_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_a1_s_rep.value == "hide"){
        document.getElementById("fmb_a1").classList.add("hidden");
    } else {
        document.getElementById("fmb_a1").classList.remove("hidden");
    }
});	
fmb_p1_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_p1_s_rep.value == "hide"){
        document.getElementById("fmb_p1").classList.add("hidden");
    } else {
        document.getElementById("fmb_p1").classList.remove("hidden");
    }
});	

fmb_a2_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_a2_s_rep.value == "hide"){
        document.getElementById("fmb_a2").classList.add("hidden");
    } else {
        document.getElementById("fmb_a2").classList.remove("hidden");
    }
});	
fmb_p2_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_p2_s_rep.value == "hide"){
        document.getElementById("fmb_p2").classList.add("hidden");
    } else {
        document.getElementById("fmb_p2").classList.remove("hidden");
    }
});	

fmb_a3_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_a3_s_rep.value == "hide"){
        document.getElementById("fmb_a3").classList.add("hidden");
    } else {
        document.getElementById("fmb_a3").classList.remove("hidden");
    }
});	
fmb_p3_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_p3_s_rep.value == "hide"){
        document.getElementById("fmb_p3").classList.add("hidden");
    } else {
        document.getElementById("fmb_p3").classList.remove("hidden");
    }
});	

fmb_a4_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_a4_s_rep.value == "hide"){
        document.getElementById("fmb_a4").classList.add("hidden");
    } else {
        document.getElementById("fmb_a4").classList.remove("hidden");
    }
});	
fmb_p4_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_p4_s_rep.value == "hide"){
        document.getElementById("fmb_p4").classList.add("hidden");
    } else {
        document.getElementById("fmb_p4").classList.remove("hidden");
    }
});	

fmb_a5_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_a5_s_rep.value == "hide"){
        document.getElementById("fmb_a5").classList.add("hidden");
    } else {
        document.getElementById("fmb_a5").classList.remove("hidden");
    }
});	
fmb_p5_s_rep.on('change', (newValue, oldValue) => {	
    if (fmb_p5_s_rep.value == "hide"){
        document.getElementById("fmb_p5").classList.add("hidden");
    } else {
        document.getElementById("fmb_p5").classList.remove("hidden");
    }
});	