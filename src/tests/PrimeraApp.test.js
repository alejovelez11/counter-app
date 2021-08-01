import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraApp', () => {
  // test('Debe de mostrar el mensaje hola soy goku', () => {
    // const saludo = 'Hola, Soy Goku';
    // const wrapper = render(<PrimeraApp saludo={saludo}/>)
    // expect(wrapper.getByText(saludo)).toBeInTheDocument();
  // })

  test('debe de mostrar <PrimeraApp /> correctamente', ()=> {
    const saludo = 'Hola, Soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar el subtitulo enviado por props', ()=> {
    const saludo = 'Hola, Soy Goku';
    const subtitulo = 'soy subt';
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>)
    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo)
  })
})