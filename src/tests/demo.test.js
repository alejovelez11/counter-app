describe('pruebas en el archivo demo.test.js', ()=>{
  test('debe ser iguales dos strings', ()=> {
    const mensaje = 'Hola mundo';
    const mensaje2= `Hola mundo`
    
    expect(mensaje).toBe(mensaje2)
  })
})