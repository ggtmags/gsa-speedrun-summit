const t1score_rep = nodecg.Replicant('t1score', 'gsa-speedrun-summit');
const t2score_rep = nodecg.Replicant('t2score', 'gsa-speedrun-summit');
const p1score_rep = nodecg.Replicant('p1score', 'gsa-speedrun-summit');
const p2score_rep = nodecg.Replicant('p2score', 'gsa-speedrun-summit');
const p3score_rep = nodecg.Replicant('p3score', 'gsa-speedrun-summit');
const p4score_rep = nodecg.Replicant('p4score', 'gsa-speedrun-summit');


t1score_rep.on('change', (newValue, oldValue) => {
    t1score.innerText = newValue;
});
t2score_rep.on('change', (newValue, oldValue) => {
    t2score.innerText = newValue;
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