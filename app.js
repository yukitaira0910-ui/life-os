let tasks=[]
let goals=[]
let habits=[]

function showPage(p){
document.getElementById("tasks").style.display="none"
document.getElementById("goals").style.display="none"
document.getElementById(p).style.display="block"
}

function addTask(){
let v=taskInput.value
tasks.push({text:v,done:false})
renderTasks()
}

function renderTasks(){
taskList.innerHTML=tasks.map((t,i)=>
`<div class="card">
<input type="checkbox" onclick="toggleTask(${i})">
${t.text}
</div>`
).join("")
}

function toggleTask(i){
tasks[i].done=!tasks[i].done
renderTasks()
}

function addGoal(){
let v=goalInput.value
goals.push({text:v,progress:0})
renderGoals()
}

function renderGoals(){
goalList.innerHTML=goals.map((g,i)=>
`<div class="card">
${g.text}
<br>
<input type="range" value="${g.progress}"
oninput="updateGoal(${i},this.value)">
${g.progress}%
</div>`
).join("")
}

function updateGoal(i,v){
goals[i].progress=v
renderGoals()
}

function addHabit(){
let v=habitInput.value
habits.push({text:v,done:false})
renderHabits()
}

function renderHabits(){
habitList.innerHTML=habits.map((h,i)=>
`<div class="card">
<input type="checkbox" onclick="toggleHabit(${i})">
${h.text}
</div>`
).join("")
}

function toggleHabit(i){
habits[i].done=!habits[i].done
renderHabits()
}
