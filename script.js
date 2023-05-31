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
  const image = document.createElement("img");
  image.src = "images/resized/logo.svg";
  image.alt = "logo";
  image.className = "modal_logo";
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
  const linksDiv = document.createElement("div");
  linksDiv.className = "link_block";
  const link1 = document.createElement("a");
  link1.href = "https://onlyfans.com/privacy";
  link1.textContent = "Privacy";
  const link2 = document.createElement("a");
  link2.href = "https://onlyfans.com/cookies";
  link2.textContent = "Cookie Notice";
  const link3 = document.createElement("a");
  link3.href = "https://onlyfans.com/terms.html";
  link3.textContent = "Terms of Service";

  modalButtons.appendChild(button18Plus);
  modalButtons.appendChild(button25Plus);
  modalButtons.appendChild(button35Plus);
  linksDiv.appendChild(link1);
  linksDiv.appendChild(link2);
  linksDiv.appendChild(link3);

  modal.appendChild(image);
  modal.appendChild(modalTitle);
  modal.appendChild(modalButtons);
  modal.appendChild(linksDiv);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  button18Plus.addEventListener("click", function () {
    window.location.href = "https://onlyfans.com/kristaizi";
  });
  button25Plus.addEventListener("click", function () {
    window.location.href = "https://onlyfans.com/kristaizi";
  });

  button35Plus.addEventListener("click", function () {
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
