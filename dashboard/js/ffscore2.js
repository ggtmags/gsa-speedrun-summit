const fma_a1_rep = nodecg.Replicant('fma_a1');
const fma_a2_rep = nodecg.Replicant('fma_a2');
const fma_a3_rep = nodecg.Replicant('fma_a3');
const fma_a4_rep = nodecg.Replicant('fma_a4');
const fma_a5_rep = nodecg.Replicant('fma_a5');
const fma_p1_rep = nodecg.Replicant('fma_p1');
const fma_p2_rep = nodecg.Replicant('fma_p2');
const fma_p3_rep = nodecg.Replicant('fma_p3');
const fma_p4_rep = nodecg.Replicant('fma_p4');
const fma_p5_rep = nodecg.Replicant('fma_p5');
const fmb_a1_rep = nodecg.Replicant('fmb_a1');
const fmb_a2_rep = nodecg.Replicant('fmb_a2');
const fmb_a3_rep = nodecg.Replicant('fmb_a3');
const fmb_a4_rep = nodecg.Replicant('fmb_a4');
const fmb_a5_rep = nodecg.Replicant('fmb_a5');
const fmb_p1_rep = nodecg.Replicant('fmb_p1');
const fmb_p2_rep = nodecg.Replicant('fmb_p2');
const fmb_p3_rep = nodecg.Replicant('fmb_p3');
const fmb_p4_rep = nodecg.Replicant('fmb_p4');
const fmb_p5_rep = nodecg.Replicant('fmb_p5');


const fma_a1_s_rep = nodecg.Replicant('fma_a1_s');
const fma_a2_s_rep = nodecg.Replicant('fma_a2_s');
const fma_a3_s_rep = nodecg.Replicant('fma_a3_s');
const fma_a4_s_rep = nodecg.Replicant('fma_a4_s');
const fma_a5_s_rep = nodecg.Replicant('fma_a5_s');
const fma_p1_s_rep = nodecg.Replicant('fma_p1_s');
const fma_p2_s_rep = nodecg.Replicant('fma_p2_s');
const fma_p3_s_rep = nodecg.Replicant('fma_p3_s');
const fma_p4_s_rep = nodecg.Replicant('fma_p4_s');
const fma_p5_s_rep = nodecg.Replicant('fma_p5_s');
const fmb_a1_s_rep = nodecg.Replicant('fmb_a1_s');
const fmb_a2_s_rep = nodecg.Replicant('fmb_a2_s');
const fmb_a3_s_rep = nodecg.Replicant('fmb_a3_s');
const fmb_a4_s_rep = nodecg.Replicant('fmb_a4_s');
const fmb_a5_s_rep = nodecg.Replicant('fmb_a5_s');
const fmb_p1_s_rep = nodecg.Replicant('fmb_p1_s');
const fmb_p2_s_rep = nodecg.Replicant('fmb_p2_s');
const fmb_p3_s_rep = nodecg.Replicant('fmb_p3_s');
const fmb_p4_s_rep = nodecg.Replicant('fmb_p4_s');
const fmb_p5_s_rep = nodecg.Replicant('fmb_p5_s');
const fma_tps_rep = nodecg.Replicant('fma_tps');
const fmb_tps_rep = nodecg.Replicant('fmb_tps');

const fma_a1 = document.querySelector('#fma_a1');
const fma_a2 = document.querySelector('#fma_a2');
const fma_a3 = document.querySelector('#fma_a3');
const fma_a4 = document.querySelector('#fma_a4');
const fma_a5 = document.querySelector('#fma_a5');
const fma_p1 = document.querySelector('#fma_p1');
const fma_p2 = document.querySelector('#fma_p2');
const fma_p3 = document.querySelector('#fma_p3');
const fma_p4 = document.querySelector('#fma_p4');
const fma_p5 = document.querySelector('#fma_p5');
const fmb_a1 = document.querySelector('#fmb_a1');
const fmb_a2 = document.querySelector('#fmb_a2');
const fmb_a3 = document.querySelector('#fmb_a3');
const fmb_a4 = document.querySelector('#fmb_a4');
const fmb_a5 = document.querySelector('#fmb_a5');
const fmb_p1 = document.querySelector('#fmb_p1');
const fmb_p2 = document.querySelector('#fmb_p2');
const fmb_p3 = document.querySelector('#fmb_p3');
const fmb_p4 = document.querySelector('#fmb_p4');
const fmb_p5 = document.querySelector('#fmb_p5');
const status5 = document.querySelector('#status5');
const status6 = document.querySelector('#status6');
const status7 = document.querySelector('#status7');
const status8 = document.querySelector('#status8');
const fma_tps = document.querySelector('#fma_tps');
const fmb_tps = document.querySelector('#fmb_tps');

