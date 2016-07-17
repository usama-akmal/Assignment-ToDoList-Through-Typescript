var inputid : number = 0;
function AddItem() {
    var data = (<HTMLInputElement>document.getElementById("item")).value;
    (<HTMLInputElement>document.getElementById("item")).value = null;
    document.getElementById("listrow").style.display = "block";
    var input = document.createTextNode(data);
    console.log(input);
    // var newItem = document.createElement("span");
    // newItem.appendChild(input);
    // var maindiv = document.createElement("div");
    // maindiv.appendChild(newItem);
    // maindiv.className = "card-panel white teal-text";
    // maindiv.id = ""+ inputid;
    // inputid++; 
    // document.getElementById("todolist").appendChild(maindiv);
    var deleteicon = document.createElement("i");
    var deletenodetext = document.createTextNode("delete");
    deleteicon.appendChild(deletenodetext);
    deleteicon.className = "material-icons";
    var deletebutton = document.createElement("a");
    deletebutton.appendChild(deleteicon);
    //deletebutton.onclick = function(){ DeleteItem(""+inputid); };
    deletebutton.setAttribute("onclick","DeleteItem("+inputid+")");
    deletebutton.className = "btn-floating btn-large waves-effect waves-light red";
    deletebutton.id = "del"+input;
    var buttondiv = document.createElement("div");
    buttondiv.className = "col s2 m2 l2";
    buttondiv.appendChild(deletebutton);
    var newitem = document.createElement("p");
    newitem.appendChild(input);
    var datadiv = document.createElement("div");
    datadiv.appendChild(newitem);
    datadiv.className = "col s10 m10 l10 left";
     var fulldatadiv = document.createElement("div");
    fulldatadiv.className = "row";
    fulldatadiv.appendChild(datadiv);
    fulldatadiv.appendChild(buttondiv);
    var maindiv = document.createElement("div");
    maindiv.className = "card-panel white teal-text nopadd";
    maindiv.id = "" + inputid;
    //maindiv.appendChild(datadiv);
    //maindiv.appendChild(buttondiv);
    maindiv.appendChild(fulldatadiv);
    document.getElementById("todolist").appendChild(maindiv);
    inputid++;
}

function DeleteItem(arg:string) {
    var parent = document.getElementById("todolist");
    var child = document.getElementById(arg);
    parent.removeChild(child); 
}