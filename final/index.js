var selectedRecord = null;
var existingsid = [];
this.data = {};
var usedata=[];
var Data = {}
var previous=[]

// var p =document.createElement("p");
// document.innerHtml ="exist*";

function resetForm() {
  document.getElementById("id").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("gender").value = "";
  selectedRecord = null;
}

function Submit() {
  var formData = getFormData();
  if (formData) {
    if (selectedRecord == null) {
      insertData(formData);
    }

    document.getElementById('text1').style.visibility = 'hidden';
    resetForm();
  }
  else {
    document.getElementById('text1').style.visibility = 'visible';
    

  }
}

function IsUnique(id, existingsid) {
  return !existingsid.includes(id);
}

function getFormData() {
  //  data = {}
  var id = document.getElementById("id").value;
  // console.log(id);
  // existingsid.push(id);
  // console.log(existingsid);
  
  if (IsUnique(id, existingsid)) {
    data["id"] = id;
    // existingsid.push(id);
    // var x=id.padStart(2,"E0")
    data['id'] = document.getElementById("id").value;
    data['name'] = document.getElementById("Name").value;
    data['gender'] = document.getElementById("gender").value;
    data['age'] = document.getElementById('Age').value;
    return data;
  }
  else {
    return null;
  }
}

function insertData(data) {



//  sort(data.id) ;

  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  var insertindex=0;
  var rows  =table.rows;
  while(insertindex <rows.length && parseInt(rows[insertindex].cells[0].innerHTML) < parseInt(data.id)){
    insertindex++;

  }

 
    

  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = data.id;
  cell2.innerHTML = data.name;
  cell3.innerHTML = data.age;
  cell4.innerHTML = data.gender;
  cell5.innerHTML = `<button onClick='onEdit(this)' class="edit" >Edit</button><button onClick='onDelete(this)' class ='delete'>Delete</button>`;

  console.log(table)
}


function onEdit(td) {
  let formBtn = document.getElementById("done");
  formBtn.value = "Update";
 
  selectedRecord = td.parentElement.parentElement; //td.tbody.table

  document.getElementById("idvalues").value = selectedRecord.cells[0].innerHTML;
  document.getElementById("Namevalues").value = selectedRecord.cells[1].innerHTML;
  document.getElementById("Agevalues").value = selectedRecord.cells[2].innerHTML;
  document.getElementById("gendervalues").value = selectedRecord.cells[3].innerHTML;

existingsid.pop(selectedRecord.cells[0].innerHTML);
// existingsid.push(document.getElementById("idvalues").value)

  let edit = document.getElementById('Edit');
  edit.style.visibility = 'visible';
}

function onDelete(td) {
  row = td.parentNode.parentNode;
  // existingsid.push(row[0])
  row.parentNode.removeChild(row);
  resetForm()
 
}


function UD(td) {
  var Data = getData();


  if (Data) {
    document.getElementById('text2').style.visibility = 'hidden';
  }
  else {
    document.getElementById('text2').style.visibility = 'visible';
  }

  selectedRecord.cells[0].innerHTML = Data.id;
  selectedRecord.cells[1].innerHTML = Data.name;
  selectedRecord.cells[2].innerHTML = Data.age;
  selectedRecord.cells[3].innerHTML = Data.gender;
  console.log(Data)

  let edit = document.getElementById('Edit');
  edit.style.visibility = 'hidden';
  resetForm();
}

function getData() {

  var previous_id =selectedRecord.cells[0].innerHTML;
  var x=document.getElementById("idvalues").value;

  Data['id'] = document.getElementById("idvalues").value;
  Data['name'] = document.getElementById("Namevalues").value;
  Data['gender'] = document.getElementById("gendervalues").value;
  Data['age'] = document.getElementById('Agevalues').value;
  console.log(Data)  

  if(IsUnique(x,existingsid)|| previous.includes(previous)){
   existingsid.push(x)
    update_ID();
    return Data
  }
  else if(IsUnique(previous_id,existingsid) ){
    update_ID();
    return Data
  }else{
    return null;
  }    

 
 }          
   
function update_ID(){
  var previous_id =selectedRecord.cells[0].innerHTML;
 var x=document.getElementById("idvalues").value;
 console.log(previous_id)
  if(x!==previous_id){
    console.log(previous_id)
    console.log(x)
    previous.push(previous)
    existingsid.pop(previous_id);
    // existingsid.pop(x);
    console.log(existingsid)
    
    Data.id=x
    return true
    }
    else if(x===previous_id){
      return true
    }
    else{
      return false;
    } 
    }

function nochange(){
  let edit = document.getElementById('Edit');
  edit.style.visibility = 'hidden';
  document.getElementById('text2').style.visibility = 'hidden';
  resetForm()
}



