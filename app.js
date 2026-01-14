const hintBtn = document.querySelector('.hint-btn');
const modal = document.getElementById('hintsModal');
const closeBtn = modal.querySelector('.close');

hintBtn.onclick = () => modal.classList.remove('hidden');
closeBtn.onclick = () => modal.classList.add('hidden');
