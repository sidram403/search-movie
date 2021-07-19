const api = "http://www.omdbapi.com/?i=tt3896198&apikey=be41af31"
const searchbox = document.querySelector(".Search-box");
 searchbox.addEventListener('keypress',setQuery);
const button = document.querySelector(".button");
button.addEventListener('click', setQuery);


function setQuery(evt) {
    getResults(searchbox.value);
}

function getResults(q) {
    fetch(`${api}&s=${q}`)
        .then(movie => {
            return movie.json();
        }).then((movie) => {
            // console.log(movie.Search.length);

            var content = document.querySelector("#content");

            var box = content.lastElementChild;
            while (box) {
                content.removeChild(box);
                box = content.lastElementChild;

            }

            for (var a = 0; a < movie.Search.length; a++) {
                let box = document.createElement("div");
                box.setAttribute("class", "box");
                let content = document.getElementById("content");

                content.appendChild(box);

                box.innerHTML = `<div class="title">Title:- ${movie.Search[a].Title},(${movie.Search[a].Year})</div>
                <div class="type">Type:-${movie.Search[a].Type}</div>
                <div class="poster"><img src="${movie.Search[a].Poster}"></img></div>
                <div class="moreinfo"><a href="https://www.imdb.com/title/${movie.Search[a].imdbID}" target="_blank">More Details</a></div>`;
            }


        })
}


// when scroll header was changed color

window.onscroll = function () {
    if (window.pageYOffset > 400) {
        document.getElementById("header").style.backgroundColor = "rgba(16, 128, 234, 1)";
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
    }
}

// open and close menu

function openNav(){
  document.getElementById("open").style.display="none";
  document.getElementById("nav").style.width="30%";
//   document.getElementById("nav").style.overflowX="visible";
}

function closeNav(){
    document.getElementById("nav").style.width="0";
    document.getElementById("nav").style.display="block";
    document.getElementById("nav").style.overflowX="hidden";
}

