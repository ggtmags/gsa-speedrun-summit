const c1_name_rep = nodecg.Replicant('c1_name', 'gsa-speedrun-summit');
const c2_name_rep = nodecg.Replicant('c2_name', 'gsa-speedrun-summit');
const c3_name_rep = nodecg.Replicant('c3_name', 'gsa-speedrun-summit');
const c4_name_rep = nodecg.Replicant('c4_name', 'gsa-speedrun-summit');

c1_name_rep.on('change', (newValue, oldValue) => {	
	c1_name.innerText = `${newValue}` ;
    if (c1_name_rep.value == ""){
        document.getElementById("c1_box").classList.remove("visible");
        document.getElementById("c1_box").classList.add("hidden");
    } else {
        document.getElementById("c1_box").classList.add("visible");
        document.getElementById("c1_box").classList.remove("hidden");
    }
});	
c2_name_rep.on('change', (newValue, oldValue) => {	
	c2_name.innerText = `${newValue}` ;
    if (c2_name_rep.value == ""){
        document.getElementById("c2_box").classList.remove("visible");
        document.getElementById("c2_box").classList.add("hidden");
    } else {
        document.getElementById("c2_box").classList.add("visible");
        document.getElementById("c2_box").classList.remove("hidden");
    }
});	
c3_name_rep.on('change', (newValue, oldValue) => {	
	c3_name.innerText = `${newValue}` ;
    if (c3_name_rep.value == ""){
        document.getElementById("c3_box").classList.remove("visible");
        document.getElementById("c3_box").classList.add("hidden");
    } else {
        document.getElementById("c3_box").classList.add("visible");
        document.getElementById("c3_box").classList.remove("hidden");
    }
});	
c4_name_rep.on('change', (newValue, oldValue) => {	
	c4_name.innerText = `${newValue}` ;
    if (c4_name_rep.value == ""){
        document.getElementById("c4_box").classList.remove("visible");
        document.getElementById("c4_box").classList.add("hidden");
    } else {
        document.getElementById("c4_box").classList.add("visible");
        document.getElementById("c4_box").classList.remove("hidden");
    }
});	