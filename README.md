# Roteiro da Aula — Java: Operadores, Condicionais, Scanner e Laços

Este README é o seu **script de aula**. Ele foi escrito para quem não domina Java —
cada bloco de "O que falar" vem acompanhado de um "Para você entender" explicando
o conceito em português simples, sem jargão. Você pode ler quase palavra por palavra
se quiser, mas o ideal é usar como apoio e falar com suas palavras.

O site (`index.html`) é o material visual que você vai projetar para a turma.
Ele tem 6 seções: **Início, Operadores, Condicionais, Scanner, Laços e Quiz** —
na mesma ordem deste roteiro. Use o menu do topo do site para navegar entre elas
durante a aula.

> **Turma:** já sabe `System.out.println()`, `int`, `double` e um pouco de `String`.
> **Duração:** 150 minutos.

---

## Como rodar o site

```bash
node server.js
```

Depois abra `http://localhost:3000` no navegador (ou no projetor da sala).

---

## Visão geral do tempo (150 minutos)

| Bloco | Duração | Seção do site |
|---|---|---|
| 1. Abertura e revisão | 10 min | Início |
| 2. Tipos novos + Operadores | 30 min | Operadores |
| 3. Estruturas Condicionais | 30 min | Condicionais |
| 4. Intervalo | 10 min | — |
| 5. Scanner (entrada de dados) | 25 min | Scanner |
| 6. Laços de Repetição | 25 min | Laços |
| 7. Quiz + fechamento | 20 min | Quiz |

Sobram ~10 minutos de folga — use para dúvidas ou para repetir um exercício que a
turma achou difícil.

---

## Bloco 1 — Abertura e revisão (10 min)

### O que falar

> "Bom dia, gente! Hoje a nossa aula é sobre como fazer o Java **tomar decisões** e
> **repetir tarefas** — duas coisas que todo programa de verdade usa. Antes de começar,
> deixa eu revisar rápido com vocês: quem lembra o que é uma variável do tipo `int`?
> E `double`? E pra que serve o `System.out.println()`?"

Deixe 2 ou 3 alunos responderem. Não precisa corrigir com rigor, só validar que a
turma lembra o básico.

> "Perfeito. Hoje vamos usar tudo isso e adicionar peças novas: dois tipos de variável
> que vocês ainda não viram, os operadores que fazem comparações e contas, comandos
> que fazem o programa escolher um caminho, um jeito de ler o que o usuário digita, e
> comandos que repetem código sem a gente copiar e colar. No final, tem um quiz pra
> testar o que vocês aprenderam."

Abra o site na seção **Início** e mostre os dois cards: "O que vocês já sabem" e
"O que vamos aprender hoje". Isso ajuda a turma a se situar.

### Para você entender (contexto, não precisa falar isso em voz alta)

Essa abertura é só para "aquecer" a turma e vincular o conteúdo novo ao que já foi
ensinado. Pedagogicamente, começar perguntando o que eles já sabem funciona melhor
do que só recapitular você mesmo.

---

## Bloco 2 — Tipos novos e Operadores (30 min)

Navegue para a seção **Operadores** no site.

### O que falar — tipos `boolean` e `char`

> "Antes de falar de operadores, preciso apresentar dois tipos de variável novos.
> O primeiro é o `boolean`. Diferente do `int`, que guarda qualquer número, o
> `boolean` só pode guardar **duas coisas**: `true` (verdadeiro) ou `false` (falso).
> É basicamente a resposta de uma pergunta de sim ou não."

> "O segundo é o `char`. Ele guarda **um único caractere** — uma letra, um número
> como texto, um símbolo — e sempre entre aspas simples, assim: `'A'`. É diferente
> de `String`, que guarda um texto inteiro entre aspas duplas."

**Pergunte para a turma:** "Qual a diferença entre guardar `'A'` num `char` e
guardar `"A"` numa `String`?" (Resposta esperada: char é só um caractere com aspas
simples; String é um texto, mesmo que tenha só uma letra, com aspas duplas.)

### Para você entender

- `boolean` é o tipo que representa verdadeiro/falso. Ele vai aparecer o tempo todo
  hoje porque toda condição de `if` e de laço é, no fundo, um `boolean`.
