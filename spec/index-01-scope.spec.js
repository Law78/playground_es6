describe('Primo test', () =>{
  it('dovrei avere un elenco di persone', () =>{
    expect(persone.length).toBeGreaterThan(0);
  });
  it('dovrei avere un riferimento all\'elemento ul', () =>{
    expect(lista).toBeDefined();
  });
  it('dovrei avere un elenco di persone sull\'elemento ul', () =>{
    expect(lista.childNodes.length).toBe(persone.length);
  });
});
