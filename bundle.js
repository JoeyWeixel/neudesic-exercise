/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mortgage.js":
/*!*************************!*\
  !*** ./src/mortgage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Mortgage{
  constructor(principle, numPayments, interestRate){
    this.principle = principle;
    this.numPayments = numPayments;
    this.interestRate = interestRate;

    this.createMonthlyLists();
  }

  get principle(){
    return this.principle;
  }
  get numPayments(){
    return this.numPayments;
  }
  get interestRate(){
    return this.interestRate;
  }
  get monthlyPayment(){
    let onePlusRtoN = Math.pow(1 + this.interestRate, this.numPayments);
    let payment = this.principle * ((this.interestRate * onePlusRtoN) / (onePlusRtoN - 1));
    return payment;
  }
  get principleValuesList(){
    return this.principleValuesList;
  }
  get principlePaymentsList(){
    return this.principlePaymentsList;
  }
  get interestPaymentsList(){
    return this.interestPaymentsList;
  }
  get totalInterestList(){
    return this.totalInterestList;
  }
  get totalPaidList(){
    return this.totalPaidList;
  }

  set principleValuesList(values){
    this.principleValuesList = values;
  }
  set principlePaymentsList(values){
    this.principlePaymentsList = values;
  }
  set interestPaymentsList(values){
    this.interestPaymentsList = values;
  }
  set totalInterestList(values){
    this.totalInterestList = values;
  }
  set totalPaidList(values){
    this.totalPaidList = values;
  }

  createMonthlyLists(){
    const principleValues = [this.principle];
    const principlePayments = [0];
    const interestPayments = [0];
    const totalInterest = [0];
    const totalPaid = [0];
    for(let i=1; i<=this.numPayments; i++){
      let interest = principleValues[i-1] * this.interestRate;
      let principlePayment = this.monthlyPayment - interest;

      principleValues.push(principleValues[i-1] - principlePayment);
      principlePayments.push(principlePayment);
      interestPayments.push(interest);
      totalInterest.push(totalInterest(i-1) + interest);
      totalPaid.push(i * this.monthlyPayment);
    }
    this.principleValuesList = principleValues;
    this.principlePaymentsList = principlePayments;
    this.interestPaymentsList = interestPayments;
    this.totalInterestList = totalInterest;
    this.totalPaidList = totalPaid;

  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mortgage);

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mortgage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mortgage */ "./src/mortgage.js");


class Page{
  constructor(){
    this.$screen = new InputScreen(this);
    this.$pageNode = document.body;
    this.pageNode.appendChild(this.screen.html);
  }

  get screen(){
    return this.$screen;
  }
  get pageNode(){
    return this.$pageNode;
  }

  set screen(screen){
    this.$screen = screen;
    this.updatePage();
  }
  set pageNode(pageNode){
    this.$pageNode = pageNode;
  }

  updatePage(){
    this.pageNode.innerHTML = '';
    this.pageNode.appendChild(this.screen.html);
  }


}

class InputScreen{
  constructor(page){
    this.$page = page;
    this.$html = generateHTMLElement('div', ['screen']);
    const form = generateHTMLElement('div', ['form']);
    this.html.appendChild(form);

    appendFormInputAndLabel('number', 'loanAmount', 'Enter loan amount ($)', form);
    appendFormInputAndLabel('number', 'loanLength', 'Enter loan length (Months)', form);
    appendFormInputAndLabel('number', 'interestRate', 'Enter loan interest rate (%)', form);

    const submitMortgageButton = document.createElement('button');
    submitMortgageButton.classList.add('button', 'add', 'material-symbols-outlined');
    submitMortgageButton.innerText = 'add';
    submitMortgageButton.addEventListener('click', e => {
      const principle = document.getElementById('loanAmount').value;
      const months = document.getElementById('loanLength').value;
      const rate = document.getElementById('interestRate').value;
      const newMortgage = new _mortgage__WEBPACK_IMPORTED_MODULE_0__["default"](principle, months, rate/100);
      const table = new TableScreen(newMortgage);
      this.page.screen = table;

    });
    form.appendChild(submitMortgageButton);

  }

