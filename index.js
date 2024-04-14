const show=document.getElementById("display");
function append(input){
    show.value+=input;
}
function allclear(){
    show.value="";
}
function del(){
    show.value=show.value.slice(0,-1);
}
function generate(){
    try{
        show.value=eval(show.value);
    }
    catch(error){
        show.value="ERROR";
    }
}