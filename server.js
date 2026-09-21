// Servidor estático simples (sem dependências) para rodar o site puro HTML/CSS/JS.
const http = require("node:http")
const fs = require("node:fs")
const path = require("node:path")

const PORT = process.env.PORT || 3000
const ROOT = __dirname

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
}

const server = http.createServer((req, res) => {
  let filePath = decodeURIComponent(req.url.split("?")[0])
  if (filePath === "/") filePath = "/index.html"

  const fullPath = path.join(ROOT, filePath)

  // Evita sair da raiz do projeto
  if (!fullPath.startsWith(ROOT)) {
    res.writeHead(403)
    res.end("Proibido")
    return
  }

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
      res.end("<h1>404 - Página não encontrada</h1>")
      return
    }
    const ext = path.extname(fullPath)
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" })
    res.end(data)
  })
})

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
