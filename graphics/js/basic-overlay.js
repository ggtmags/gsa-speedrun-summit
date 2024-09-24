const p1_name_rep = nodecg.Replicant('p1_name', 'ggob-tcg-base');
const p1_record_rep = nodecg.Replicant('p1_record', 'ggob-tcg-base');
const p1_deck_rep = nodecg.Replicant('p1_deck', 'ggob-tcg-base');
const p1_life_rep = nodecg.Replicant('p1_life', 'ggob-tcg-base');
const p1_wins_rep = nodecg.Replicant('p1_wins', 'ggob-tcg-base');
const p1_infect_rep = nodecg.Replicant('p1_infect', 'ggob-tcg-base');
const round_rep = nodecg.Replicant('round', 'ggob-tcg-base');
const p2_name_rep = nodecg.Replicant('p2_name', 'ggob-tcg-base');
const p2_record_rep = nodecg.Replicant('p2_record', 'ggob-tcg-base');
const p2_deck_rep = nodecg.Replicant('p2_deck', 'ggob-tcg-base');
const p2_life_rep = nodecg.Replicant('p2_life', 'ggob-tcg-base');
const p2_wins_rep = nodecg.Replicant('p2_wins', 'ggob-tcg-base');
const p2_infect_rep = nodecg.Replicant('p2_infect', 'ggob-tcg-base');

p1_name_rep.on('change', (newValue, oldValue) => {	
	p1_name.innerText = `${newValue}` ;
});	
p1_record_rep.on('change', (newValue, oldValue) => {	
	p1_record.innerText = `${newValue}` ;
});	
p1_deck_rep.on('change', (newValue, oldValue) => {	
	p1_deck.innerText = `${newValue}` ;
});	
p1_life_rep.on('change', (newValue, oldValue) => {	
	p1_life.innerText = `${newValue}` ;
});	
p1_wins_rep.on('change', (newValue, oldValue) => {	
	if (p1_wins_rep.value == 0){
        document.getElementById("p1_game1").classList.remove("game1win");
        document.getElementById("p1_game2").classList.remove("game2win");
    } else if (p1_wins_rep.value == 1 ){
        document.getElementById("p1_game1").classList.add("game1win");
        document.getElementById("p1_game2").classList.remove("game2win");
    } else if (p1_wins_rep.value == 2) {
        document.getElementById("p1_game1").classList.add("game1win");
        document.getElementById("p1_game2").classList.add("game2win");
    } else {
        document.getElementById("p1_game1").classList.add("game1win");
        document.getElementById("p1_game2").classList.add("game2win");
    }
});	
p1_infect_rep.on('change', (newValue, oldValue) => {	
	p1_infect.innerText = `${newValue}` ;
});	
round_rep.on('change', (newValue, oldValue) => {	
	round.innerText = `${newValue}` ;
});	
p2_name_rep.on('change', (newValue, oldValue) => {	
	p2_name.innerText = `${newValue}` ;
});	
p2_record_rep.on('change', (newValue, oldValue) => {	
	p2_record.innerText = `${newValue}` ;
});	
p2_deck_rep.on('change', (newValue, oldValue) => {	
	p2_deck.innerText = `${newValue}` ;
});	
p2_life_rep.on('change', (newValue, oldValue) => {	
	p2_life.innerText = `${newValue}` ;
});	
p2_wins_rep.on('change', (newValue, oldValue) => {	
	if (p2_wins_rep.value == 0){
        document.getElementById("p2_game1").classList.remove("game1win");
        document.getElementById("p2_game2").classList.remove("game2win");
    } else if (p2_wins_rep.value == 1 ){
        document.getElementById("p2_game1").classList.add("game1win");
        document.getElementById("p2_game2").classList.remove("game2win");
    } else if (p2_wins_rep.value == 2) {
        document.getElementById("p2_game1").classList.add("game1win");
        document.getElementById("p2_game2").classList.add("game2win");
    } else {
        document.getElementById("p2_game1").classList.add("game1win");
        document.getElementById("p2_game2").classList.add("game2win");
    }
});	
p2_infect_rep.on('change', (newValue, oldValue) => {	
	p2_infect.innerText = `${newValue}` ;
});	



