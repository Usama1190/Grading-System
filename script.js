function myFunction() {
    var htmlScore = parseInt(document.getElementById('html').value);
    var cssScore = parseInt(document.getElementById('css').value);

    var combineScore = (( htmlScore + cssScore ) / 200 ) * 100;
    var combineScoreDec = combineScore.toFixed(2);

    if (combineScore < 0 || combineScore > 200) {
        document.getElementById('show').innerHTML ='Invalid Score!';
    }
    else if(combineScore >= 90 && combineScore <= 100) {
        document.getElementById('show').innerHTML ='Grade "A One" ' + combineScoreDec + '% Congratulations! you are Eligible for Module 02';
    }
    else if(combineScore >= 80 && combineScore < 90) {
        document.getElementById('show').innerHTML ='Grade "A+" ' + combineScoreDec + '% Congratulations! you are Eligible for Module 02';
    }
    else if(combineScore >= 70 && combineScore < 80) {
        document.getElementById('show').innerHTML ='Grade "A" ' + combineScoreDec + '% Congratulations! you are Eligible for Module 02';
    }
    else if(combineScore >= 60 && combineScore < 70) {
        document.getElementById('show').innerHTML ='Grade B ' + combineScoreDec + '% Ooops! you are Repeat Module 01';
    }
    else if(combineScore >= 50 && combineScore < 60) {
        document.getElementById('show').innerHTML ='Grade C ' + combineScoreDec + '% Ooops! you are Repeat Module 01';
    }
    else if(combineScore >= 40 && combineScore < 50) {
        document.getElementById('show').innerHTML ='Grade D ' + combineScoreDec + '% Ooops! you are Repeat Module 01';
    }
    else {
        document.getElementById('show').innerHTML ='Grade F ' + combineScoreDec + '% Ooops! you are Repeat Module 01';
    }
}