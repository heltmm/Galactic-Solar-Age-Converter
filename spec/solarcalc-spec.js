import {Age} from './../js/solarcalc.js'

describe('Age', () => {

  it('create a new age', () => {
    let userAge = new Age("Human", "08/07/1987");
    debugger;
    expect(userAge.birthDate).toEqual("08/07/1987")
  });

  it('create a new age', () => {
    let userAge = new Age("Human", "08/07/1987");
    expect(userAge.species).toEqual("Human")
  });

  // it('calucate age on earth', () => {
  //   let userAge = new Age("Human", "08/07/1987");
  //   expect(age.earthYears).toEqual(30)
  // });
  //
  // it('calucate age on earth', () => {
  //   let userAge = new Age("Human", "08/07/1987");
  //   expect(age.earthYears).toEqual(30)
  // });
  //
  // it('calucate earth years into seconds', () => {
  //   let userAge = new Age("Human", "08/07/1987");
  //   expect(age.earthYears.toSeconds).toEqual(946,080,000)
  // });
});
