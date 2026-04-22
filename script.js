function change(){
    document.body.style.backgroundColor="black";
}
function setcolor(){
    let a=document.getElementById("color").value;
    let c=["red","green","blue","orange","yellow","pink","white","violet","purple","brown"];
    if (c.includes(a)){
        document.body.style.backgroundColor=a;
    }
    else{

    alert("Invalid Colour Option Choosed");


}
}