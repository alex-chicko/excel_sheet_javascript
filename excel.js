console.log("Running");

let unitCol = document.querySelector("#units");

console.log(unitCol);






// unitCol.style.backgroundColor= "red";

// unitCol.style.border="2px solid black"

// unitCol.textContent="595959"

// HTMLElement.addEventListener(EVENT:String,CALLBACK:Function);


unitCol.addEventListener("input",handleClick);

function handleClick(e){
   //G=E*D

   //E:
    let unitsProjected= e.target;

    //G:
    let G = unitsProjected.nextElementSibling.nextElementSibling;
    //D:
    let D = unitsProjected.previousElementSibling;

    let valE = unitsProjected.textContent;
    let valD = D.textContent;

    valE = parseFloat(valE);
    valD = parseInt(valD);

    console.log(typeof valE, typeof valD)

    console.log("G = ", valE*valD);
    
    G.textContent= valE*valD;

   
}











