const taskInput = document.getElementById("task-input");
const addbtn = document.getElementById("add-btn");
const listitems1 = document.getElementById("task-list");

addbtn.addEventListener('click', () =>{
    if(taskInput.value !== ""){
        const tasttext = taskInput.value;
        const listitems2 = document.createElement("li");
        listitems2.innerHTML = `
                                ${tasttext}
                                <button class="delete-btn">Delete</button>`;
        listitems1.appendChild(listitems2);
        taskInput.value = "";
    }
});

listitems1.addEventListener('click', (event) =>{
    if(event.target.classList.contains("delete-btn")){
        const listitems2 = event.target.parentElement;
        listitems1.removeChild(listitems2);
    }
})