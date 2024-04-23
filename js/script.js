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

                    <td class="table-dark">Height:</td>
                    <td class="table-dark">${data.height}</td>

            </tr>
            <tr class="table-dark">

                    <td class="table-dark">Mass:</td>
                    <td class="table-dark">${data.mass}</td>

            </tr>
            <tr class="table-dark">

                <td class="table-dark">Hair color:</td>
                <td class="table-dark">${data.hair_color}</td>

            </tr><tr class="table-dark">

                <td class="table-dark">Eye color:</td>
                <td class="table-dark">${data.eye_color}</td>

            </tr>
            </tr><tr class="table-dark">

                <td class="table-dark">Skin color:</td>
                <td class="table-dark">${data.skin_color}</td>

            </tr>
            </tr><tr class="table-dark">

                <td class="table-dark">Birth year:</td>
                <td class="table-dark">${data.birth_year}</td>

            </tr>
            </tr><tr class="table-dark">

                <td class="table-dark">Gender:</td>
                <td class="table-dark">${data.gender}</td>

            </tr>
            <tr class="table-dark">

                <td class="table-dark">Created:</td>
                <td class="table-dark">${data.created}</td>

            </tr>
            </tr><tr class="table-dark">

                <td class="table-dark">Edited:</td>
                <td class="table-dark">${data.edited}</td>

            </tr></tr><tr class="table-dark">

                <td class="table-dark">Url:</td>
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
        
        <div class="container">
            <div class="row">
                <div class="col text-start">
                    Homeworld
                </div>
                <div class="col">
                    <table class="table table-dark">
                        
                        <tr class="table-dark">

                                <td class="table-dark">Name:</td>
                                <td class="table-dark">${data.name}</td>

                        </tr>
                        <tr class="table-dark">

                                <td class="table-dark">Orbital period:</td>
                                <td class="table-dark">${data.orbital_period}</td>

                        </tr>
                        <tr class="table-dark">

                            <td class="table-dark">Diameter:</td>
                            <td class="table-dark">${data.diameter}</td>

                        </tr><tr class="table-dark">

                            <td class="table-dark">Climate:</td>
                            <td class="table-dark">${data.climate}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Gravity:</td>
                            <td class="table-dark">${data.gravity}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Terrain:</td>
                            <td class="table-dark">${data.terrain}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Surface water:</td>
                            <td class="table-dark">${data.surface_water}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Population:</td>
                            <td class="table-dark">${data.population}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Created:</td>
                            <td class="table-dark">${data.created}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Edited:</td>
                            <td class="table-dark">${data.edited}</td>

                        </tr></tr><tr class="table-dark">

                            <td class="table-dark">Url:</td>
                            <td class="table-dark"><a href="${data.url}">${data.url}</a></td>

                        </tr>

                
                    </table>
                </div>
            </div>
        </div>

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
        
        <div class="container">
            <div class="row">
                <div class="col text-start">
                    Homeworld
                </div>
                <div class="col">
                    <table class="table table-dark">
                        
                        <tr class="table-dark">

                                <td class="table-dark">Name:</td>
                                <td class="table-dark">${data.name}</td>

                        </tr>
                        <tr class="table-dark">

                                <td class="table-dark">Orbital period:</td>
                                <td class="table-dark">${data.orbital_period}</td>

                        </tr>
                        <tr class="table-dark">

                            <td class="table-dark">Diameter:</td>
                            <td class="table-dark">${data.diameter}</td>

                        </tr><tr class="table-dark">

                            <td class="table-dark">Climate:</td>
                            <td class="table-dark">${data.climate}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Gravity:</td>
                            <td class="table-dark">${data.gravity}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Terrain:</td>
                            <td class="table-dark">${data.terrain}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Surface water:</td>
                            <td class="table-dark">${data.surface_water}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Population:</td>
                            <td class="table-dark">${data.population}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Created:</td>
                            <td class="table-dark">${data.created}</td>

                        </tr>
                        </tr><tr class="table-dark">

                            <td class="table-dark">Edited:</td>
                            <td class="table-dark">${data.edited}</td>

                        </tr></tr><tr class="table-dark">

                            <td class="table-dark">Url:</td>
                            <td class="table-dark"><a href="${data.url}">${data.url}</a></td>

                        </tr>

                
                    </table>
                </div>
            </div>
        </div>

        `
    }
}

function fetchInfo(){
    
}