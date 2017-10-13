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

  it('calculate life expectancy on earth', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.determineLife()).toEqual(55)
  });

  it('calucate age on mercury', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.mercury()[0]).toEqual(7)
  });

  it('calucate life expetancy on Merury', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.mercury()[1]).toEqual(20)
  });

  it('calucate years left on Merury', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.mercury()[2]).toEqual(13)
  });

  it('calucate age on venus', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.venus()[0]).toEqual(18)
  });

  it('calucate life expectancy on venus', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.venus()[1]).toEqual(52)
  });

  it('calucate years left venus', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.venus()[2]).toEqual(34)
  });

  it('calucate age on mars', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.mars()[0]).toEqual(56)
  });

  it('calucate life expectancy on mars', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.mars()[1]).toEqual(159)
  });

  it('calucate years left on mars', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.mars()[2]).toEqual(103)
  });

  it('calucate age on jupiter', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.jupiter()[0]).toEqual(355)
  });

  it('calucate life expectancy on jupiter', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.jupiter()[1]).toEqual(1008)
  });

  it('calucate years left on jupiter', () => {
    let userAge = new Age("Human", [1987,7,10]);
    userAge.birthToSeconds();
    userAge.secondsToAge();
    userAge.setLife();
    expect(userAge.jupiter()[2]).toEqual(653)
  });

});
