const current_img_rep = nodecg.Replicant('current_game', 'gsa-speedrun-summit');
const next_img_rep = nodecg.Replicant('next_game', 'gsa-speedrun-summit');


current_img_rep.on('change', (newValue, oldValue) => {
    current_img.src = "img/thumbs/"+newValue+".png" ;

    console.log(current_img_rep.value);
});
next_img_rep.on('change', (newValue, oldValue) => {
    next_img.src = "img/thumbs/"+newValue+".png" ;
    console.log(next_img_rep.value);
});