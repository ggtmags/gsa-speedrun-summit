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


updatebutton.onclick = () => {
    p1score_rep.value = p1score.value;
    p2score_rep.value = p2score.value;
    p3score_rep.value = p3score.value;
    p4score_rep.value = p4score.value;
    team1name_rep.value = team1name.value;
    team2name_rep.value = team2name.value;
    team3name_rep.value = team3name.value;
    team4name_rep.value = team4name.value;
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
    p1score_rep.value = parseInt(p4score_rep.value) + 1;
};
p4minus.onclick = () => {
    p4score_rep.value = parseInt(p4score_rep.value) - 1;
};

