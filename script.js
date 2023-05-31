function loadScript(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.href = url;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

// Usage
const cdnUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";
loadScript(cdnUrl)
  .then(() => {
    // Script loaded successfully
    // You can now use the functionality provided by the loaded script
  })
  .catch((error) => {
    // An error occurred while loading the script
    console.error("Failed to load script:", error);
  });

// modal

window.addEventListener("load", function () {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  const modal = document.createElement("div");
  modal.className = "modal";
  const modalTitle = document.createElement("h1");
  modalTitle.className = "modal_title";
  modalTitle.textContent = "Ваш возраст";
  const modalButtons = document.createElement("div");
  modalButtons.className = "modal_buttons";
  const button18Plus = document.createElement("button");
  button18Plus.textContent = "18+";
  const button25Plus = document.createElement("button");
  button25Plus.textContent = "25+";
  const button35Plus = document.createElement("button");
  button35Plus.textContent = "35+";

  modalButtons.appendChild(button18Plus);
  modalButtons.appendChild(button25Plus);
  modalButtons.appendChild(button35Plus);

  modal.appendChild(modalTitle);
  modal.appendChild(modalButtons);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  button18Plus.addEventListener("click", function() {
    window.location.href = "https://onlyfans.com/kristaizi";
  });
  button25Plus.addEventListener("click", function() {
    window.location.href = "https://onlyfans.com/kristaizi";
  });
 
  button35Plus.addEventListener("click", function() {
    window.location.href = "https://onlyfans.com/kristaizi";
  });

  void modal.offsetHeight;

  overlay.classList.add("overlay_visible");
  modal.classList.add("modal_visible");

  // content.addEventListener("click", function (e) {
  //   e.stopPropagation();
  //   // console.log(fff);
  //   if (e.target.className == "close") {
  //     overlay.style.display = "none";
  //   }
  // });
});

// modal end
