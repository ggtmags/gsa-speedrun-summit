const p1_name_rep = nodecg.Replicant('p1_name');
const p1_record_rep = nodecg.Replicant('p1_record');
const p1_deck_rep = nodecg.Replicant('p1_deck');
const p1_life_rep = nodecg.Replicant('p1_life');
const p1_wins_rep = nodecg.Replicant('p1_wins');
const p1_infect_rep = nodecg.Replicant('p1_infect');
const round_rep = nodecg.Replicant('round');
const p2_name_rep = nodecg.Replicant('p2_name');
const p2_record_rep = nodecg.Replicant('p2_record');
const p2_deck_rep = nodecg.Replicant('p2_deck');
const p2_life_rep = nodecg.Replicant('p2_life');
const p2_wins_rep = nodecg.Replicant('p2_wins');
const p2_infect_rep = nodecg.Replicant('p2_infect');


const p1_name = document.querySelector('#p1_name');
const p1_record = document.querySelector('#p1_record');
const p1_deck = document.querySelector('#p1_deck');
const p1_life = document.querySelector('#p1_life');
const p1_wins = document.querySelector('#p1_wins');
const p1_infect = document.querySelector('#p1_infect');
const round = document.querySelector('#round');
const p2_name = document.querySelector('#p2_name');
const p2_record = document.querySelector('#p2_record');
const p2_deck = document.querySelector('#p2_deck');
const p2_life = document.querySelector('#p2_life');
const p2_wins = document.querySelector('#p2_wins');
const p2_infect = document.querySelector('#p2_infect');


p1_name_rep.on('change', (newValue, oldValue) => {	
	p1_name.value = newValue;
});	
p1_record_rep.on('change', (newValue, oldValue) => {	
	p1_record.value = newValue;
});	
p1_deck_rep.on('change', (newValue, oldValue) => {	
	p1_deck.value = newValue;
});	
p1_life_rep.on('change', (newValue, oldValue) => {	
	p1_life.value = newValue;
});	
p1_wins_rep.on('change', (newValue, oldValue) => {	
	p1_wins.value = newValue;
});	
p1_infect_rep.on('change', (newValue, oldValue) => {	
	p1_infect.value = newValue;
});	
round_rep.on('change', (newValue, oldValue) => {	
	round.value = newValue;
});	
p2_name_rep.on('change', (newValue, oldValue) => {	
	p2_name.value = newValue;
});	
p2_name_rep.on('change', (newValue, oldValue) => {	
	p2_name.value = newValue;
});	
p2_record_rep.on('change', (newValue, oldValue) => {	
	p2_record.value = newValue;
});	
p2_deck_rep.on('change', (newValue, oldValue) => {	
	p2_deck.value = newValue;
});	
p2_life_rep.on('change', (newValue, oldValue) => {	
	p2_life.value = newValue;
});	
p2_wins_rep.on('change', (newValue, oldValue) => {	
	p2_wins.value = newValue;
});	
p2_infect_rep.on('change', (newValue, oldValue) => {	
	p2_infect.value = newValue;
});	

updategame.onclick = () => {
    p1_name_rep.value = p1_name.value;
    p1_record_rep.value = p1_record.value;
    p1_deck_rep.value = p1_deck.value;
    p1_life_rep.value = p1_life.value;
    p1_wins_rep.value = p1_wins.value;
    p1_infect_rep.value = p1_infect.value;
    round_rep.value = round.value;
    p2_name_rep.value = p2_name.value;
    p2_record_rep.value = p2_record.value;
    p2_deck_rep.value = p2_deck.value;
    p2_life_rep.value = p2_life.value;
    p2_wins_rep.value = p2_wins.value;
    p2_infect_rep.value = p2_infect.value;
}

swapgame.onclick = () => {
    p1_name_rep.value = p2_name_rep.value;
    p1_record_rep.value = p2_record_rep.value;
    p1_deck_rep.value = p2_deck_rep.value;
    p1_life_rep.value = p2_life_rep.value;
    p1_wins_rep.value = p2_wins_rep.value;
    p1_infect_rep.value = p2_infect_rep.value;
    p2_name_rep.value = p1_name_rep.value;
    p2_record_rep.value = p1_record_rep.value;
    p2_deck_rep.value = p1_deck_rep.value;
    p2_life_rep.value = p1_life_rep.value;
    p2_wins_rep.value = p1_wins_rep.value;
    p2_infect_rep.value = p1_infect_rep.value;
}

resetgame.onclick = () => {
    p1_life_rep.value = 8000;
    p2_life_rep.value = 8000;
    p1_infect_rep.value = 0;
    p2_infect_rep.value = 0;
}

p1minus1.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) - 1000;
}
p1minus2.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) - 100;
}
p1minus3.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) - 50;
}
p1plus1.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) + 50;
}
p1plus2.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) + 100;
}
p1plus3.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) + 1000;
}

p2minus1.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) - 1000;
}
p2minus2.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) - 100;
}
p2minus3.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) - 50;
}
p2plus1.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) + 50;
}
p2plus2.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) + 100;
}
p2plus3.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) + 1000;
}

p1winminus.onclick = () => {
    p1_wins_rep.value = parseInt(p1_wins_rep.value) - 1;
}
p1winplus.onclick = () => {
    p1_wins_rep.value = parseInt(p1_wins_rep.value) + 1;
}

p2winminus.onclick = () => {
    p2_wins_rep.value = parseInt(p2_wins_rep.value) - 1;
}
p2winplus.onclick = () => {
    p2_wins_rep.value = parseInt(p2_wins_rep.value) + 1;
}