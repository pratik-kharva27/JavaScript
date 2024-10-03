
document.write('pattern one ')
document.write('<br>');
one_pattern = () => {
    for (let i = 1; i <= 5; i++) {
        let line = '';
        for (let j = 5; j >= i; j--) {
            line += j + ' ';
        }
        document.write(line + " <br>");
    }
}
one_pattern();

document.write('pattern two ')
document.write('<br>');


second_pattern = () => {
    for (let i = 5; i >= 1; i--) {
        let line = '';
        for (let j = i; j >= 1; j--) {
            line += j + ' ';
        }
        document.write(line + ' <br>');
    }
}
second_pattern();

document.write('pattern three ')
document.write('<br>');

third_pattern = () => {
    for (let i = 1; i <= 5; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += i + ' ';
        }
        document.write(line + '<br>')
    }

}
third_pattern();

document.write('pattern four')
document.write('<br>');

four_pattern = () => {
    for (let i = 5; i >= 1; i--) {
        let line = '';
        for (let j = i; j <= 5; j++) {
            line += j + ' ';
        }
        document.write(line + '<br>')
    }
}
four_pattern();

document.write('pattern five')
document.write('<br>');

fifth_pattern = () => {
    for (let i = 1; i <= 5; i++) {
        let line = '';
        for (let j = i; j <= 5; j++) {
            line += j + ' ';
        }
        document.write(line + '<br>');
    }
}
fifth_pattern();

document.write('pattern six')
document.write('<br>');

six_pattern = () => {
    for (let i = 5; i >= 1; i--) {
        let line = '';
        for (let j = 5; j >= i; j--) {
            line += j + ' ';
        }
        document.write(line + '<br>');
    }
}
six_pattern();

document.write('pattern seven')
document.write('<br>');

seven_pattern = () => {
    for (let i = 1; i <= 5; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += j + ' ';
        }

        document.write(line + '<br>');
    }
}
seven_pattern();


document.write('pattern seven_solution')
document.write('<br>');

seven_solution_pattern = () =>{
    let line = '';
    for(let i = 1; i<= 5; i++){
        line += i + ' ';
        document.write(line +'<br>');
    // let str = '* ';
    // console.log(str.repeat(i));
    }
}
seven_solution_pattern();

document.write('pattern eight')
document.write('<br>');

eight_pattern = () => {
    for (let i = 1; i <= 5; i++) {
        let line = '';
        for (let j = i; j>=1; j--){
            line += j + ' ';
        }       
        document.write(line + '<br>');
    }
}
eight_pattern();

document.write('pattern nine')
document.write('<br>');

nine_pattern = () =>{
    for (let i =5; i>=1; i--){
        let line = '';
        for (let j = 1; j<=i; j++){
            line += j + ' ';
        }
        
        document.write(line+'<br>')
    }
}
nine_pattern();

document.write('pattern one star');
document.write('<br>');

star_one_pattern = () =>{
    for(let i = 1; i<= 5; i++){
    let str = '* ';
    // console.log(str.repeat(i));
    document.write(str.repeat(i)+'<br>')
    }
}
star_one_pattern();

