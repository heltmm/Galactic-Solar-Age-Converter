import {Age} from './../js/solarcalc.js'

describe('Age', () => {

  it('create a new age and check birthday', () => {
    let userAge = new Age("Human", [1987,7,10]);
    debugger;
    expect(userAge.birthday.toDateString()).toEqual('Fri Jul 10 1987')
  });

  it('create a new age and check species', () => {
    let userAge = new Age("Human", [1987,7,10]);
    expect(userAge.species).toEqual("Human")
  });

  it('converts birthday into seconds alive', () => {
    let userAge = new Age("Human", [1987,7,10]);
    expect(userAge.birthToSeconds()).toEqual(userAge.seconds)
  });

  it('calucate seconds alive into age in years', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    expect(userAge.secondsToAge()).toEqual(30)
  });

  it('calucate age on mercury', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    expect(userAge.mercury()).toEqual(7)
  });

  it('calucate age on venus', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    expect(userAge.venus()).toEqual(18)
  });

  it('calucate age on mars', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    expect(userAge.mars()).toEqual(56)
  });

  it('calucate age on jupiter', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    expect(userAge.jupiter()).toEqual(355)
  });

});
