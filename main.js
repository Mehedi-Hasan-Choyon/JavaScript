
/*----- Age in Days -----*/

function ageInDays(){
    var birhtYear = prompt("what year you born?");
    var leapYear = parseInt((2021 - birhtYear) / 4);
    var ageInDays = ((2021 - birhtYear) * 365) + leapYear;
    console.log(ageInDays);

    var h1 = document.createElement('h1');
    var Answer = document.createTextNode('You are ' + ageInDays + " days old");
    h1.setAttribute('id', 'display');
    h1.setAttribute('class', 'display-4');
    h1.appendChild(Answer);
    document.getElementById('result').appendChild(h1);
}

function reset(){
    document.getElementById('display').remove();
}

/*----- Calculator -----*/

function cal(){
    var value1 = parseInt(document.getElementById('num1').value);
    var value2 = parseInt(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var finalResult

    switch(operator){
        case '+':
            finalResult = value1 + value2;
            break;
            
        case '-':
            finalResult = value1 - value2;
            break;
        
        case '*':
            finalResult = value1 * value2;
            break;

        case '/': 
            finalResult = value1 / value2;
            break;

        default:
            alert('input a operand');
            break;
    }    

    var h1 = document.createElement('h1');
    var showdata = document.createTextNode(finalResult);
    h1.setAttribute('class', 'display-4');
    h1.setAttribute('id', 'display');
    h1.appendChild(showdata);
    document.getElementById('result').appendChild(h1);

}

function remove(){
    document.getElementById('display').remove();
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').value = '';
}

// oop
// Map, filter, call, arrow, foreach, api;

function catGenerate(){
    var image = document.createElement('img');
    var div = document.getElementById('imgCat');
    image.setAttribute('class', 'mb-4');
    image.src = "images/vr.jpg";
    div.appendChild(image);
}


/*----- Rock Paper Scissor -----*/


function rps(image){
    UserChoice = image.id;
    var temp = parseInt(Math.random() * 100);
    var ComChoice = ComputerValueGenerate(temp);
    console.log('User Choice is ' + UserChoice + '\t' + 'Com Choice is ' + ComChoice);
    var result = Desicion(UserChoice, ComChoice);
    var color = getcolor(result);
    console.log(color);
    console.log(result);
    rpsFrontEnd(UserChoice, ComChoice, color);
}

function ComputerValueGenerate( temp ){

    var Com

    if(temp >= 0 && temp < 33){
        Com = 'Rock';
    }

    else if(temp >= 33 && temp < 66){
        Com = 'Paper';
    }

    else
        Com = 'Scissor';

        return Com;
}

function Desicion(UserChoice, ComChoice){
    var desDatabase = {
        'Rock': {'Scissor' : 'Win', 'Paper' : 'Lost', 'Rock' : 'Draw'},
        'Paper': {'Scissor' : 'Lost', 'Rock' : 'Win', 'Paper' : 'Draw'},
        'Scissor': {'Rock' : 'Lost', 'Paper' : 'Win', 'Scissor' : 'Draw'}
    };

    var UserScore = desDatabase[UserChoice][ComChoice];
    var ComScore = desDatabase[ComChoice][UserChoice];

    return [UserScore, ComScore];

}

function getcolor(result){
    if(result[0] === 'Win')
        return 'green';

    else if(result[1] === 'Win')
        return 'red';

    else
        return 'yellow';
}

function rpsFrontEnd(UserimageChoice, ComImageChoice, color){
    var imgDatabase = {
        'Rock': document.getElementById('Rock').src,
        'Paper': document.getElementById('Paper').src,
        'Scissor': document.getElementById('Scissor').src
    };

    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var textDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imgDatabase[UserimageChoice]+"' height=200 width=200 >";
    document.getElementById('container').appendChild(humanDiv);

    if(color === 'green'){
        textDiv.innerHTML = "<h1>You win!<h1>";
        document.getElementById('container').appendChild(textDiv);
    }

    else if(color === 'red'){
        textDiv.innerHTML = "<h1>You Lost! <h1>";
        document.getElementById('container').appendChild(textDiv);
    }

    else{
        textDiv.innerHTML = "<h1>You tied!<h1>";
        document.getElementById('container').appendChild(textDiv);
    }

    botDiv.innerHTML = "<img src='"+imgDatabase[ComImageChoice]+"' height=200 width=200 >";
    document.getElementById('container').appendChild(botDiv);

}

    
