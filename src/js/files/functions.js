export function burger() {
  const burgerBtn = document.querySelector('.burger__btn');
  const burgerMenu = document.querySelector('.burger__menu');
  const burgerClose = burgerMenu.querySelector('.burger__close');

  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('open');
  });

  burgerClose.addEventListener('click', closeBurger);

  burgerMenu.addEventListener('click', (e) => e.stopPropagation());

  document.addEventListener('click', (e) => {
    if (e.target !== burgerBtn) closeBurger();
  });

  function closeBurger() {
    burgerMenu.classList.remove('open');
  }
}

export function popup() {
  const popupBtn = document.querySelector('.popup__btn');
  const popupClose = document.querySelector('.popup__close');
  const popupWindow = document.querySelector('.popup__window');
  const popup = document.querySelector('.popup');

  popupWindow.addEventListener('click', (e) => e.stopPropagation());

  popupBtn.addEventListener('click', () => {
    popup.classList.add('open');
    document.body.classList.add('hidden');
  });

  popupClose.addEventListener('click', closePopup);
  document.addEventListener('click', (e) => {
    if (e.target !== popupBtn) closePopup();
  });

  function closePopup() {
    popup.classList.add('hide');
    setTimeout(() => {
      popup.classList.remove('open');
      popup.classList.remove('hide');
      document.body.classList.remove('hidden');
    }, 500);
  }
}

export function submitForm() {
  const form = document.querySelector('.popup__form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Отправка');
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          form.reset();
        }
      }
    };

    xhr.open('POST', '../mail.php', true);
    xhr.send(formData);
  });
}

export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
