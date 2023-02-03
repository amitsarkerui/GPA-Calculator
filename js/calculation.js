function scienceResult(){
    let banglaMarks = document.getElementById("bangla").value;
    let englishMarks = document.getElementById("english").value;
    let mathMarks = document.getElementById("math").value;
    let religionMarks = document.getElementById("religion").value;
    let informationTechnologyMarks = document.getElementById("informationTechnology").value;
    let biologyMarks = document.getElementById("biology").value;
    let bangladeshWorldMarks = document.getElementById("bangladeshWorld").value;
    let physisMarks = document.getElementById("physis").value;
    let chemistryMarks = document.getElementById("chemistry").value;
    let higherMathMarks = document.getElementById("higherMath").value;
    
    function calculateGrade(marks) {
        if (marks >= 80 && marks <= 100) {
          return { grade: "A+", point: 5.00 };
        } else if (marks >= 70 && marks <= 79) {
          return { grade: "A", point: 4.00 };
        } else if (marks >= 60 && marks <= 69) {
          return { grade: "A-", point: 3.50 };
        } else if (marks >= 50 && marks <= 59) {
          return { grade: "B", point: 3.00 };
        } else if (marks >= 40 && marks <= 49) {
          return { grade: "C", point: 2.00 };
        } else if (marks >= 33 && marks <= 39) {
          return { grade: "D", point: 1.00 };
        } else if (marks >= 0 && marks <= 32) {
          return { grade: "F", point: 0.00 };
        } else {
          return "Invalid marks";
        }
    }
    let banglaCalculate = calculateGrade(banglaMarks);
    let englishCalculate = calculateGrade(englishMarks);
    let mathCalculate = calculateGrade(mathMarks);
    let religionCalculate = calculateGrade(religionMarks);
    let informationTechnologyCalculate = calculateGrade(informationTechnologyMarks);
    let biologyCalculate = calculateGrade(biologyMarks);
    let bangladeshWorldCalculate = calculateGrade(bangladeshWorldMarks);
    let physisCalculate = calculateGrade(physisMarks);
    let chemistryCalculate = calculateGrade(chemistryMarks);
    let higherMathCalculate = calculateGrade(higherMathMarks);
    
    if(banglaCalculate.point>=1.00 && englishCalculate.point>=1.00 && mathCalculate.point>=1.00 && religionCalculate.point>=1.00 && informationTechnologyCalculate.point>=1.00 && biologyCalculate.point>=1.00 && bangladeshWorldCalculate.point>=1.00 && physisCalculate.point>=1.00 && chemistryCalculate.point>=1.00){
        higherMathPoint = higherMathCalculate.point - 2;

        let sumofAllSubject = banglaCalculate.point + englishCalculate.point + mathCalculate.point + religionCalculate.point + informationTechnologyCalculate.point + biologyCalculate.point +bangladeshWorldCalculate.point + physisCalculate.point + chemistryCalculate.point + higherMathPoint ;

        let sumofPoint = sumofAllSubject/9 ; 

        if(sumofPoint>5.00){
            sumofPoint=5.00;
            console.log(sumofPoint);
            document.getElementById("massageHeading").innerHTML = "Congratulations!!! You are passed , You got: "
            document.getElementById("outpotGpa").innerHTML = sumofPoint.toFixed(2);
        }
        else{
            document.getElementById("massageHeading").innerHTML = "Congratulations!!! You are passed , You got: "
            document.getElementById("outpotGpa").innerHTML = sumofPoint.toFixed(2);
        }
    }
    else{
        document.getElementById("massageHeadingFail").innerHTML = "Sorry ! You are failed :("
    }
}

