document.getElementById('formCuadratica').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    const c = Number(document.getElementById('c').value);
    const out = document.getElementById('resCuadratica');
  
    if (a === 0) {
      out.textContent = 'Error: a debe ser distinto de cero.';
      return;
    }
  
    const D = b * b - 4 * a * c;
  
    if (D > 0) {
      out.textContent = 'D = ' + D +
        '\nDos raíces reales:' +
        '\nx1 = ' + ((-b + Math.sqrt(D)) / (2 * a)) +
        '\nx2 = ' + ((-b - Math.sqrt(D)) / (2 * a));
    } else if (D === 0) {
      out.textContent = 'D = 0\nUna raíz doble: x = ' + (-b / (2 * a));
    } else {
      out.textContent = 'D = ' + D +
        '\nLa ecuación no tiene raíces reales.';
    }
  });
  
  document.getElementById('formPi').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const N = Number(document.getElementById('n').value);
    const out = document.getElementById('resPi');
  
    if (!Number.isInteger(N) || N < 1 || N > 1000000) {
      out.textContent = 'Introduce un entero de 1 a 1000000.';
      return;
    }
  
    let suma = 0;
  
    for (let k = 1; k <= N; k++) {
      suma += 1 / (k * k);
    }
  
    const aprox = Math.sqrt(6 * suma);
  
    out.textContent =
      'Términos: ' + N +
      '\nSuma parcial: ' + suma.toPrecision(15) +
      '\nPi aproximado: ' + aprox.toPrecision(15) +
      '\nMath.PI: ' + Math.PI.toPrecision(15) +
      '\nError absoluto: ' +
      Math.abs(Math.PI - aprox).toExponential(6);
  });
  
  document.getElementById('formMelones').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const a = Number(document.getElementById('mA').value);
    const pa = Number(document.getElementById('pA').value);
    const b = Number(document.getElementById('mB').value);
    const pb = Number(document.getElementById('pB').value);
    const l = Number(document.getElementById('tamLote').value);
    const p = Number(document.getElementById('dinLote').value);
    const out = document.getElementById('resMelones');
  
    if (a < 1 || b < 1 || pa < 1 || pb < 1 || l < 1 || p <= 0) {
      out.textContent = 'Introduce valores positivos válidos.';
      return;
    }
  
    const separado = a / pa + b / pb;
    const total = a + b;
    const lotes = Math.floor(total / l);
    const sobrantes = total % l;
    const mezclado = lotes * p;
  
    out.textContent =
      'Ingreso por separado: ' + separado.toFixed(2) + ' dinares' +
      '\nTotal de melones: ' + total +
      '\nLotes completos: ' + lotes +
      '\nSobrantes: ' + sobrantes +
      '\nIngreso combinado: ' + mezclado.toFixed(2) + ' dinares' +
      '\nDiferencia: ' + (separado - mezclado).toFixed(2) + ' dinares';
  });
  
  function sumaDivisores(n) {
    let s = 0;
  
    for (let d = 1; d < n; d++) {
      if (n % d === 0) {
        s += d;
      }
    }
  
    return s;
  }
  
  document.getElementById('formAmigos').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const a = Number(document.getElementById('numA').value);
    const b = Number(document.getElementById('numB').value);
    const out = document.getElementById('resAmigos');
  
    if (!Number.isInteger(a) || !Number.isInteger(b) ||
        a < 1 || b < 1 || a > 1000000 || b > 1000000) {
      out.textContent = 'Introduce enteros positivos hasta 1000000.';
      return;
    }
  
    const sa = sumaDivisores(a);
    const sb = sumaDivisores(b);
    const ok = a !== b && sa === b && sb === a;
  
    out.textContent =
      'Suma de divisores propios de ' + a + ': ' + sa +
      '\nSuma de divisores propios de ' + b + ': ' + sb +
      '\nResultado: ' +
      (ok ? 'Sí, son números amigos.' : 'No son números amigos.');
  });