- `char` usa aspas simples (`'A'`); `String` usa aspas duplas (`"A"`). É um erro
  comum dos alunos confundir isso — vale reforçar.

### O que falar — Operadores Aritméticos

> "Vocês já usam `+`, `-`, `*` para somar, subtrair e multiplicar. Hoje eu quero
> apresentar dois operadores que têm uma pegadinha."

Mostre a tabela de operadores aritméticos no site.

> "O primeiro é a divisão `/`. Quando eu divido dois números `int`, o Java **corta**
> a parte decimal do resultado — ele não arredonda, só descarta. Por exemplo, `5 / 2`
> devolve `2`, não `2.5`."

> "O segundo é o `%`, chamado de módulo ou resto. Ele não calcula o resultado da
> divisão, ele calcula **o que sobra**. `5 % 2` é `1`, porque 5 dividido por 2 dá 2
> e sobra 1."

Mostre o exemplo de código `Modulo.java` no site (com `a = 10`, `b = 3`) e **pergunte
antes de rodar/revelar**: "O que vocês acham que aparece no console?" Deixe a turma
chutar antes de confirmar a resposta (`1`).

### Para você entender

- Divisão de `int` por `int` em Java **nunca** dá casa decimal — mesmo que o
  resultado matemático tenha. `7 / 2` é `3`, não `3.5`. Só teria casa decimal se
  pelo menos um dos números fosse `double`.
- `%` (módulo) é extremamente usado para: descobrir se um número é par/ímpar
  (`numero % 2 == 0`), ou "dar a volta" em contadores (ex: relógio, dias da semana).
- Não precisa aprofundar em número par/ímpar agora — isso vai aparecer naturalmente
  no quiz.

### O que falar — Operadores Relacionais

> "Esses operadores comparam dois valores e o resultado é sempre um `boolean` —
> ou é verdadeiro, ou é falso, não tem meio termo."

Mostre a tabela: `==`, `!=`, `>`, `<`, `>=`, `<=`.

> "Atenção com uma coisa importante: para **comparar** se dois valores são iguais,
> usamos `==`, dois sinais de igual. Um único `=` é para **guardar** um valor numa
> variável. São coisas bem diferentes."

**Pergunte:** "Se a variável `idade` vale `18`, o que `idade >= 18` retorna?"
(Resposta: `true`.)

### Para você entender

Esse é um dos erros mais comuns de quem está começando: confundir `=` (atribuição,
"guarde este valor aqui") com `==` (comparação, "esses dois valores são iguais?").
Vale a pena repetir esse ponto — pode aparecer no quiz e vocês vão ver alunos errando.

### O que falar — Operadores Lógicos

> "E se eu precisar checar mais de uma condição ao mesmo tempo? Por exemplo: 'a
> pessoa só pode entrar se tiver mais de 18 anos **e** tiver o ingresso'. Para isso
> existem os operadores lógicos."

Mostre a tabela: `&&` (E), `||` (OU), `!` (NÃO).

> "`&&` é o 'E': as duas condições precisam ser verdadeiras para o resultado ser
> verdadeiro. `||` é o 'OU': basta uma das condições ser verdadeira. E `!` inverte
> o valor — se era `true`, vira `false`, e vice-versa."

**Pergunte para a turma (deixe no quadro ou repita em voz alta):**
"Se `chove = true` e `estaFrio = false`, o que `chove || estaFrio` retorna?"
(Resposta: `true`, porque `||` só precisa de uma verdadeira.)

### Para você entender

- `&&` (E) — pense em uma dupla checagem: as duas coisas precisam estar certas.
- `||` (OU) — pense numa segunda chance: se qualquer uma das duas estiver certa,
  já basta.
- `!` — só inverte. Se você não tem certeza da resposta de um exercício com `!`, o
  truque é: resolva a parte de dentro primeiro, depois inverta o resultado.

**Encerre o bloco com a "Verificação Rápida" que já está no site:** "Se `x = 7`, o
que `x % 2 == 0` retorna?" (Resposta: `false`, porque `7 % 2` é `1`, e `1 == 0` é
falso — ou seja, 7 não é par.)

