function add() {
  var subjectName = document.getElementById("subjectName").value;

  var newSubjectName = subjectName;

  if (localStorage.getItem("subjectName")) {
    var oldSubjectName = JSON.parse(localStorage.getItem("subjectName"));
    var subjectName = oldSubjectName;
    subjectName.push(newSubjectName);
    localStorage.setItem("subjectName", JSON.stringify(subjectName));
  } else {
    var subjectName = [];
    subjectName.push(newSubjectName);
    localStorage.setItem("subjectName", JSON.stringify(subjectName));
  }

  alert("data saved succesfully");
  display();
}

function display() {
  if (localStorage.getItem("subjectName")) {
    var temp = "";
    var oldSubjectName = JSON.parse(localStorage.getItem("subjectName"));
    var subjectName = oldSubjectName;
    for (var i = 0; i < subjectName.length; i++) {
      temp += "<tr>";
      temp += "<td>" + (i + 1) + "</td>";
      temp += "<td>" + subjectName[i] + "</td>";
      temp += "<td> <a href='#' onclick='deleteSub(" + i + ")'>Delete</a> </td>";
      temp += "</tr>";
    }
    document.getElementById("subjectTable").innerHTML = temp;
  }
}


function deleteSub(i) {
  if(confirm("Are you sure you want to delete?")) {
    var oldSubjectName = JSON.parse(localStorage.getItem("subjectName"));
    var subjectName = oldSubjectName;
    subjectName.splice(i,1);
    localStorage.setItem("subjectName", JSON.stringify(subjectName));
    display();
  }
}