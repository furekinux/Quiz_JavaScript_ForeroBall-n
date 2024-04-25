//INFO PERSONAJE Check
function fetchStar(){
    let xhr = new XMLHttpRequest();
    let starId = document.getElementById("idstar").value;
    let url = `https://swapi.py4e.com/api/people/${starId}/`
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            displayStar(response)

        } else if(this.readyState == 4){
            console.log("Error :(",this.statusText)
        }
    }
    xhr.send();
}
function displayStar(data){
    let StarInfo = document.getElementById("starInfo");
    if (data.response === "error"){
        StarInfo.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        StarInfo.innerHTML = `
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

            <tr id="homeworld"></tr>

            <tr id="films"></tr>

            <tr id="starSpecies"></tr>

            <tr id="vehicles"></tr>

            <tr id="starships"></tr>

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
    let StarName = document.getElementById("name");
    if (data.response === "error"){
        StarName.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        StarName.innerHTML = `${data.name}`
    }
}
//INFO HOMEWORLD Check
function fetchHome(){
    let xhr = new XMLHttpRequest();
    let starId = document.getElementById("idstar").value;
    let urlStar = `https://swapi.py4e.com/api/people/${starId}/`
    xhr.open("GET",urlStar,true);
    xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText);
        let homeworldurl = response.homeworld
        let xhr = new XMLHttpRequest();
        let home_url = homeworldurl
        xhr.open("GET",home_url,true);
        xhr.onreadystatechange = function(){
        
        if(this.readyState === 4 && this.status === 200){
            let homeworld = JSON.parse(this.responseText);
            displayPlanet(homeworld)

        } else if(this.readyState == 4){
            console.log("Error :(",this.statusText)
            }
        }
            xhr.send();

    } else if(this.readyState == 4){
        console.log("Error :(",this.statusText)
        }
    }
    xhr.send();

}
function displayPlanet(data){
    let hw = document.getElementById("homeworld");
    if (data.response === "error"){
        hw.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        hw.innerHTML = `
            <table class="table table-dark">
                <tr>    
                    <th class="table-dark">Homeworld</th>
                
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

//INFO FILM
function fetchMovies(){
    let xhr = new XMLHttpRequest();
    let starId = document.getElementById("idstar").value;
    let urlStar = `https://swapi.py4e.com/api/people/${starId}/`
    xhr.open("GET",urlStar,true);
    xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText);
        let homeworldurl = response.homeworld
        let xhr = new XMLHttpRequest();
        let home_url = homeworldurl
        xhr.open("GET",home_url,true);
        xhr.onreadystatechange = function(){
        
        if(this.readyState === 4 && this.status === 200){
            let homeworld = JSON.parse(this.responseText);
            displayPlanet(homeworld)

        } else if(this.readyState == 4){
            console.log("Error :(",this.statusText)
            }
        }
            xhr.send();

    } else if(this.readyState == 4){
        console.log("Error :(",this.statusText)
        }
    }
    xhr.send();
}
function displayMovies(data){
    let LukeFilm1 = document.getElementById("films");
    if (data.response === "error"){
        LukeFilm1.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeFilm1.innerHTML = `
        <table class="table table-dark">
            <tr>    
                <th class="table-dark">Vehicles</th>
                
            <td id="the_movies"></td>
                
        
            <table class="table table-dark">
            <tr>    
                <th class="table-dark">Films</th>
                <td> 
                    <table class="table table-light">   
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
                        <td class="table-light">${data.release_date}</td>

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
            </tr>
            </table>
            </tr>
        </table>
        `
    }
}

//SPECIES Check
function fetchSpecies(){
    let xhr = new XMLHttpRequest();
    let starId = document.getElementById("idstar").value;
    let urlStar = `https://swapi.py4e.com/api/people/${starId}/`
    xhr.open("GET",urlStar,true);
    xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText);
        let species = response.species
        let xhr = new XMLHttpRequest();
        let url = species
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
        
        if(this.readyState === 4 && this.status === 200){
            let starSpecies = JSON.parse(this.responseText);
            displaySpecies(starSpecies)

        } else if(this.readyState == 4){
            console.log("Error :(",this.statusText)
            }
        }
            xhr.send();

    } else if(this.readyState == 4){
        console.log("Error :(",this.statusText)
        }
    }
    xhr.send();
}
function displaySpecies(data){
    let Species = document.getElementById("starSpecies");
    if (data.response === "error"){
        Species.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        Species.innerHTML = `
        <table class="table table-dark">
            <tr>    
                <th class="table-dark">Species</th>
                <td> 
                 
            <table class="table table-dark">     
                <tr class="table-light">
                
                    <th class="table-light">Name</th>
                    <td class="table-light">${data.name}</td>
                
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Classification</th>
                    <td class="table-light">${data.classification}</td>
            
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Designation</th>
                    <td class="table-light">${data.designation}</td>
                
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Average height</th>
                    <td class="table-light">${data.average_height}</td>
                
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Skin colors</th>
                    <td class="table-light">${data.skin_colors}</td>

                </tr>
                <tr class="table-dark">
            
                    <th class="table-light">Hair colors</th>
                    <td class="table-light">${data.hair_colors}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Eye colors</th>
                    <td class="table-light">${data.eye_colors}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Average lifespan</th>
                    <td class="table-light">${data.average_lifespan}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">language</th>
                    <td class="table-light">${data.language}</td>
            
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
        `
    }
}

//VEHICLES
function fetchVehicle(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/vehicles/14/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(this.responseText);
                console.log(response)
                displayVehicle(response)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayVehicle(data){
    let Vehicle = document.getElementById("vehicles");
    if (data.response === "error"){
        Vehicle.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        Vehicle.innerHTML = `
        <table class="table table-dark">
            <tr>    
                <th class="table-dark">Vehicles</th>
                
            <td id="the_vehicles"></td>
                
            </tr>
        </table>
        `
    }
}

function fetchStarship(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/vehicles/14/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(this.responseText);
                console.log(response)
                displayStarship(response)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayStarship(data){
    let Vehicle = document.getElementById("starships");
    if (data.response === "error"){
        Vehicle.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        Vehicle.innerHTML = `
        <table class="table table-dark">
            <tr>    
                <th class="table-dark">Starships</th>
                
                <td id="te_starships"></td>
                    
            </tr>
        </table>
        `
    }
}


function fetchInfo(){
    fetchStar()
    fetchHome()
    fetchMovies()
    fetchSpecies()
    fetchVehicle()
    fetchStarship()
}