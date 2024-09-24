const ans1_rep = nodecg.Replicant('ans1');
const ans2_rep = nodecg.Replicant('ans2');
const ans3_rep = nodecg.Replicant('ans3');
const ans4_rep = nodecg.Replicant('ans4');
const ans5_rep = nodecg.Replicant('ans5');
const ans6_rep = nodecg.Replicant('ans6');
const ans7_rep = nodecg.Replicant('ans7');
const ans8_rep = nodecg.Replicant('ans8');
const pts1_rep = nodecg.Replicant('pts1');
const pts2_rep = nodecg.Replicant('pts2');
const pts3_rep = nodecg.Replicant('pts3');
const pts4_rep = nodecg.Replicant('pts4');
const pts5_rep = nodecg.Replicant('pts5');
const pts6_rep = nodecg.Replicant('pts6');
const pts7_rep = nodecg.Replicant('pts7');
const pts8_rep = nodecg.Replicant('pts8');

var status1_rep = nodecg.Replicant('status1');
const status2_rep = nodecg.Replicant('status2');
const status3_rep = nodecg.Replicant('status3');
const status4_rep = nodecg.Replicant('status4');
const status5_rep = nodecg.Replicant('status5');
const status6_rep = nodecg.Replicant('status6');
const status7_rep = nodecg.Replicant('status7');
const status8_rep = nodecg.Replicant('status8');

const ans1 = document.querySelector('#ans1');
const ans2 = document.querySelector('#ans2');
const ans3 = document.querySelector('#ans3');
const ans4 = document.querySelector('#ans4');
const ans5 = document.querySelector('#ans5');
const ans6 = document.querySelector('#ans6');
const ans7 = document.querySelector('#ans7');
const ans8 = document.querySelector('#ans8');
const pts1 = document.querySelector('#pts1');
const pts2 = document.querySelector('#pts2');
const pts3 = document.querySelector('#pts3');
const pts4 = document.querySelector('#pts4');
const pts5 = document.querySelector('#pts5');
const pts6 = document.querySelector('#pts6');
const pts7 = document.querySelector('#pts7');
const pts8 = document.querySelector('#pts8');

ans1_rep.on('change', (newValue, oldValue) => {	
	ans1.value = newValue;
});	
ans2_rep.on('change', (newValue, oldValue) => {	
	ans2.value = newValue;
});	
ans3_rep.on('change', (newValue, oldValue) => {	
	ans3.value = newValue;
});	
ans4_rep.on('change', (newValue, oldValue) => {	
	ans4.value = newValue;
});	
ans5_rep.on('change', (newValue, oldValue) => {	
	ans5.value = newValue;
});	
ans6_rep.on('change', (newValue, oldValue) => {	
	ans6.value = newValue;
});	
ans7_rep.on('change', (newValue, oldValue) => {	
	ans7.value = newValue;
});	
ans8_rep.on('change', (newValue, oldValue) => {	
	ans8.value = newValue;
});	
ans8_rep.on('change', (newValue, oldValue) => {	
	ans8.value = newValue;
});	
pts1_rep.on('change', (newValue, oldValue) => {	
	pts1.value = newValue;
});	
pts2_rep.on('change', (newValue, oldValue) => {	
	pts2.value = newValue;
});	
pts3_rep.on('change', (newValue, oldValue) => {	
	pts3.value = newValue;
});	
pts4_rep.on('change', (newValue, oldValue) => {	
	pts4.value = newValue;
});	
pts5_rep.on('change', (newValue, oldValue) => {	
	pts5.value = newValue;
});	
pts6_rep.on('change', (newValue, oldValue) => {	
	pts6.value = newValue;
});	
pts7_rep.on('change', (newValue, oldValue) => {	
	pts7.value = newValue;
});	
pts8_rep.on('change', (newValue, oldValue) => {	
	pts8.value = newValue;
});	


updatebutton.onclick = () => {    
    ans1_rep.value = ans1.value;
    ans2_rep.value = ans2.value;
    ans3_rep.value = ans3.value;
    ans4_rep.value = ans4.value;
    ans5_rep.value = ans5.value;
    ans6_rep.value = ans6.value;
    ans7_rep.value = ans7.value;
    ans8_rep.value = ans8.value;
    pts1_rep.value = pts1.value;
    pts2_rep.value = pts2.value;
    pts3_rep.value = pts3.value;
    pts4_rep.value = pts4.value;
    pts5_rep.value = pts5.value;
    pts6_rep.value = pts6.value;
    pts7_rep.value = pts7.value;
    pts8_rep.value = pts8.value;
};

clearbutton.onclick = () => {
    ans1_rep.value = "";
    ans2_rep.value = "";
    ans3_rep.value = "";
    ans4_rep.value = "";
    ans5_rep.value = "";
    ans6_rep.value = "";
    ans7_rep.value = "";
    ans8_rep.value = "";
    pts1_rep.value = "";
    pts2_rep.value = "";
    pts3_rep.value = "";
    pts4_rep.value = "";
    pts5_rep.value = "";
    pts6_rep.value = "";
    pts7_rep.value = "";
    pts8_rep.value = "";
};


hide2.onclick = () => {
    status2_rep.value = "hide";
    console.log(status2_rep.value);
};
show2.onclick = () => {
    status2_rep.value = "show";
    console.log(status2_rep.value);
};

hide3.onclick = () => {
    status3_rep.value = "hide";
    console.log(status3_rep.value);
};
show3.onclick = () => {
    status3_rep.value = "show";
};

hide4.onclick = () => {
    status4_rep.value = "hide";
};
show4.onclick = () => {
    status4_rep.value = "show";
};

hide5.onclick = () => {
    status5_rep.value = "hide";
};
show5.onclick = () => {
    status5_rep.value = "show";
};

hide6.onclick = () => {
    status6_rep.value = "hide";
};
show6.onclick = () => {
    status6_rep.value = "show";
};

hide7.onclick = () => {
    status7_rep.value = "hide";
};
show7.onclick = () => {
    status7_rep.value = "show";
};

hide8.onclick = () => {
    status8_rep.value = "hide";
};
show8.onclick = () => {
    status8_rep.value = "show";
};

hide1.onclick = () => {
    status1_rep.value = "hide";
    console.log(status1_rep.value);
};
show1.onclick = () => {
    status1_rep.value = "show";
    console.log(status1_rep.value);
};