fma_a1_rep.on('change', (newValue, oldValue) => {	
	fma_a1.value = newValue;
});	
fma_a2_rep.on('change', (newValue, oldValue) => {	
	fma_a2.value = newValue;
});	
fma_a3_rep.on('change', (newValue, oldValue) => {	
	fma_a3.value = newValue;
});	
fma_a4_rep.on('change', (newValue, oldValue) => {	
	fma_a4.value = newValue;
});	
fma_a5_rep.on('change', (newValue, oldValue) => {	
	fma_a5.value = newValue;
});	
fma_p1_rep.on('change', (newValue, oldValue) => {	
	fma_p1.value = newValue;
});	
fma_p2_rep.on('change', (newValue, oldValue) => {	
	fma_p2.value = newValue;
});	
fma_p3_rep.on('change', (newValue, oldValue) => {	
	fma_p3.value = newValue;
});	
fma_p3_rep.on('change', (newValue, oldValue) => {	
	fma_p3.value = newValue;
});	
fma_p4_rep.on('change', (newValue, oldValue) => {	
	fma_p4.value = newValue;
});	
fma_p5_rep.on('change', (newValue, oldValue) => {	
	fma_p5.value = newValue;
});	
fmb_a1_rep.on('change', (newValue, oldValue) => {	
	fmb_a1.value = newValue;
});	
fmb_a2_rep.on('change', (newValue, oldValue) => {	
	fmb_a2.value = newValue;
});	
fmb_a3_rep.on('change', (newValue, oldValue) => {	
	fmb_a3.value = newValue;
});	
fmb_a4_rep.on('change', (newValue, oldValue) => {	
	fmb_a4.value = newValue;
});	
fmb_a5_rep.on('change', (newValue, oldValue) => {	
	fmb_a5.value = newValue;
});	
fmb_p1_rep.on('change', (newValue, oldValue) => {	
	fmb_p1.value = newValue;
});	
fmb_p2_rep.on('change', (newValue, oldValue) => {	
	fmb_p2.value = newValue;
});	
fmb_p3_rep.on('change', (newValue, oldValue) => {	
	fmb_p3.value = newValue;
});	
fmb_p4_rep.on('change', (newValue, oldValue) => {	
	fmb_p4.value = newValue;
});	
fmb_p5_rep.on('change', (newValue, oldValue) => {	
	fmb_p5.value = newValue;
});	

fma_tps_rep.on('change', (newValue, oldValue) => {	
	fma_tp.value = newValue;
});	
fmb_tps_rep.on('change', (newValue, oldValue) => {	
	fmb_tp.value = newValue;
});	


