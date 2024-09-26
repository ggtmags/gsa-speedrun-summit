const team1p1_rep = nodecg.Replicant('team1p1', 'gsa-speedrun-summit');
const team1p2_rep = nodecg.Replicant('team1p2', 'gsa-speedrun-summit');
const team1p3_rep = nodecg.Replicant('team1p3', 'gsa-speedrun-summit');
const team2p1_rep = nodecg.Replicant('team2p1', 'gsa-speedrun-summit');
const team2p2_rep = nodecg.Replicant('team2p2', 'gsa-speedrun-summit');
const team2p3_rep = nodecg.Replicant('team2p3', 'gsa-speedrun-summit');
const team3p1_rep = nodecg.Replicant('team3p1', 'gsa-speedrun-summit');
const team3p2_rep = nodecg.Replicant('team3p2', 'gsa-speedrun-summit');
const team3p3_rep = nodecg.Replicant('team3p3', 'gsa-speedrun-summit');
const team4p1_rep = nodecg.Replicant('team4p1', 'gsa-speedrun-summit');
const team4p2_rep = nodecg.Replicant('team4p2', 'gsa-speedrun-summit');
const team4p3_rep = nodecg.Replicant('team4p3', 'gsa-speedrun-summit');

const team1name_rep = nodecg.Replicant('team1name', 'gsa-speedrun-summit');
const team2name_rep = nodecg.Replicant('team2name', 'gsa-speedrun-summit');
const team3name_rep = nodecg.Replicant('team3name', 'gsa-speedrun-summit');
const team4name_rep = nodecg.Replicant('team4name', 'gsa-speedrun-summit');

const p1score_rep = nodecg.Replicant('p1score', 'gsa-speedrun-summit');
const p2score_rep = nodecg.Replicant('p2score', 'gsa-speedrun-summit');
const p3score_rep = nodecg.Replicant('p3score', 'gsa-speedrun-summit');
const p4score_rep = nodecg.Replicant('p4score', 'gsa-speedrun-summit');


team1p1_rep.on('change', (newValue, oldValue) => {	
	team1p1.src = "img/joestacking/"+newValue+".png" ;
});	
team1p2_rep.on('change', (newValue, oldValue) => {	
	team1p2.src = "img/joestacking/"+newValue+".png" ;
});	
team1p3_rep.on('change', (newValue, oldValue) => {	
	team1p3.src = "img/joestacking/"+newValue+".png" ;
});	
team2p1_rep.on('change', (newValue, oldValue) => {	
	team2p1.src = "img/joestacking/"+newValue+".png" ;
});	
team2p2_rep.on('change', (newValue, oldValue) => {	
	team2p2.src = "img/joestacking/"+newValue+".png" ;
});	
team2p3_rep.on('change', (newValue, oldValue) => {	
	team2p3.src = "img/joestacking/"+newValue+".png" ;
});	
team3p1_rep.on('change', (newValue, oldValue) => {	
	team3p1.src = "img/joestacking/"+newValue+".png" ;
});	
team3p2_rep.on('change', (newValue, oldValue) => {	
	team3p2.src = "img/joestacking/"+newValue+".png" ;
});	
team3p3_rep.on('change', (newValue, oldValue) => {	
	team3p3.src = "img/joestacking/"+newValue+".png" ;
});	
team4p1_rep.on('change', (newValue, oldValue) => {	
	team4p1.src = "img/joestacking/"+newValue+".png" ;
});	
team4p2_rep.on('change', (newValue, oldValue) => {	
	team4p2.src = "img/joestacking/"+newValue+".png" ;
});	
team4p3_rep.on('change', (newValue, oldValue) => {	
	team4p3.src = "img/joestacking/"+newValue+".png" ;
});	

team1name_rep.on('change', (newValue, oldValue) => {
    team1name.innerText = newValue;
});
team2name_rep.on('change', (newValue, oldValue) => {
    team2name.innerText = newValue;
});
team3name_rep.on('change', (newValue, oldValue) => {
    team3name.innerText = newValue;
});
team4name_rep.on('change', (newValue, oldValue) => {
    team4name.innerText = newValue;
});

p1score_rep.on('change', (newValue, oldValue) => {
    p1score.innerText = newValue;
});
p2score_rep.on('change', (newValue, oldValue) => {
    p2score.innerText = newValue;
});
p3score_rep.on('change', (newValue, oldValue) => {
    p3score.innerText = newValue;
});
p4score_rep.on('change', (newValue, oldValue) => {
    p4score.innerText = newValue;
});