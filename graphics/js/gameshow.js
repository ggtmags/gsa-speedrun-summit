const team1name_rep = nodecg.Replicant('team1name', 'gsa-speedrun-summit');
const team4name_rep = nodecg.Replicant('team4name', 'gsa-speedrun-summit');

const p1score_rep = nodecg.Replicant('p1score', 'gsa-speedrun-summit');
const p2score_rep = nodecg.Replicant('p2score', 'gsa-speedrun-summit');
const p3score_rep = nodecg.Replicant('p3score', 'gsa-speedrun-summit');
const p4score_rep = nodecg.Replicant('p4score', 'gsa-speedrun-summit');

const roundname_rep = nodecg.Replicant('roundname', 'gsa-speedrun-summit');
const roundsubname_rep = nodecg.Replicant('roundsubname', 'gsa-speedrun-summit');

team1name_rep.on('change', (newValue, oldValue) => {
    team1name.innerText = newValue;
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

roundname_rep.on('change', (newValue, oldValue) => {
    roundname.innerText = newValue;
});
roundsubname_rep.on('change', (newValue, oldValue) => {
    roundsubname.innerText = newValue;
});