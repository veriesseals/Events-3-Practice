/**
 * 
 *      classTvShow {
 *          establish our prototype
 *          collect some data
 *          access to submit btn
 *          render cards based on inputs
 * 
 * }
 * 
 */

class TvShow {
    // ---------------------------------------------------------------
    // first method in a prototype is a constructor
    constructor() {
        this.show = {
            title: "",
            genre: "",
            char1:"",
            char2:"",
            char3:"",
            platform: "",
            yearBegan: "",
            yearEnded: "",
            numFoSeasons:"",
            director:"",
            image:"",
            rating:""

        }
    }

        // ---------------------------------------------------------------
        // Button Method
        button(){
            let button = document.getElementById('submitBtn');
            button.addEventListener('click', this.displayData);
        }
        // ----------------------------------------------------------
        // Get access to inputs from the user
        displayData(e){
            e.preventDefault();
            let inputTitle = document.getElementById('showTitle').value;
            let inputGenre = document.getElementById('showGenre').value;
            let inputChar1 = document.getElementById('char1').value;
            let inputChar2 = document.getElementById('char2').value;
            let inputChar3 = document.getElementById('char3').value;
            let inputPlatform = document.getElementById('streamingPlatform').value;
            let inputYearBegan = document.getElementById('yearBegan').value;
            let inputYearEnded = document.getElementById('yearBegan').value;
            let inputNumOfSeasons = document.getElementById('numOfSeasons').value;
            let inputDirector = document.getElementById('director').value;
            let inputImage = document.getElementById('image').value;
            let inputRating = document.getElementById('rating').value;

            this.show = {
                title: inputTitle,
                genre: inputGenre,
                char1: inputChar1,
                char2: inputChar2,
                char3: inputChar3,
                platform: inputPlatform,
                yearBegan: inputYearBegan,
                yearEnded: inputYearEnded,
                numFoSeasons: inputNumOfSeasons,
                director: inputDirector,
                image: inputImage,
                rating:inputRating

            };

            // console.log(this.show);

            let cardDisplay = document.getElementById('cardDisplay');
            cardDisplay.innerHTML += `
                <div class="card mb-3">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this.show.image}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h2 class="card-title">${this.show.title}</h2>
                            <p class="card-text">${this.show.genre}</p>
                            <p class="card-text">${this.show.director}</p>
                            <p class="card-text">${this.show.yearBegan}</p>
                            <p class="card-text">${this.show.yearEnded}</p>
                            <p class="card-text">${this.show.numFoSeasons}</p>
                            <p class="card-text">${this.show.platform}</p>
                            <p class="card-text">${this.show.char1}</p>
                            <p class="card-text">${this.show.char2}</p>
                            <p class="card-text">${this.show.char3}</p>
                            <p class="card-text"><small class="text-muted">${this.show.rating}</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
            `

        };

};


let action = new TvShow();
action.button();