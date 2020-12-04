import { statusChange, genderChange, speciesChange, originChange, locationChange, searchChange, sortCharacters} from '../src/data.js';

const results = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {"name": "Earth (C-137)", "url": ""},
    "location": {"name": "Earth (Replacement Dimension)", "url": ""},
    "image": "",
    "episode": [""],
    "url": "",
    "created": ""
  },
  {
    "id": 70,
    "name": "Concerto",
    "status": "Dead",
    "species": "Humanoid",
    "type": "",
    "gender": "Male",
    "origin": {"name": "unknown","url": ""},
    "location": {"name": "unknown", "url": ""},
    "image": "",
    "episode": [""],
    "url": "",
    "created": ""
  },
  {
    "id": 39,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {"name": "Earth (Evil Rick's Target Dimension)", "url": ""},
    "location": {"name": "Earth (Evil Rick's Target Dimension)", "url": ""},
    "image": "",
    "episode": [""],
    "url": "",
    "created": ""
  },
]



describe('filtro de mudança de status', () => {
  it('is a function', () => {
    expect(typeof statusChange).toBe('function');
  });


  it('returns nova array de status filtrada', () => {
    const resultado = statusChange({value: "Alive"}, results)
    expect(resultado[0].name).toBe("Rick Sanchez")
    expect(resultado.length).toBe(2)
  });

 
  
});


describe('filtro de mudança de gênero', () => {
  it('is a function', () => {
    expect(typeof genderChange).toBe('function');
  });

  it('returns nova array de gênero filtrada', () => {
    const resultado = genderChange({value: "Male"}, results)
    expect(resultado[0].name).toBe("Rick Sanchez")
    expect(resultado.length).toBe(2)
  });



});

describe('filtro de mudança de espécie', () => {
  it('is a function', () => {
    expect(typeof speciesChange).toBe('function');
  });

  it('returns nova array de espécie filtrada', () => {
    const resultado = speciesChange({value: "Human"}, results)
    expect(resultado[0].name).toBe("Rick Sanchez")
    expect(resultado.length).toBe(2)
  });



});

describe('filtro de mudança de lugar de origem', () => {
  it('is a function', () => {
    expect(typeof originChange).toBe('function');
  });

  it('returns nova array de lugar de origem filtrada', () => {
    const resultado = originChange({value: "Earth (C-137)"}, results)
    expect(resultado[0].name).toBe("Rick Sanchez")
    expect(resultado.length).toBe(1)
  });



});

describe('filtro de mudança de localização', () => {
  it('is a function', () => {
    expect(typeof locationChange).toBe('function');
  });

  it('returns nova array de localização filtrada', () => {
    const resultado = locationChange({value: "Earth (Replacement Dimension)"}, results)
    expect(resultado[0].name).toBe("Rick Sanchez")
    expect(resultado.length).toBe(1)
  });

});

describe('filtro de mudança no input de pesquisa', () => {
  it('is a function', () => {
    expect(typeof searchChange).toBe('function');
  });

  it('returns nova array de pesquisa filtrada', () => {
  
    const resultado = searchChange({value: name}, results)
    expect(resultado[0].name).toBe("Rick Sanchez")
    
  });



});

describe('filtro de ordenação de personagens', () => {
  it('is a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('returns nova array de personagens ordenada', () => {
    const resultado = sortCharacters("A", results)
    expect(resultado[0].name).toBe("Beth Smith")
    expect(resultado.length).toBe(3)
  });

  it('returns nova array de personagens ordenada ao contrário', () => {
    const resultado = sortCharacters("Z", results)
    expect(resultado[0].name).toBe("Rick Sanchez")
    expect(resultado.length).toBe(3)
  });

  it('returns nova array de personagens sem estar ordenada', () => {
    const resultado = sortCharacters("Sort Characters", results)
    expect(resultado[0].name).toBe("Rick Sanchez")
    expect(resultado.length).toBe(3)
  });
});