//timer logic
var clockvalue = 60;
var delayInMilliseconds = 1000;
var clockRunning = 1;
var updateStatus = "1";

const com_timer_min_rep = nodecg.Replicant('com_timer_min', 'ggob-tcg-base');
const com_timer_sec_rep = nodecg.Replicant('com_timer_sec', 'ggob-tcg-base');
const com_timer_status_rep = nodecg.Replicant('com_timer_status', 'ggob-tcg-base');



//do shit when it updates
/*lpsp1_s1Rep.on('change', (newValue, oldValue) => {
    leftsponsor1.innerText = `${newValue}\xa0` ;
    updateStatus = "1";
});*/

com_timer_sec_rep.on('change', (newValue, oldValue) => {
    if(com_timer_sec_rep.value < 10){
        timerseconds.innerText = `0${newValue}` ;
    }else{
        timerseconds.innerText = `${newValue}` ;
    }
    if(com_timer_sec_rep.value > 0){
        /*document.getElementById("rightblockanimation").classList.remove("right-block-cover-in");*/
        /*document.getElementById("rightblocksoon").classList.remove("fade-1-d2");*/
        /*there is at least 1 second on the clock*/
    }
    
    //console.log(com_timer_sec_rep.value);
});
com_timer_min_rep.on('change', (newValue, oldValue) => {
    timerminutes.innerText = `${newValue}:` ;
    //console.log(com_timer_sec_rep.value);
    if(com_timer_min_rep.value > 0){
        /*document.getElementById("rightblockanimation").classList.remove("right-block-cover-in");*/
        /*timer is set with a value of at least 1 minute*/
    }
});

com_timer_status_rep.on('change', (newValue, oldValue) => {
    if (com_timer_status_rep.value == "run"){
        updateStatus = "1";
        console.log(com_timer_status_rep.value);
        count();
        /*maybe put the show logic here
        document.getElementById("timerdiv").classList.remove("hide");
        document.getElementById("daydiv").classList.add("hide"); */
    } else {
        updateStatus = "2";
        console.log(com_timer_status_rep.value);
        /*maybe put the hide logic here
        document.getElementById("timerdiv").classList.add("hide");
        document.getElementById("daydiv").classList.remove("hide"); */
    }
});

//counter shit
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function count() {
    while(updateStatus == "1"){
        if(com_timer_sec_rep.value > 0){
            com_timer_sec_rep.value = com_timer_sec_rep.value - 1;
            console.log("math phase");
            /*timer is running, show the timer code logic here */
            console.log(com_timer_sec_rep.value);
            await sleep(1000);
            console.log("sleep 1000");
           
            if(com_timer_sec_rep.value < 10){
                console.log("under 10 seconds if");
                console.log(com_timer_sec_rep.value);
            }
            else{
                console.log("over 10 seconds else");
                console.log(com_timer_sec_rep.value);
            }
        }else{
            if(com_timer_min_rep.value > 0){
                console.log("minutes loop");
                com_timer_min_rep.value = com_timer_min_rep.value - 1;
                com_timer_sec_rep.value = 59;
                console.log("sleep 1000");
                await sleep(1000);
                console.log(com_timer_sec_rep.value);

            }else{
                /*document.getElementById("rightblockanimation").classList.remove("right-block-cover-in");*/
                console.log("time's up");
                updateStatus = "2";
                com_timer_status_rep.value = "stop";
                await sleep(1000);
                console.log(com_timer_sec_rep.value);
                /*document.getElementById("rightblockanimation").classList.add("right-block-cover-in");*/
                /*timer is over, go back to time of day */
                
                
            }
        }
        
    }
}