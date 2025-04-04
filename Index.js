function calcular() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
      
      document.getElementById('resultado').innerHTML =('Preço Final R$')+(n2-(n1/100*n2));
      document.getElementById('resultado2').innerHTML =('Subtraido do Valor Total R$')+(n1/100*n2);
  }
    
    
   // (1) Alinha em relação ao centro