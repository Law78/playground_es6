describe('Primo Esempio', () => {
  it('dovrei avere un elenco di persone', () => {
    expect(persone.length).toBeGreaterThan(0);
  });
  it('dovrei avere un riferimento all\'elemento ul', () => {
    expect(lista).toBeDefined();
  });
  it('dovrei avere un elenco di persone sull\'elemento ul', () => {
    expect(lista.childNodes.length).toBe(persone.length);
  });
  it('la terza persona in elenco è Emma', () => {
    expect(persone[2]).toBe("Emma");
  });
});

describe('Secondo Esempio', () => {
  it('il valore di es2_a non è 10 il valore di es2_b è 10', () => {
    expect(es2_a).not.toBe(10);
    expect(es2_b).toBe(10);
    expect(es2_a).not.toBe(es2_b);
  });
});

describe('Terzo Esempio', () => {
  it('la somma di es3_i + es3_j non è 2', () => {
    expect((es3_i + es3_j)).not.toBe(2);
    expect(window.es3_i).toBe(10);
  });
});

describe('Quarto Esempio', () => {
  beforeEach(() => {
    es4_a = example4();
  });
  it('es4_a è pari a 10', () => {
    expect(es4_a).toBe(10);
  });
});

describe('Quinto Esempio', () => {
  beforeEach(() => {
    es5_a_example5 = example5();
  });
  it(`la es5_a del global scope rimane pari a 10,
      mentre la es5_a di example5 verrà modificata in 30`,() => {
    expect(es5_a).toBe(10);
    expect(es5_a_example5).toBe(30);
  });
});
