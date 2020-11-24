# JavaScript: Programando na linguagem da web

## Funções JavaScript Aprendidas

```javascript
alert(""); // Abre uma caixa de mensagem exibindo um alerta!
console.log(""); // Exibe uma mensagem no console da Devtool do navegador!
```

Como manipular a DOM da sua página HTML?

```html
<script>
  document.
</script>
```

Quando declaramos a palavra `document` dentro das tags `<script></script>`, automaticamente selecionamos a página ou a DOM inteira da página HTML

## Como **selecionar** um elemento no meu documento HTML?

Com a função `document.querySelector()` consigo selecionar qualquer elemento na DOM.  
Por exemplo:

```html
<meta charset="UTF-8" />
<h1>Título</h1>
<p>Lorem Ipsum</p>
<script>
  document.querySelector("h1"); // Colocando o nome da tag sem o sinal de < e > você consegue selecionar o elemento.
</script>
```

Podemos armazenar um elemento dentro de uma variável como por exemplo:

```html
<h1>Título</h1>
<script>
  var titulo = document.querySelector("h1"); // A variável "Título" recebe o elemento selecionado <h1>
</script>
```

Como alterar o texto de dentro do elemento h1?

```html
<h1>Título</h1>
<script>
  var titulo = document.querySelector("h1"); // A variável "Título" recebe o elemento selecionado <h1>
  titulo.textContent = "Texto alterado"; // Desta forma, alteramos o texto de dentro de um elemento selecionado que armazenamos na variável "titulo"
</script>
```
