let reqvest = new XMLHttpRequest();
reqvest.addEventListener("load", ()=> {
console.log (his.responseText);
});
reqvest.open("GET","todo.xml",true);
reqvest.send(null);