hide_a_1s.onclick = () => {
    fma_a1_s_rep.value = "hide";
    fma_p1_s_rep.value = "hide";
};
show_a_a1s.onclick = () => {
    fma_a1_s_rep.value = "show";
};
show_a_p1s.onclick = () => {
    fma_p1_s_rep.value = "show";
    fma_tps_rep.value = parseInt(fma_p1_rep.value);
};
hide_b_1s.onclick = () => {
    fmb_a1_s_rep.value = "hide";
    fmb_p1_s_rep.value = "hide";
};
show_b_a1s.onclick = () => {
    fmb_a1_s_rep.value = "show";
};
show_b_p1s.onclick = () => {
    fmb_p1_s_rep.value = "show";
    console.log("lol here");
    fmb_tps_rep.value = parseInt(fma_tps_rep.value) + parseInt(fmb_p1_rep.value);
};
//2nd line
hide_a_2s.onclick = () => {
    fma_a2_s_rep.value = "hide";
    fma_p2_s_rep.value = "hide";
};
show_a_a2s.onclick = () => {
    fma_a2_s_rep.value = "show";
};
show_a_p2s.onclick = () => {
    fma_p2_s_rep.value = "show";
    fma_tps_rep.value = parseInt(fma_p1_rep.value) + parseInt(fma_p2_rep.value);
};
hide_b_2s.onclick = () => {
    fmb_a2_s_rep.value = "hide";
    fmb_p2_s_rep.value = "hide";
};
show_b_a2s.onclick = () => {
    fmb_a2_s_rep.value = "show";
};
show_b_p2s.onclick = () => {
    fmb_p2_s_rep.value = "show";
    fmb_tps_rep.value = parseInt(fma_tps_rep.value) + parseInt(fmb_p1_rep.value) + parseInt(fmb_p2_rep.value);
};
//3rd line
hide_a_3s.onclick = () => {
    fma_a3_s_rep.value = "hide";
    fma_p3_s_rep.value = "hide";
};
show_a_a3s.onclick = () => {
    fma_a3_s_rep.value = "show";
};
show_a_p3s.onclick = () => {
    fma_p3_s_rep.value = "show";
    fma_tps_rep.value = parseInt(fma_p1_rep.value) + parseInt(fma_p2_rep.value) + parseInt(fma_p3_rep.value)
};
hide_b_3s.onclick = () => {
    fmb_a3_s_rep.value = "hide";
    fmb_p3_s_rep.value = "hide";
};
show_b_a3s.onclick = () => {
    fmb_a3_s_rep.value = "show";
};
show_b_p3s.onclick = () => {
    fmb_p3_s_rep.value = "show";
    fmb_tps_rep.value = parseInt(fma_tps_rep.value) + parseInt(fmb_p1_rep.value) + parseInt(fmb_p2_rep.value) + parseInt(fmb_p3_rep.value);
};
//4th line
hide_a_4s.onclick = () => {
    fma_a4_s_rep.value = "hide";
    fma_p4_s_rep.value = "hide";
};
show_a_a4s.onclick = () => {
    fma_a4_s_rep.value = "show";
};
show_a_p4s.onclick = () => {
    fma_p4_s_rep.value = "show";
    fma_tps_rep.value = parseInt(fma_p1_rep.value) + parseInt(fma_p2_rep.value) + parseInt(fma_p3_rep.value) + parseInt(fma_p4_rep.value)
};
hide_b_4s.onclick = () => {
    fmb_a4_s_rep.value = "hide";
    fmb_p4_s_rep.value = "hide";
};
show_b_a4s.onclick = () => {
    fmb_a4_s_rep.value = "show";
};
show_b_p4s.onclick = () => {
    fmb_p4_s_rep.value = "show";
    fmb_tps_rep.value = parseInt(fma_tps_rep.value) + parseInt(fmb_p1_rep.value) + parseInt(fmb_p2_rep.value) + parseInt(fmb_p3_rep.value) + parseInt(fmb_p4_rep.value);
};
//5th line
hide_a_5s.onclick = () => {
    fma_a5_s_rep.value = "hide";
    fma_p5_s_rep.value = "hide";
};
show_a_a5s.onclick = () => {
    fma_a5_s_rep.value = "show";
};
show_a_p5s.onclick = () => {
    fma_p5_s_rep.value = "show";
    fma_tps_rep.value = parseInt(fma_p1_rep.value) + parseInt(fma_p2_rep.value) + parseInt(fma_p3_rep.value) + parseInt(fma_p4_rep.value) + parseInt(fma_p5_rep.value)
};
hide_b_5s.onclick = () => {
    fmb_a5_s_rep.value = "hide";
    fmb_p5_s_rep.value = "hide";
};
show_b_a5s.onclick = () => {
    fmb_a5_s_rep.value = "show";
};
show_b_p5s.onclick = () => {
    fmb_p5_s_rep.value = "show";
    fmb_tps_rep.value = parseInt(fma_tps_rep.value) + parseInt(fmb_p1_rep.value) + parseInt(fmb_p2_rep.value) + parseInt(fmb_p3_rep.value) + parseInt(fmb_p4_rep.value) + parseInt(fmb_p5_rep.value);
};


updatebutton.onclick = () => {
    fma_a1_rep.value = fma_a1.value;
    fma_a2_rep.value = fma_a2.value;
    fma_a3_rep.value = fma_a3.value;
    fma_a4_rep.value = fma_a4.value;
    fma_a5_rep.value = fma_a5.value;
    fma_p1_rep.value = fma_p1.value;
    fma_p2_rep.value = fma_p2.value;
    fma_p3_rep.value = fma_p3.value;
    fma_p4_rep.value = fma_p4.value;
    fma_p5_rep.value = fma_p5.value;
    fmb_a1_rep.value = fmb_a1.value;
    fmb_a2_rep.value = fmb_a2.value;
    fmb_a3_rep.value = fmb_a3.value;
    fmb_a4_rep.value = fmb_a4.value;
    fmb_a5_rep.value = fmb_a5.value;
    fmb_p1_rep.value = fmb_p1.value;
    fmb_p2_rep.value = fmb_p2.value;
    fmb_p3_rep.value = fmb_p3.value;
    fmb_p4_rep.value = fmb_p4.value;
    fmb_p5_rep.value = fmb_p5.value;
};