
module.exports = {

 Media: function(){


    this.volume = 23;

    this.title = "Default";

    this.lenght = 0;

    this.author = "Default";

   this.low = function(amount){

    if((this.volume - amount) < 0 ){

        this.volume = 0;

    }else{

        this.volume -=amount;

    }

};

   this.high = function(amount){

        if((amount + this.volume) > 100){

              this.volume = 100;

        }else{

              this.volume += amount;

        }

};



this.getVolume = function(){

    return this.volume;

};


this.getTitle = function(){

    return this.title;

};

this.Play = function(){

    return "Playing"+" "+ this.title+" By "+this.author+ " At volume of "+this.getVolume();

};


this.Pause = function(){

    return "Media Pause";

};



},

Audio: function(title){

this.title = title;

},



 Video: function(title){

    

    this.title = title;




},



}


