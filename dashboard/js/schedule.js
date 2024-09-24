const current_game_rep = nodecg.Replicant('current_game');
const next_game_rep = nodecg.Replicant('next_game');
const toptitle_rep = nodecg.Replicant('toptitle');

current_game_rep.on('change', (newValue, oldValue) => {
    current_game.value = newValue;
});
next_game_rep.on('change', (newValue, oldValue) => {
    next_game.value = newValue;
});
toptitle_rep.on('change', (newValue, oldValue) => {
    toptitle.value = newValue;
});

updatebutton.onclick = () => {
    current_game_rep.value = current_game.value;
    next_game_rep.value = next_game.value;
    toptitle_rep.value = toptitle.value;
    console.log(current_game_rep.value);
}