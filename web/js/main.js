"use strict";document.addEventListener("DOMContentLoaded",function(){Array.prototype.flat||(Array.prototype.flat=function(){return function n(t){return t.reduce(function(t,e){return Array.isArray(e)?t.concat(n(e)):t.concat(e)},[])}(this)});var e=document.querySelector(".basketPay__left-sel .block"),t=document.querySelector(".basketPay__left-sel .mySelect");t&&t.addEventListener("change",function(t){"2"==t.target.value?e.classList.add("active"):e.classList.remove("active")});var n=document.querySelector(".basketPay__left-way .fiter__change"),i=document.querySelector(".basketPay__left-mark");n&&n.addEventListener("change",function(t){"value-8"==t.target.value?i.innerHTML='\n\t\t\t\t\t<p>Введите адрес:</p>\n\t\t\t\t\t<input type="text">\n\t\t\t\t':i.innerHTML='\n\t\t\t\t<p>Выберите суши-маркет</p>\n\t\t\t\t<label class="label">\n\t\t\t\t  <select class="mySelect">\n\t\t\t\t\t<option value="1">Выберите суши-маркет</option>\n\t\t\t\t\t<option value="2">г. Воронеж, ул. Федора Тютчева, 97 магазин пивная №15.</option>\n\t\t\t\t\t<option value="3">г. Воронеж, ул.Минская, 63 Б ТЦ Магнит </option>\n\t\t\t\t\t<option value="4">г. Воронеж, ул. Адмирала Чурсина, 2/1, район Озерки </option>\n\t\t\t\t\t<option value="5">г. Воронеж, ул. Ростовская, 84 </option>\n\t\t\t\t\t<option value="6">п. Отрадное, ул. 50 Лет Октября, д. 95</option>\n\t\t\t\t  </select>\n\t\t\t\t</label>\n\t\t\t\t'});var t=document.querySelectorAll(".custom-checkbox-bigBgValue"),n=document.querySelectorAll(".custom-checkbox-bigBgValue > input"),a=document.querySelector(".cards__item-price");n.forEach(function(t){t.checked&&(a.innerHTML=+a.innerHTML+ +t.getAttribute("data-price"),a.setAttribute("data-my-price",a.innerHTML))}),t.forEach(function(t){t.addEventListener("change",function(t){t.target.checked?a.innerHTML=+a.innerHTML+ +t.target.getAttribute("data-price"):a.innerHTML=+a.innerHTML-+t.target.getAttribute("data-price"),a.setAttribute("data-my-price",a.innerHTML)})});t=function(t,e,n){var t=document.querySelector(t),i=document.querySelectorAll(e),a=document.querySelectorAll(n);t&&t.addEventListener("click",function(n){n.target.classList.contains("less")&&i.forEach(function(t,e){t.getAttribute("data-card-inp")==n.target.getAttribute("data-less")&&1<t.value&&t.value--}),n.target.classList.contains("more")&&i.forEach(function(t,e){a[e].getAttribute("data-my-price"),t.getAttribute("data-card-inp")==n.target.getAttribute("data-more")&&t.value++})})};t(".cards__row",".cards__int",".cards__item-price"),t(".cards__row2",".cards__int",".cards__item-price"),t(".cards__item-bottom",".cards__int2",".cards__item-price");var s,o,r,c,l,d,u,p,m,v,f;s=".basketPay__right1",o=".cards__int2",r=".cards__item-priceJS",c=".cards__item-price-FULL",s=document.querySelector(s),l=document.querySelectorAll(o),d=document.querySelectorAll(r),u=document.querySelectorAll(c),p=document.querySelector(".order__value"),m=document.querySelector(".tot"),c=document.querySelector(".write__off"),v=document.querySelector(".basketPay__right1-hid-b > span"),f=document.querySelector(".basketPay__right1-hid-b2 > span"),u&&u.forEach(function(t){p.innerHTML=+p.innerHTML+ +t.innerHTML,v.innerHTML=+v.innerHTML+ +t.innerHTML,m.innerHTML=+m.innerHTML+ +t.innerHTML,f.innerHTML=+f.innerHTML+ +t.innerHTML}),c&&c.addEventListener("change",function(t){t.target.checked?(m.innerHTML=+m.innerHTML-+t.target.value,f.innerHTML=+f.innerHTML-+t.target.value):(m.innerHTML=+m.innerHTML+ +t.target.value,f.innerHTML=+f.innerHTML+ +t.target.value)}),s&&s.addEventListener("click",function(n){n.target.classList.contains("less")&&l.forEach(function(t,e){t.getAttribute("data-card-inp")==n.target.getAttribute("data-less")&&1<t.value&&(t.value--,t=d[e].getAttribute("data-vl"),u[e].innerHTML=+u[e].innerHTML-+t,p.innerHTML=+p.innerHTML-+t,v.innerHTML=+v.innerHTML-+t,m.innerHTML=+m.innerHTML-+t,f.innerHTML=+f.innerHTML-+t)}),n.target.classList.contains("more")&&l.forEach(function(t,e){t.getAttribute("data-card-inp")==n.target.getAttribute("data-more")&&(t.value++,t=d[e].getAttribute("data-vl"),u[e].innerHTML=+u[e].innerHTML+ +t,p.innerHTML=+p.innerHTML+ +t,v.innerHTML=+v.innerHTML+ +t,m.innerHTML=+m.innerHTML+ +t,f.innerHTML=+f.innerHTML+ +t)})});function _(){document.documentElement.clientWidth<=577?(b.insertAdjacentElement("beforeend",y),b.insertAdjacentElement("beforeend",g),b.insertAdjacentElement("beforeend",h)):(w.insertAdjacentElement("beforeend",y),L.insertAdjacentElement("beforeend",g),L.insertAdjacentElement("beforeend",h))}var g=document.querySelector(".footer__wrap-bottom"),h=document.querySelector(".footer_bot-elems"),b=document.querySelector(".footer__wrap-right"),w=document.querySelector(".footer__wrap-left"),y=document.querySelector(".footer__addr"),L=document.querySelector(".footer__left");_();function k(){(document.documentElement.clientWidth<=992?L:w).insertAdjacentElement("beforeend",y)}k();function E(){A&&M&&S&&(document.documentElement.clientWidth<=992?A:M).insertAdjacentElement("afterbegin",S)}var S=document.querySelector(".assembly__right > h2"),M=document.querySelector(".assembly__right"),A=document.querySelector(".assembly");E();function T(){H&&(document.documentElement.clientWidth<=577?x:H).insertAdjacentElement("beforeend",q)}var q=document.querySelector(".set__ec"),H=document.querySelector(".set__left"),x=document.querySelector(".set__right");T();function $(){P&&(document.documentElement.clientWidth<=1199?V:B).insertAdjacentElement("beforeend",P)}var P=document.querySelector(".basketPay__right1-sm-bot"),V=document.querySelector(".basketPay__bottom"),B=document.querySelector(".basketPay__right1");$();function C(){z&&(document.documentElement.clientWidth<=576?D:j).insertAdjacentElement("beforeend",z)}var z=document.querySelector(".basketPay__left-top a"),j=document.querySelector(".basketPay__left-top"),D=document.querySelector(".basketPay__left-inputs");C(),window.addEventListener("resize",function(){_()}),window.addEventListener("resize",function(){k()}),window.addEventListener("resize",function(){E()}),window.addEventListener("resize",function(){T()}),window.addEventListener("resize",function(){$()}),window.addEventListener("resize",function(){C()});var W=document.querySelector(".header__bottom"),R=document.querySelector(".header__top-comparison-wrap"),F=document.querySelector(".header__top-heart-wrap"),I=document.querySelector(".header__top-products-wrap"),O=document.querySelector(".header__bottom-hiddenLogo"),Y=document.querySelector(".header__list");window.addEventListener("scroll",function(t){W&&(80<window.pageYOffset&&991<=screen.width?(W.classList.add("active"),R.classList.add("active"),F.classList.add("active"),I.classList.add("active"),O.classList.add("active"),Y.classList.add("active")):(W.classList.remove("active"),R.classList.remove("active"),F.classList.remove("active"),I.classList.remove("active"),O.classList.remove("active"),Y.classList.remove("active")))});var J=document.querySelector(".header");window.addEventListener("scroll",function(t){W&&(2<window.pageYOffset&&screen.width<991?J.classList.add("active2"):J.classList.remove("active2"))});t=function(t,n,i){document.querySelectorAll(t).forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),e.classList.toggle("active"),e.classList.contains("active")?e.innerHTML='\n\t\t\t\t\t<svg class="svg-sprite-icon icon-'.concat(i,'">\n\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#').concat(i,'"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t'):e.innerHTML='\n\t\t\t\t\t<svg class="svg-sprite-icon icon-'.concat(n,'">\n\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#').concat(n,'"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t')})})};t(".cards__item-top-el2","heart2","2"),t(".cards__item-top-el1","rat2","rat");var U,t=document.querySelectorAll(".inputfile");Array.prototype.forEach.call(t,function(t){var n=t.nextElementSibling,i=n.innerHTML;t.addEventListener("change",function(t){var e="";(e=this.files&&1<this.files.length?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):t.target.value.split("\\").pop())?n.querySelector("span").innerHTML=e:n.innerHTML=i}),t.addEventListener("focus",function(){t.classList.add("has-focus")}),t.addEventListener("blur",function(){t.classList.remove("has-focus")})}),document.addEventListener("click",function(t){if(t.target.closest("[data-btn-modal]"))switch(t.preventDefault(),t.target.closest("[data-btn-modal]").dataset.btnModal){case"creatingClient":U=$plugins.modal({title:" ",closable:!0,width:"800px",content:G.creatingClient}),setTimeout(function(){return U.open()},300);break;case"reviewsModal":U=$plugins.modal({title:" ",closable:!0,width:"550px",content:G.reviewsModal}),setTimeout(function(){return U.open()},300);break;case"modalFive":U=$plugins.modal({title:"Адреса суши-маркетов",closable:!0,width:"800px",content:G.modalFive}),setTimeout(function(){return U.open()},300);break;case"modalAutoriz":U=$plugins.modal({title:" ",closable:!0,width:"800px",content:G.modalAutoriz}),setTimeout(function(){return U.open()},300);break;case"modalVost":U=$plugins.modal({title:" ",closable:!0,width:"800px",content:G.modalVost}),setTimeout(function(){return U.open()},300);break;case"modalReg":U=$plugins.modal({title:" ",closable:!0,width:"800px",content:G.modalReg}),setTimeout(function(){return U.open()},300);break;default:return}});var G={};(window.$globalHtmlElements=G).creatingClient='\n\t\t<div class="reviews__slider-top">\n\t\t\t<div class="reviews__slider-date">\n\t\t\t\t<svg class="svg-sprite-icon icon-date">\n\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#date"></use>\n\t\t\t\t</svg>\n\t\t\t\t<span>13.02.21</span>\n\t\t\t</div>\n\t\t\t<h3>Елена Петровна</h3>\n\t\t</div>\n\t\t<div class="reviews__slider-rev">\n\t\t\t<div class="reviews__slider-img">\n\t\t\t\t\n\t\t\t\t<div class="reviews__slider-img-el">\n\t\t\t\t\t<img class="img" src="web/images/content/rew__slide-img.png", alt="slide__img">\n\t\t\t\t\t</picture>\n\t\t\t\t</div>\n\t\t\t\t<div class="reviews__slider-img-el reviews__slider-img-cl">\n\t\t\t\t\t<div class="el">Фото клиента</div>\n\t\t\t\t\t\t<img class="img" src="web/images/content/rew__slide-img.png", alt="slide__img">\n\t\t\t\t\t</picture>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="reviews__slider-body">\n\t\t\t\t<a href="#" class="reviews__slider-link">Ролл “Филадельфия”</a>\n\t\t\t\t<div class="rating-result">\n\t\t\t\t\t<span class="active"></span>\n\t\t\t\t\t<span class="active"></span>\n\t\t\t\t\t<span class="active"></span>\n\t\t\t\t\t<span class="active"></span>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>\n\t\t\t</div>\n\t\t</div>\n\t',G.reviewsModal='\n\t\t<form class="reviewsModal">\n\t\t\t<div class="reviewsModal__top">\n\t\t\t\t<div class="reviewsModal__top-left">\n\t\t\t\t\t<h6>Имя:</h6>\n\t\t\t\t\t<input type="text" placeholder="Имя">\n\t\t\t\t</div>\n\t\t\t\t<div class="reviewsModal__top-right">\n\t\t\t\t\t<h6>Ваша оценка:</h6>\n\t\t\t\t\t<div class="rating-area">\n\t\t\t\t\t\t<input id="star-5" type="radio" name="rating" value="5">\n\t\t\t\t\t\t<label for="star-5" title="Оценка «5»"></label>\n\t\t\t\t\t\t<input id="star-4" type="radio" name="rating" value="4">\n\t\t\t\t\t\t<label for="star-4" title="Оценка «4»"></label>\n\t\t\t\t\t\t<input id="star-3" type="radio" name="rating" value="3">\n\t\t\t\t\t\t<label for="star-3" title="Оценка «3»"></label>\n\t\t\t\t\t\t<input id="star-2" type="radio" name="rating" value="2">\n\t\t\t\t\t\t<label for="star-2" title="Оценка «2»"></label>\n\t\t\t\t\t\t<input id="star-1" type="radio" name="rating" value="1">\n\t\t\t\t\t\t<label for="star-1" title="Оценка «1»"></label>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="reviewsModal__top">\n\t\t\t\t<div class="reviewsModal__top-full">\n\t\t\t\t\t<h6>Блюдо:</h6>\n\t\t\t\t\t<input type="text" placeholder="Блюдо, о котором пишите отзыв">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="reviewsModal__top">\n\t\t\t\t<div class="reviewsModal__top-full">\n\t\t\t\t\t<h6>Напишите отзыв:</h6>\n\t\t\t\t\t<textarea></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="reviewsModal__btns">\n\t\t\t\t<input type="file" name="file" id="file" class="inputfile" data-multiple-caption="{count} files selected" multiple />\n\t\t\t\t<label for="file" class="button">\n\t\t\t\t\t<svg class="svg-sprite-icon icon-download">\n\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#download"></use>\n\t\t\t\t</svg>\n\t\t\t\tПрикрепить фото</label>\n\t\t\t\t<button class="button">Отправить отзыв</button>\n\t\t\t</div>\n\t\t</form>\n\t',G.modalFive='\n\t\t<div class="header__top-addr-cont">\n\t\t\t<div class="header__top-addr-cont-wrap">\n\t\t\t\t<div class="header__top-addr-cont-left">\n\t\t\t\t\t<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A370bd1d5487e35e9cabb4d4098881b77cde74884eb0d5985957a27e060cedc27&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>\n\t\t\t\t</div>\n\t\t\t\t<div class="header__top-addr-cont-right">\n\t\t\t\t\t<ul> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class="el-left">\n\t\t\t\t\t\t\t\t<svg class="svg-sprite-icon icon-map">\n\t\t\t\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#map"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="el-right">\n\t\t\t\t\t\t\t\t<p>ул. Воронеж</p><a href="tel: +7 999 999 99 99">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class="el-left">\n\t\t\t\t\t\t\t\t<svg class="svg-sprite-icon icon-map">\n\t\t\t\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#map"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="el-right">\n\t\t\t\t\t\t\t\t<p>ул. Воронеж</p><a href="tel: +7 999 999 99 99">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class="el-left">\n\t\t\t\t\t\t\t\t<svg class="svg-sprite-icon icon-map">\n\t\t\t\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#map"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="el-right">\n\t\t\t\t\t\t\t\t<p>ул. Воронеж</p><a href="tel: +7 999 999 99 99">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class="el-left">\n\t\t\t\t\t\t\t\t<svg class="svg-sprite-icon icon-map">\n\t\t\t\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#map"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="el-right">\n\t\t\t\t\t\t\t\t<p>ул. Воронеж</p><a href="tel: +7 999 999 99 99">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class="el-left">\n\t\t\t\t\t\t\t\t<svg class="svg-sprite-icon icon-map">\n\t\t\t\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#map"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="el-right">\n\t\t\t\t\t\t\t\t<p>ул. Воронеж</p><a href="tel: +7 999 999 99 99">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class="el-left">\n\t\t\t\t\t\t\t\t<svg class="svg-sprite-icon icon-map">\n\t\t\t\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#map"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="el-right">\n\t\t\t\t\t\t\t\t<p>ул. Воронеж</p><a href="tel: +7 999 999 99 99">+7 999 999 99 99</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',G.modalAutoriz='\n\t\t<section class="authorisation section-ind">\n\t\t\t<h1>Авторизация</h1>\n\t\t\t<div class="authorisation__block">\n\t\t\t<form class="authorisation__form">\n\t\t\t\t<div class="authorisation__form-el"> \n\t\t\t\t<p>Логин:<span>*</span></p>\n\t\t\t\t<input class="g-input" type="email" placeholder="Ваш логин (Email)">\n\t\t\t\t</div>\n\t\t\t\t<div class="authorisation__form-el"> \n\t\t\t\t<p>Пароль:<span>*</span></p>\n\t\t\t\t<input class="g-input" type="password" placeholder="Ваш пароль">\n\t\t\t\t</div>\n\t\t\t\t<div class="authorisation__form-btn"> \n\t\t\t\t<button class="button">Войти</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class="authorisation__reg"><a class="button" href="#" data-btn-modal="modalVost">Восстановить пароль</a><a class="button" href="#" data-btn-modal="modalReg">Регистрация</a></div>\n\t\t</section>\n\t',G.modalVost='\n\t\t<section class="authorisation section-ind">\n\t\t\t<h1>Авторизация</h1>\n\t\t\t<div class="authorisation__block">\n\t\t\t<form class="authorisation__form">\n\t\t\t\t<div class="authorisation__form-el"> \n\t\t\t\t<p>Логин:<span>*</span></p>\n\t\t\t\t<input class="g-input" type="email" placeholder="Ваш логин (Email)">\n\t\t\t\t</div>\n\t\t\t\t<div class="authorisation__form-btn"> \n\t\t\t\t<button class="button">Отправить</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t</div>\n\t\t</section>\n\t',G.modalReg='\n        <section class="authorisation section-ind">\n          <h1>Авторизация</h1>\n          <div class="authorisation__block">\n            <form class="authorisation__form">\n              <div class="authorisation__form-el"> \n                <p>Имя:<span>*</span></p>\n                <input class="g-input" type="text" placeholder="Ваше Имя">\n              </div>\n              <div class="authorisation__form-el"> \n                <p>Логин:<span>*</span></p>\n                <input class="g-input" type="email" placeholder="Ваш логин (Email)">\n              </div>\n              <div class="authorisation__form-el"> \n                <p>Телефон:<span>*</span></p>\n                <input class="g-input numbersPhone" type="text" placeholder="Ваш телефон">\n              </div>\n              <div class="authorisation__form-el"> \n                <p>Адрес доставки:<span>*</span></p>\n                <input class="g-input" type="text" placeholder="Ваш адрес">\n              </div>\n              <div class="authorisation__form-el"> \n                <p>Дата рождения (для подарков и скидок)<span>*</span></p>\n                <label class="calendar">\n                  <input type="date" name="date">\n                </label>\n              </div>\n              <div class="authorisation__form-el"> \n                <p>Пароль:<span>*</span></p>\n                <input class="g-input" type="password" placeholder="Ваш пароль">\n              </div>\n              <div class="authorisation__form-el"> \n                <p>Повторите пароль:<span>*</span></p>\n                <input class="g-input" type="password" placeholder="Повторите ваш пароль">\n              </div>\n              <div class="authorisation__form-btn"> \n                <button class="button">Отправить</button>\n              </div>\n            </form>\n          </div>\n        </section>\n\t';t=function(t,e,n){var i=document.querySelector(t),a=document.querySelector(e);i.addEventListener("click",function(t){i.contains(t.target)&&a.classList.add("active")}),document.addEventListener("click",function(t){t.target.closest(n)||(i.classList.remove("active"),a.classList.remove("active"))}),document.addEventListener("keyup",function(t){"Escape"==t.key&&a.classList.remove("active")})};t(".header__bottom-inp > .svg-sprite-icon",".header__bottom-outInp",".header__bottom-search"),t(".header__bottom-filter",".header__bottom-filter-cont",".header__bottom-filter-wrap");function K(t,e,n){var n=2<arguments.length&&void 0!==n&&n,t=document.querySelectorAll(t),i=document.querySelectorAll(e),a=document.querySelector(n);t.forEach(function(n){n.addEventListener("click",function(t){i.forEach(function(e){n.getAttribute("data-linkValue")==e.getAttribute("data-ulValue")&&(n.classList.add("active"),e.style.maxHeight?(e.style.maxHeight=null,n.classList.remove("active")):e.style.maxHeight=e.scrollHeight+"px"),a&&a.addEventListener("click",function(t){e.style.maxHeight=null})})})})}K(".fiter__title",".fiter__cont"),K(".fiter__title2",".fiter__cont2");var t=document.querySelectorAll(".custom-checkbox-big"),N=document.querySelectorAll(".custom-checkbox-big > span");t.forEach(function(e,n){e.addEventListener("change",function(t){t.target.checked&&(N.forEach(function(t){t.classList.remove("act")}),e.getAttribute("data-ch")==N[n].getAttribute("data-sp")&&N[n].classList.add("act"))})});var Q=document.querySelectorAll(".custom-checkbox-bigBgRadio"),X=document.querySelectorAll(".custom-checkbox-bigBgRadio > span");Q.forEach(function(e,n){e.addEventListener("change",function(t){t.target.checked&&(X.forEach(function(t){t.classList.remove("act")}),Q.forEach(function(t){t.classList.remove("act")}),e.getAttribute("data-ch")==X[n].getAttribute("data-sp")&&(X[n].classList.add("act"),e.classList.add("act")))})});var t=document.querySelectorAll(".custom-checkbox-bigBg"),Z=document.querySelectorAll(".custom-checkbox-bigBg > span");t.forEach(function(e,n){e.addEventListener("change",function(t){t.target.checked?e.getAttribute("data-ch")==Z[n].getAttribute("data-sp")&&(Z[n].classList.add("act"),e.classList.add("act")):e.getAttribute("data-ch")==Z[n].getAttribute("data-sp")&&(Z[n].classList.remove("act"),e.classList.remove("act"))})});var tt=document.querySelector(".delivery");tt&&window.addEventListener("scroll",function(t){var e=window.scrollY+tt.scrollHeight;tt.offsetTop<e&&tt.classList.add("active")}),document.querySelectorAll(".less").forEach(function(t){t.addEventListener("click",function(t){t.preventDefault()})}),document.querySelectorAll(".more").forEach(function(t){t.addEventListener("click",function(t){t.preventDefault()})});var t=document.querySelectorAll(".numbersPhone"),et={mask:"+{7}(000)000-00-00"};t.forEach(function(t){IMask(t,et)})}),$(document).ready(function(){$("#InputID").inputmask("99:99");var e=$(".footer");$(window).scroll(function(){var t=$(window).scrollTop()+$(window).height();e.offset().top<t?$(".footer").addClass("active"):$(".footer").removeClass("active")}),$(".js-scroll-to-form").click(function(t){t.preventDefault();t=$(this).attr("href"),t=$(t).offset().top;$("body,html").animate({scrollTop:t},1e3),$(".header__burger, .header__menu").removeClass("active"),$("body").removeClass("lock")}),$(".open-magn").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),$(".cards__item-bottom-mark").on("click",function(t){var e,n;t.preventDefault(),992<$(window).width()?(e=$(this).closest(".cards__item").find("img"),n=$(".header__top-products-comparison"),t=e.width(),e.clone().css({width:t,position:"absolute","z-index":"9999",top:e.offset().top,left:e.offset().left}).appendTo("body").animate({opacity:.05,left:n.offset().left,top:n.offset().top,width:20},1e3,function(){$(this).remove()})):($(".header__top-comparison-products-el").addClass("act"),setTimeout(function(){$(".header__top-comparison-products-el").removeClass("act")},800))}),$(".cards__item-bottom-mark2").on("click",function(t){var e,n;t.preventDefault(),992<$(window).width()?(e=$(this).closest(".assembly").find("img"),n=$(".header__top-products-comparison"),t=e.width(),e.clone().css({width:t,position:"absolute","z-index":"9999",top:e.offset().top,left:e.offset().left}).appendTo("body").animate({opacity:.05,left:n.offset().left,top:n.offset().top,width:20},1e3,function(){$(this).remove()})):($(".header__top-comparison-products-el").addClass("act"),setTimeout(function(){$(".header__top-comparison-products-el").removeClass("act")},800))}),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(){},scrollContainer:null,resetAnimation:!0}).init(),$(".header__burger").click(function(t){$(".header__burger, .header__mnu").toggleClass("active"),$("body").toggleClass("lock")});new Swiper(".works__slider",{autoHeight:!0,centeredSlides:!0,initialSlide:0,slidesPerView:1,spaceBetween:20,loop:!0,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},420:{slidesPerView:1,spaceBetween:10,observer:!1,observeParents:!1},768:{slidesPerView:1,spaceBetween:20},992:{slidesPerView:1,spaceBetween:20}}}),new Swiper(".reviews__slider",{autoHeight:!0,slidesPerView:3,spaceBetween:20,loop:!0,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},576:{slidesPerView:1,spaceBetween:10},767:{slidesPerView:1,spaceBetween:10},991:{slidesPerView:2,spaceBetween:20},1199:{slidesPerView:3,spaceBetween:20}}}),new Swiper(".news__slider",{slidesPerView:2,spaceBetween:20,loop:!0,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination2",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},576:{slidesPerView:1,spaceBetween:10},767:{slidesPerView:1,spaceBetween:10},991:{slidesPerView:2,spaceBetween:20},1199:{slidesPerView:2,spaceBetween:20}}})});