// // function values() {
// //     var i = document.getElementById("id").value;
// // var n = document.getElementById("Name").value;
// // var a = document.getElementById("Age").value;
// // var g = document.getElementById("gender").value;
// //      console.log(i);
// //      console.log(n);
// //      console.log(a);
// //      console.log(g);
// //     event.preventDefault();       
// // }
// // var entry = document.getElementById('submit');
// // entry.addEventListener('click',displayDetails);
// // var row=1;
// var row =null;
// function Validity(){
//     var g = document.getElementById("gender").value;
//   var age = document.getElementById('Age').value;
// if ( !(age >=18 && age<=65)){
  //   return false;}

  //   // if (!( gender==='Male' || gender==='Female' || gender==='Other')){
  //   //   return false;
  //   // }
  //   // if (!(name)){
  //   //   return false;
  //   // }
//   if ( !(age >18 && age<65)||(!( g==='Male' || g==='Female' || g==='Other'))){
//     return false;
//   }
//   else{
//     return true
//   }
//   // if (!( g==='Male' || g==='Female' || g==='Other')){
//   //   return false;
//   // }
// }
// if (Validity()){
//   Add();

// }\


// function update(){
//   console.log(getData())
//   // var Data = getData();
//   // if (!(selectedRecord == null)) {
//   //   updateData(Data);
// // }
// }


//   if (!(selectedRecord == null)) {
//     updateData(Data)
// }
// else{
//   insertData(Data)
// }

// function updateData(formData){
//   var table = document.getElementById("displaytable");
//   selectedRecord.cells[0].innerHTML = formData.id;
//   selectedRecord.cells[1].innerHTML = formData.name;
//   selectedRecord.cells[2].innerHTML = formData.age;
//   selectedRecord.cells[3].innerHTML = formData.gender;



//     // let formBtn = document.getElementById("submit");
//     // formBtn.value = "Add"; 
    


// }




// function updateData(Data){
//   var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
// selectedRecord.cells[0].innerHTML = Data.id;
//     selectedRecord.cells[1].innerHTML = Data.name;
//     selectedRecord.cells[2].innerHTML = Data.age;
//     selectedRecord.cells[3].innerHTML = Data.gender;


// }


//   row = td.parentNode.parentNode;
//   selectedRecord = row.cells[0].innerHTML;
//   document.getElementById("idvalue").value = row.cells[0].innerHTML;
//   document.getElementById("Namevalue").value = row.cells[1].innerHTML;
//   document.getElementById("agevalue").value = row.cells[2].innerHTML;
//   document.getElementById("gendervalue").value = row.cells[3].innerHTML;
  

// }


// function Add() {
//   var id = document.getElementById("id").value;
//   var name = document.getElementById("Name").value;
//   var gender = document.getElementById("gender").value;
//   var age = document.getElementById('Age').value;


//   // 
//     const tableElement = document.getElementById('myTable');
//     const trElement = document.createElement('tr');
//     const tbodyElement = document.createElement('tbody');
//     var iele =document.createElement('td');
//     var nele =document.createElement('td');
//     var aele =document.createElement('td');
//     var gele =document.createElement('td');
//     var uele =document.createElement('td');
//     var dele =document.createElement('td');
    
//     iele.innerHTML = id;
//     nele.innerHTML = name;
//     aele.innerHTML = age;
//     gele.innerHTML = gender;
//     uele.innerHTML=`<button onClick='onEdit(this)' class="edit" >Edit</button><button onClick='onDelete(this)' class ='delete'>Delete</button>`;

//     trElement.appendChild(iele);
//     trElement.appendChild(nele);
//     trElement.appendChild(aele);
//     trElement.appendChild(gele);
//     trElement.appendChild(uele);
//     tbodyElement.appendChild(trElement);
//     tableElement.appendChild(tbodyElement);

//     var arr = retriveData();
//     console.log(arr);


// return true;
// }



