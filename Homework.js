var student = {
    name: 'Nirvhaan' , 
    age: '10',
    Grade: '04',
    Hobbies: 'Playing Cricket',
    fav_sport: 'Cricket'
};
var color = ["white", "black", "red", "green", "blue"];
document.write("Student name is : " + student.name, "<br>", "Student favourite sport is : " +student.fav_sport);
document.write("Before Poping the colors are: " + color.join("^"));
document.write("My favourite color is : " +color[3]);
color.pop();
document.write("After Poping the colors are : " + color.join("*"));