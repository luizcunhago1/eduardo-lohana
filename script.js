// 1. CONTADOR REGRESSIVO
const weddingDate = new Date("2027-07-17T16:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 2. MODAL DE PRESENTES PIX
function openPixModal(giftName, price) {
  document.getElementById("modal-gift-title").innerText = giftName;
  document.getElementById("modal-gift-price").innerText = "R$ " + price;
  document.getElementById("pix-modal").style.display = "flex";
}

function closePixModal() {
  document.getElementById("pix-modal").style.display = "none";
}

function copyPixKey() {
  const keyInput = document.getElementById("pix-key");
  keyInput.select();
  document.execCommand("copy");
  alert("Chave PIX copiada com sucesso!");
}

// 3. ENVIO DO FORMULÁRIO RSVP
document.getElementById("rsvp-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Obrigado por confirmar sua presença!");
  this.reset();
});