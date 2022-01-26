let json = require("todoApp.json");
console.log(json);
    
    const tasks = JSON.parse(json);
    console.log(tasks[1].text);
    for(const task of tasks){
        document.getElementById("tasks").innerHTML += `<li><span class='emoji'> &#${task.emoji}</span><h3>${task.title}</h3><time datetime=${task.date}>${task.date}</time><p>${task.text}</p></li>`
    }