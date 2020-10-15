function getMovies() {
    query = document.getElementById('val').value;
    if(query == ''){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0986c498f06bb84d2afe90e6adecf322&language=en-US&page=1')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            console.log(data);
            showMovies(data)
        })
        .catch(function(err) {
            console.log(err)
        });
    }else{
        fetch('https://api.themoviedb.org/3/search/movie?api_key=0986c498f06bb84d2afe90e6adecf322&language=en-US&query='+ query +'&page=1&include_adult=false')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            // console.log(data);
            showMovies(data);
        })
        .catch(function(err) {
            console.log(err)
        });
    }
}

function showMovies(m) {
    
    let ul = document.getElementById('movie');
    const result = m.results;
    //delete the LI of UL
    ul.innerHTML = ''
    for(let i = 0; i < result.length; i++) {
        let html = `
        <a href='movie.html?`+ result[i].id +`'><img src="//image.tmdb.org/t/p/w220_and_h330_face/`+ result[i].backdrop_path+`"></a>
        <h3>`+ result[i].title +`</h3><br>
        <span>`+ result[i].release_date +`</span>
        `
        let li= document.createElement("li");
        ul.append(li);
        li.innerHTML = html;
    }
    
    
}

window.onload = function(){
    getMovies();
}