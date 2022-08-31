const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds') //for our breed selector
  fetch(BREEDS_URL)
    .then(res => {
      return res.json();
    })

  .then(data => {
    const breedsObject = data.message; // turn the message into an object
    const breedsArray = Object.keys(breedsObject); // turn the object into an array 
    //console.log(breedsArray);
    for(let i = 0; i< breedsArray.length;i++){ //loop through our array
      const option = document.createElement('option'); // creates <option></option> if you have a bunch of options
      option.value = breedsArray[i]; // option value ='breed'
      option.innerText = breedsArray[i];
      select.appendChild(option); //attach the list of options to be used in our select drop down box
    }



  })
  select.addEventListener('change', event =>{
    //console.log(event.target.value)
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    getDoggoImg(url);
    doggoInfo.assignMf(); //calls assignmf which also calls assign name
    doggoInfo.assignAge();
    doggoInfo.assignLikes();
    doggoInfo.assignDislikes();
    doggoInfo.assignFunfact();
  }) //when a new object changes we want to pass in what the change event was

  const img = document.querySelector('.dog-img')
  const getDoggoImg = url => {
    fetch(url) //going to the api url above to get the json message
      .then(res => {
        return res.json();//get the json message back
      })
      .then(data => {
        img.src = data.message //extract message from json and attach img tag as new source
        console.log(data.message)
      })
  }

  const doggoInfo = {
    fNames: ['Arie', 'Chie', 'Coco', 'Nurry', 'Arriea', 'Polli', 'Doughnut', 'Lilly', 'Rose', 'Reina', 'Summer', "Rain", 'Whisper'],
    mNames : ['Pie', 'Snow', 'Chucks', 'Charlie', 'Rain', 'Potty', 'Ken', 'Mango', 'Albert', 'Sunny', 'Jasper', 'Plantain', 'Kofu'],
    likesList: ['Icecream', 'Snow', 'Cars', 'Teddies', 'Kisses', 'Snuggles', 'Swimming','Kids', 'Long Walks','Hiking', 'Rain'],
    dislikesList: ['Being home alone', 'Day care', 'Sun',' Thunder', 'Strangers', 'Frogs', 'Legos', 'Mud', 'Pineapples', 'Pools'],
    factList:['Remembers every person they have seen', 'Wishes they knew why it snows','Wishes they knew why everyone thinks they are cute', 'Knows exactly when the universe ends and is worried', 'wonders why babies cry everytime', 'would love to be the fastest dog on the planet'],
    MF:'',
    rname: '',
    Age:'',
    Likes:'',
    Dislikes:'',
    funfact:'',

    assignMf(){
      x = (Math.floor(Math.random() * 2) == 0)
      if(x){
        this.MF= 'Male';
        this.assignName(this.mNames)

      }else{this.MF='Female';
      this.assignName(this.fNames)

    }
    document.getElementById('MF').innerHTML = `S: ${this.MF}`

    },
    assignName(array){
      this.rname = array[Math.floor(Math.random() * array.length)]
      document.getElementById('Dog-View').innerHTML = `${this.rname}`
    },
    assignAge(){
      this.age = Math.floor(Math.random() * 16 + 1) //plus 1 sets the min value 
      document.getElementById('Age').innerHTML = `Age: ${this.age}`
    },



     shuffle(array) {
      var m = array.length, t, i;
    
      // While there remain elements to shuffle…
      while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    
      return array;
    },
  
    

    assignLikes(){
      this.likes = this.shuffle(this.likesList).slice(0,2)
      document.getElementById('Likes').innerHTML =`Likes: ${this.likes[0]}, ${this.likes[1]}`
    },
   
    assignDislikes(){
      //console.log(this.Dislikes)
      this.Dislikes = this.shuffle(this.dislikesList).slice(0,2)
      document.getElementById('Dislikes').innerHTML =`Dislikes: ${this.Dislikes[0]}, ${this.Dislikes[1]}`
    
  },
  assignFunfact(){
    this.fact = this.factList[Math.floor(Math.random() * this.factList.length)]
    document.getElementById('funfact').innerHTML = `funfact: ${this.fact}`

  }
}