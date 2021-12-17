function $(id){
    return typeof id === 'string'?document.getElementById(id):null;
}

//1.获取所有的复选框
var inputs = document.getElementsByTagName('input');


//2.全选
$('allSelect').onclick = function(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].checked = true;
    }
}

//3.取消选中
$('cancelSelect').onclick = function(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].checked = false;
    }
}

//4.反选
$('reverseSelect').onclick = function(){
    for(var i=0;i<inputs.length;i++){
        // if(inputs[i].checked){
        //     inputs[i].checked = false;
        // }else{
        //     inputs[i].checked = true;
        // }
        inputs[i].checked = !inputs[i].checked;
    }
}