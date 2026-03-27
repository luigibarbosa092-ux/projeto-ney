let nomeUsuario = "";
let votou = false;

function entrar() {
  let nome = document.getElementById("nome").value.trim();
  if (nome === "") {
    alert("Digite seu nome!");
    return;
  }

  nomeUsuario = nome;

  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";

  document.getElementById("pergunta").innerText =
    nomeUsuario + ", levaria o Neymar pra Copa ou não?";

  document.getElementById("mensagem").style.display = "none";
}

function votarSim() {
  if (votou) return alert("Você já votou!");
  votou = true;
  mostrarMensagem("Parabéns! Eu levaria o Ney também 🇧🇷🔥");
  confete();
}

function votarNao() {
  if (votou) return alert("Você já votou!");
  votou = true;
  mostrarMensagem("Que pena… já perdemos a Copa 😢");
}

function mostrarMensagem(texto) {
  const msg = document.getElementById("mensagem");
  msg.innerText = texto;
  msg.style.display = "block";
}

function confete() {
  for (let i = 0; i < 100; i++) {
    let c = document.createElement("div");
    c.classList.add("confete");
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = (Math.random() * 2 + 2) + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}