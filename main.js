// tady je místo pro náš program

function zobraz() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
  };
  
  /**
   * Sečte dvě čísla na vstupu a vrátí výsledek
   *
   * @param {int} a
   * @param {int} b
   */
  function secti(a, b) {
    let c = a + b;
    return c;
  }
  
  let ctverecek = document.querySelector('.ctverecek')
  /**
   * Upozorní uživatele při spuštění.
   */
  let text = "Gratulace, právě jsi spustila tuto funkci!"
  function upozorni() {
    alert(text);
    console.log(text);
    ctverecek.style.lineHeight = '30px';
    ctverecek.style.paddingTop = '30px';
    ctverecek.textContent = text;
    
  }
  
  function zezelenej() {
    ctverecek.style.backgroundColor = 'green';
    ctverecek.style.color = 'white'
  }
  