---

## Bloco 3 — Estruturas Condicionais (30 min)

Navegue para a seção **Condicionais** no site.

### O que falar — `if` / `else`

> "Agora que sabemos fazer perguntas com os operadores, vamos ensinar o programa a
> **decidir** o que fazer dependendo da resposta. Para isso usamos o `if`, que
> significa 'se'."

Mostre o exemplo `Idade.java`:

> "Aqui a gente diz: **se** `idade >= 18` for verdadeiro, imprime 'Maior de idade'.
> Senão — `else` — imprime 'Menor de idade'. Só um dos dois blocos roda, nunca os
> dois."

**Pergunte:** "Se eu mudar a variável `idade` para `15`, qual mensagem aparece?"

### Para você entender

- `if` testa uma condição (um `boolean`). Se for `true`, executa o bloco de dentro
  das chaves `{ }`. Se for `false`, pula esse bloco.
- `else` é o "caso contrário" — só roda quando o `if` não rodou.
- Não é obrigatório ter `else`. Pode existir um `if` sozinho.

### O que falar — `else if` (mais de duas opções)

> "E quando existem mais de duas possibilidades? Por exemplo, converter uma nota
> em conceito: Excelente, Bom, Regular ou Precisa estudar mais. Para isso, encadeamos
> vários `else if`."

Mostre o exemplo `Nota.java` no site.

> "O Java testa de cima para baixo. Ele olha o primeiro `if`: a nota é maior ou
> igual a 9? Se não for, vai para o próximo: é maior ou igual a 7? E assim por
> diante. No momento em que uma condição é verdadeira, ele executa aquele bloco
> **e para de checar o resto** — não continua testando as condições de baixo."

Chame atenção para o quadro de destaque (callout) do site: **"Ordem importa!"**

> "Isso é importante: se eu tivesse colocado a condição `nota >= 5` **antes** da
> `nota >= 7`, uma nota 8 cairia no 'Regular' errado, porque 8 também é maior que 5.
> A ordem das comparações muda o resultado."

**Pergunte (está no site como 'Verificação Rápida'):** "Com a nota `8.0`, qual
mensagem seria impressa?" Deixe a turma pensar e discutir antes de confirmar.
(Resposta: "Bom" — porque 8 não é `>= 9`, mas é `>= 7`.)

### Para você entender

Esse é o conceito mais importante do bloco: **o Java para no primeiro `if`/`else if`
verdadeiro e ignora o resto**, mesmo que outra condição também fosse verdadeira. Por
isso a ordem das comparações (de "mais restritiva" para "menos restritiva", ou vice
e versa, dependendo do caso) muda completamente o resultado. Se um aluno perguntar
"e se eu trocar a ordem?", a resposta certa é: "o resultado pode mudar, porque o
Java testa em sequência e para no primeiro que der certo."

---

## Intervalo (10 min)

Aproveite para tirar dúvidas individuais ou deixar a turma respirar. Se sobrar tempo
aqui, é um bom momento para revisar rapidamente `&&`, `||` e a ordem dos `else if`,
que costumam ser os pontos de mais dúvida.

---

## Bloco 4 — Scanner: entrada de dados (25 min)

Navegue para a seção **Scanner** no site.

### O que falar

> "Até agora, todo valor das nossas variáveis já vinha fixo no código, escrito por
> nós. Mas um programa de verdade normalmente precisa perguntar algo para quem está
> usando ele — o nome da pessoa, a idade, uma opção de menu. Para isso, o Java tem
> uma ferramenta chamada `Scanner`."

Mostre o exemplo `Entrada.java` no site, linha por linha:

> "Primeiro, a linha `import java.util.Scanner;` no topo do arquivo — isso avisa o
> Java que vamos usar essa ferramenta. Depois, essa linha aqui: `Scanner teclado =
> new Scanner(System.in);` — isso 'liga' o leitor de teclado. Não precisam entender
> o porquê de cada palavra dessa linha hoje, só saibam que ela sempre vem assim,
> igual, no começo do programa."

