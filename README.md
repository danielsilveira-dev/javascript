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

Como percorrer uma lista de pacientes em uma tabela?

Posso usar a função `querySelectorAll("")` por exemplo:

Tenho o html da seguinte forma:

- Defini todos os pacientes com a classe `paciente`.

```html
<tbody id="tabela-pacientes">
  <tr class="paciente" id="primeiro-paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">140</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
  </tr>

  <tr class="paciente">
    <td class="info-nome">João</td>
    <td class="info-peso">80</td>
    <td class="info-altura">1.72</td>
    <td class="info-gordura">40</td>
    <td class="info-imc">0</td>
  </tr>

  <tr class="paciente">
    <td class="info-nome">Erica</td>
    <td class="info-peso">54</td>
    <td class="info-altura">1.64</td>
    <td class="info-gordura">14</td>
    <td class="info-imc">0</td>
  </tr>

  <tr class="paciente">
    <td class="info-nome">Douglas</td>
    <td class="info-peso">85</td>
    <td class="info-altura">1.73</td>
    <td class="info-gordura">24</td>
    <td class="info-imc">0</td>
  </tr>
  <tr class="paciente">
    <td class="info-nome">Tatiana</td>
    <td class="info-peso">46</td>
    <td class="info-altura">1.55</td>
    <td class="info-gordura">19</td>
    <td class="info-imc">0</td>
  </tr>
</tbody>
```

No javascript,

- Criei uma variável `pacientes`, por que irei percorrer todos os pacientes.
- Criei um loop `for()` que irá percorrer todos os pacientes que forem adicionados à tabela, `pacientes[i]`

```javascript
<script>
  var pacientes = document.querySelectorAll(".paciente");

  for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
      console.log("Peso inválido!");
      pesoEhValido = false;
      tdImc.textContent = "Peso invállido!";
    }
    if (altura <= 0 || altura >= 3.0) {
      console.log("Altura inválida!");
      alturaEhValida = false;
      tdImc.textContent = "Altura invállida!";
    }
    if (pesoEhValido && alturaEhValida) {
      var imc = peso / (altura * altura);
      tdImc.textContent = imc.toFixed(2);
    }
  }
</script>
```

## Escutando Elementos

```javascript
elemento.addEventListener("click");
```

Adicionando função em um elemento com `addEventListener()`:

```html
<meta charset="UTF-8" />
<h1 class="titulo">Título</h1>
<script>
  var titulo = document.querySelector(".titulo");
  titulo.addEventListener("click", mostraMensagem);

  function mostraMensagem() {
    console.log("Olá eu fui clicado");
  }
  // Ou com função anônima
  titulo.addEventListener("click", function () {
    // Executando uma função anônima dentro do evento de clique
    console.log("Olá eu fui clicado");
  });
</script>
```

<h2>Selecionando o formulário</h2>

```javascript
var form = document.querySelector("#form-adiciona");
```

Quando seleciono um formulário com `querySelector("")` tenho uma vantagem pois consigo selecionar todos os inputs dele.  
Para selecionar um input, posso acessar ele pelo name por exemplo:

```javascript
console.log(form.altura);
```

Com isso, consigo imprimir o elemento referente ao `name="altura"`.

Para acessar somente ao valor do campo input posso fazer da seguinte forma:

```javascript
console.log(form.altura.value);
```

<h2>Como posso inserir um novo paciente?</h2>

```javascript
// Adicionando os valores do input nas variáveis
var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

// Criando um novo elemento/paciente na tabela
var pacienteTR = document.createElement("tr");

// Criando os campos para as variáveis
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

// Armazenando os valores dos campos na variável td
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;

// Jogando os valores armazenados para dentro da tr
pacienteTR.appendChild(nomeTd);
pacienteTR.appendChild(pesoTd);
pacienteTR.appendChild(alturaTd);
pacienteTR.appendChild(gorduraTd);

// Jogando a nova tr para a tabela
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTR);
```
