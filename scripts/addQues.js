function add() {
  var subjectName = document.getElementById("subjectName").value;
  var question = document.getElementById("question").value;
  var option1 = document.getElementById("option1").value;
  var option2 = document.getElementById("option2").value;
  var option3 = document.getElementById("option3").value;
  var option4 = document.getElementById("option4").value;
  var answer = document.getElementById("answer").value;

  var newQuestion = {
    subjectName: subjectName,
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
    option4: option4,
    answer: answer,
  };

  if (localStorage.getItem("allQuestion")) {
    var oldQuestion = JSON.parse(localStorage.getItem("allQuestion"));
    var allQuestion = oldQuestion;
    allQuestion.push(newQuestion);
    localStorage.setItem("allQuestion", JSON.stringify(allQuestion));
  } else {
    var allQuestion = [];
    allQuestion.push(newQuestion);
    localStorage.setItem("allQuestion", JSON.stringify(allQuestion));
  }

  alert("data saved succesfully");
}

function getAllSubjects() {
  if (localStorage.getItem("subjectName")) {
    var temp = "";
    var oldSubjectName = JSON.parse(localStorage.getItem("subjectName"));
    var subjectName = oldSubjectName;
    for (var i = 0; i < subjectName.length; i++) {
      temp += "<tr>";
      temp +=
        "<td><option value='" +
        subjectName[i] +
        "'>" +
        subjectName[i] +
        "</option></td>";
      temp += "</tr>";
    }
    document.getElementById("subjects").innerHTML = temp;
  }
}

function searchQuestion() {
  var subjectName = document.getElementById("subjects").value;

  if (localStorage.getItem("allQuestion")) {
    var oldQuestion = JSON.parse(localStorage.getItem("allQuestion"));
    var allQuestion = oldQuestion;
    var temp = "";
    for (var i = 0; i < allQuestion.length; i++) {
      if (
        allQuestion[i].subjectName.toLowerCase() == subjectName.toLowerCase()
      ) {
        temp += "<tr>";
        temp += "<td>" + (i + 1) + "</td>";
        temp += "<td>" + allQuestion[i].question + "</td>";
        temp += "<td>" + allQuestion[i].option1 + "</td>";
        temp += "<td>" + allQuestion[i].option2 + "</td>";
        temp += "<td>" + allQuestion[i].option3 + "</td>";
        temp += "<td>" + allQuestion[i].option4 + "</td>";
        temp += "<td>" + allQuestion[i].answer + "</td>";
        temp +=
          "<td> <a href='#' onclick='deleteQuestion(" +
          i +
          ")'>Delete</a> </td>";
          temp +=
          "<td> <a href='#' onclick='editQuestion(" +
          i +
          ")'>Edit</a> </td>";
        temp += "</tr>";
      }
    }
    document.getElementById("questionTableBody").innerHTML = temp;
  }
}

function deleteQuestion(i) {
  if (confirm("Are you sure you want to delete?")) {
    var oldQuestion = JSON.parse(localStorage.getItem("allQuestion"));
    var allQuestion = oldQuestion;
    allQuestion.splice(i, 1);
    localStorage.setItem("allQuestion", JSON.stringify(allQuestion));
    searchQuestion();
  }
}

function editQuestion(i) {
 localStorage.setItem("index",i);
  window.location.href = "editques.html";
}

function edit(i) {
  var oldSubjectName = JSON.parse(localStorage.getItem("allQuestion")); 
  var allQuestion = oldSubjectName;
  var index = localStorage.getItem("index");
   document.getElementById("question").value;
  document.getElementById("question").value = allQuestion[index].question;
  document.getElementById("option1").value = allQuestion[index].option1;
  document.getElementById("option2").value = allQuestion[index].option2;
  document.getElementById("option3").value = allQuestion[index].option3;
  document.getElementById("option4").value = allQuestion[index].option4;
  document.getElementById("answer").value = allQuestion[index].answer;
}

function update() {
  var subjectName = document.getElementById("subjectName").value;
  var question = document.getElementById("question").value;
  var option1 = document.getElementById("option1").value;
  var option2 = document.getElementById("option2").value;
  var option3 = document.getElementById("option3").value;
  var option4 = document.getElementById("option4").value;
  var answer = document.getElementById("answer").value;

  var oldProducts = JSON.parse(localStorage.getItem("allQuestion"));
  var allQuestion = oldProducts;
  var index = localStorage.getItem("index");
  allQuestion[index] = {
    subjectName: subjectName,
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
    option4: option4,
    answer: answer,
  };
  localStorage.setItem("allQuestion", JSON.stringify(allQuestion));
  alert("data updated succesfully");
  window.location.href = "questions.html";
}
