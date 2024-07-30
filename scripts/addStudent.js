function add(){
    var rollNo = document.getElementById("rollNo").value;
    var studentName = document.getElementById("studentName").value;
    var collage = document.getElementById("collage").value;
    var newStudent = {
        rollNo: rollNo,
        studentName: studentName,
        collage: collage
    }
    if(localStorage.getItem("allStudent")){
        var oldStudent = JSON.parse(localStorage.getItem("allStudent"));
        var allStudent = oldStudent;
        allStudent.push(newStudent);
        localStorage.setItem("allStudent", JSON.stringify(allStudent));
    }else{
        var allStudent = [];
        allStudent.push(newStudent);
        localStorage.setItem("allStudent", JSON.stringify(allStudent));
    }
    alert("data saved succesfully");
    display();
}

function display(){
    if(localStorage.getItem("allStudent")){
        var temp = "";
        var oldStudent = JSON.parse(localStorage.getItem("allStudent"));
        var allStudent = oldStudent;
        for(var i = 0; i < allStudent.length; i++){
             var rollNo = allStudent[i].rollNo;
             var studentName = allStudent[i].studentName;
             var collage = allStudent[i].collage;

            temp += "<tr>";
            temp += "<td>" + rollNo + "</td>";
            temp += "<td>" + studentName + "</td>";
            temp += "<td>" + collage + "</td>";
            temp += "<td> <a href='#' onclick='deleteSub(" + i + ")'>Delete</a> </td>";
            temp += "<td> <a href='#' onclick='editSub(" + i + ")'>Edit</a> </td>";

            temp += "</tr>";
        }
        document.getElementById("studentTable").innerHTML = temp;
    }
}


function deleteSub(i){
    if(confirm("Are you sure you want to delete?")){
        var oldStudent = JSON.parse(localStorage.getItem("allStudent"));
        var allStudent = oldStudent;
        allStudent.splice(i,1);
        localStorage.setItem("allStudent", JSON.stringify(allStudent));
        display();
    }
}


function editSub(i){    
    var oldStudent = JSON.parse(localStorage.getItem("allStudent")); 
    var allStudent = oldStudent;    
    allStudent[i].rollNo = document.getElementById("rollNo").value;
    allStudent[i].studentName = document.getElementById("studentName").value;
    allStudent[i].collage = document.getElementById("collage").value;
    localStorage.setItem("allStudent", JSON.stringify(allStudent));
    display();
}