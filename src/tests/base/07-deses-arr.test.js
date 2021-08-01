import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en destructuracion', () => {
  test('should return  a string and number', () => {
    const arr = retornaArreglo();
    expect(arr).toEqual(['ABC', 123])
  })
  
})
