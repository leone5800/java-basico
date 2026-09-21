// =====================================================================
// NAVEGAÇÃO ENTRE SEÇÕES + BARRA DE PROGRESSO
// =====================================================================
;(() => {
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("[data-section]")
  const progressLabel = document.getElementById("progress-label")
  const visited = new Set()

  function setActiveNav(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.target === id)
    })
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.getElementById(link.dataset.target)
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  })

  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.goto)
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          visited.add(entry.target.id)
          progressLabel.textContent = `${visited.size} / ${sections.length} seções vistas`
        }
        if (entry.intersectionRatio > 0.4) {
          setActiveNav(entry.target.id)
        }
      })
    },
    { threshold: [0.1, 0.4, 0.6] },
  )

  sections.forEach((section) => observer.observe(section))
})()

// =====================================================================
// QUIZ
// =====================================================================
;(() => {
  const QUESTIONS = [
    {
      code: `int a = 10;
int b = 3;
System.out.println(a % b);`,
      question: "O que aparece no console?",
      options: ["1", "3", "0", "3.33"],
      correctIndex: 0,
      explanation: "% devolve o resto da divisão. 10 dividido por 3 dá 3, e sobra 1.",
    },
    {
      code: `int a = 5;
int b = 2;
System.out.println(a / b);`,
      question: "O que aparece no console?",
      options: ["2", "2.5", "3", "0"],
      correctIndex: 0,
      explanation: "Divisão entre dois int corta a parte decimal. O resultado real é 2,5, mas o Java entrega só o 2.",
    },
    {
      code: `boolean flag = false;
System.out.println(!flag);`,
      question: "O que aparece no console?",
      options: ["true", "false", "erro de compilação", "1"],
      correctIndex: 0,
      explanation: "O operador ! inverte o valor. Como flag é false, !flag vira true.",
    },
    {
      code: `char letra = 'B';`,
      question: "Qual tipo guarda um único caractere entre aspas simples?",
      options: ["char", "String", "int", "boolean"],
      correctIndex: 0,
      explanation: "char é feito para um caractere só. String usaria aspas duplas e serve para textos.",
    },
    {
      code: `double nota = 8.0;

if (nota >= 9) {
  System.out.println("Excelente");
} else if (nota >= 7) {
  System.out.println("Bom");
} else if (nota >= 5) {
  System.out.println("Regular");
} else {
  System.out.println("Precisa estudar mais");
}`,
      question: "Com nota = 8.0, o que é impresso?",
      options: ["Bom", "Excelente", "Regular", "Precisa estudar mais"],
      correctIndex: 0,
      explanation: "8.0 não é >= 9, então pula o primeiro if. Mas é >= 7, então esse bloco roda e o Java já para de checar o resto.",
    },
    {
      code: `Scanner teclado = new Scanner(System.in);
int idade = teclado. ????? ();`,
      question: "Qual método completa a lacuna para ler um número inteiro digitado?",
      options: ["nextInt()", "nextLine()", "nextDouble()", "next()"],
      correctIndex: 0,
      explanation: "nextInt() lê exatamente um valor do tipo int digitado pelo usuário.",
    },
    {
      code: `for (int i = 1; i <= 5; i++) {
  System.out.println("Contando: " + i);
}`,
      question: "Quantas vezes a palavra \"Contando\" é impressa?",
      options: ["5", "4", "6", "infinitas vezes"],
      correctIndex: 0,
      explanation: "i começa em 1 e o laço continua enquanto i <= 5, então roda para 1, 2, 3, 4 e 5: cinco vezes.",
    },
    {
      code: `int tentativas = 0;

while (tentativas < 3) {
  System.out.println("Tentando...");
}`,
      question: "Esse código tem um problema. Qual?",
      options: [
        "Laço infinito, pois tentativas nunca muda",
        "Erro de compilação por falta de ponto e vírgula",
        "Vai imprimir só uma vez",
        "O Java para sozinho depois de 3 segundos",
      ],
      correctIndex: 0,
      explanation: "Como nada dentro do while altera a variável tentativas, a condição tentativas < 3 nunca vira falsa.",
    },
    {
      code: `int idade = 20;
boolean temIngresso = true;

if (idade >= 18 && temIngresso) {
  System.out.println("Pode entrar");
}`,
      question: "O operador && exige o quê para o bloco rodar?",
      options: [
        "As duas condições precisam ser verdadeiras",
        "Basta uma das condições ser verdadeira",
        "As duas condições precisam ser falsas",
        "Só a idade importa",
      ],
      correctIndex: 0,
      explanation: "&& é o operador \"E\": só entra no if se todas as condições ligadas por ele forem verdadeiras.",
    },
    {
      code: `int x = 9 % 2;
System.out.println(x);`,
      question: "O que aparece no console?",
      options: ["1", "4", "0", "4.5"],
      correctIndex: 0,
      explanation: "9 dividido por 2 dá 4 e sobra 1. O % devolve só o resto, que é 1.",
    },
  ]

  const state = {
    order: [],
    current: 0,
    score: 0,
    answered: false,
  }

  const cardEl = document.getElementById("quiz-question-card")
  const nextBtn = document.getElementById("quiz-next")
  const restartBtn = document.getElementById("quiz-restart")
  const restartBtn2 = document.getElementById("quiz-restart-2")
  const progressFill = document.getElementById("quiz-progress-fill")
  const progressText = document.getElementById("quiz-progress-text")
  const resultBox = document.getElementById("quiz-result")
  const resultText = document.getElementById("quiz-result-text")
  const quizApp = document.getElementById("quiz-app")

  function shuffle(array) {
    const copy = [...array]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  function buildQuestionOptions(q) {
    const withFlags = q.options.map((text, idx) => ({
      text,
      isCorrect: idx === q.correctIndex,
    }))
    return shuffle(withFlags)
  }

  function startQuiz() {
    state.order = shuffle(QUESTIONS.map((_, i) => i))
    state.current = 0
    state.score = 0
    state.answered = false
    resultBox.classList.add("hidden")
    quizApp.classList.remove("hidden")
    restartBtn.classList.add("hidden")
    renderQuestion()
  }

  function renderQuestion() {
    const qIndex = state.order[state.current]
    const q = QUESTIONS[qIndex]
    const options = buildQuestionOptions(q)
    const letters = ["A", "B", "C", "D"]

    progressFill.style.width = `${((state.current + 1) / state.order.length) * 100}%`
    progressText.textContent = `Pergunta ${state.current + 1} de ${state.order.length}`

    cardEl.innerHTML = `
      <div class="quiz-question-label">Pergunta ${state.current + 1}</div>
      <p class="quiz-question-text">${q.question}</p>
      ${q.code ? `<pre class="quiz-code"><code>${escapeHtml(q.code)}</code></pre>` : ""}
      <div class="quiz-options" id="quiz-options"></div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
    `

    const optionsWrap = cardEl.querySelector("#quiz-options")
    options.forEach((opt, i) => {
      const btn = document.createElement("button")
      btn.className = "quiz-option"
      btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${escapeHtml(opt.text)}</span>`
      btn.dataset.correct = String(opt.isCorrect)
      btn.addEventListener("click", () => selectOption(btn, q))
      optionsWrap.appendChild(btn)
    })

    state.answered = false
    nextBtn.disabled = true
    nextBtn.textContent = state.current === state.order.length - 1 ? "Ver resultado" : "Próxima pergunta"
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
  }

  function selectOption(button, q) {
    if (state.answered) return
    state.answered = true

    const allOptions = cardEl.querySelectorAll(".quiz-option")
    const isCorrect = button.dataset.correct === "true"

    allOptions.forEach((opt) => {
      opt.disabled = true
      if (opt.dataset.correct === "true") {
        opt.classList.add("correct")
      }
    })

    if (!isCorrect) {
      button.classList.add("wrong")
    } else {
      state.score += 1
    }

    const feedback = cardEl.querySelector("#quiz-feedback")
    feedback.classList.add("show", isCorrect ? "ok" : "ko")
    feedback.innerHTML = `<strong>${isCorrect ? "Isso!" : "Quase."}</strong> ${escapeHtml(q.explanation)}`

    nextBtn.disabled = false
  }

  function nextQuestion() {
    if (state.current < state.order.length - 1) {
      state.current += 1
      renderQuestion()
    } else {
      finishQuiz()
    }
  }

  function finishQuiz() {
    quizApp.classList.add("hidden")
    resultBox.classList.remove("hidden")
    const total = state.order.length
    const pct = Math.round((state.score / total) * 100)
    let msg = ""
    if (pct === 100) msg = "Perfeito! A turma dominou o conteúdo de hoje."
    else if (pct >= 70) msg = "Muito bom! Só alguns detalhes para revisar."
    else if (pct >= 40) msg = "Bom começo. Vale revisar operadores e condicionais."
    else msg = "Bora revisar o conteúdo com calma antes da próxima aula."

    resultText.textContent = `${state.score} de ${total} corretas (${pct}%). ${msg}`
  }

  nextBtn.addEventListener("click", nextQuestion)
  restartBtn.addEventListener("click", startQuiz)
  restartBtn2.addEventListener("click", startQuiz)

  startQuiz()
})()
