var data;

var arr = [
  { id: 1, Movie_name: "Batman", genres: "action",seat:["1a","2","3","4"] ,language: "english" },
  { id: 2, Movie_name: "Batman", genres: "action",seat:["1","2","3","4"] ,language: "english" },
  { id: 3, Movie_name: "Spiderman", genres: "action",seat:["1","2","3","4"], language: "english" },
  { id: 4, Movie_name: "Lagan", genres: "drama", seat:["1","2","3","4"],language: "hindi" },
  { id: 5, Movie_name: "DDLJ", genres: "love",seat:["1","2","3","4"] ,language: "hindi" },
  { id: 6, Movie_name: "War", genres: "action",seat:["1","2","3","4"] ,language: "hindi" },
  { id: 7, Movie_name: "Krish", genres: "action",seat:["1","2","3","4"] ,language: "hindi" },
  { id: 8, Movie_name: "Vivah", genres: "love",seat:["1","2","3","4"] ,language: "hindi" },
  { id: 9, Movie_name: "Golmal", genres: "comedy",seat:["1","2","3","4"] ,language: "marathi" },
  { id: 10, Movie_name: "Tanahji", genres: "action",seat:["1","2","3","4"], language: "marathi" },
  { id: 11, Movie_name: "Romeo", genres: "love", seat:["1","2","3","4"], language: "english" },
  { id: 12, Movie_name: "Titanic", genres: "love",seat:["1","2","3","4"] ,language: "english" },
  { id: 13, Movie_name: "Dhoom", genres: "action", seat:["1","2","3","4"], language: "hindi" },
  { id: 14, Movie_name: "Race", genres: "action", seat:["1","2","3","4"], language: "hindi" },
  { id: 15, Movie_name: "Housefull", genres: "comedy", seat:["1","2","3","4"], language: "hindi" }
];


localStorage.setItem("datas", JSON.stringify(arr));
var maindata = JSON.parse(localStorage.getItem("datas"));

window.addEventListener("load", function() {
  console.log(maindata);

  fillData(maindata);
  $("#sortIt").change(() => {
    let value = document.getElementById("sortIt")
    sortByName(maindata, value);
  }); 
});



// function to populate the table
function fillData(input) {
  console.log(input);
  $("#table").empty();

  for (let i = 0; i < input.length; i++) {
    var tr = document.createElement("tr");

    var cell = document.createElement("td");
    cell.innerHTML = input[i].id;
    tr.appendChild(cell);

    var cell1 = document.createElement("td");
    cell1.innerHTML = input[i].Movie_name;
    tr.appendChild(cell1);

    var cell2 = document.createElement("td");
    cell2.innerHTML = input[i].genres;
    tr.appendChild(cell2);

    var cell3 = document.createElement("td");
    cell3.innerHTML = input[i].language;
    tr.appendChild(cell3);

   

    var bookcell=document.createElement("BUTTON");
    bookcell.setAttribute('class'," d-flex margin1 bg-success");
    bookcell.innerHTML = "BOOK TICKET"
    bookcell.setAttribute('onclick','view(' + input[i].id + ')')
    tr.appendChild(bookcell);

 
    $("#table").append(tr);
  }
}




var dataBase;
// function to sort by movi name
function sortByName(input, value) {
  if (value == "nameAcs") {
    dataBase = input.sort((a, b) => {
      return a.Movie_name > b.Movie_name ? 1 : -1;
    });
    fillData(dataBase);
  } else if ((value = "nameDesc")) {
    dataBase = input.sort((a, b) => {
      return a.Movie_name < b.Movie_name ? 1 : -1;
    });
    fillData(dataBase);
  }
}




// Filter by genres of moviee
$("input:radio").on("click", event => {
  var filterBy = event.target.value;

  switch (filterBy) {
    case "action":
      tempUserData = maindata.filter(user => {
        return user.genres == "action";
      });
      break;
    case "love":
      tempUserData = maindata.filter(user => {
        return user.genres == "love";
      });
      break;
    case "drama":
      tempUserData = maindata.filter(user => {
        return user.genres == "drama";
      });
      break;
    case "comedy":
      tempUserData = maindata.filter(user => {
        return user.genres == "comedy";
      });
      break;
    case "all":
      tempUserData = arr;
      break;
  }
  fillData(tempUserData);
});



$("input:radio").on("click", event => {
    var filterBy = event.target.value;
  
    switch (filterBy) {
      case "english":
        tempData = maindata.filter(user => {
          return user.language == "english";
        });
        break;
      case "hindi":
        tempData = maindata.filter(user => {
          return user.language == "hindi";
        });
        break;
      case "marathi":
        tempData = maindata.filter(user => {
          return user.language == "marathi";
        });
        break;
      case "all":
        tempData = arr;
        break;
    }
    fillData(tempData);
  });

//   BOOK TKT FUNCTION ONCLICK
function view(dataaa) {
      console.log(dataaa)
     window.localStorage.setItem('instdata', dataaa)
     window.location.href = "bookdetails.html";
   
    }
   
    