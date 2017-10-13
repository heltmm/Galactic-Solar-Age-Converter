var moment = require('moment');

export class Age {
  constructor(species, birthday, age){
    this.species = species;
    this.birthday = new Date(birthday[0], birthday[1] -1, birthday[2], 0, 0, 0);
    this.seconds = 0;
    this.age = 0;
    this.life = 0;
    this.lifeLeft = 0;
  }

  setLife(){
    if(this.species === "Human"){
      if(this.birthday.getYear() > 85){
        this.life = 85;
      }
      else if(this.birthday.getYear() > 70){
        this.life = 83;
      }
      else{
        this.life = 80;
      }
    }
    if(this.species === "Dog"){
      this.life = 11;
    }
    return this.life;
  }
  determineLife(){
    return this.lifeLeft = this.life - this.age;
  }

  birthToSeconds(){
    let today_seconds = Date.parse(moment().format())/1000
    let birth_seconds = Date.parse(this.birthday)/1000
    this.seconds = today_seconds - birth_seconds;
    return this.seconds;
  }

  secondsToAge(){
    this.age = Math.floor(this.seconds / 31536000);
    return this.age;
  }
  //convert years, life expentance, and years remaining on mercury
  mercury(){
    let mercury = [];
    mercury.push(Math.floor(this.age * 0.24));
    mercury.push(Math.floor(this.life *0.24));
    mercury.push(mercury[1]-mercury[0])
    return mercury;
  }
  //convert years, life expentance, and years remaining on venus
  venus(){
    let venus = [];
    venus.push(Math.floor(this.age * 0.62));
    venus.push(Math.floor(this.life * 0.62));
    venus.push(venus[1]-venus[0]);
    return venus;
  }
  //convert years, life expentance, and years remaining on mars
  mars(){
    let mars = []
    mars.push(Math.floor(this.age * 1.88));
    mars.push(Math.floor(this.life * 1.88));
    mars.push(mars[1]-mars[0]);
    return mars;
  }
  //convert years, life expentance, and years remaining on jupiter
  jupiter(){
    let jupiter = [];
    jupiter.push(Math.floor(this.age * 11.86));
    jupiter.push(Math.floor(this.life * 11.86));
    jupiter.push(jupiter[1] - jupiter[0]);
    return jupiter;
  }
}
