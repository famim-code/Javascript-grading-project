//JavaScript program to implement a result grading system based on marks.
const marks = +prompt ("Kire mama tor na result dilo ajke. Exam e koto paisos");
window.location.reload()

if(marks >=0 && marks <=32){
    confirm("Tui to exam e fail korsos ehon party de")
}else if(marks >=33 && marks <=39){
    confirm("Tor Grade D. Kintu Pass to korsos")
}else if(marks >=40 && marks <=49){
    confirm("Tor Grade E. Pera nai Chill")
}else if(marks >=50 && marks <=59){
    confirm("Tor Grade B. Result kono matter nah")
}else if(marks >=60 && marks <=69){
    confirm("Tor Grade A-. Ar ektu valo korle to kop diya diti")
}else if(marks >=70 && marks <=79){
    confirm("Tor Grade A. Misti khawa")
}else if(marks >=80 && marks <=90){
    confirm("Tor Grade A+. Sultans Dine e niye kacchi khawa")
}else if(marks >=91 && marks <=100){
    confirm("Tui to Genius. Ehon Buffet e niye treat de")
}else if(marks >=100 && marks <=99999999999999999999999999999){
    confirm("Bokachuda tui exam e koto paisos oita bol")
}else if(isNaN(marks)){
    alert("Exam e koto paisos oita bol")
    window.location.reload()
}