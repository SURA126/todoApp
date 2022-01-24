function showResult(xml){
    let text = "";
path = '//task/title';
let nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
let result = nodes.iterateNext();
while(result){
        text +=`<li>${result.childNodes[0].nodeValue}<p${result.childNodes[0].nextSibling.innerHTML} ></p></li>`;
        console.log(result.childNodes[0]);
        console.log(result.childNodes);
        result = nodes.iterateNext();
} 
document.getElementById("tasks").innerHTML=text;
}

let reqvest = new XMLHttpRequest();
/*reqvest.addEventListener("load", ()=> {
console.log (this.responseText);
}); */
reqvest.open("GET","todo.xml",true);
reqvest.send();

reqvest.onreadystatechange = function() {
    if(this.readyState===4 && this.status===200){
        showResult(this.responseXML);
}
}