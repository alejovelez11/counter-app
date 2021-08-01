import {getSaludo} from '../../base/02-template-string';
describe('pruebas 02-template-string', () => {
    test('Deberia retornar Hola Alejo', () => {
        const nombre = 'Alejo'
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre)
    })
    test('Deberia retornar Hola Carlos sino recibe parametros', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos')
    })
    
})
