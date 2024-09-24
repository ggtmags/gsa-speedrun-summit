const ans1_rep = nodecg.Replicant('ans1', 'gsa-speedrun-summit');
const ans2_rep = nodecg.Replicant('ans2', 'gsa-speedrun-summit');
const ans3_rep = nodecg.Replicant('ans3', 'gsa-speedrun-summit');
const ans4_rep = nodecg.Replicant('ans4', 'gsa-speedrun-summit');
const ans5_rep = nodecg.Replicant('ans5', 'gsa-speedrun-summit');
const ans6_rep = nodecg.Replicant('ans6', 'gsa-speedrun-summit');
const ans7_rep = nodecg.Replicant('ans7', 'gsa-speedrun-summit');
const ans8_rep = nodecg.Replicant('ans8', 'gsa-speedrun-summit');
const pts1_rep = nodecg.Replicant('pts1', 'gsa-speedrun-summit');
const pts2_rep = nodecg.Replicant('pts2', 'gsa-speedrun-summit');
const pts3_rep = nodecg.Replicant('pts3', 'gsa-speedrun-summit');
const pts4_rep = nodecg.Replicant('pts4', 'gsa-speedrun-summit');
const pts5_rep = nodecg.Replicant('pts5', 'gsa-speedrun-summit');
const pts6_rep = nodecg.Replicant('pts6', 'gsa-speedrun-summit');
const pts7_rep = nodecg.Replicant('pts7', 'gsa-speedrun-summit');
const pts8_rep = nodecg.Replicant('pts8', 'gsa-speedrun-summit');
const status1_rep = nodecg.Replicant('status1', 'gsa-speedrun-summit');
const status2_rep = nodecg.Replicant('status2', 'gsa-speedrun-summit');
const status3_rep = nodecg.Replicant('status3', 'gsa-speedrun-summit');
const status4_rep = nodecg.Replicant('status4', 'gsa-speedrun-summit');
const status5_rep = nodecg.Replicant('status5', 'gsa-speedrun-summit');
const status6_rep = nodecg.Replicant('status6', 'gsa-speedrun-summit');
const status7_rep = nodecg.Replicant('status7', 'gsa-speedrun-summit');
const status8_rep = nodecg.Replicant('status8', 'gsa-speedrun-summit');

const p3score_rep = nodecg.Replicant('p3score', 'gsa-speedrun-summit');

