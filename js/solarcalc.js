var moment = require('moment');

export class Age {


  constructor(species, birthday, age){
    this.species = species;
    this.birthday = new Date(birthday[0], birthday[1] -1, birthday[2], 0, 0, 0);
    this.seconds = 0;
    this.age = 0;
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
    return Math.round(this.age * 0.24 * 100) / 100;
  }
  venus(){
    return Math.round(this.age * 0.62 * 100) / 100;
  }
  mars(){
    return Math.round(this.age * 1.88 * 100) / 100;
  }
  jupiter(){
    return Math.round(this.age * 11.86 * 100) / 100;
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
