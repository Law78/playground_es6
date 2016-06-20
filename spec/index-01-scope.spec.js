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
  it('il valore di a non è 10 il valore di b è 10', () => {
    expect(a).not.toBe(10);
    expect(b).toBe(10);
    expect(a).not.toBe(b);
  });
});

describe('Terzo Esempio', () => {
  it('la somma di i + j non è 2', () => {
    expect((i + j)).not.toBe(2);
    expect(window.i).toBe(10);
  });
});

describe('Quarto Esempio', () => {
  beforeEach(() => {
    va = example4();
  });
  it('va è pari a 10', () => {
    expect(va).toBe(10);
  });
});