ans1_rep.on('change', (newValue, oldValue) => {	
	ans1.innerText = `${newValue}` ;
    if (ans1_rep.value == ""){
        //remove active1
        document.getElementById("answer1").classList.remove("active1");
    } else {
        document.getElementById("answer1").classList.add("active1");
    }
});	
ans2_rep.on('change', (newValue, oldValue) => {	
	ans2.innerText = `${newValue}` ;
    if (ans2_rep.value == ""){
        document.getElementById("answer2").classList.remove("active2");
    } else {
        document.getElementById("answer2").classList.add("active2");
    }
});	
ans3_rep.on('change', (newValue, oldValue) => {	
	ans3.innerText = `${newValue}` ;
    if (ans3_rep.value == ""){
        document.getElementById("answer3").classList.remove("active3");
    } else {
        document.getElementById("answer3").classList.add("active3");
    }
});	
ans4_rep.on('change', (newValue, oldValue) => {	
	ans4.innerText = `${newValue}` ;
    if (ans4_rep.value == ""){
        document.getElementById("answer4").classList.remove("active4");
    } else {
        document.getElementById("answer4").classList.add("active4");
    }
});	
ans5_rep.on('change', (newValue, oldValue) => {	
	ans5.innerText = `${newValue}` ;
    if (ans5_rep.value == ""){
        document.getElementById("answer5").classList.remove("active5");
    } else {
        document.getElementById("answer5").classList.add("active5");
    }
});	
ans6_rep.on('change', (newValue, oldValue) => {	
	ans6.innerText = `${newValue}` ;
    if (ans6_rep.value == ""){
        document.getElementById("answer6").classList.remove("active6");
    } else {
        document.getElementById("answer6").classList.add("active6");
    }
});	
ans7_rep.on('change', (newValue, oldValue) => {	
	ans7.innerText = `${newValue}` ;
    if (ans7_rep.value == ""){
        document.getElementById("answer7").classList.remove("active7");
    } else {
        document.getElementById("answer7").classList.add("active7");
    }
});	
ans8_rep.on('change', (newValue, oldValue) => {	
	ans8.innerText = `${newValue}` ;
    if (ans8_rep.value == ""){
        document.getElementById("answer8").classList.remove("active8");
    } else {
        document.getElementById("answer8").classList.add("active8");
    }
});	
pts1_rep.on('change', (newValue, oldValue) => {	
	pts1.innerText = `${newValue}` ;
});	
pts2_rep.on('change', (newValue, oldValue) => {	
	pts2.innerText = `${newValue}` ;
});	
pts3_rep.on('change', (newValue, oldValue) => {	
	pts3.innerText = `${newValue}` ;
});	
pts4_rep.on('change', (newValue, oldValue) => {	
	pts4.innerText = `${newValue}` ;
});	
pts5_rep.on('change', (newValue, oldValue) => {	
	pts5.innerText = `${newValue}` ;
});	
pts6_rep.on('change', (newValue, oldValue) => {	
	pts6.innerText = `${newValue}` ;
});	
pts7_rep.on('change', (newValue, oldValue) => {	
	pts7.innerText = `${newValue}` ;
});	
pts8_rep.on('change', (newValue, oldValue) => {	
	pts8.innerText = `${newValue}` ;
});	
p3score_rep.on('change', (newValue, oldValue) => {	
	round_score.innerText = `${newValue}` ;
});	
status1_rep.on('change', (newValue, oldValue) => {	
	if (status1_rep.value == "show"){
        document.getElementById("show1").classList.remove("hidden");
    } else {
        document.getElementById("show1").classList.add("hidden");
    }
    console.log(status1_rep.value);
});	
status2_rep.on('change', (newValue, oldValue) => {	
	if (status2_rep.value == "show"){
        document.getElementById("show2").classList.remove("hidden");
    } else {
        document.getElementById("show2").classList.add("hidden");
    }
    console.log(status2_rep.value);
});	
status3_rep.on('change', (newValue, oldValue) => {	
	if (status3_rep.value == "show"){
        document.getElementById("show3").classList.remove("hidden");
    } else {
        document.getElementById("show3").classList.add("hidden");
    }
    console.log(status3_rep.value);
});	
status4_rep.on('change', (newValue, oldValue) => {	
	if (status4_rep.value == "show"){
        document.getElementById("show4").classList.remove("hidden");
    } else {
        document.getElementById("show4").classList.add("hidden");
    }
    console.log(status4_rep.value);
});	
status5_rep.on('change', (newValue, oldValue) => {	
	if (status5_rep.value == "show"){
        document.getElementById("show5").classList.remove("hidden");
    } else {
        document.getElementById("show5").classList.add("hidden");
    }
    console.log(status5_rep.value);
});	
status6_rep.on('change', (newValue, oldValue) => {	
	if (status6_rep.value == "show"){
        document.getElementById("show6").classList.remove("hidden");
    } else {
        document.getElementById("show6").classList.add("hidden");
    }
    console.log(status6_rep.value);
});	
status7_rep.on('change', (newValue, oldValue) => {	
	if (status7_rep.value == "show"){
        document.getElementById("show7").classList.remove("hidden");
    } else {
        document.getElementById("show7").classList.add("hidden");
    }
    console.log(status7_rep.value);
});	
status8_rep.on('change', (newValue, oldValue) => {	
	if (status8_rep.value == "show"){
        document.getElementById("show8").classList.remove("hidden");
    } else {
        document.getElementById("show8").classList.add("hidden");
    }
    console.log(status8_rep.value);
});	

