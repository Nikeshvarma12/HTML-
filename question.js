function selectOnlyThis(id) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function verify(){
    let count=0;
    let arr=[1,4,3,4,4]
var que=document.getElementsByTagName("div")[1].id;
if(que==11){
    let count=0;
localStorage.setItem("score",count);
}
for(let i=11;i<=16;i++)
{
    if(i==que)
    var answer=document.getElementById(arr[i-11]).checked;
}

output.innerHTML=`Your Answer is ${answer}`;
document.getElementById("next").style.display="flex";
document.getElementById("sub1").style.display="none";
if(answer){
    let count=localStorage.getItem("score");
    localStorage.setItem("score",parseInt(count)+1);
}
};
