var maindata = JSON.parse(localStorage.getItem("datas"));
var bookdata=localStorage.getItem('instdata')
console.log(maindata)
console.log(bookdata)

filteritem=maindata.filter(e => {
    return e.id == bookdata;
  })

name=filteritem.map(e=>e.Movie_name)
genres=filteritem.map(e=>e.genres)
language=filteritem.map(e=>e.language)


document.getElementById("moviename").innerHTML = "Booked ticket for:--"+ " "+ "["+ name + "]";
document.getElementById("moviegenres").innerHTML = "Movie Genres:--"+ " "+ "["+ genres + "]";
document.getElementById("movielanguage").innerHTML = "Movie language:--"+ " "+ "["+ language + "]";
document.getElementById("movienae").innerHTML = "Booked ticket for:--"+ " "+ "["+ name + "]";


console.log(name)

function confirmbutton(){
    alert("You booking is confirmed for "+ name)
    window.location.href = "index.html";
}

function cancelbutton(){
    alert("Your booking is successfully CANCELLED")
    document.getElementById("moviename").innerHTML = " Your Booking is successfully cancelled";
document.getElementById("moviegenres").innerHTML = " ";
document.getElementById("movielanguage").innerHTML = " ";
document.getElementById("movienae").innerHTML = " "
}

function home(){
    window.location.href = "index.html";
}