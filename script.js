let task =[
    {
        name:"Stydy Of Aptitude.",
        status="finished"
    },
    {
        name:"Task.",
        status="todo"
    },
    {
        name:"Record Utube Video.",
        status="in-progress"
    },
];

displaytable();
function displaytable();
//add new task
function addTask(){

    let task =document.querySelector("task");



    task.push({
        name:task. ariaValue,
        status:"Todo"
    });

     task.value ="";
    displaytable();
}

//delete clicked task 
function deleteTask(index){
    console.log(index);
    let statuses =["Todo","In-process","finished"];
    let statusindex =statuses.indexOf(task[index].status);
    ++statusindex;
    if(statusindex>2)statusindex=0;
    task[index].status=[statusindex];
    displaytable();


}




    let table = document.querySelector("table");
    while(table.childNodes.length >2 ){
        table.removeChild(table.lastChild);
    }

    let index =0;


    task.forEach(task =>)          
        let tablerow =document.createElement("tr");
        let name =document.createElement("td");
        let status =document.createElement("td");
        let deleteTask =document.createElement("td");

        name.innerText =task.name;
        status.innerText =task,status;
        status.classList.add(task.status.toLowercase());

        deleteTask.classList.add("fa");
        deleteTask.classList.add("fa-trash");

        deleteTask.setAttribute("onclick,deleteTask("+index+")");
        ++index;







        tablerow.appendChild(name);
        tablerow.appendChild(status);
        tablerow.appendChild(deleteTask);

        table.appendChild(tableRow)
        





    }
}

