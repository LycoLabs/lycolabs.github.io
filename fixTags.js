  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('code').forEach(function(block) {
      block.innerHTML = block.innerText
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    });
  });
