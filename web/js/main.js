"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // polyfill flat
  if (!Array.prototype.flat) Array.prototype.flat = function () {
    return function f(arr) {
      return arr.reduce(function (a, v) {
        return Array.isArray(v) ? a.concat(f(v)) : a.concat(v);
      }, []);
    }(this);
  }; // При выборе опр. пункта появится блок с датой и временем

  var basketPayLeftSelBlock = document.querySelector('.basketPay__left-sel .block');
  var basketPayLeftSelSelect = document.querySelector('.basketPay__left-sel .mySelect');

  if (basketPayLeftSelSelect) {
    basketPayLeftSelSelect.addEventListener('change', function (e) {
      if (e.target.value == '2') {
        basketPayLeftSelBlock.classList.add('active');
      } else {
        basketPayLeftSelBlock.classList.remove('active');
      }
    });
  } // end При выборе опр. пункта появится блок с датой и временем
  // Если выбран самовывоз, то отрисуем один контент, если доставка, то другой


  var basketPayLeftWayChange = document.querySelector('.basketPay__left-way .fiter__change');
  var basketPayLeftMark = document.querySelector('.basketPay__left-mark');

  if (basketPayLeftWayChange) {
    basketPayLeftWayChange.addEventListener('change', function (e) {
      if (e.target.value == 'value-8') {
        basketPayLeftMark.innerHTML = "\n\t\t\t\t\t<p>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441:</p>\n\t\t\t\t\t<input type=\"text\">\n\t\t\t\t";
      } else {
        basketPayLeftMark.innerHTML = "\n\t\t\t\t<p>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u0448\u0438-\u043C\u0430\u0440\u043A\u0435\u0442</p>\n\t\t\t\t<label class=\"label\">\n\t\t\t\t  <select class=\"mySelect\">\n\t\t\t\t\t<option value=\"1\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u0448\u0438-\u043C\u0430\u0440\u043A\u0435\u0442</option>\n\t\t\t\t\t<option value=\"2\">\u0433. \u0412\u043E\u0440\u043E\u043D\u0435\u0436, \u0443\u043B. \u0424\u0435\u0434\u043E\u0440\u0430 \u0422\u044E\u0442\u0447\u0435\u0432\u0430, 97 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043F\u0438\u0432\u043D\u0430\u044F \u211615.</option>\n\t\t\t\t\t<option value=\"3\">\u0433. \u0412\u043E\u0440\u043E\u043D\u0435\u0436, \u0443\u043B.\u041C\u0438\u043D\u0441\u043A\u0430\u044F, 63 \u0411 \u0422\u0426 \u041C\u0430\u0433\u043D\u0438\u0442 </option>\n\t\t\t\t\t<option value=\"4\">\u0433. \u0412\u043E\u0440\u043E\u043D\u0435\u0436, \u0443\u043B. \u0410\u0434\u043C\u0438\u0440\u0430\u043B\u0430 \u0427\u0443\u0440\u0441\u0438\u043D\u0430, 2/1, \u0440\u0430\u0439\u043E\u043D \u041E\u0437\u0435\u0440\u043A\u0438 </option>\n\t\t\t\t\t<option value=\"5\">\u0433. \u0412\u043E\u0440\u043E\u043D\u0435\u0436, \u0443\u043B. \u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u0430\u044F, 84 </option>\n\t\t\t\t\t<option value=\"6\">\u043F. \u041E\u0442\u0440\u0430\u0434\u043D\u043E\u0435, \u0443\u043B. 50 \u041B\u0435\u0442 \u041E\u043A\u0442\u044F\u0431\u0440\u044F, \u0434. 95</option>\n\t\t\t\t  </select>\n\t\t\t\t</label>\n\t\t\t\t";
      }
    });
  } // end Если выбран самовывоз, то отрисуем один контент, если доставка, то другой
  // Чекинг топингов в воке и подсчет суммы


  var customCheckboxBigBgValue = document.querySelectorAll('.custom-checkbox-bigBgValue');
  var customCheckboxBigBgValueInp = document.querySelectorAll('.custom-checkbox-bigBgValue > input');
  var fullPrice = document.querySelector('.cards__item-priceSet');
  var cardsInt2 = document.querySelector('.cards__int2');

  var calcAmountGoodsIncludingToppings = function calcAmountGoodsIncludingToppings(condition, target) {
    if (condition == 'plus') {
      fullPrice.innerHTML = +fullPrice.innerHTML + +target.getAttribute('data-price') * +cardsInt2.value;
      fullPrice.setAttribute('data-vvl', fullPrice.innerHTML / +cardsInt2.value);
    } else if (condition == 'minus') {
      fullPrice.innerHTML = +fullPrice.innerHTML - +target.getAttribute('data-price') * +cardsInt2.value;
      fullPrice.setAttribute('data-vvl', fullPrice.innerHTML / +cardsInt2.value);
    }
  };

  customCheckboxBigBgValueInp.forEach(function (el) {
    if (el.checked) {
      calcAmountGoodsIncludingToppings('plus', e.target);
    }
  });
  customCheckboxBigBgValue.forEach(function (el) {
    el.addEventListener('change', function (e) {
      if (e.target.checked) {
        calcAmountGoodsIncludingToppings('plus', e.target);
      } else {
        calcAmountGoodsIncludingToppings('minus', e.target);
      }
    });
  }); // end Чекинг топингов в воке и подсчета суммы
  // Наращивание кол-ва товаров при клике и подсчет

  var productRampUp = function productRampUp(myWrap, myElems, myFullValue) {
    var wrap = document.querySelector(myWrap);
    var elems = document.querySelectorAll(myElems);
    var fullValue = document.querySelectorAll(myFullValue);
    var rez;
    var rez2;

    if (wrap) {
      wrap.addEventListener('click', function (e) {
        // e.preventDefault();
        if (e.target.classList.contains('less')) {
          elems.forEach(function (el, i) {
            if (el.getAttribute('data-card-inp') == e.target.getAttribute('data-less')) {
              if (el.value > 1) {
                +el.value--;
                rez2 = fullValue[i].getAttribute('data-vvl');
                fullValue[i].innerHTML = +fullValue[i].innerHTML - +rez2;
              }
            }
          });
        }

        if (e.target.classList.contains('more')) {
          elems.forEach(function (el, i) {
            rez = +fullValue[i].getAttribute('data-my-price');

            if (el.getAttribute('data-card-inp') == e.target.getAttribute('data-more')) {
              +el.value++;
              rez2 = fullValue[i].getAttribute('data-vvl');
              fullValue[i].innerHTML = +fullValue[i].innerHTML + +rez2;
            }
          });
        }
      });
      wrap.addEventListener('input', function (e) {
        elems.forEach(function (el, i) {
          if (e.target.getAttribute('data-card-inp-val') == i) {
            // console.log(e.target.value)
            // console.log(fullValue[i])
            rez2 = fullValue[i].getAttribute('data-vvl');
            fullValue[i].innerHTML = +rez2 * +e.target.value;
          }
        });
      });
    }
  };

  productRampUp('.cards__row', '.cards__int', '.cards__item-price');
  productRampUp('.cards__row2', '.cards__int', '.cards__item-price');
  productRampUp('.cards__item-bottom', '.cards__int2', '.cards__item-priceSet'); // Конец Наращивания кол-ва товаров при клике и подсчета
  // Рассчеты в корзине

  var productRampUpBasket = function productRampUpBasket(myWrap, myElems, myPrice, myFullValue) {
    var wrap = document.querySelector(myWrap);
    var elems = document.querySelectorAll(myElems);
    var price = document.querySelectorAll(myPrice);
    var fullValue = document.querySelectorAll(myFullValue);
    var rez;
    var orderValue = document.querySelector('.order__value');
    var tot = document.querySelector('.tot');
    var writeOff = document.querySelector('.write__off');
    var basketPayRight1HidBb = document.querySelector('.basketPay__right1-hid-b > span');
    var basketPayRight1HidBb2 = document.querySelector('.basketPay__right1-hid-b2 > span');

    if (fullValue) {
      fullValue.forEach(function (elem) {
        orderValue.innerHTML = +orderValue.innerHTML + +elem.innerHTML;
        basketPayRight1HidBb.innerHTML = +basketPayRight1HidBb.innerHTML + +elem.innerHTML;
        tot.innerHTML = +tot.innerHTML + +elem.innerHTML;
        basketPayRight1HidBb2.innerHTML = +basketPayRight1HidBb2.innerHTML + +elem.innerHTML;
      });
    }

    if (writeOff) {
      writeOff.addEventListener('change', function (e) {
        if (e.target.checked) {
          tot.innerHTML = +tot.innerHTML - +e.target.value;
          basketPayRight1HidBb2.innerHTML = +basketPayRight1HidBb2.innerHTML - +e.target.value;
        } else {
          tot.innerHTML = +tot.innerHTML + +e.target.value;
          basketPayRight1HidBb2.innerHTML = +basketPayRight1HidBb2.innerHTML + +e.target.value;
        }
      });
    }

    if (wrap) {
      wrap.addEventListener('click', function (e) {
        // e.preventDefault();
        if (e.target.classList.contains('less')) {
          elems.forEach(function (el, i) {
            if (el.getAttribute('data-card-inp') == e.target.getAttribute('data-less')) {
              if (el.value > 1) {
                +el.value--;
                var r = price[i].getAttribute('data-vl');
                fullValue[i].innerHTML = +fullValue[i].innerHTML - +r;
                orderValue.innerHTML = +orderValue.innerHTML - +r;
                basketPayRight1HidBb.innerHTML = +basketPayRight1HidBb.innerHTML - +r;
                tot.innerHTML = +tot.innerHTML - +r;
                basketPayRight1HidBb2.innerHTML = +basketPayRight1HidBb2.innerHTML - +r;
              }
            }
          });
        }

        if (e.target.classList.contains('more')) {
          elems.forEach(function (el, i) {
            if (el.getAttribute('data-card-inp') == e.target.getAttribute('data-more')) {
              +el.value++;
              var r = price[i].getAttribute('data-vl');
              fullValue[i].innerHTML = +fullValue[i].innerHTML + +r;
              orderValue.innerHTML = +orderValue.innerHTML + +r;
              basketPayRight1HidBb.innerHTML = +basketPayRight1HidBb.innerHTML + +r;
              tot.innerHTML = +tot.innerHTML + +r;
              basketPayRight1HidBb2.innerHTML = +basketPayRight1HidBb2.innerHTML + +r;
            }
          });
        }
      });
    }
  };

  productRampUpBasket('.basketPay__right1', '.cards__int2', '.cards__item-priceJS', '.cards__item-price-FULL'); // end Рассчеты в корзине
  // Вырезание и вставка элементов

  var footerWrapBottom = document.querySelector('.footer__wrap-bottom');
  var footerBotElems = document.querySelector('.footer_bot-elems');
  var footerWrapRight = document.querySelector('.footer__wrap-right');
  var footerWrapLeft = document.querySelector('.footer__wrap-left');
  var footerAddr = document.querySelector('.footer__addr');
  var footerLeft = document.querySelector('.footer__left');

  var changePositionElements = function changePositionElements() {
    if (document.documentElement.clientWidth <= 577) {
      footerWrapRight.insertAdjacentElement('beforeend', footerAddr);
      footerWrapRight.insertAdjacentElement('beforeend', footerWrapBottom);
      footerWrapRight.insertAdjacentElement('beforeend', footerBotElems);
    } else {
      footerWrapLeft.insertAdjacentElement('beforeend', footerAddr);
      footerLeft.insertAdjacentElement('beforeend', footerWrapBottom);
      footerLeft.insertAdjacentElement('beforeend', footerBotElems);
    }
  };

  changePositionElements();

  var changePositionElements2 = function changePositionElements2() {
    if (document.documentElement.clientWidth <= 992) {
      footerLeft.insertAdjacentElement('beforeend', footerAddr);
    } else {
      footerWrapLeft.insertAdjacentElement('beforeend', footerAddr);
    }
  };

  changePositionElements2();
  var assemblyRighth2 = document.querySelector('.assembly__right > h2');
  var assemblyRight = document.querySelector('.assembly__right');
  var assembly = document.querySelector('.assembly');

  var changePositionElements3 = function changePositionElements3() {
    if (assembly && assemblyRight && assemblyRighth2) {
      if (document.documentElement.clientWidth <= 992) {
        assembly.insertAdjacentElement('afterbegin', assemblyRighth2);
      } else {
        assemblyRight.insertAdjacentElement('afterbegin', assemblyRighth2);
      }
    }
  };

  changePositionElements3();
  var setEc = document.querySelector('.set__ec');
  var setLeft = document.querySelector('.set__left');
  var setRight = document.querySelector('.set__right');

  var changePositionElements4 = function changePositionElements4() {
    if (setLeft) {
      if (document.documentElement.clientWidth <= 577) {
        setRight.insertAdjacentElement('beforeend', setEc);
      } else {
        setLeft.insertAdjacentElement('beforeend', setEc);
      }
    }
  };

  changePositionElements4();
  var basketPayRight1Sm = document.querySelector('.basketPay__right1-sm-bot');
  var basketPayBottom = document.querySelector('.basketPay__bottom');
  var basketPayRight1 = document.querySelector('.basketPay__right1');
  var basketPayRight1Payment = document.querySelector('.basketPay__right1-payment');
  var basketPayRight1Comm = document.querySelector('.basketPay__right1-comm');

  var changePositionElements5 = function changePositionElements5() {
    if (basketPayRight1Sm) {
      if (document.documentElement.clientWidth <= 1199) {
        basketPayBottom.insertAdjacentElement('beforeend', basketPayRight1Sm);
        basketPayRight1.insertAdjacentElement('beforeend', basketPayRight1Payment);
      } else {
        basketPayRight1.insertAdjacentElement('beforeend', basketPayRight1Sm);
        basketPayRight1Comm.insertAdjacentElement('beforebegin', basketPayRight1Payment);
      }
    }
  };

  changePositionElements5();
  var basketPayLeftTopA = document.querySelector('.basketPay__left-top a');
  var basketPayLeftTop = document.querySelector('.basketPay__left-top');
  var basketPayLeftInputs = document.querySelector('.basketPay__left-inputs');

  var changePositionElements6 = function changePositionElements6() {
    if (basketPayLeftTopA) {
      if (document.documentElement.clientWidth <= 576) {
        basketPayLeftInputs.insertAdjacentElement('beforeend', basketPayLeftTopA);
      } else {
        basketPayLeftTop.insertAdjacentElement('beforeend', basketPayLeftTopA);
      }
    }
  };

  changePositionElements6();
  window.addEventListener('resize', function () {
    changePositionElements();
  });
  window.addEventListener('resize', function () {
    changePositionElements2();
  });
  window.addEventListener('resize', function () {
    changePositionElements3();
  });
  window.addEventListener('resize', function () {
    changePositionElements4();
  });
  window.addEventListener('resize', function () {
    changePositionElements5();
  });
  window.addEventListener('resize', function () {
    changePositionElements6();
  }); // end Вырезание и вставка элементов
  // Закрепление шапки и условие показа тех или иных эл. в шапке

  var headerBottom = document.querySelector('.header__bottom');
  var headerTopComparisonWrap = document.querySelector('.header__top-comparison-wrap');
  var headerTopHeartWrap = document.querySelector('.header__top-heart-wrap');
  var headerTopProductsWrap = document.querySelector('.header__top-products-wrap');
  var headerBottomHiddenLogo = document.querySelector('.header__bottom-hiddenLogo');
  var headerList = document.querySelector('.header__list');
  window.addEventListener('scroll', function (e) {
    // console.log(window.pageYOffset)
    if (headerBottom) {
      if (window.pageYOffset > 80 && screen.width >= 991) {
        headerBottom.classList.add('active');
        headerTopComparisonWrap.classList.add('active');
        headerTopHeartWrap.classList.add('active');
        headerTopProductsWrap.classList.add('active');
        headerBottomHiddenLogo.classList.add('active');
        headerList.classList.add('active');
      } else {
        headerBottom.classList.remove('active');
        headerTopComparisonWrap.classList.remove('active');
        headerTopHeartWrap.classList.remove('active');
        headerTopProductsWrap.classList.remove('active');
        headerBottomHiddenLogo.classList.remove('active');
        headerList.classList.remove('active');
      }
    }
  });
  var myHeader = document.querySelector('.header');
  window.addEventListener('scroll', function (e) {
    // console.log(window.pageYOffset)
    if (headerBottom) {
      if (window.pageYOffset > 2 && screen.width < 991) {
        // console.log(window.pageYOffset)
        myHeader.classList.add('active2');
      } else {
        myHeader.classList.remove('active2');
      }
    }
  }); // end Закрепление шапки и условие показа тех или иных эл. в шапке
  // замена на другую svg при клике

  var outSvg = function outSvg(myElems, nameSvg, nameSvgActive) {
    var elems = document.querySelectorAll(myElems);
    elems.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        el.classList.toggle('active');

        if (el.classList.contains('active')) {
          el.innerHTML = "\n\t\t\t\t\t<svg class=\"svg-sprite-icon icon-".concat(nameSvgActive, "\">\n\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#").concat(nameSvgActive, "\"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t");
        } else {
          el.innerHTML = "\n\t\t\t\t\t<svg class=\"svg-sprite-icon icon-".concat(nameSvg, "\">\n\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#").concat(nameSvg, "\"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t");
        }
      });
    });
  };

  outSvg('.cards__item-top-el2', 'heart2', '2');
  outSvg('.cards__item-top-el1', 'rat2', 'rat'); // end замена на другую svg при клике
  // Загрузка с компьютера пользователя на сайт(прикрепить фото)

  var inputs = document.querySelectorAll('.inputfile');
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function (e) {
      var fileName = '';
      if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else fileName = e.target.value.split('\\').pop();
      if (fileName) label.querySelector('span').innerHTML = fileName;else label.innerHTML = labelVal;
    }); // Firefox bug fix

    input.addEventListener('focus', function () {
      input.classList.add('has-focus');
    });
    input.addEventListener('blur', function () {
      input.classList.remove('has-focus');
    });
  }); // end Загрузка с компьютера пользователя на сайт(прикрепить фото)
  // Вызовы модалок

  var modalElem;
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-btn-modal]')) {
      e.preventDefault();
      var datTarget = e.target.closest('[data-btn-modal]').dataset.btnModal;

      switch (datTarget) {
        case 'creatingClient':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '800px',
            content: $globalHtmlElements.creatingClient
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'reviewsModal':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '550px',
            content: $globalHtmlElements.reviewsModal
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'modalFive':
          modalElem = $plugins.modal({
            title: 'Адреса суши-маркетов',
            closable: true,
            width: '800px',
            content: $globalHtmlElements.modalFive
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'modalAutoriz':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '800px',
            content: $globalHtmlElements.modalAutoriz
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'modalVost':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '800px',
            content: $globalHtmlElements.modalVost
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'modalReg':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '800px',
            content: $globalHtmlElements.modalReg
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        default:
          return;
      }
    }
  });
  var $globalHtmlElements = {};
  window.$globalHtmlElements = $globalHtmlElements; // Модальное окно для Развернутого отзыва

  $globalHtmlElements.creatingClient = "\n\t\t<div class=\"reviews__slider-top\">\n\t\t\t<div class=\"reviews__slider-date\">\n\t\t\t\t<svg class=\"svg-sprite-icon icon-date\">\n\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#date\"></use>\n\t\t\t\t</svg>\n\t\t\t\t<span>13.02.21</span>\n\t\t\t</div>\n\t\t\t<h3>\u0415\u043B\u0435\u043D\u0430 \u041F\u0435\u0442\u0440\u043E\u0432\u043D\u0430</h3>\n\t\t</div>\n\t\t<div class=\"reviews__slider-rev\">\n\t\t\t<div class=\"reviews__slider-img\">\n\t\t\t\t\n\t\t\t\t<div class=\"reviews__slider-img-el\">\n\t\t\t\t\t<img class=\"img\" src=\"web/images/content/rew__slide-img.png\", alt=\"slide__img\">\n\t\t\t\t\t</picture>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"reviews__slider-img-el reviews__slider-img-cl\">\n\t\t\t\t\t<div class=\"el\">\u0424\u043E\u0442\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430</div>\n\t\t\t\t\t\t<img class=\"img\" src=\"web/images/content/rew__slide-img.png\", alt=\"slide__img\">\n\t\t\t\t\t</picture>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"reviews__slider-body\">\n\t\t\t\t<a href=\"#\" class=\"reviews__slider-link\">\u0420\u043E\u043B\u043B \u201C\u0424\u0438\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0438\u044F\u201D</a>\n\t\t\t\t<div class=\"rating-result\">\n\t\t\t\t\t<span class=\"active\"></span>\n\t\t\t\t\t<span class=\"active\"></span>\n\t\t\t\t\t<span class=\"active\"></span>\n\t\t\t\t\t<span class=\"active\"></span>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>\n\t\t\t</div>\n\t\t</div>\n\t"; // Модальное окно для Написания отзыва

  $globalHtmlElements.reviewsModal = "\n\t\t<form class=\"reviewsModal\">\n\t\t\t<div class=\"reviewsModal__top\">\n\t\t\t\t<div class=\"reviewsModal__top-left\">\n\t\t\t\t\t<h6>\u0418\u043C\u044F:</h6>\n\t\t\t\t\t<input type=\"text\" placeholder=\"\u0418\u043C\u044F\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"reviewsModal__top-right\">\n\t\t\t\t\t<h6>\u0412\u0430\u0448\u0430 \u043E\u0446\u0435\u043D\u043A\u0430:</h6>\n\t\t\t\t\t<div class=\"rating-area\">\n\t\t\t\t\t\t<input id=\"star-5\" type=\"radio\" name=\"rating\" value=\"5\">\n\t\t\t\t\t\t<label for=\"star-5\" title=\"\u041E\u0446\u0435\u043D\u043A\u0430 \xAB5\xBB\"></label>\n\t\t\t\t\t\t<input id=\"star-4\" type=\"radio\" name=\"rating\" value=\"4\">\n\t\t\t\t\t\t<label for=\"star-4\" title=\"\u041E\u0446\u0435\u043D\u043A\u0430 \xAB4\xBB\"></label>\n\t\t\t\t\t\t<input id=\"star-3\" type=\"radio\" name=\"rating\" value=\"3\">\n\t\t\t\t\t\t<label for=\"star-3\" title=\"\u041E\u0446\u0435\u043D\u043A\u0430 \xAB3\xBB\"></label>\n\t\t\t\t\t\t<input id=\"star-2\" type=\"radio\" name=\"rating\" value=\"2\">\n\t\t\t\t\t\t<label for=\"star-2\" title=\"\u041E\u0446\u0435\u043D\u043A\u0430 \xAB2\xBB\"></label>\n\t\t\t\t\t\t<input id=\"star-1\" type=\"radio\" name=\"rating\" value=\"1\">\n\t\t\t\t\t\t<label for=\"star-1\" title=\"\u041E\u0446\u0435\u043D\u043A\u0430 \xAB1\xBB\"></label>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"reviewsModal__top\">\n\t\t\t\t<div class=\"reviewsModal__top-full\">\n\t\t\t\t\t<h6>\u0411\u043B\u044E\u0434\u043E:</h6>\n\t\t\t\t\t<input type=\"text\" placeholder=\"\u0411\u043B\u044E\u0434\u043E, \u043E \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0442\u0437\u044B\u0432\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"reviewsModal__top\">\n\t\t\t\t<div class=\"reviewsModal__top-full\">\n\t\t\t\t\t<h6>\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0442\u0437\u044B\u0432:</h6>\n\t\t\t\t\t<textarea></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"reviewsModal__btns\">\n\t\t\t\t<input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" data-multiple-caption=\"{count} files selected\" multiple />\n\t\t\t\t<label for=\"file\" class=\"button\">\n\t\t\t\t\t<svg class=\"svg-sprite-icon icon-download\">\n\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#download\"></use>\n\t\t\t\t</svg>\n\t\t\t\t\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u043E\u0442\u043E</label>\n\t\t\t\t<button class=\"button\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432</button>\n\t\t\t</div>\n\t\t</form>\n\t"; // Модальное окно для Написания отзыва

  $globalHtmlElements.modalFive = "\n\t\t<div class=\"header__top-addr-cont\">\n\t\t\t<div class=\"header__top-addr-cont-wrap\">\n\t\t\t\t<div class=\"header__top-addr-cont-left\">\n\t\t\t\t\t<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3A370bd1d5487e35e9cabb4d4098881b77cde74884eb0d5985957a27e060cedc27&amp;source=constructor\" width=\"500\" height=\"400\" frameborder=\"0\"></iframe>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"header__top-addr-cont-right\">\n\t\t\t\t\t<ul> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"el-left\">\n\t\t\t\t\t\t\t\t<svg class=\"svg-sprite-icon icon-map\">\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#map\"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"el-right\">\n\t\t\t\t\t\t\t\t<p>\u0443\u043B. \u0412\u043E\u0440\u043E\u043D\u0435\u0436</p><a href=\"tel: +7 999 999 99 99\">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"el-left\">\n\t\t\t\t\t\t\t\t<svg class=\"svg-sprite-icon icon-map\">\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#map\"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"el-right\">\n\t\t\t\t\t\t\t\t<p>\u0443\u043B. \u0412\u043E\u0440\u043E\u043D\u0435\u0436</p><a href=\"tel: +7 999 999 99 99\">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"el-left\">\n\t\t\t\t\t\t\t\t<svg class=\"svg-sprite-icon icon-map\">\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#map\"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"el-right\">\n\t\t\t\t\t\t\t\t<p>\u0443\u043B. \u0412\u043E\u0440\u043E\u043D\u0435\u0436</p><a href=\"tel: +7 999 999 99 99\">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"el-left\">\n\t\t\t\t\t\t\t\t<svg class=\"svg-sprite-icon icon-map\">\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#map\"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"el-right\">\n\t\t\t\t\t\t\t\t<p>\u0443\u043B. \u0412\u043E\u0440\u043E\u043D\u0435\u0436</p><a href=\"tel: +7 999 999 99 99\">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"el-left\">\n\t\t\t\t\t\t\t\t<svg class=\"svg-sprite-icon icon-map\">\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#map\"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"el-right\">\n\t\t\t\t\t\t\t\t<p>\u0443\u043B. \u0412\u043E\u0440\u043E\u043D\u0435\u0436</p><a href=\"tel: +7 999 999 99 99\">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"el-left\">\n\t\t\t\t\t\t\t\t<svg class=\"svg-sprite-icon icon-map\">\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#map\"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"el-right\">\n\t\t\t\t\t\t\t\t<p>\u0443\u043B. \u0412\u043E\u0440\u043E\u043D\u0435\u0436</p><a href=\"tel: +7 999 999 99 99\">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"; // Модальное окно для Авторизации

  $globalHtmlElements.modalAutoriz = "\n\t\t<section class=\"authorisation section-ind\">\n\t\t\t<h1>\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F</h1>\n\t\t\t<div class=\"authorisation__block\">\n\t\t\t<form class=\"authorisation__form\">\n\t\t\t\t<div class=\"authorisation__form-el\"> \n\t\t\t\t<p>\u041B\u043E\u0433\u0438\u043D:<span>*</span></p>\n\t\t\t\t<input class=\"g-input\" type=\"email\" placeholder=\"\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D (Email)\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"authorisation__form-el\"> \n\t\t\t\t<p>\u041F\u0430\u0440\u043E\u043B\u044C:<span>*</span></p>\n\t\t\t\t<input class=\"g-input\" type=\"password\" placeholder=\"\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"authorisation__form-btn\"> \n\t\t\t\t<button class=\"button\">\u0412\u043E\u0439\u0442\u0438</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"authorisation__reg\"><a class=\"button\" href=\"#\" data-btn-modal=\"modalVost\">\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</a><a class=\"button\" href=\"#\" data-btn-modal=\"modalReg\">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a></div>\n\t\t</section>\n\t"; // Модальное окно для Авторизации

  $globalHtmlElements.modalVost = "\n\t\t<section class=\"authorisation section-ind\">\n\t\t\t<h1>\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F</h1>\n\t\t\t<div class=\"authorisation__block\">\n\t\t\t<form class=\"authorisation__form\">\n\t\t\t\t<div class=\"authorisation__form-el\"> \n\t\t\t\t<p>\u041B\u043E\u0433\u0438\u043D:<span>*</span></p>\n\t\t\t\t<input class=\"g-input\" type=\"email\" placeholder=\"\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D (Email)\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"authorisation__form-btn\"> \n\t\t\t\t<button class=\"button\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t</div>\n\t\t</section>\n\t"; // Модальное окно для Авторизации

  $globalHtmlElements.modalReg = "\n        <section class=\"authorisation section-ind\">\n          <h1>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</h1>\n          <div class=\"authorisation__block\">\n            <form class=\"authorisation__form\">\n              <div class=\"authorisation__form-el\"> \n                <p>\u0418\u043C\u044F:<span>*</span></p>\n                <input class=\"g-input\" type=\"text\" placeholder=\"\u0412\u0430\u0448\u0435 \u0418\u043C\u044F\">\n              </div>\n              <div class=\"authorisation__form-el\"> \n                <p>\u041B\u043E\u0433\u0438\u043D:<span>*</span></p>\n                <input class=\"g-input\" type=\"email\" placeholder=\"\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D (Email)\">\n              </div>\n              <div class=\"authorisation__form-el\"> \n                <p>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:<span>*</span></p>\n                <input class=\"g-input numbersPhone\" type=\"text\" placeholder=\"\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\">\n              </div>\n              <div class=\"authorisation__form-el\"> \n                <p>\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:<span>*</span></p>\n                <input class=\"g-input\" type=\"text\" placeholder=\"\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441\">\n              </div>\n              <div class=\"authorisation__form-el\"> \n                <p>\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u0434\u043B\u044F \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0438 \u0441\u043A\u0438\u0434\u043E\u043A)<span>*</span></p>\n                <label class=\"calendar\">\n                  <input type=\"date\" name=\"date\">\n                </label>\n              </div>\n              <div class=\"authorisation__form-el\"> \n                <p>\u041F\u0430\u0440\u043E\u043B\u044C:<span>*</span></p>\n                <input class=\"g-input\" type=\"password\" placeholder=\"\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C\">\n              </div>\n              <div class=\"authorisation__form-el\"> \n                <p>\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:<span>*</span></p>\n                <input class=\"g-input\" type=\"password\" placeholder=\"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C\">\n              </div>\n              <div class=\"authorisation__form-btn\"> \n                <button class=\"button\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n              </div>\n            </form>\n          </div>\n        </section>\n\t"; // end modal
  // Раскрытие/скрытие выпадашек поиска и фильтра

  var mySearch = function mySearch(myTarget, myWrap, closestEl, event) {
    var target = document.querySelector(myTarget);
    var wrap = document.querySelector(myWrap);
    target.addEventListener(event, function (e) {
      if (event == 'input') {
        if (target.contains(e.target) && e.target.value.length >= 1) {
          wrap.classList.add('active');
        } else {
          target.classList.remove('active');
          wrap.classList.remove('active');
        }
      }

      if (event == 'click') {
        if (target.contains(e.target)) {
          wrap.classList.add('active');
        }
      }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest(closestEl)) {
        target.classList.remove('active');
        wrap.classList.remove('active');
      }
    });
    document.addEventListener('keyup', function (e) {
      if (e.key == 'Escape') {
        wrap.classList.remove('active');
      }
    });
  };

  mySearch('.header__bottom-inp > input', '.header__bottom-outInp', '.header__bottom-search', 'input');
  mySearch('.header__bottom-filter', '.header__bottom-filter-cont', '.header__bottom-filter-wrap', 'click'); // end Раскрытие/скрытие выпадашек поиска и фильтра
  // accordion

  var myProlapse = function myProlapse() {
    var prolapse = function prolapse(myTargets, myContents) {
      var myClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var targets = document.querySelectorAll(myTargets);
      var contents = document.querySelectorAll(myContents);
      var close = document.querySelector(myClose);
      targets.forEach(function (target) {
        target.addEventListener('click', function (e) {
          contents.forEach(function (cont) {
            if (target.getAttribute('data-linkValue') == cont.getAttribute('data-ulValue')) {
              target.classList.add('active');

              if (cont.style.maxHeight) {
                cont.style.maxHeight = null;
                target.classList.remove('active');
              } else {
                cont.style.maxHeight = cont.scrollHeight + "px";
              }
            }

            if (close) {
              close.addEventListener('click', function (e) {
                cont.style.maxHeight = null;
              });
            }
          });
        });
      });
    };

    prolapse('.fiter__title', '.fiter__cont');
    prolapse('.fiter__title2', '.fiter__cont2');
  };

  myProlapse(); // end accordion
  // Добавляю и убираю класс у чекбоксов и радио

  var customCheckboxBig = document.querySelectorAll('.custom-checkbox-big');
  var sp = document.querySelectorAll('.custom-checkbox-big > span');
  customCheckboxBig.forEach(function (el, i) {
    el.addEventListener('change', function (e) {
      if (e.target.checked) {
        sp.forEach(function (elem) {
          elem.classList.remove('act');
        });

        if (el.getAttribute('data-ch') == sp[i].getAttribute('data-sp')) {
          sp[i].classList.add('act');
        }
      } else {}
    });
  });
  var customCheckboxBigBgRad = document.querySelectorAll('.custom-checkbox-bigBgRadio');
  var spBgRad = document.querySelectorAll('.custom-checkbox-bigBgRadio > span');
  customCheckboxBigBgRad.forEach(function (el, i) {
    el.addEventListener('change', function (e) {
      if (e.target.checked) {
        spBgRad.forEach(function (elem) {
          elem.classList.remove('act');
        });
        customCheckboxBigBgRad.forEach(function (elem) {
          elem.classList.remove('act');
        });

        if (el.getAttribute('data-ch') == spBgRad[i].getAttribute('data-sp')) {
          spBgRad[i].classList.add('act');
          el.classList.add('act');
        }
      } else {}
    });
  });
  var customCheckboxBigBg = document.querySelectorAll('.custom-checkbox-bigBg');
  var spBg = document.querySelectorAll('.custom-checkbox-bigBg > span');
  customCheckboxBigBg.forEach(function (el, i) {
    el.addEventListener('change', function (e) {
      if (e.target.checked) {
        if (el.getAttribute('data-ch') == spBg[i].getAttribute('data-sp')) {
          spBg[i].classList.add('act');
          el.classList.add('act');
        }
      } else {
        if (el.getAttribute('data-ch') == spBg[i].getAttribute('data-sp')) {
          spBg[i].classList.remove('act');
          el.classList.remove('act');
        }
      }
    });
  }); // end Даю и снимаю класс у чекбоксов и кадио
  // Кастомная анимация, которая начинает срабатывать когда юзер докрутит до этого блока

  var delivery = document.querySelector('.delivery');

  if (delivery) {
    window.addEventListener('scroll', function (e) {
      var scroll = window.scrollY + delivery.scrollHeight;
      var offset = delivery.offsetTop;

      if (scroll > offset) {
        delivery.classList.add('active');
      } else {}
    });
  } // end Кастомная анимация, которая начинает срабатывать когда юзер докрутит до этого блока
  // Отмена стандартного поведения при клике


  var cancelClickBehavior = function cancelClickBehavior(elemsLink) {
    var elems = document.querySelectorAll(elemsLink);
    elems.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
      });
    });
  };

  cancelClickBehavior('.less');
  cancelClickBehavior('.more'); // Конец отмены стандартного поведения при клике
  // Маска

  var numbersPhone = document.querySelectorAll('.numbersPhone');
  var maskOptionsPhone = {
    mask: '+{7}(000)000-00-00'
  };
  numbersPhone.forEach(function (el) {
    var mask = IMask(el, maskOptionsPhone);
  }); // end Маска
});
$(document).ready(function () {
  // Кастомная анимация, которая начинает срабатывать когда юзер докрутит до этого блока
  var $element = $('.footer');
  var counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top;

    if (scroll > offset && counter == 0) {
      $('.footer').addClass("active");
    } else {
      $('.footer').removeClass("active");
    }
  }); // end Кастомная анимация, которая начинает срабатывать когда юзер докрутит до этого блока
  // При клике на покупку товара изображение летит в корзину

  function showAnimationAddNewProduct(target, wrapLink) {
    $(target).on('click', function (e) {
      e.preventDefault();

      if ($(window).width() > 992) {
        var that = $(this).closest(wrapLink).find('img');
        var bascket = $(".header__top-products-comparison");
        var w = that.width();
        that.clone().css({
          'width': w,
          'position': 'absolute',
          'z-index': '9999',
          top: that.offset().top,
          left: that.offset().left
        }).appendTo("body").animate({
          opacity: 0.05,
          left: bascket.offset()['left'],
          top: bascket.offset()['top'],
          width: 20
        }, 1000, function () {
          $(this).remove();
        });
      } else {
        $('.header__top-comparison-products-el').addClass("act");
        setTimeout(function () {
          $('.header__top-comparison-products-el').removeClass("act");
        }, 800);
      }
    });
  }

  showAnimationAddNewProduct('.cards__item-bottom-mark', '.cards__item');
  showAnimationAddNewProduct('.cards__item-bottom-mark2', '.assembly'); // end При клике на покупку товара изображение летит в корзину
  // Маска

  $('#InputID').inputmask("99:99"); // Конец маски
  // Скролл по клику

  $(".js-scroll-to-form").click(function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault(); //забираем идентификатор бока с атрибута href

    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top; //анимируем переход на расстояние - top за 1000 мс

    $('body,html').animate({
      scrollTop: top
    }, 1000);
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  }); // Конец скролла 

  $('.open-magn').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS

    }
  });
  var wow = new WOW({
    boxClass: 'wow',
    // animated element css class (default is wow)
    animateClass: 'animated',
    // animation css class (default is animated)
    offset: 0,
    // distance to the element when triggering the animation (default is 0)
    mobile: true,
    // trigger animations on mobile devices (default is true)
    live: true,
    // act on asynchronously loaded content (default is true)
    callback: function callback(box) {// the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,
    // optional scroll container selector, otherwise use window,
    resetAnimation: true // reset animation on end (default is true)

  });
  wow.init();
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__mnu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  var works__slider = new Swiper('.works__slider', {
    autoHeight: true,
    centeredSlides: true,
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: false,
        observeParents: false
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    } // autoplay: {
    // 	delay: 5000,
    // },

  });
  var reviews__slider = new Swiper('.reviews__slider', {
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    } // autoplay: {
    // 	delay: 5000,
    // },

  });
  var news__slider = new Swiper('.news__slider', {
    // autoHeight: true,
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    } // autoplay: {
    // 	delay: 5000,
    // },

  });
});