> "Depois disso, é só usar o `teclado` para ler o que a pessoa digitar. Se eu quero
> ler um texto, uso `teclado.nextLine()`. Se eu quero ler um número inteiro, uso
> `teclado.nextInt()`."

Mostre a tabela de métodos do site: `nextLine()`, `nextInt()`, `nextDouble()`.

> "Ou seja: cada método serve para ler um tipo diferente. Texto usa `nextLine()`,
> número inteiro usa `nextInt()`, número com casa decimal usa `nextDouble()`."

### Para você entender (isso é importante ler antes da aula)

- `Scanner` é uma classe do Java que "escuta" o que o usuário digita no console e
  entrega esse valor para o programa guardar numa variável.
- A linha `Scanner teclado = new Scanner(System.in);` você pode tratar como uma
  "fórmula mágica" que sempre se repete — o importante pedagogicamente hoje é usar,
  não entender profundamente o que é `System.in` ou o `new`.
- **Ponto de atenção real (mencione como curiosidade, não aprofunde):** se o código
  usa `nextInt()` e depois `nextLine()` em sequência, pode dar um comportamento
  estranho, porque o `nextInt()` não "limpa" a quebra de linha que a pessoa digitou.
  Isso é avançado — o site já traz esse aviso na caixa amarela "Cuidado clássico".
  Se um aluno perguntar por que o programa "pulou" uma pergunta, é provavelmente
  isso. Você pode responder: "boa pergunta, isso é um detalhe mais avançado do
  Scanner que a gente vai ver com calma em outra aula — por hoje, o importante é
  saber qual método usar para cada tipo."

**Pergunte (está no site):** "Qual método do Scanner eu uso para ler a idade de
alguém como número inteiro?" (Resposta: `nextInt()`.)

### Sugestão de exercício rápido em voz alta (opcional, 5 min)

Peça para a turma "montar de boca", frase por frase, um programinha que pergunta o
nome (`String`, `nextLine()`) e a idade (`int`, `nextInt()`) de alguém, e depois
imprime as duas coisas juntas com `+`. Isso já é revisão de concatenação de String,
que eles já conhecem, aplicada ao conteúdo novo.

---

## Bloco 5 — Laços de Repetição (25 min)

Navegue para a seção **Laços** no site.

### O que falar — `for`

> "Última ferramenta de hoje: os laços de repetição. Eles servem para repetir um
> bloco de código várias vezes, sem a gente precisar copiar e colar a mesma linha
> um monte de vezes."

> "O primeiro é o `for`, e ele é ideal quando eu **já sei** quantas vezes eu quero
> repetir."

Mostre o exemplo `Contador.java`:

> "O `for` tem três partes, separadas por ponto e vírgula. A primeira, `int i = 1`,
> é onde o contador começa. A segunda, `i <= 5`, é a condição — enquanto ela for
> verdadeira, o laço continua. E a terceira, `i++`, é o que muda a cada volta —
> nesse caso, soma 1 no `i`."

**Pergunte (está no site):** "Quantas vezes a palavra 'Contando' é impressa nesse
exemplo?" Deixe a turma contar nos dedos. (Resposta: 5 vezes — de `i = 1` até
`i = 5`.)

### Para você entender

- `for` é usado quando o número de repetições é conhecido ou calculável antes de
  começar (ex: "repita 10 vezes", "para cada item de uma lista").
- `i++` é um jeito resumido de escrever `i = i + 1`. Se um aluno perguntar, essa é
  a explicação simples.
- Erro comum: usar `<` no lugar de `<=` (ou vice-versa) e a repetição sair com uma
  volta de mais ou de menos. Se sobrar tempo, vale mostrar rapidamente essa diferença
  no quadro.

### O que falar — `while`

> "O segundo laço é o `while`, e ele é ideal quando eu **não sei** exatamente quantas
> vezes vou repetir — eu só sei **até quando**."

Mostre o exemplo `Senha.java`:

> "Aqui a gente repete enquanto `tentativas` for menor que 3. Reparem que, dentro do
> laço, a variável `tentativas` aumenta uma unidade a cada volta — é isso que garante
> que, um dia, a condição vai virar falsa e o laço vai parar."

Chame atenção para o quadro amarelo de aviso no site: **"Loop infinito"**.

