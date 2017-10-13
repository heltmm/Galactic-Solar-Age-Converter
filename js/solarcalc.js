export class Age {
  constructor(species, birthday, age){
    this.species = species;
    this.birthday = birthday;
    this.earth = age
  }
  toYears(){

  }
  yearToSeconds(year){
    return year * 31,536,000
  }
  mercury(){
    return this.earth * .24
  }
  venus(){
    return this.earth * .62
  }
  mars(){
    return this.earth * 1.88
  }
  jupiter(){
    return this.earth * 11.86
  }



}
