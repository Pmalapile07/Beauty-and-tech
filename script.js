// ---- header menu toggle ----
  const menuBtn = document.getElementById('menu-btn');
  const menuPanel = document.getElementById('menu-panel');

  menuBtn.addEventListener('click', () => {
    const open = menuPanel.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  menuPanel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuPanel.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // ---- design-inspo upload preview ----
  const inspoInput = document.getElementById('inspo');
  const preview = document.getElementById('inspo-preview');
  const uploadBox = document.getElementById('upload-box');
  const uploadLabel = document.getElementById('upload-label');

  inspoInput.addEventListener('change', () => {
    const file = inspoInput.files[0];
    if (!file) return;
    uploadBox.classList.add('has-file');
    uploadLabel.textContent = file.name;
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });

  // ---- booking form (front-end only, no backend wired up yet) ----
  const form = document.getElementById('booking-form');
  const msg = document.getElementById('form-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // TODO: once the admin panel exists, POST this data there instead
    // of just showing a confirmation message.
    msg.classList.add('show');
    form.querySelector('button[type="submit"]').textContent = 'Request sent';
    form.querySelector('button[type="submit"]').disabled = true;
  });
