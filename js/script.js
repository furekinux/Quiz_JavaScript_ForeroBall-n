//INFO PERSONAJE
function fetchLucke(){
    let xhr = new XMLHttpRequest();
    let url = "https://swapi.py4e.com/api/people/1/"
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response)
            displayHero(response)

        } else if(this.readyState == 4){
            console.log("Error :(",this.statusText)
        }
    }
    xhr.send();

}
function displayHero(data){
    let LukeInfo = document.getElementById("lukeInfo");
    if (data.response === "error"){
        LukeInfo.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeInfo.innerHTML = `
        <table class="table table-dark">
                        
            <tr class="table-dark">

                    <th class="table-dark">Height</th>
                    <td class="table-dark">${data.height}</td>

            </tr>
            <tr class="table-dark">

                    <th  class="table-dark">Mass</th>
                    <td  class="table-dark">${data.mass}</td>

            </tr>
            <tr class="table-dark">

                <th  class="table-dark">Hair color</th>
                <td class="table-dark">${data.hair_color}</td>

            <tr class="table-dark">

                <th  class="table-dark">Eye color</th>
                <td class="table-dark">${data.eye_color}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Skin color</th>
                <td class="table-dark">${data.skin_color}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Birth year</th>
                <td class="table-dark">${data.birth_year}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Gender</th>
                <td class="table-dark">${data.gender}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Created</th>
                <td class="table-dark">${data.created}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Edited</th>
                <td class="table-dark">${data.edited}</td>
            </tr>
            <tr class="table-dark">

                <th class="table-dark">Url</th>
                <td class="table-dark"><a href="${data.url}">${data.url}</a></td>

            </tr>

                
        </table>
        `
    }
}
//INFO HOMEWORLD
function fetchHome(){
    let xhr2 = new XMLHttpRequest();
        let url2 = "https://swapi.py4e.com/api/planets/1/"
        xhr2.open("GET",url2,true);
        xhr2.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response2 = JSON.parse(this.responseText);
                console.log(response2)
                displayPlanet(response2)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr2.send();
}
function displayPlanet(data){
    let LukeHome = document.getElementById("lukeHome");
    if (data.response === "error"){
        LukeHome.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeHome.innerHTML = `
            <table class="table table-dark">
                <tr>    
                    <th class="tablita table-dark">Homeworld</th>
                
                    <td> 
                        <table class="table table-light">
                                
                            <tr class="table-light">
                
                                <th class="table-light">Name</th>
                                <td class="table-light">${data.name}</td>
                
                            </tr>
                            <tr class="table-light">
                
                                <th class="table-light">Orbital period</th>
                                <td class="table-light">${data.orbital_period}</td>
            
                            </tr>
                            <tr class="table-light">
                
                                <th class="table-light">Diameter</th>
                                <td class="table-light">${data.diameter}</td>
                
                            </tr>
                            <tr class="table-light">
                
                                <th class="table-light">Climate</th>
                                <td class="table-light">${data.climate}</td>
                
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Gravity</th>
                                <td class="table-light">${data.gravity}</td>

                            </tr>
                            <tr class="table-dark">
            
                                <th class="table-light">Terrain</th>
                                <td class="table-light">${data.terrain}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Surface water</th>
                                <td class="table-light">${data.surface_water}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Population</th>
                                <td class="table-light">${data.population}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Created</th>
                                <td class="table-light">${data.created}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Edited</th>
                                <td class="table-light">${data.edited}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Url</th>
                                <td class="table-light"><a href="${data.url}">${data.url}</a></td>
            
                            </tr>
                        </table>
                    </td>
                </tr>

            </table>
        
        `
    }
}
//INFO FILM 1
//"https://swapi.py4e.com/api/films/2/"
//"https://swapi.py4e.com/api/films/3/"
//"https://swapi.py4e.com/api/films/6/"
//"https://swapi.py4e.com/api/films/7/"

function fetchMovie1(){
    let xhr3 = new XMLHttpRequest();
        let url3 = "https://swapi.py4e.com/api/films/1/"
        xhr3.open("GET",url3,true);
        xhr3.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response3 = JSON.parse(this.responseText);
                console.log(response3)
                displayMovie1(response3)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr3.send();
}
function displayMovie1(data){
    let LukeFilm1 = document.getElementById("lukeFilm1");
    if (data.response === "error"){
        LukeFilm1.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeFilm1.innerHTML = `
        
            <table class="table table-dark">
                    
                <tr class="table-light">

                    <th class="table-light">Name</th>
                    <td class="table-light">${data.title}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Episode ID</th>
                    <td class="table-light">${data.episode_id}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Opening crawl</th>
                    <td class="table-light">${data.opening_crawl}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Director</th>
                    <td class="table-light">${data.director}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Producer</th>
                    <td class="table-light">${data.producer}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Release date</th>
                    <td class="table-light">${data.terrain}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Created</th>
                    <td class="table-light">${data.created}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Edited</th>
                    <td class="table-light">${data.edited}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Url</th>
                    <td class="table-light"><a href="${data.url}">${data.url}</a></td>

                </tr>
            </table>
        
        `
    }
}
window.addEventListener("load", fetchLucke(),fetchHome(), fetchMovie1());