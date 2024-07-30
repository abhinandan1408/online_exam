function add() {
  var subjectName = document.getElementById("subjectName").value;
  var examDate = document.getElementById("examDate").value;
  var duration = document.getElementById("duration").value;
  var questions = document.getElementById("questions").value;
  var password = document.getElementById("password").value;

  var newExam = {
    subjectName: subjectName,
    examDate: examDate,
    duration: duration,
    questions: questions,
    password: password,
  };

  if (localStorage.getItem("allExams")) {
    var oldExams = JSON.parse(localStorage.getItem("allExams"));
    var allExams = oldExams;
    allExams.push(newExam);
    localStorage.setItem("allExams", JSON.stringify(allExams));
  } else {
    var allExams = [];
    allExams.push(newExam);
    localStorage.setItem("allExams", JSON.stringify(allExams));
  }
  alert("data saved succesfully");
}

function display() {
  var temp = "";
  if (localStorage.getItem("allExams")) {
    var oldExams = JSON.parse(localStorage.getItem("allExams"));
    var allExams = oldExams;

    for (var i = 0; i < allExams.length; i++) {
      temp += "<tr>";
      temp += "<td>" + (i + 1) + "</td>";
      temp += "<td>" + allExams[i].examDate + "</td>";
      temp += "<td>" + allExams[i].subjectName + "</td>";
      temp += "<td>" + allExams[i].duration + "</td>";
      temp += "<td>" + allExams[i].questions + "</td>";
      temp +=
        "<td> <a href='#' onclick='deleteQuestion(" + i + ")'>Delete</a> </td>";
      temp +=
        "<td> <a href='#' onclick='editQuestion(" + i + ")'>Edit</a> </td>";
      temp += "</tr>";
    }
  }
  document.getElementById("examTableBody").innerHTML = temp;
}

function deleteQuestion(i) {
  if (confirm("Are you sure you want to delete?"))
    var oldExams = JSON.parse(localStorage.getItem("allExams"));
  var allExams = oldExams;
  allExams.splice(i, 1);
  localStorage.setItem("allExams", JSON.stringify(allExams));
  display();
}

function editQuestion(i) {
  localStorage.setItem("index", i);
  window.location.href = "editexam.html";
}

function update() {
  var subjectName = document.getElementById("subjectName").value;
  var examDate = document.getElementById("examDate").value;
  var duration = document.getElementById("duration").value;
  var questions = document.getElementById("questions").value;
  var password = document.getElementById("password").value;

  var oldExams = JSON.parse(localStorage.getItem("allExams"));
  var allExams = oldExams;
  var index = localStorage.getItem("index");
  allExams[index] = {
    subjectName: subjectName,
    examDate: examDate,
    duration: duration,
    questions: questions,
    password: password,
  };
  localStorage.setItem("allExams", JSON.stringify(allExams));
  alert("data updated succesfully");
  window.location.href = "exam.html";
}
