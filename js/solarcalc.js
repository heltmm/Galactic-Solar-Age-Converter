var moment = require('moment');

export class Age {
  constructor(species, birthday, age){
    this.species = species;
    this.birthday = new Date(birthday[0], birthday[1] -1, birthday[2], 0, 0, 0);
    this.seconds = 0;
    this.age = 0;
    this.life = 0;
  }

  setLife(){
    if(this.species === "Human"){
      if(birthday[0] > 1985){
        this.life = 85;
      }
      else if(bithday[0] > 1970){
        this.life = 83;
      }
      else{
        this.life = 80;
      }
    }
    if(this.species === "Dog"){
      this.life = 11;
    }
    return this.life
  }

  birthToSeconds(){
    let today_seconds = Date.parse(moment().format())/1000
    let birth_seconds = Date.parse(this.birthday)/1000
    this.seconds = today_seconds - birth_seconds;
    return this.seconds
  }

  secondsToAge(){
    this.age = Math.floor(this.seconds / 31536000);
    return this.age
  }

  mercury(){
    return Math.floor(this.age * 0.24);
  }

  venus(){
    return Math.floor(this.age * 0.62);
  }

  mars(){
    return Math.floor(this.age * 1.88);
  }

  jupiter(){
    return Math.floor(this.age * 11.86);
  }
}


// birthToYear(){
//   let age = [];
//   let year = moment().format('YYYY');
//   let month = moment().format('MM');
//   let day = moment().format('DD');
//
//   let compare_year = year - this.birthday[0];
//   let compare_month = month - this.birthday[1];
//   let compare_day = day - this.birthday[2];
//
//   if(compare_month > 0){
//     age.push(compare_year);
//     age.push(compare_month);
//     if(day - this.birthday[2] > 0){
//       age.push(compare_day);
//     }
//   }
//   return age;
// }