// function onDelete(td){
//   row = td.parentNode.parentNode;
//   row.parentNode.removeChild(row);

// }


// function onEdit(){
//   let edit =document.getElementById('Edit');
//   edit.style.visibility = 'visible';
//   update();
//   }

// function update(td){
//   retriveData()
//   console.log(document.getElementById('idvalues').value =data[id])
  
  
//   //  var row = td.parentNode.parentNode;
//   //  console.log(row);

//   // console.log(r)
//   // var id = r.cells[0].innerHTML;  // console.log(id);
//   // var name = r.cells[1].innerHTML;
//   // var gender = r.cells[2].innerHTML;
//   // var age = r.cells[3].innerHTML;
//   // document.getElementById("idvalue").value = id;
//   // document.getElementById("namevalue").value = name;
//   // document.getElementById("gendervalue").value = gender;
//   // document.getElementById('agevalue').value = age;

// }


  // var name = r.cells[1].innerHTML;
  // var gender = r.cells[3].innerHTML;
  // var age = r.cells[2].innerHTML;

//  document.getElementById("idvalues").value=id;
//   // x.document.innerHTML=id;

  // document.getElementById("Naevalues").value = name;
  // document.getElementById("gendervalues").value = gender;
  // document.getElementById("Agevalues").value = age;


  // var c =document.getElementById('idvalue');
  // c.document.innerHTML=r.td.parentNode
  // console.log(c);
    // let edit =document.getElementById('Edit');
    // edit.style.visibility = 'visible';  



  //   var Row = document.getElementsByClassName("mytable");
  // var Cells = Row.getElementsByTagName("td");
  // alert(Cells[0].innerText);

  // const getCellValues = () => {
  //   const table = document.getElementById("mytable");
  //   for (const row of table.rows) 
  //     for (const cell of row.cells) {
  //       console.log(cell.value);
  //     }
  //   }
  //   console.log(getCellValues);
  


  // row =td.parentElement.parentElement;
  // document.getElementById("id").value=row[0].innerHTML


// }

























// function Add() {

//     event.preventDefault();
//        var i = document.getElementById("id").value;
//         var f = document.getElementById("firstname").value;
//         var l = document.getElementById("lastname").value;
//         var a = document.getElementById("Age").value;
//         var g = document.getElementById("gender").value;

//         const tableElement = document.getElementById('myTable');
//         const trElement = document.createElement('tr');
//         const tbodyElement = document.createElement('tbody');
//         var iele =document.createElement('td');
//         var nele =document.createElement('td');
//         var aele =document.createElement('td');
//         var gele =document.createElement('td');
//         var uele =document.createElement('td');
//         var dele =document.createElement('td');
        
//         iele.innerHTML = i;
//         nele.innerHTML = f+" "+l;
//         aele.innerHTML = a;
//         gele.innerHTML = g;
//         uele.innerHTML="<button onClick='onEdit(this)'>Edit</button>";
//         dele.innerHTML="<button onClick='onDelete(this)'>Delete</button>";

//         trElement.appendChild(iele);
//         trElement.appendChild(nele);
//         trElement.appendChild(aele);
//         trElement.appendChild(gele);
//         trElement.appendChild(uele);
//         trElement.appendChild(dele);
//         tbodyElement.appendChild(trElement);
//         tableElement.appendChild(tbodyElement);

// }

// function onEdit(){
//     console.log('edit');


// }

// function onDelete(){
//     console.log('delete')
//     if(confirm('Do you want to delete this record?')){
//         row = td.parentElement.parentElement;
//         document.getElementById('myTable').deleteRow(row.rowIndex);
//         resetForm();
//     }
   

// }

// function resetForm(){
//     document.getElementById("id").value ='';
//     document.getElementById("Name").value ='';
//     document.getElementById("Age").value ='';
//     document.getElementById("gender").value ='';
// }


// function myFunction() {
//     document.getElementById("gender").classList.toggle("show");
//   }
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }