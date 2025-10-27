fruits=["apple","banana","mango","orange"]

for(i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>")
}
document.write(fruits.join("***  "));
document.write("<br>");
document.write(" After using pop():" ,fruits.pop());