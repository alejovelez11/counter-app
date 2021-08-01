import { getUser } from "../../base/05-funciones"

describe('Pruebas de funciones', () => {
    test('should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    })
    
})
