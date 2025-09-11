var speedcontrolBundle = 'nodecg-speedcontrol';

const current_img_rep = nodecg.Replicant('current_game', 'gsa-speedrun-summit');
const next_img_rep = nodecg.Replicant('next_game', 'gsa-speedrun-summit');
const toptitle_rep = nodecg.Replicant('toptitle', 'gsa-speedrun-summit');

current_img_rep.on('change', (newValue, oldValue) => {
        current_img.src = "img/thumbs/"+newValue+".png" ;
        //timer_bg.src = "img/timerbg/"+newValue+".png" ;
        timer_bg.src = "img/timerbg/timerbg.png" ;
        console.log(current_img_rep.value);
});
next_img_rep.on('change', (newValue, oldValue) => {
        next_img.src = "img/thumbs/"+newValue+".png" ;
        console.log(next_img_rep.value);
});
toptitle_rep.on('change', (newValue, oldValue) => {
        toptitle.innerText = newValue;
});

var runDataActiveRun = nodecg.Replicant('runDataActiveRun', speedcontrolBundle);
runDataActiveRun.on('change', (newVal, oldVal) => {
        // replacing the above with a loop leaves less chance for errors later if necessary
        // not sure if map is possible in regular javascript
        // what is happening with the nameboxes variable is explain in timer block.
        const nameBoxes = document.getElementsByClassName("name_text_compensator");
        for (let i = 0; i < nameBoxes.length; i++) {
                let fontSize = "";
                let nameLen = runDataActiveRun.value.teams[i].players[0].name.length;
                if (nameLen > 14) 
                        fontSize = "18px";
                else if (nameLen >= 12) 
                        fontSize = "24px";
                else if (nameLen >= 10) 
                        fontSize = "24px";
                else 
                        fontSize = "24px";
                nameBoxes.item(i).style.fontSize = fontSize;
                
                nameBoxes.item(i).innerText = (runDataActiveRun.value.teams[i].players[0].name);
        }

        gamecat.innerText = (runDataActiveRun.value.category);
        gameest.innerText = (runDataActiveRun.value.estimate);
        gamename.innerText = (runDataActiveRun.value.game);
        gameplat.innerText = (runDataActiveRun.value.system);
});

var timer = nodecg.Replicant('timer', speedcontrolBundle);
timer.on('change', (newVal, oldVal) => {
        timedisplay.innerText = (timer.value.time);

        /* Dynamically turn on the timeboxes.
        By grabbing all of the elements that belong to a class we can reliably scale with the number of players.
        Then loop through the element collection we can track needed attributes. */
        const timeBoxes = document.getElementsByClassName("player_time_box");
        for (let i = 0; i < timeBoxes.length; i++) {
                        /*  */
                let playerDone = timer.value.teamFinishTimes[runDataActiveRun.value.teams[i].id]?.state == 'completed';
                /* Using an if statement we can check whether players have been marked as completed via the dashboard
                buying a tiny bit of time and readable code storing whether done.
                This is done using null coalescing operator (?.) to compare against the known string literal without causing
                an error. This is because coalescing returns null/undefined if the value does not exist, which cause false
                when used in the comparison.*/
                if (playerDone) {
                        timeBoxes.item(i).children.item(0).innerText = (timer.value.teamFinishTimes[runDataActiveRun.value.teams[i].id].time);
                }
                /* Lastly, using a terinary if statement to show or hide boxes give good readability. */
                timeBoxes.item(i).style.visibility = playerDone ? "visible" : "hidden";
        }
});

//Trevor's things to actually do like in 2 hours:

// image update for current-img (need dashboard)
// image update for next-img (need to make dashboard)



//Things TO DO

// something to check runDataActiveRun.value.category character length
// then if over X and needs to be 2 lines then apply y style class