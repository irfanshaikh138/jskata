let Calculator = require("./Calculator");

// test("test1 calculator", () => {
//     expect(Calculator.add(1, 2)).toBe(3);
// })

// test("test1 calculator", () => {
//     expect(Calculator.add(1, undefined)).toBe(1);
// })

test("test1 mul", () => {
    expect(Calculator.multiply(4, 2)).toBe(8);
})


describe('addition', () => {
    test("test1 calculator", () => {
        expect(Calculator.add(1, 2)).toBe(3);
    })
    
    test("test1 calculator", () => {
        expect(Calculator.add(1, undefined)).toBe(1);
    })
  });

  describe('substraction', () =>{
      test('sub1', ()=>{
          expect(Calculator.sub(2,2)).toBe(0);
      });

      test('sub2',()=>{

        expect(Calculator.sub(3,2)).toBe(1);
      });

      test('sub3',()=>{
          expect(Calculator.sub(3,1)).toBe(2);
      })
  });





describe('multiplication: ', ()=>{
    test('mul1',()=>{
        expect(Calculator.multiply(2,2)).toBe(4);
    });

    test('mul1',()=>{
        expect(Calculator.multiply(2,3)).toBe(6);
    });

});

describe('Division: ', ()=>{
    test('div1',()=>{
        expect(Calculator.divide(4,2)).toBe(2);
    });

    test('div1',()=>{
        expect(Calculator.divide(9,3)).toBe(6);
    });

});




