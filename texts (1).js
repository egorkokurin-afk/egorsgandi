document.addEventListener('DOMContentLoaded', function() {
  const current = location.pathname.split('/').pop();
  const container = document.querySelector('.more ul');
  if (!container) return;

  fetch('texts.json')
    .then(r => r.json())
    .then(texts => {
      container.innerHTML = '';
      texts.forEach(item => {
        if (item.url === current) return;
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        container.appendChild(li);
      });
    })
    .catch(() => {});
});
