function apiMovie(){

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0986c498f06bb84d2afe90e6adecf322&language=en-US&page=1')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        getMovie(data)
    })
    .catch(function(err) {
        console.log(err)
    });
}

function getMovie(w) {
    
    let ul = document.getElementById('movie');
    const result = w.results;


    
    for(let i = 0; i < 15; i++){
        
        var html = `
        <a href='movie.html'><img src="//image.tmdb.org/t/p/w220_and_h330_face/`+ result[i].backdrop_path+`"></a>
        <h3>`+ result[i].title +`</h3><br>
        
        `
        var li= document.createElement("li");
        ul.append(li);
        li.innerHTML = html;
    }
}

window.onload = function(){
    apiMovie();
    getMovie()
}