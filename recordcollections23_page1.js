const albums = [

    {
      "RecordName": "Teddy Wilson and His Orchestra “Big Band”",
      "Artist": "Teddy Wilson",
      "DateReleased": 1939,
      "Genre": "Jazz",
      "Language": "English",
      "RecordColor": "Blue",
      "ImageLink": "https://i.discogs.com/McAi8WPLUi1DHyYIY86TtzDBjEzeidU7cSfQlK8_SN8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkwODY1/MTAtMTQ3NDU2MTM0/MC03MDQ2LmpwZWc.jpeg"
    },
    {
      "RecordName": "Can't Slow Down",
      "Artist": "Lionel Richie",
      "DateReleased": 1983,
      "Genre": "Funk; Soul",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/Sj1LEdZFMSoS0YJFX1S8B8_aeu6oyEA4VTH4hBSHlAI/rs:fit/g:sm/q:90/h:400/w:406/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyMjU3/MjYtMTM1OTA1NTc4/MS02MjY1LmpwZWc.jpeg"
    },
    {
      "RecordName": "Jay and Kai",
      "Artist": "J.J. Johnson; Kai Winding",
      "DateReleased": 1957,
      "Genre": "Jazz",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/_d2p5JSmeI5ZZZ5kxCyQSwbD6wFBeZ2QCt9Kym6uhqY/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NzYw/MjUtMTQ5MDQ5Njc5/OC00OTk0LmpwZWc.jpeg"
    },
    {
      "RecordName": "Operation Doomsday",
      "Artist": "Mf Doom",
      "DateReleased": 1999,
      "Genre": "Hip Hop",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/xs_7_YxivBCNPA8q9vjP9GlGw8ev6U5zBKzR9L1OIfQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzMDI1/MzMtMTYyNTM2OTQ1/MC0zMDg1LmpwZWc.jpeg"
    },
    {
      "RecordName": "Live At The Haarlemse Jazzclub",
      "Artist": "Ben Webster",
      "DateReleased": 1972,
      "Genre": "Jazz",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/8ci6vs0lMyblARamKwaqThhb1ETs48oD5yU1UkufmKg/rs:fit/g:sm/q:90/h:500/w:487/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5MDAx/NS0xMzc5MTY0ODE0/LTYwMzEuanBlZw.jpeg"
    },
    {
      "RecordName": "Dark Myth Equation Visitation",
      "Artist": "Sun Ra",
      "DateReleased": 1972,
      "Genre": "Jazz",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/SZZqx97Xr6AGV7NmuOOwdMbsbkJRgwmAhKSr6WU1rmE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0Njk0/NTUtMTQ3NzA3ODY2/My00ODEyLmpwZWc.jpeg"
    },
    {
      "RecordName": "Egypt Strut",
      "Artist": "Salah Ragab",
      "DateReleased": 1974,
      "Genre": "Jazz",
      "Language": "Arabic",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/IkZQ3BCLH5B7agrbFVL-kw5t3SP3e4owh3iWj4hpTrs/rs:fit/g:sm/q:90/h:600/w:590/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NDA5/NzU5LTE2MTkxMDMy/MDgtODA3MS5qcGVn.jpeg"
    },
    {
      "RecordName": "Giant + Guitar",
      "Artist": "Omar Khorshid",
      "DateReleased": 1974,
      "Genre": "Rock",
      "Language": "Arabic",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/fAN829_nD_CrnADbWQAmGWOXNHQh3BQeFP-HWf_THQg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxNzc5/NzQtMTU3MjcyNjU0/My0zNTMwLmpwZWc.jpeg"
    },
    {
      "RecordName": "Monster Mash",
      "Artist": "Bobby Pickett",
      "DateReleased": 1973,
      "Genre": "Rock",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/7ZB8P63YJFFt0OHXKWXZ4Q3yJoOg7THUt1r9W8SZJx0/rs:fit/g:sm/q:90/h:572/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5NTkx/Ny0xMzE1MDY4MDA5/LmpwZWc.jpeg"
    },
    {
      "RecordName": "Funny Girl",
      "Artist": "Omar Sharif; Barbra Streisand",
      "DateReleased": 1968,
      "Genre": "Jazz",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/gKQCEwdNVWFDCwCOBnIVHLsDk8YwctYxH_eyk3XXA7E/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1NDAz/MDQtMTUxNDMwNTg3/MS03Njk3LmpwZWc.jpeg"
    },
    {
      "RecordName": "Deliver",
      "Artist": "The Mamas & The Papas",
      "DateReleased": 1967,
      "Genre": "Rock",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/kNLzs3iYapy6z1hv4wpKaQ83nN5RP-3nZU9qYVFmf4g/rs:fit/g:sm/q:90/h:584/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0Mjc4/MDgtMTQxOTExNjE2/OC0yMDI4LmpwZWc.jpeg"
    },
    {
      "RecordName": "Teddy Wilson",
      "Artist": "Teddy Wilson",
      "DateReleased": 1972,
      "Genre": "Jazz",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/AmtFtRT8DFxlGrqu3bsc64xA5a9slVejvy_GKkTYMSQ/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNTAx/MzUtMTYwNTY0ODUw/OC0zMDMxLmpwZWc.jpeg"
    },
    {
      "RecordName": "The Best of Little Anthony & The Imperials",
      "Artist": "Little Anthony and the Imperials",
      "DateReleased": 1966,
      "Genre": "Funk; Soul",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/exJQxnvFpIqU4OmfkP-D93F6Y0z86bqLaUS_bw2ROiE/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0NzA1/MjktMTQxMDIwNzQ1/Ni04MTA4LmpwZWc.jpeg"
    },
    {
      "RecordName": "The Slam! Years",
      "Artist": "Hamid Al Shaeri",
      "DateReleased": 2022,
      "Genre": "Pop",
      "Language": "Arabic",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/beKAIYCPofL4MWA8ZudKTfdlZjXbyEbnEAqkW1rp_Ic/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMzU5/OTM3LTE2NTYwOTYz/ODktMTgzNS5qcGVn.jpeg"
    },
    {
      "RecordName": "Houdou' Nisbi",
      "Artist": "Ziad Rahbani",
      "DateReleased": 2022,
      "Genre": "Pop",
      "Language": "Arabic; French",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/09-TLtQRuQk9PZvgxEK54gwfGaeJB-1yAPXOUooP3Os/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMTYx/NTg2LTE2NDQ4ODg1/MDYtOTUzMy5wbmc.jpeg"
    },
    {
      "RecordName": "Tapestry",
      "Artist": "Carole King",
      "DateReleased": 1971,
      "Genre": "Pop; Rock",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/JHYQQO8huma1OhA1nzNlnfD0AeStXiFKTk4RwbD0Xs0/rs:fit/g:sm/q:90/h:358/w:350/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTk4/MjItMTIzOTQ0Mjk3/Mi5qcGVn.jpeg"
    },
    {
      "RecordName": "Award Tour",
      "Artist": "A Tribe Called Quest",
      "DateReleased": 1993,
      "Genre": "Hip Hop",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/Ualm3rqbnTQ199P_o0x5EA4HRJGqJ5QZ8vRfrUH7o3Y/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1MDU2/LTExNTE4Nzk1NjMu/anBlZw.jpeg"
    },
    {
      "RecordName": "The Frank Sinatra Story",
      "Artist": "Frank Sinatra",
      "DateReleased": 1958,
      "Genre": "Jazz",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/-UPjHUnrroqoQJ2w-de-l1JjIpjzODqjPDqrB5izpeg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMzQ3/MDMyLTE1NTI1MTE3/ODYtNDIxMi5qcGVn.jpeg"
    },
    {
      "RecordName": "Bop Stew",
      "Artist": "The Phil Woods Quintet",
      "DateReleased": 1988,
      "Genre": "Jazz",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/YCUS5eEjTcw8xontQaqXsxJjsKoxTgOhZWwaDbqgRnM/rs:fit/g:sm/q:90/h:496/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4Mzk3/NjgtMTM1NjU2MjYy/Ni05NTA4LmpwZWc.jpeg"
    },
    {
      "RecordName": "Pisces, Aquarius, Capricorn & Jones",
      "Artist": "The Monkees",
      "DateReleased": 1967,
      "Genre": "Pop; Rock",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/eUSg52ps0txr5huU0RRC4abXJeTYsR-Bd3CMaAy_-1Q/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMjQz/NTctMTU4MDcwOTc3/Ny0yMTExLmpwZWc.jpeg"
    },
    {
      "RecordName": "Unmistakably Lou",
      "Artist": "Lou Rawls",
      "DateReleased": 1977,
      "Genre": "Funk; Soul",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/UKtR3l-PhyebL7dOtefFM-U8SLasJY9rBSHw4Ovnovs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTkz/Mzk2LTE2NTE2NzU3/NjktODQzMy5qcGVn.jpeg"
    },
    {
      "RecordName": "Tenement Steps",
      "Artist": "The Motors",
      "DateReleased": 1980,
      "Genre": "Rock",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/aVqiARVib0-iXVtgYBZ0DxUcbLbx1iBI_GSU3L6TfHc/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4Mjk3/NzktMTQ4OTM5NzQz/NS04MTc2LmpwZWc.jpeg"
    },
    {
      "RecordName": "Love Will Live",
      "Artist": "Zeno",
      "DateReleased": 1986,
      "Genre": "Rock",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://images.recordsale.de/430/430/zeno_love-will-live_1.jpg"
    },
    {
      "RecordName": "Mozart Flute Concerto GK 313",
      "Artist": "Wolfgang Mozart",
      "DateReleased": 1971,
      "Genre": "Opera",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/znYq1ZfUZMxFoLU-8nletdNrnH-rtuK7a7hpmSfVxbc/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMTUw/ODItMTQzMTQyODgz/Mi03NzU4LmpwZWc.jpeg"
    },
    {
      "RecordName": "A Written Testimony",
      "Artist": "Jay Electronica",
      "DateReleased": 2020,
      "Genre": "Hip Hop",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/taMexVjxMzXfBRvSoJUjqa9rNZsipI7aqenqxJ6VSpM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NDc4/MTIxLTE2MDg2Nzg3/NjItMzk2MS5qcGVn.jpeg"
    },
    {
      "RecordName": "Live!",
      "Artist": "Fela Kuti; Africa 70; Ginger Baker",
      "DateReleased": 1971,
      "Genre": "Jazz; Funk; Soul",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/mmoWHeSnaP2Oi1K7_04QMJfBqZvNdGN3Pqz2NHbjuYg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4NjY3/NTQtMTQyNzAxNDE5/NC04NDQ4LmpwZWc.jpeg"
    },
    {
      "RecordName": "Mama’s Gun",
      "Artist": "Erykah Badu ",
      "DateReleased": 2000,
      "Genre": "Funk; Soul",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/dRamnq0vEJOdqNA95lc8tUvtHo2VIwBS_zsTDgYoHeE/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTQx/OC0xNjIyMTcxNzg0/LTc1ODQuanBlZw.jpeg"
    },
    {
      "RecordName": "The New Danger",
      "Artist": "Mos Def",
      "DateReleased": 2004,
      "Genre": "Hip Hop",
      "Language": "English",
      "RecordColor": "Black",
      "ImageLink": "https://i.discogs.com/pyabfeqhZSxGQVyTS5JBp6DnqZWmRL3Dnv8MjGmuvqg/rs:fit/g:sm/q:90/h:596/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyNDYz/OS0xMjc5NTY5ODg4/LmpwZWc.jpeg"
    }
   ]

   const albumsList = document.getElementById('albums-list')