> "E se eu esquecer essa linha que aumenta o `tentativas`? A condição nunca vira
> falsa, e o laço repete para sempre — isso se chama **loop infinito**, e é um dos
> erros mais comuns de quem está aprendendo. Sempre perguntem para vocês mesmos:
> 'existe algo aqui dentro que muda a condição do laço?'"

**Pergunte (fixação):** "No exemplo do `while` do site, o que aconteceria se eu
apagasse a linha `tentativas = tentativas + 1;`?" (Resposta: o laço nunca para —
loop infinito.)

### Para você entender

- `while` testa a condição **antes** de cada repetição. Se a condição já começar
  falsa, o laço nunca roda nenhuma vez.
- O erro de "loop infinito" é tão comum que praticamente todo programador já passou
  por isso. Pode tranquilizar a turma dizendo que é normal errar isso no começo.

---

## Bloco 6 — Quiz e fechamento (20 min)

Navegue para a seção **Quiz** no site.

### O que falar

> "Para fechar a aula de hoje, vamos fazer um quiz rápido com 10 perguntas. Elas
> misturam tudo que vimos: operadores, condicionais, Scanner e laços. Leiam o código
> de cada pergunta com calma antes de responder — e um aviso: nem sempre a resposta
> mais longa é a certa, então não tentem adivinhar só pelo tamanho da frase!"

Deixe a turma responder em voz alta, uma pergunta por vez, discutindo antes de você
revelar a resposta (o próprio site já mostra o certo/errado e uma explicação depois
de escolher).

Ao final, o site mostra a pontuação da turma. Use isso para fechar a aula:

> "Muito bem, pessoal! Essa foi a nossa aula de hoje: operadores, condicionais,
> Scanner e laços. Na próxima aula, ainda vamos falar sobre Java, então guardem
> essas quatro ferramentas na cabeça — vocês vão usá-las o tempo todo."

### Para você entender

O quiz já está pronto no site com 10 perguntas, sempre embaralhadas (tanto a ordem
das perguntas quanto a ordem das alternativas), então cada turma/execução vê uma
ordem diferente. Isso evita que "quem sentar mais na frente" simplesmente decore a
posição da resposta certa. As explicações de cada resposta já aparecem
automaticamente na tela depois que o aluno escolhe — você não precisa memorizar as
respostas, só acompanhar junto com a turma.

---

## Perguntas que a turma pode fazer (e como responder sem se enrolar)

**"Por que `5 / 2` não dá `2.5`?"**
> "Porque quando os dois números são `int`, o Java já assume que o resultado também
> vai ser um número inteiro, e simplesmente descarta a casa decimal. Se eu quisesse
> `2.5`, pelo menos um dos dois números precisaria ser `double`."

**"Qual a diferença entre `=` e `==`?"**
> "Um sinal de igual (`=`) guarda um valor numa variável. Dois sinais (`==`) comparam
> se dois valores são iguais e o resultado é `true` ou `false`."

**"Por que usar `while` e não `for`, se dá no mesmo?"**
> "Usamos `for` quando já sabemos quantas repetições vamos precisar. Usamos `while`
> quando não sabemos o número exato, só sabemos a condição que precisa parar de ser
> verdadeira."

**"O que acontece se eu esquecer o `else`?"**
> "Nada de errado — o `else` não é obrigatório. Se a condição do `if` for falsa e não
> existir `else`, o programa simplesmente não executa nada naquele ponto e segue para
> a linha de código seguinte."

**"Posso usar `&&` e `||` juntos na mesma condição?"**
> "Pode, mas isso é um assunto mais avançado — por hoje, o importante é entender cada
> um separadamente. A gente aprofunda isso em outra aula."

---

## Checklist rápido para antes da aula

- [ ] Testar o site abrindo `http://localhost:3000` e navegando por todas as seções
- [ ] Deixar a aba/projeção na seção **Início** antes dos alunos chegarem
- [ ] Ler os quadros de destaque (verde e amarelo) de cada seção — eles resumem os
      pontos que mais geram confusão
- [ ] Revisar a tabela "Perguntas que a turma pode fazer" acima
