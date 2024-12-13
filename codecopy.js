const copyButtonLabel = "";
const copyButtonSVG = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" class="copy-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"></path></svg>`;

let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  if (navigator.clipboard) {
    let button = document.createElement("button");
    button.classList.add("copyButton");

    button.innerHTML = `${copyButtonSVG} ${copyButtonLabel}`;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  button.innerText = "✅";
  button.classList.add("copySuccess");
  code.classList.add("copyTextSuccess");

  setTimeout(() => {
    button.innerHTML = `${copyButtonSVG} ${copyButtonLabel}`;
    button.classList.remove("copySuccess");
    code.classList.remove("copyTextSuccess");
  }, 1000);
}