// function renderAlbum(album) {
//   // Create .album element
//   const albumElement = document.createElement('div')

//   albumElement.classList.add('album')

//   console.log(albumElement)
//   console.log(albums[0].ImageLink)

  // Create the inner HTML content
//   const albumHTML = `
//     <img src="${album.cover_image_url}">
//     // <ul>
//     //   <li>Title: ${album.title}</li>
//     //   <li>Artist: ${album.artist}</li>
//     //   <li>Released: ${album.year_released}</li>
//     //   <li>Tracks: ${album.total_tracks}</li>
//     //   <li>Genre: ${album.genre}</li>
//     //   <li>Added By: ${album.added_by}</li>
//     //   <li>
//     //     <a href="${album.listen_url}">
//     //      Listen Here
//     //     </a>
//     //   <li>
//     // </ul>
// //   `

//   // Set the inner HTML content of the albumElement
//   albumElement.innerHTML = albumHTML

//   // Add to the list #albums-list
//   albumsList.appendChild(albumElement)
// }

// // Start App!
// albums.forEach(function(album) {
//   // if (album.year_released < 2000) {
//     renderAlbum(album)
//   // }
// })


//this is where chris started
let albumsDiv = document.querySelector(".grid");
for(let i=0; i<albums.length; i++){
    let img = document.createElement("img");
    img.src = albums[i].ImageLink;
    console.log(albumsDiv);
    albumsDiv.append(img)
}






let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
  if (state == false) {
    record.classList.add("on");
    toneArm.classList.add("play");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    record.classList.remove("on");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});