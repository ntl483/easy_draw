
    const maxOptions = 4;
    const colors = ['red', 'blue', 'green', 'yellow']
    var optionCount = 0;    
    var originalOptions = [];

function addOption(){
    var option = document.getElementById("input_option");
    const parent = document.getElementById("options");
    const node = document.createElement("p");
    if(option.value!=''){
        node.innerHTML = option.value;
        originalOptions[optionCount] = new String(option.value);
        optionCount++;
        parent.appendChild(node);
        option.value = "";    
    }
    if (optionCount>=maxOptions)
        document.getElementById("add").style.display = "none";
}

function generateOptions(){
    clearOptions();
    var options = [];
    var total = [];
    for (j=0;j<maxOptions;j++){
        total[j] = 0;
    }
    const parent = document.getElementById("colors");
    for(var i=0; i<optionCount; i++){
        do{
            var tmp = Math.floor(Math.random() * maxOptions);
            console.log(tmp);
        }while(total[tmp]!=0)
        total[tmp] = 1;
        options[i] = tmp;

        var node = document.createElement("button");
        node.innerHTML = colors[options[i]];
        node.id = i;
        parent.appendChild(node);
        node.addEventListener("click", choose);
    }
    shuffleOriginalOptions();
}

function shuffleOriginalOptions(){
    var tmpOptions = [];
    var spotsTaken = [];
    for(i=0; i<originalOptions.length; i++){
        spotsTaken[i] = 0;
        tmpOptions[i] = originalOptions[i];
    }
    for(i=0; i<tmpOptions.length; i++){
        do{
            var newSpot = Math.floor(Math.random() * tmpOptions.length);
        }while(spotsTaken[newSpot]!=0)
        spotsTaken[newSpot] = 1;
        originalOptions[newSpot] = tmpOptions[i];
        console.log(originalOptions);
        console.log("neswspot="+newSpot);
    }
}

function clearOptions(){
    const parent = document.getElementById("colors");
    while(parent.firstChild){
        parent.removeChild(parent.lastChild);
    }
}

function choose(event){
    const id = event.target.id;
    console.log(id);
    const parent = document.getElementById("answear");
    while(parent.firstChild){
        parent.removeChild(parent.lastChild);
    }
    var node = document.createElement("p")
    node.innerHTML = "you chose " + originalOptions[id];
    parent.appendChild(node);
}

function test(){
    var option = ["aaa", "bbbb", "cccccc", "dddd"]
    const parent = document.getElementById("options");
    for (i=0;i<4;i++){
        var node = document.createElement("p");
        node.innerHTML = option[i];
        originalOptions[optionCount] = option[i];
        optionCount++;
        parent.appendChild(node);
    }
        generateOptions();
}
