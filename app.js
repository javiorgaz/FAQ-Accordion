const minusNode = document.querySelectorAll('.minus-icon');
const plusNode = document.querySelectorAll('.plus-icon');


plusNode.forEach(button => {
  button.addEventListener('click', () => {
    const option = button.closest('.option');
    const text = option.querySelector('.option__text');
    const minus = option.querySelector('.minus-icon');

    text.classList.remove('hidden');
    button.classList.add('hidden');
    minus.classList.remove('hidden');

  });
});

minusNode.forEach(button => {
  button.addEventListener('click', () => {
    const option = button.closest('.option');
    const text = option.querySelector('.option__text');
    const plus = option.querySelector('.plus-icon');

    text.classList.add('hidden');
    button.classList.add('hidden');
    plus.classList.remove('hidden');

  });
});