function commerceResult(){
    let banglaMarks = document.getElementById("bangla").value;
    let englishMarks = document.getElementById("english").value;
    let mathMarks = document.getElementById("math").value;
    let religionMarks = document.getElementById("religion").value;
    let informationTechnologyMarks = document.getElementById("informationTechnology").value;
    let accountingMarks = document.getElementById("accounting").value;
    let bangladeshWorldMarks = document.getElementById("bangladeshWorld").value;
    let finaceMarks = document.getElementById("finace").value;
    let entrepreneurshipMarks = document.getElementById("entrepreneurship").value;
    let agricultureMarks = document.getElementById("agriculture").value;
    
    function calculateGrade(marks) {
        if (marks >= 80 && marks <= 100) {
          return { grade: "A+", point: 5.00 };
        } else if (marks >= 70 && marks <= 79) {
          return { grade: "A", point: 4.00 };
        } else if (marks >= 60 && marks <= 69) {
          return { grade: "A-", point: 3.50 };
        } else if (marks >= 50 && marks <= 59) {
          return { grade: "B", point: 3.00 };
        } else if (marks >= 40 && marks <= 49) {
          return { grade: "C", point: 2.00 };
        } else if (marks >= 33 && marks <= 39) {
          return { grade: "D", point: 1.00 };
        } else if (marks >= 0 && marks <= 32) {
          return { grade: "F", point: 0.00 };
        } else {
          return "Invalid marks";
        }
    }
    let banglaCalculate = calculateGrade(banglaMarks);
    let englishCalculate = calculateGrade(englishMarks);
    let mathCalculate = calculateGrade(mathMarks);
    let religionCalculate = calculateGrade(religionMarks);
    let informationTechnologyCalculate = calculateGrade(informationTechnologyMarks);
    let accountingCalculate = calculateGrade(accountingMarks);
    let bangladeshWorldCalculate = calculateGrade(bangladeshWorldMarks);
    let finaceCalculate = calculateGrade(finaceMarks);
    let entrepreneurshipCalculate = calculateGrade(entrepreneurshipMarks);
    let agricultureCalculate = calculateGrade(agricultureMarks);
    
    if(banglaCalculate.point>=1.00 && englishCalculate.point>=1.00 && mathCalculate.point>=1.00 && religionCalculate.point>=1.00 && informationTechnologyCalculate.point>=1.00 && accountingCalculate.point>=1.00 && bangladeshWorldCalculate.point>=1.00 && finaceCalculate.point>=1.00 && entrepreneurshipCalculate.point>=1.00){
        agriculturePoint = agricultureCalculate.point - 2;

        let sumofAllSubject = banglaCalculate.point + englishCalculate.point + mathCalculate.point + religionCalculate.point + informationTechnologyCalculate.point + accountingCalculate.point +bangladeshWorldCalculate.point + finaceCalculate.point + entrepreneurshipCalculate.point + agriculturePoint ;

        let sumofPoint = sumofAllSubject/9 ; 

        if(sumofPoint>5.00){
            sumofPoint=5.00;
            console.log(sumofPoint);
            document.getElementById("massageHeading").innerHTML = "Congratulations!!! You are passed , You got: "
            document.getElementById("outpotGpa").innerHTML = sumofPoint.toFixed(2);
        }
        else{
            document.getElementById("massageHeading").innerHTML = "Congratulations!!! You are passed , You got: "
            document.getElementById("outpotGpa").innerHTML = sumofPoint.toFixed(2);
        }
    }
    else{
        document.getElementById("massageHeadingFail").innerHTML = "Sorry ! You are failed :("
    }
}


function humanitiesResult(){
    let banglaMarks = document.getElementById("bangla").value;
    let englishMarks = document.getElementById("english").value;
    let mathMarks = document.getElementById("math").value;
    let religionMarks = document.getElementById("religion").value;
    let informationTechnologyMarks = document.getElementById("informationTechnology").value;
    let geographyMarks = document.getElementById("geography").value;
    let bangladeshWorldMarks = document.getElementById("bangladeshWorld").value;
    let historyMarks = document.getElementById("history").value;
    let CivicCitizenshipMarks = document.getElementById("CivicCitizenship").value;
    let agricultureMarks = document.getElementById("agriculture").value;
    
    function calculateGrade(marks) {
        if (marks >= 80 && marks <= 100) {
          return { grade: "A+", point: 5.00 };
        } else if (marks >= 70 && marks <= 79) {
          return { grade: "A", point: 4.00 };
        } else if (marks >= 60 && marks <= 69) {
          return { grade: "A-", point: 3.50 };
        } else if (marks >= 50 && marks <= 59) {
          return { grade: "B", point: 3.00 };
        } else if (marks >= 40 && marks <= 49) {
          return { grade: "C", point: 2.00 };
        } else if (marks >= 33 && marks <= 39) {
          return { grade: "D", point: 1.00 };
        } else if (marks >= 0 && marks <= 32) {
          return { grade: "F", point: 0.00 };
        } else {
          return "Invalid marks/Please check again";
        }
    }
    let banglaCalculate = calculateGrade(banglaMarks);
    let englishCalculate = calculateGrade(englishMarks);
    let mathCalculate = calculateGrade(mathMarks);
    let religionCalculate = calculateGrade(religionMarks);
    let informationTechnologyCalculate = calculateGrade(informationTechnologyMarks);
    let geographyCalculate = calculateGrade(geographyMarks);
    let bangladeshWorldCalculate = calculateGrade(bangladeshWorldMarks);
    let historyCalculate = calculateGrade(historyMarks);
    let CivicCitizenshipCalculate = calculateGrade(CivicCitizenshipMarks);
    let agricultureCalculate = calculateGrade(agricultureMarks);
    
    if(banglaCalculate.point>=1.00 && englishCalculate.point>=1.00 && mathCalculate.point>=1.00 && religionCalculate.point>=1.00 && informationTechnologyCalculate.point>=1.00 && geographyCalculate.point>=1.00 && bangladeshWorldCalculate.point>=1.00 && historyCalculate.point>=1.00 && CivicCitizenshipCalculate.point>=1.00){
        agriculturePoint = agricultureCalculate.point - 2;

        let sumofAllSubject = banglaCalculate.point + englishCalculate.point + mathCalculate.point + religionCalculate.point + informationTechnologyCalculate.point + geographyCalculate.point +bangladeshWorldCalculate.point + historyCalculate.point + CivicCitizenshipCalculate.point + agriculturePoint ;

        let sumofPoint = sumofAllSubject/9 ; 

        if(sumofPoint>5.00){
            sumofPoint=5.00;
            console.log(sumofPoint);
            document.getElementById("massageHeading").innerHTML = "Congratulations!!! You are passed , You got: "
            document.getElementById("outpotGpa").innerHTML = sumofPoint.toFixed(2);
        }
        else{
            document.getElementById("massageHeading").innerHTML = "Congratulations!!! You are passed , You got: "
            document.getElementById("outpotGpa").innerHTML = sumofPoint.toFixed(2);
        }
    }
    else{
        document.getElementById("massageHeadingFail").innerHTML = "Sorry ! You are failed :("
    }
}