  get html(){
    return this.$html;
  }
  get page(){
    return this.$page;
  }

  set html(html){
    this.$html = html;
  }
  set page(page){
    this.$page = page;
  }
}

class TableScreen{
  constructor(thisMortgage){
    this.mortgage = thisMortgage;
    this.html = 'tablescreen';
  }

  get html(){
    return this.html;
  }
}

function generateHTMLElement(type = 'text', classList = [], innerHTML = ''){
  const element = document.createElement(type);

  classList.forEach(htmlClass =>{
    element.classList.add(htmlClass);
  });

  element.innerHTML = innerHTML;

  return element;
}

function appendFormInputAndLabel(type, id, label, parent){
  const text = document.createElement('input');
  text.type = type;
  text.id = id;
  text.classList.add('input');

  parent.appendChild(generateFormLabel(label, id));
  parent.appendChild(text);
}

function appendFormSelectField(id, label, selectionList, parent){
  const select = document.createElement('select');
  select.id = id;
  for(let i=0; i<selectionList.length; i++){
    const option = document.createElement("option");
    option.value = selectionList[i];
    option.text = selectionList[i];
    select.appendChild(option);
  }

  parent.appendChild(generateFormLabel(label, id));
  parent.appendChild(select);
}

function generateFormLabel(label, forInput){
  const textLabel = document.createElement('label');
  textLabel.setAttribute('for', forInput);
  textLabel.innerText = label;
  return textLabel;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");


const webpage = new _page__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDaEZXOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlEQUFRO0FBQ3RDO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7O1VDaEluQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUUxQixvQkFBb0IsNkNBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlLy4vc3JjL21vcnRnYWdlLmpzIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3J0Z2FnZXtcbiAgY29uc3RydWN0b3IocHJpbmNpcGxlLCBudW1QYXltZW50cywgaW50ZXJlc3RSYXRlKXtcbiAgICB0aGlzLnByaW5jaXBsZSA9IHByaW5jaXBsZTtcbiAgICB0aGlzLm51bVBheW1lbnRzID0gbnVtUGF5bWVudHM7XG4gICAgdGhpcy5pbnRlcmVzdFJhdGUgPSBpbnRlcmVzdFJhdGU7XG5cbiAgICB0aGlzLmNyZWF0ZU1vbnRobHlMaXN0cygpO1xuICB9XG5cbiAgZ2V0IHByaW5jaXBsZSgpe1xuICAgIHJldHVybiB0aGlzLnByaW5jaXBsZTtcbiAgfVxuICBnZXQgbnVtUGF5bWVudHMoKXtcbiAgICByZXR1cm4gdGhpcy5udW1QYXltZW50cztcbiAgfVxuICBnZXQgaW50ZXJlc3RSYXRlKCl7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJlc3RSYXRlO1xuICB9XG4gIGdldCBtb250aGx5UGF5bWVudCgpe1xuICAgIGxldCBvbmVQbHVzUnRvTiA9IE1hdGgucG93KDEgKyB0aGlzLmludGVyZXN0UmF0ZSwgdGhpcy5udW1QYXltZW50cyk7XG4gICAgbGV0IHBheW1lbnQgPSB0aGlzLnByaW5jaXBsZSAqICgodGhpcy5pbnRlcmVzdFJhdGUgKiBvbmVQbHVzUnRvTikgLyAob25lUGx1c1J0b04gLSAxKSk7XG4gICAgcmV0dXJuIHBheW1lbnQ7XG4gIH1cbiAgZ2V0IHByaW5jaXBsZVZhbHVlc0xpc3QoKXtcbiAgICByZXR1cm4gdGhpcy5wcmluY2lwbGVWYWx1ZXNMaXN0O1xuICB9XG4gIGdldCBwcmluY2lwbGVQYXltZW50c0xpc3QoKXtcbiAgICByZXR1cm4gdGhpcy5wcmluY2lwbGVQYXltZW50c0xpc3Q7XG4gIH1cbiAgZ2V0IGludGVyZXN0UGF5bWVudHNMaXN0KCl7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJlc3RQYXltZW50c0xpc3Q7XG4gIH1cbiAgZ2V0IHRvdGFsSW50ZXJlc3RMaXN0KCl7XG4gICAgcmV0dXJuIHRoaXMudG90YWxJbnRlcmVzdExpc3Q7XG4gIH1cbiAgZ2V0IHRvdGFsUGFpZExpc3QoKXtcbiAgICByZXR1cm4gdGhpcy50b3RhbFBhaWRMaXN0O1xuICB9XG5cbiAgc2V0IHByaW5jaXBsZVZhbHVlc0xpc3QodmFsdWVzKXtcbiAgICB0aGlzLnByaW5jaXBsZVZhbHVlc0xpc3QgPSB2YWx1ZXM7XG4gIH1cbiAgc2V0IHByaW5jaXBsZVBheW1lbnRzTGlzdCh2YWx1ZXMpe1xuICAgIHRoaXMucHJpbmNpcGxlUGF5bWVudHNMaXN0ID0gdmFsdWVzO1xuICB9XG4gIHNldCBpbnRlcmVzdFBheW1lbnRzTGlzdCh2YWx1ZXMpe1xuICAgIHRoaXMuaW50ZXJlc3RQYXltZW50c0xpc3QgPSB2YWx1ZXM7XG4gIH1cbiAgc2V0IHRvdGFsSW50ZXJlc3RMaXN0KHZhbHVlcyl7XG4gICAgdGhpcy50b3RhbEludGVyZXN0TGlzdCA9IHZhbHVlcztcbiAgfVxuICBzZXQgdG90YWxQYWlkTGlzdCh2YWx1ZXMpe1xuICAgIHRoaXMudG90YWxQYWlkTGlzdCA9IHZhbHVlcztcbiAgfVxuXG4gIGNyZWF0ZU1vbnRobHlMaXN0cygpe1xuICAgIGNvbnN0IHByaW5jaXBsZVZhbHVlcyA9IFt0aGlzLnByaW5jaXBsZV07XG4gICAgY29uc3QgcHJpbmNpcGxlUGF5bWVudHMgPSBbMF07XG4gICAgY29uc3QgaW50ZXJlc3RQYXltZW50cyA9IFswXTtcbiAgICBjb25zdCB0b3RhbEludGVyZXN0ID0gWzBdO1xuICAgIGNvbnN0IHRvdGFsUGFpZCA9IFswXTtcbiAgICBmb3IobGV0IGk9MTsgaTw9dGhpcy5udW1QYXltZW50czsgaSsrKXtcbiAgICAgIGxldCBpbnRlcmVzdCA9IHByaW5jaXBsZVZhbHVlc1tpLTFdICogdGhpcy5pbnRlcmVzdFJhdGU7XG4gICAgICBsZXQgcHJpbmNpcGxlUGF5bWVudCA9IHRoaXMubW9udGhseVBheW1lbnQgLSBpbnRlcmVzdDtcblxuICAgICAgcHJpbmNpcGxlVmFsdWVzLnB1c2gocHJpbmNpcGxlVmFsdWVzW2ktMV0gLSBwcmluY2lwbGVQYXltZW50KTtcbiAgICAgIHByaW5jaXBsZVBheW1lbnRzLnB1c2gocHJpbmNpcGxlUGF5bWVudCk7XG4gICAgICBpbnRlcmVzdFBheW1lbnRzLnB1c2goaW50ZXJlc3QpO1xuICAgICAgdG90YWxJbnRlcmVzdC5wdXNoKHRvdGFsSW50ZXJlc3QoaS0xKSArIGludGVyZXN0KTtcbiAgICAgIHRvdGFsUGFpZC5wdXNoKGkgKiB0aGlzLm1vbnRobHlQYXltZW50KTtcbiAgICB9XG4gICAgdGhpcy5wcmluY2lwbGVWYWx1ZXNMaXN0ID0gcHJpbmNpcGxlVmFsdWVzO1xuICAgIHRoaXMucHJpbmNpcGxlUGF5bWVudHNMaXN0ID0gcHJpbmNpcGxlUGF5bWVudHM7XG4gICAgdGhpcy5pbnRlcmVzdFBheW1lbnRzTGlzdCA9IGludGVyZXN0UGF5bWVudHM7XG4gICAgdGhpcy50b3RhbEludGVyZXN0TGlzdCA9IHRvdGFsSW50ZXJlc3Q7XG4gICAgdGhpcy50b3RhbFBhaWRMaXN0ID0gdG90YWxQYWlkO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9ydGdhZ2U7IiwiaW1wb3J0IE1vcnRnYWdlIGZyb20gXCIuL21vcnRnYWdlXCI7XG5cbmNsYXNzIFBhZ2V7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy4kc2NyZWVuID0gbmV3IElucHV0U2NyZWVuKHRoaXMpO1xuICAgIHRoaXMuJHBhZ2VOb2RlID0gZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLnBhZ2VOb2RlLmFwcGVuZENoaWxkKHRoaXMuc2NyZWVuLmh0bWwpO1xuICB9XG5cbiAgZ2V0IHNjcmVlbigpe1xuICAgIHJldHVybiB0aGlzLiRzY3JlZW47XG4gIH1cbiAgZ2V0IHBhZ2VOb2RlKCl7XG4gICAgcmV0dXJuIHRoaXMuJHBhZ2VOb2RlO1xuICB9XG5cbiAgc2V0IHNjcmVlbihzY3JlZW4pe1xuICAgIHRoaXMuJHNjcmVlbiA9IHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZVBhZ2UoKTtcbiAgfVxuICBzZXQgcGFnZU5vZGUocGFnZU5vZGUpe1xuICAgIHRoaXMuJHBhZ2VOb2RlID0gcGFnZU5vZGU7XG4gIH1cblxuICB1cGRhdGVQYWdlKCl7XG4gICAgdGhpcy5wYWdlTm9kZS5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnBhZ2VOb2RlLmFwcGVuZENoaWxkKHRoaXMuc2NyZWVuLmh0bWwpO1xuICB9XG5cblxufVxuXG5jbGFzcyBJbnB1dFNjcmVlbntcbiAgY29uc3RydWN0b3IocGFnZSl7XG4gICAgdGhpcy4kcGFnZSA9IHBhZ2U7XG4gICAgdGhpcy4kaHRtbCA9IGdlbmVyYXRlSFRNTEVsZW1lbnQoJ2RpdicsIFsnc2NyZWVuJ10pO1xuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUhUTUxFbGVtZW50KCdkaXYnLCBbJ2Zvcm0nXSk7XG4gICAgdGhpcy5odG1sLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgYXBwZW5kRm9ybUlucHV0QW5kTGFiZWwoJ251bWJlcicsICdsb2FuQW1vdW50JywgJ0VudGVyIGxvYW4gYW1vdW50ICgkKScsIGZvcm0pO1xuICAgIGFwcGVuZEZvcm1JbnB1dEFuZExhYmVsKCdudW1iZXInLCAnbG9hbkxlbmd0aCcsICdFbnRlciBsb2FuIGxlbmd0aCAoTW9udGhzKScsIGZvcm0pO1xuICAgIGFwcGVuZEZvcm1JbnB1dEFuZExhYmVsKCdudW1iZXInLCAnaW50ZXJlc3RSYXRlJywgJ0VudGVyIGxvYW4gaW50ZXJlc3QgcmF0ZSAoJSknLCBmb3JtKTtcblxuICAgIGNvbnN0IHN1Ym1pdE1vcnRnYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0TW9ydGdhZ2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2FkZCcsICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3VibWl0TW9ydGdhZ2VCdXR0b24uaW5uZXJUZXh0ID0gJ2FkZCc7XG4gICAgc3VibWl0TW9ydGdhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IHByaW5jaXBsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FuQW1vdW50JykudmFsdWU7XG4gICAgICBjb25zdCBtb250aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hbkxlbmd0aCcpLnZhbHVlO1xuICAgICAgY29uc3QgcmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlcmVzdFJhdGUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld01vcnRnYWdlID0gbmV3IE1vcnRnYWdlKHByaW5jaXBsZSwgbW9udGhzLCByYXRlLzEwMCk7XG4gICAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZVNjcmVlbihuZXdNb3J0Z2FnZSk7XG4gICAgICB0aGlzLnBhZ2Uuc2NyZWVuID0gdGFibGU7XG5cbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdE1vcnRnYWdlQnV0dG9uKTtcblxuICB9XG5cbiAgZ2V0IGh0bWwoKXtcbiAgICByZXR1cm4gdGhpcy4kaHRtbDtcbiAgfVxuICBnZXQgcGFnZSgpe1xuICAgIHJldHVybiB0aGlzLiRwYWdlO1xuICB9XG5cbiAgc2V0IGh0bWwoaHRtbCl7XG4gICAgdGhpcy4kaHRtbCA9IGh0bWw7XG4gIH1cbiAgc2V0IHBhZ2UocGFnZSl7XG4gICAgdGhpcy4kcGFnZSA9IHBhZ2U7XG4gIH1cbn1cblxuY2xhc3MgVGFibGVTY3JlZW57XG4gIGNvbnN0cnVjdG9yKHRoaXNNb3J0Z2FnZSl7XG4gICAgdGhpcy5tb3J0Z2FnZSA9IHRoaXNNb3J0Z2FnZTtcbiAgICB0aGlzLmh0bWwgPSAndGFibGVzY3JlZW4nO1xuICB9XG5cbiAgZ2V0IGh0bWwoKXtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSFRNTEVsZW1lbnQodHlwZSA9ICd0ZXh0JywgY2xhc3NMaXN0ID0gW10sIGlubmVySFRNTCA9ICcnKXtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgY2xhc3NMaXN0LmZvckVhY2goaHRtbENsYXNzID0+e1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChodG1sQ2xhc3MpO1xuICB9KTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRm9ybUlucHV0QW5kTGFiZWwodHlwZSwgaWQsIGxhYmVsLCBwYXJlbnQpe1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGV4dC50eXBlID0gdHlwZTtcbiAgdGV4dC5pZCA9IGlkO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlRm9ybUxhYmVsKGxhYmVsLCBpZCkpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZvcm1TZWxlY3RGaWVsZChpZCwgbGFiZWwsIHNlbGVjdGlvbkxpc3QsIHBhcmVudCl7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QuaWQgPSBpZDtcbiAgZm9yKGxldCBpPTA7IGk8c2VsZWN0aW9uTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBzZWxlY3Rpb25MaXN0W2ldO1xuICAgIG9wdGlvbi50ZXh0ID0gc2VsZWN0aW9uTGlzdFtpXTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUZvcm1MYWJlbChsYWJlbCwgaWQpKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHNlbGVjdCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybUxhYmVsKGxhYmVsLCBmb3JJbnB1dCl7XG4gIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRleHRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGZvcklucHV0KTtcbiAgdGV4dExhYmVsLmlubmVyVGV4dCA9IGxhYmVsO1xuICByZXR1cm4gdGV4dExhYmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuXG5jb25zdCB3ZWJwYWdlID0gbmV3IFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=