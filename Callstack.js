function add(a,b)
{
    return a+b;
}

function avg(a,b)
{
    return add(a,b)/2;
}
let result=avg(10,20);
document.getElementById("demo").innerHTML=result;