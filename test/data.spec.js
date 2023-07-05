import { filmsDirector, filteredFilms, orderFilms, percentual } from '../src/data.js';

const test = "Hayao Miyazaki";
const valor = [{ director: "Todos" }, { director: "Hayao Miyazaki" }, { director: "Isao Takahata" }]
const valorTodos = "Todos"

describe('filmsDirector', () => {
  it('is a function', () => {
    expect(typeof filmsDirector).toBe('function');
  });

  it('deve retornar o tipo "todos"', () => {
    expect(filmsDirector(valorTodos, valor)).toEqual(valor);
  });

  it('deve retornar diretores selecionados', () => {
    expect(filmsDirector(test, valor)).toEqual([{ director: "Hayao Miyazaki" }]);
  });

});

/* describe('pokeType', () => {
  it('deve ser uma função', () => {
    expect(typeof pokeType).toBe('function');
  });
  it('deve retornar o tipo "todos"', () => {
    const pokArray = [{ type: 'fire' }, { type: 'water' }, { type: 'grass' }];
    const todos = 'allPoke';
    expect(pokeType(pokArray, todos)).toEqual(pokArray);
  });
  it('deve retornar o tipo filtrado', () => {
    const pokArray = [{ type: 'fire' }, { type: 'water' }, { type: 'grass' }];
    const pokChage = 'fire';
    expect(pokeType(pokArray, pokChage)).toEqual([{ type: 'fire' }]);
  });
}); 
*/

const teste = "Castle in the Sky";
const dados = [{ title: "Todos" }, { title: "Castle in the Sky" }, { title: "My Neighbor Totoro" }]
const todosValores = "Todos"

describe('filteredFilms', () => {
  it('is a function', () => {
    expect(typeof filteredFilms).toBe('function');
  });

  it('deve retornar o tipo "todos"', () => {
    expect(filteredFilms(todosValores, dados)).toEqual(dados);
  });

  it('deve retornar filmes por título', () => {
    expect(filteredFilms(teste, dados)).toEqual([{ title: "Castle in the Sky" }]);
  });
});



describe('orderFilms', () => {
  it('is a function', () => {
    expect(typeof orderFilms).toBe('function');
  });

  it('deve retornar nomes em ordem a-z', () => {
    const films = [
      { 'title': 'Castle in the Sky' },
      { 'title': 'My Neighbor Totoro' },
    ];
    const ordenar = "a-z";
    expect(orderFilms(films, ordenar)).toEqual([
      { 'title': 'Castle in the Sky' },
      { 'title': 'My Neighbor Totoro' },
    ]);
  });

  it('deve retornar nomes em ordem z-a', () => {
    const films = [
      { 'title': 'Castle in the Sky' },
      { 'title': 'My Neighbor Totoro' },
    ];
    const ordenar = "z-a";
    expect(orderFilms(films, ordenar)).toEqual([
      { 'title': 'My Neighbor Totoro' },
      { 'title': 'Castle in the Sky' },
    ]);
  });
});



describe('testando valor percentual', () => {
  it('is a function', () => {
    expect(typeof percentual).toBe('function');
  });

  it('isso tem que dar 10% quando um valor parcial for de 10 para um valor total de 100', () => {
    const testando = 10
    const diretor = 100
    const resultado = percentual(testando, diretor)
    expect(resultado).toBe(10);
  });
});