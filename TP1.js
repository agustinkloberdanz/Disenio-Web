let palabra = "Hello World"

function PrintHellowWorld(){
    document.getElementById("myP").innerText = palabra
}

function PrintHellowWorld2(){
    document.getElementsByClassName("test")[0].innerHTML = palabra
}

function InsertDifferentRow(){
    var tabla = document.getElementsByTagName("tbody")[0].insertRow()
    var col1 = tabla.insertCell(0)
    var col2 = tabla.insertCell(1)

    col1.innerText = "Boca"
    col2.innerText = "Juniors"
}

function InsertRow(){
    var tabla = document.getElementsByTagName("tbody")[0].insertRow()
    var col1 = tabla.insertCell(0)
    var col2 = tabla.insertCell(1)
    
    col1.innerText = "River"
    col2.innerText = "Plate"
}

function DeleteRow(){
    var tabla = document.getElementsByTagName("tbody")[0].deleteRow(-1)
}