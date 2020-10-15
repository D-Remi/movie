function getMovies(id) {
    id = (window.location.search).substr(1);
    fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=0986c498f06bb84d2afe90e6adecf322&language=fr-FR')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        showMovies(data);
    })
    .catch(function(err) {
        console.log(err);
    });
}

function showMovies(s){
    let title = s.original_title;
    document.getElementById('title').innerHTML = title;
    
    let img = `<img src="//image.tmdb.org/t/p/w220_and_h330_face/`+ s.backdrop_path+`">`;
    document.getElementById('img').innerHTML = img;
    
    let genre = s.genres[0].name;
    document.getElementById('genre').innerHTML = genre;

    let tag = s.tagline
    document.getElementById('tag').innerHTML = tag;

    let description = s.overview;
    document.getElementById('description').innerHTML = description;


}

window.onload = function(){
    getMovies();
}