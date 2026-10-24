const demoButton = document.getElementById('demo-toggle');
const preview = document.getElementById('preview');
if (demoButton && preview) {
  const staticSources = preview.srcset;
  demoButton.hidden = false;
  demoButton.addEventListener('click', () => {
    const playing = demoButton.getAttribute('aria-pressed') !== 'true';
    preview.srcset = playing ? '' : staticSources;
    preview.src = playing ? 'assets/demo.gif' : 'assets/screenshot-strip.webp';
    demoButton.setAttribute('aria-pressed', String(playing));
    demoButton.textContent = playing ? 'Stop demo' : 'Play demo';
  });
}
const copyButton = document.getElementById('copy-command');
const command = document.getElementById('brew-command');
const status = document.getElementById('copy-status');
if (copyButton && command && status && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(command.textContent);
      status.textContent = 'Commands copied.';
    } catch {
      status.textContent = 'Copy unavailable. Select the commands above to copy them.';
    }
  });
}
