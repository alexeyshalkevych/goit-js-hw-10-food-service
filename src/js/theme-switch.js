const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  themeInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
  refs.themeInput.checked = true;
  refs.body.classList.add(Theme.DARK);
}

if (currentTheme !== Theme.DARK) {
  refs.themeInput.checked = false;
  refs.body.classList.add(Theme.LIGHT);
}

const handleChange = event => {
  if (event.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);

    localStorage.setItem('theme', Theme.DARK);
  }

  if (!event.target.checked) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  }
};

refs.themeInput.addEventListener('change', handleChange);
