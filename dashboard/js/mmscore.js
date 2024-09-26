const p1score_rep = nodecg.Replicant('p1score');
const p2score_rep = nodecg.Replicant('p2score');
const p3score_rep = nodecg.Replicant('p3score');
const p4score_rep = nodecg.Replicant('p4score');
const t1score_rep = nodecg.Replicant('t1score');
const t2score_rep = nodecg.Replicant('t2score');
const team1name_rep = nodecg.Replicant('team1name');
const team2name_rep = nodecg.Replicant('team2name');
const team3name_rep = nodecg.Replicant('team3name');
const team4name_rep = nodecg.Replicant('team4name');

const roundname_rep = nodecg.Replicant('roundname');
const roundsubname_rep = nodecg.Replicant('roundsubname');

const team1p1_rep = nodecg.Replicant('team1p1');
const team1p2_rep = nodecg.Replicant('team1p2');
const team1p3_rep = nodecg.Replicant('team1p3');
const team2p1_rep = nodecg.Replicant('team2p1');
const team2p2_rep = nodecg.Replicant('team2p2');
const team2p3_rep = nodecg.Replicant('team2p3');
const team3p1_rep = nodecg.Replicant('team3p1');
const team3p2_rep = nodecg.Replicant('team3p2');
const team3p3_rep = nodecg.Replicant('team3p3');
const team4p1_rep = nodecg.Replicant('team4p1');
const team4p2_rep = nodecg.Replicant('team4p2');
const team4p3_rep = nodecg.Replicant('team4p3');

const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const p3score = document.querySelector('#p3score');
const p4score = document.querySelector('#p4score');
const team1name = document.querySelector('#team1name');
const team2name = document.querySelector('#team2name');
const team3name = document.querySelector('#team3name');
const team4name = document.querySelector('#team4name');

const team1p1 = document.querySelector('#team1p1');
const team1p2 = document.querySelector('#team1p2');
const team1p3 = document.querySelector('#team1p3');
const team2p1 = document.querySelector('#team2p1');
const team2p2 = document.querySelector('#team2p2');
const team2p3 = document.querySelector('#team2p3');
const team3p1 = document.querySelector('#team3p1');
const team3p2 = document.querySelector('#team3p2');
const team3p3 = document.querySelector('#team3p3');
const team4p1 = document.querySelector('#team4p1');
const team4p2 = document.querySelector('#team4p2');
const team4p3 = document.querySelector('#team4p3');

const roundname = document.querySelector('#roundname');
const roundsubname = document.querySelector('#roundsubname');

p1score_rep.on('change', (newValue, oldValue) => {
    p1score.value = newValue;
    t1score_rep.value = p1score.value
});
p2score_rep.on('change', (newValue, oldValue) => {
    p2score.value = newValue;
    t2score_rep.value = parseInt(p2score_rep.value) + parseInt(p3score_rep.value) + parseInt(p4score_rep.value);
});
p3score_rep.on('change', (newValue, oldValue) => {
    p3score.value = newValue;
    t2score_rep.value = parseInt(p2score_rep.value) + parseInt(p3score_rep.value) + parseInt(p4score_rep.value);
});
p4score_rep.on('change', (newValue, oldValue) => {
    p4score.value = newValue;
    t2score_rep.value = parseInt(p2score_rep.value) + parseInt(p3score_rep.value) + parseInt(p4score_rep.value);
});

team1name_rep.on('change', (newValue, oldValue) => {
    team1name.value = newValue;
});
team2name_rep.on('change', (newValue, oldValue) => {
    team2name.value = newValue;
});
team3name_rep.on('change', (newValue, oldValue) => {
    team3name.value = newValue;
});
team4name_rep.on('change', (newValue, oldValue) => {
    team4name.value = newValue;
});

team1p1_rep.on('change', (newValue, oldValue) => {	
	team1p1.value = newValue;
});	
team1p2_rep.on('change', (newValue, oldValue) => {	
	team1p2.value = newValue;
});	
team1p3_rep.on('change', (newValue, oldValue) => {	
	team1p3.value = newValue;
});	
team2p1_rep.on('change', (newValue, oldValue) => {	
	team2p1.value = newValue;
});	
team2p2_rep.on('change', (newValue, oldValue) => {	
	team2p2.value = newValue;
});	
team2p3_rep.on('change', (newValue, oldValue) => {	
	team2p3.value = newValue;
});	
team3p1_rep.on('change', (newValue, oldValue) => {	
	team3p1.value = newValue;
});	
team3p2_rep.on('change', (newValue, oldValue) => {	
	team3p2.value = newValue;
});	
team3p2_rep.on('change', (newValue, oldValue) => {	
	team3p2.value = newValue;
});	
team3p3_rep.on('change', (newValue, oldValue) => {	
	team3p3.value = newValue;
});	
team4p1_rep.on('change', (newValue, oldValue) => {	
	team4p1.value = newValue;
});	
team4p2_rep.on('change', (newValue, oldValue) => {	
	team4p2.value = newValue;
});	
team4p3_rep.on('change', (newValue, oldValue) => {	
	team4p3.value = newValue;
});	
roundname_rep.on('change', (newValue, oldValue) => {	
	roundname.value = newValue;
});	
roundsubname_rep.on('change', (newValue, oldValue) => {	
	roundsubname.value = newValue;
});	


updatebutton.onclick = () => {
    p1score_rep.value = p1score.value;
    p2score_rep.value = p2score.value;
    p3score_rep.value = p3score.value;
    p4score_rep.value = p4score.value;
    team1name_rep.value = team1name.value;
    team2name_rep.value = team2name.value;
    team3name_rep.value = team3name.value;
    team4name_rep.value = team4name.value;
    team1p1_rep.value = team1p1.value;
    team1p2_rep.value = team1p2.value;
    team1p3_rep.value = team1p3.value;
    team2p1_rep.value = team2p1.value;
    team2p2_rep.value = team2p2.value;
    team2p3_rep.value = team2p3.value;
    team3p1_rep.value = team3p1.value;
    team3p2_rep.value = team3p2.value;
    team3p3_rep.value = team3p3.value;
    team4p1_rep.value = team4p1.value;
    team4p2_rep.value = team4p2.value;
    team4p3_rep.value = team4p3.value;
    roundname_rep.value = roundname.value;
    roundsubname_rep.value = roundsubname.value;
};

p1plus.onclick = () => {
    p1score_rep.value = parseInt(p1score_rep.value) + 1;
};
p1minus.onclick = () => {
    p1score_rep.value = parseInt(p1score_rep.value) - 1;
};

p2plus.onclick = () => {
    p2score_rep.value = parseInt(p2score_rep.value) + 1;
};
p2minus.onclick = () => {
    p2score_rep.value = parseInt(p2score_rep.value) - 1;
};

p3plus.onclick = () => {
    p3score_rep.value = parseInt(p3score_rep.value) + 1;
};
p3minus.onclick = () => {
    p3score_rep.value = parseInt(p3score_rep.value) - 1;
};

p4plus.onclick = () => {
    p4score_rep.value = parseInt(p4score_rep.value) + 1;
};
p4minus.onclick = () => {
    p4score_rep.value = parseInt(p4score_rep.value) - 1;
};

