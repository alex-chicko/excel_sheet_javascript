

let unitCol = document.querySelector("#units");

console.log(unitCol);






// unitCol.style.backgroundColor= "red";

// unitCol.style.border="2px solid black"

// unitCol.textContent="595959"

// HTMLElement.addEventListener(EVENT:String,CALLBACK:Function);


if(unitCol){unitCol.addEventListener("input",handleClick)} ;

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
    valD = parseFloat(valD);

    console.log(typeof valE, typeof valD)

    console.log("G = ", valE*valD);

    console.log(Number.isNaN(valE));
    if(Number.isNaN(valE)){
        G.textContent="";
    }else{
        G.textContent= valE*valD;
    }

    let data = JSON.parse(jsonText);
    console.log(data);
   

  


   
}

let tr =   `
<tr>
<td>1</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
`;

// 1) get tbody
const tbody = document.querySelector("#excel-table tbody")

// 2) append element to tbody
tbody.innerHTML +=tr;










