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
    this.$principle = principle;
    this.$numPayments = numPayments;
    this.$interestRate = interestRate;

    this.createMonthlyLists();
  }

  get principle(){
    return this.$principle;
  }
  get numPayments(){
    return this.$numPayments;
  }
  get interestRate(){
    return this.$interestRate;
  }
  get monthlyPayment(){
    let onePlusRtoN = Math.pow(1 + this.interestRate, this.numPayments);
    let payment = this.principle * ((this.interestRate * onePlusRtoN) / (onePlusRtoN - 1));
    return payment;
  }
  get principleValuesList(){
    return this.$principleValuesList;
  }
  get principlePaymentsList(){
    return this.$principlePaymentsList;
  }
  get interestPaymentsList(){
    return this.$interestPaymentsList;
  }
  get totalInterestList(){
    return this.$totalInterestList;
  }
  get totalPaidList(){
    return this.$totalPaidList;
  }

  set principleValuesList(values){
    this.$principleValuesList = values;
  }
  set principlePaymentsList(values){
    this.$principlePaymentsList = values;
  }
  set interestPaymentsList(values){
    this.$interestPaymentsList = values;
  }
  set totalInterestList(values){
    this.$totalInterestList = values;
  }
  set totalPaidList(values){
    this.$totalPaidList = values;
  }
  set principle(principle){
    this.$principle = principle;
  }
  set numPayments(num){
    this.$numPayments = num;
  }
  set interestRate(rate){
    this.$interestRate = rate;
  }
  set monthlyPayment(monthly){
    let onePlusRtoN = Math.pow(1 + this.interestRate, this.numPayments);
    let payment = this.principle * ((this.interestRate * onePlusRtoN) / (onePlusRtoN - 1));
    this.monthlyPayment = payment;
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
      totalInterest.push(totalInterest[i-1] + interest);
      totalPaid.push(i * this.monthlyPayment);
    }
    console.log(principleValues);
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
    this.pageNode.appendChild(this.screen.element);
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
    this.pageNode.appendChild(this.screen.element);
  }


}

class InputScreen{
  constructor(page){
    this.$page = page;
    this.$element = generateHTMLElement('div', ['screen']);
    const form = generateHTMLElement('div', ['form']);
    this.element.appendChild(form);

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

  get element(){
    return this.$element;
  }
  get page(){
    return this.$page;
  }

  set element(element){
    this.$element = element;
  }
  set page(page){
    this.$page = page;
  }
}

class TableScreen{
  constructor(thisMortgage){
    this.mortgage = thisMortgage;
    this.$element = generateHTMLElement('div', ['screen', 'table']);

    const headers = ['Months', 'Principle Remaining', 'Total Paid', 'Principle Paid',
     'Interest Paid', 'Total Interest Accrued'];

     const monthsArray = Array.from(
      {length: (Number(this.mortgage.numPayments) + 1)},
      (_, index) => index
    );

    const columnData = [monthsArray, this.mortgage.principleValuesList, this.mortgage.totalPaidList,
      this.mortgage.principlePaymentsList, this.mortgage.interestPaymentsList,
      this.mortgage.totalInterestList];
    console.log(columnData);

    const table = tableMaker(headers, columnData);
    this.element.appendChild(table);
    
  }

  get element(){
    return this.$element;
  }

  set element(element){
    this.$element = element;
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

function tableMaker(headers = [], dataColumns = []){
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  for(let i=0; i<headers.length; i++){
    headerRow.appendChild(generateHTMLElement('th', [], headers[i]));
  }
  table.appendChild(headerRow);
  for(let i=0; i<dataColumns[0].length; i++){
    const row = document.createElement('tr');
    for(let j=0; j<dataColumns.length; j++){
      const data = generateHTMLElement('td', [], Math.round(dataColumns[j][i] * 100) / 100); // "naive" rounding apparently, works fine enough here bc this doesnt affect calculations on display.
      row.appendChild(data);
    }
    table.appendChild(row);
  }
  
  return table;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZXOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlEQUFRO0FBQ3RDO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxnREFBZ0Q7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QztBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkMsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7OztVQ3hLbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQjs7QUFFMUIsb0JBQW9CLDZDQUFJLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS8uL3NyYy9tb3J0Z2FnZS5qcyIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW9ydGdhZ2V7XG4gIGNvbnN0cnVjdG9yKHByaW5jaXBsZSwgbnVtUGF5bWVudHMsIGludGVyZXN0UmF0ZSl7XG4gICAgdGhpcy4kcHJpbmNpcGxlID0gcHJpbmNpcGxlO1xuICAgIHRoaXMuJG51bVBheW1lbnRzID0gbnVtUGF5bWVudHM7XG4gICAgdGhpcy4kaW50ZXJlc3RSYXRlID0gaW50ZXJlc3RSYXRlO1xuXG4gICAgdGhpcy5jcmVhdGVNb250aGx5TGlzdHMoKTtcbiAgfVxuXG4gIGdldCBwcmluY2lwbGUoKXtcbiAgICByZXR1cm4gdGhpcy4kcHJpbmNpcGxlO1xuICB9XG4gIGdldCBudW1QYXltZW50cygpe1xuICAgIHJldHVybiB0aGlzLiRudW1QYXltZW50cztcbiAgfVxuICBnZXQgaW50ZXJlc3RSYXRlKCl7XG4gICAgcmV0dXJuIHRoaXMuJGludGVyZXN0UmF0ZTtcbiAgfVxuICBnZXQgbW9udGhseVBheW1lbnQoKXtcbiAgICBsZXQgb25lUGx1c1J0b04gPSBNYXRoLnBvdygxICsgdGhpcy5pbnRlcmVzdFJhdGUsIHRoaXMubnVtUGF5bWVudHMpO1xuICAgIGxldCBwYXltZW50ID0gdGhpcy5wcmluY2lwbGUgKiAoKHRoaXMuaW50ZXJlc3RSYXRlICogb25lUGx1c1J0b04pIC8gKG9uZVBsdXNSdG9OIC0gMSkpO1xuICAgIHJldHVybiBwYXltZW50O1xuICB9XG4gIGdldCBwcmluY2lwbGVWYWx1ZXNMaXN0KCl7XG4gICAgcmV0dXJuIHRoaXMuJHByaW5jaXBsZVZhbHVlc0xpc3Q7XG4gIH1cbiAgZ2V0IHByaW5jaXBsZVBheW1lbnRzTGlzdCgpe1xuICAgIHJldHVybiB0aGlzLiRwcmluY2lwbGVQYXltZW50c0xpc3Q7XG4gIH1cbiAgZ2V0IGludGVyZXN0UGF5bWVudHNMaXN0KCl7XG4gICAgcmV0dXJuIHRoaXMuJGludGVyZXN0UGF5bWVudHNMaXN0O1xuICB9XG4gIGdldCB0b3RhbEludGVyZXN0TGlzdCgpe1xuICAgIHJldHVybiB0aGlzLiR0b3RhbEludGVyZXN0TGlzdDtcbiAgfVxuICBnZXQgdG90YWxQYWlkTGlzdCgpe1xuICAgIHJldHVybiB0aGlzLiR0b3RhbFBhaWRMaXN0O1xuICB9XG5cbiAgc2V0IHByaW5jaXBsZVZhbHVlc0xpc3QodmFsdWVzKXtcbiAgICB0aGlzLiRwcmluY2lwbGVWYWx1ZXNMaXN0ID0gdmFsdWVzO1xuICB9XG4gIHNldCBwcmluY2lwbGVQYXltZW50c0xpc3QodmFsdWVzKXtcbiAgICB0aGlzLiRwcmluY2lwbGVQYXltZW50c0xpc3QgPSB2YWx1ZXM7XG4gIH1cbiAgc2V0IGludGVyZXN0UGF5bWVudHNMaXN0KHZhbHVlcyl7XG4gICAgdGhpcy4kaW50ZXJlc3RQYXltZW50c0xpc3QgPSB2YWx1ZXM7XG4gIH1cbiAgc2V0IHRvdGFsSW50ZXJlc3RMaXN0KHZhbHVlcyl7XG4gICAgdGhpcy4kdG90YWxJbnRlcmVzdExpc3QgPSB2YWx1ZXM7XG4gIH1cbiAgc2V0IHRvdGFsUGFpZExpc3QodmFsdWVzKXtcbiAgICB0aGlzLiR0b3RhbFBhaWRMaXN0ID0gdmFsdWVzO1xuICB9XG4gIHNldCBwcmluY2lwbGUocHJpbmNpcGxlKXtcbiAgICB0aGlzLiRwcmluY2lwbGUgPSBwcmluY2lwbGU7XG4gIH1cbiAgc2V0IG51bVBheW1lbnRzKG51bSl7XG4gICAgdGhpcy4kbnVtUGF5bWVudHMgPSBudW07XG4gIH1cbiAgc2V0IGludGVyZXN0UmF0ZShyYXRlKXtcbiAgICB0aGlzLiRpbnRlcmVzdFJhdGUgPSByYXRlO1xuICB9XG4gIHNldCBtb250aGx5UGF5bWVudChtb250aGx5KXtcbiAgICBsZXQgb25lUGx1c1J0b04gPSBNYXRoLnBvdygxICsgdGhpcy5pbnRlcmVzdFJhdGUsIHRoaXMubnVtUGF5bWVudHMpO1xuICAgIGxldCBwYXltZW50ID0gdGhpcy5wcmluY2lwbGUgKiAoKHRoaXMuaW50ZXJlc3RSYXRlICogb25lUGx1c1J0b04pIC8gKG9uZVBsdXNSdG9OIC0gMSkpO1xuICAgIHRoaXMubW9udGhseVBheW1lbnQgPSBwYXltZW50O1xuICB9XG5cbiAgY3JlYXRlTW9udGhseUxpc3RzKCl7XG4gICAgY29uc3QgcHJpbmNpcGxlVmFsdWVzID0gW3RoaXMucHJpbmNpcGxlXTtcbiAgICBjb25zdCBwcmluY2lwbGVQYXltZW50cyA9IFswXTtcbiAgICBjb25zdCBpbnRlcmVzdFBheW1lbnRzID0gWzBdO1xuICAgIGNvbnN0IHRvdGFsSW50ZXJlc3QgPSBbMF07XG4gICAgY29uc3QgdG90YWxQYWlkID0gWzBdO1xuICAgIGZvcihsZXQgaT0xOyBpPD10aGlzLm51bVBheW1lbnRzOyBpKyspe1xuICAgICAgbGV0IGludGVyZXN0ID0gcHJpbmNpcGxlVmFsdWVzW2ktMV0gKiB0aGlzLmludGVyZXN0UmF0ZTtcbiAgICAgIGxldCBwcmluY2lwbGVQYXltZW50ID0gdGhpcy5tb250aGx5UGF5bWVudCAtIGludGVyZXN0O1xuXG4gICAgICBwcmluY2lwbGVWYWx1ZXMucHVzaChwcmluY2lwbGVWYWx1ZXNbaS0xXSAtIHByaW5jaXBsZVBheW1lbnQpO1xuICAgICAgcHJpbmNpcGxlUGF5bWVudHMucHVzaChwcmluY2lwbGVQYXltZW50KTtcbiAgICAgIGludGVyZXN0UGF5bWVudHMucHVzaChpbnRlcmVzdCk7XG4gICAgICB0b3RhbEludGVyZXN0LnB1c2godG90YWxJbnRlcmVzdFtpLTFdICsgaW50ZXJlc3QpO1xuICAgICAgdG90YWxQYWlkLnB1c2goaSAqIHRoaXMubW9udGhseVBheW1lbnQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcmluY2lwbGVWYWx1ZXMpO1xuICAgIHRoaXMucHJpbmNpcGxlVmFsdWVzTGlzdCA9IHByaW5jaXBsZVZhbHVlcztcbiAgICB0aGlzLnByaW5jaXBsZVBheW1lbnRzTGlzdCA9IHByaW5jaXBsZVBheW1lbnRzO1xuICAgIHRoaXMuaW50ZXJlc3RQYXltZW50c0xpc3QgPSBpbnRlcmVzdFBheW1lbnRzO1xuICAgIHRoaXMudG90YWxJbnRlcmVzdExpc3QgPSB0b3RhbEludGVyZXN0O1xuICAgIHRoaXMudG90YWxQYWlkTGlzdCA9IHRvdGFsUGFpZDtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vcnRnYWdlOyIsImltcG9ydCBNb3J0Z2FnZSBmcm9tIFwiLi9tb3J0Z2FnZVwiO1xuXG5jbGFzcyBQYWdle1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuJHNjcmVlbiA9IG5ldyBJbnB1dFNjcmVlbih0aGlzKTtcbiAgICB0aGlzLiRwYWdlTm9kZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdGhpcy5wYWdlTm9kZS5hcHBlbmRDaGlsZCh0aGlzLnNjcmVlbi5lbGVtZW50KTtcbiAgfVxuXG4gIGdldCBzY3JlZW4oKXtcbiAgICByZXR1cm4gdGhpcy4kc2NyZWVuO1xuICB9XG4gIGdldCBwYWdlTm9kZSgpe1xuICAgIHJldHVybiB0aGlzLiRwYWdlTm9kZTtcbiAgfVxuXG4gIHNldCBzY3JlZW4oc2NyZWVuKXtcbiAgICB0aGlzLiRzY3JlZW4gPSBzY3JlZW47XG4gICAgdGhpcy51cGRhdGVQYWdlKCk7XG4gIH1cbiAgc2V0IHBhZ2VOb2RlKHBhZ2VOb2RlKXtcbiAgICB0aGlzLiRwYWdlTm9kZSA9IHBhZ2VOb2RlO1xuICB9XG5cbiAgdXBkYXRlUGFnZSgpe1xuICAgIHRoaXMucGFnZU5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5wYWdlTm9kZS5hcHBlbmRDaGlsZCh0aGlzLnNjcmVlbi5lbGVtZW50KTtcbiAgfVxuXG5cbn1cblxuY2xhc3MgSW5wdXRTY3JlZW57XG4gIGNvbnN0cnVjdG9yKHBhZ2Upe1xuICAgIHRoaXMuJHBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuJGVsZW1lbnQgPSBnZW5lcmF0ZUhUTUxFbGVtZW50KCdkaXYnLCBbJ3NjcmVlbiddKTtcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVIVE1MRWxlbWVudCgnZGl2JywgWydmb3JtJ10pO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGFwcGVuZEZvcm1JbnB1dEFuZExhYmVsKCdudW1iZXInLCAnbG9hbkFtb3VudCcsICdFbnRlciBsb2FuIGFtb3VudCAoJCknLCBmb3JtKTtcbiAgICBhcHBlbmRGb3JtSW5wdXRBbmRMYWJlbCgnbnVtYmVyJywgJ2xvYW5MZW5ndGgnLCAnRW50ZXIgbG9hbiBsZW5ndGggKE1vbnRocyknLCBmb3JtKTtcbiAgICBhcHBlbmRGb3JtSW5wdXRBbmRMYWJlbCgnbnVtYmVyJywgJ2ludGVyZXN0UmF0ZScsICdFbnRlciBsb2FuIGludGVyZXN0IHJhdGUgKCUpJywgZm9ybSk7XG5cbiAgICBjb25zdCBzdWJtaXRNb3J0Z2FnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdE1vcnRnYWdlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdhZGQnLCAnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgIHN1Ym1pdE1vcnRnYWdlQnV0dG9uLmlubmVyVGV4dCA9ICdhZGQnO1xuICAgIHN1Ym1pdE1vcnRnYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBwcmluY2lwbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hbkFtb3VudCcpLnZhbHVlO1xuICAgICAgY29uc3QgbW9udGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYW5MZW5ndGgnKS52YWx1ZTtcbiAgICAgIGNvbnN0IHJhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50ZXJlc3RSYXRlJykudmFsdWU7XG4gICAgICBjb25zdCBuZXdNb3J0Z2FnZSA9IG5ldyBNb3J0Z2FnZShwcmluY2lwbGUsIG1vbnRocywgcmF0ZS8xMDApO1xuICAgICAgY29uc3QgdGFibGUgPSBuZXcgVGFibGVTY3JlZW4obmV3TW9ydGdhZ2UpO1xuICAgICAgdGhpcy5wYWdlLnNjcmVlbiA9IHRhYmxlO1xuXG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRNb3J0Z2FnZUJ1dHRvbik7XG5cbiAgfVxuXG4gIGdldCBlbGVtZW50KCl7XG4gICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gIH1cbiAgZ2V0IHBhZ2UoKXtcbiAgICByZXR1cm4gdGhpcy4kcGFnZTtcbiAgfVxuXG4gIHNldCBlbGVtZW50KGVsZW1lbnQpe1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG4gIHNldCBwYWdlKHBhZ2Upe1xuICAgIHRoaXMuJHBhZ2UgPSBwYWdlO1xuICB9XG59XG5cbmNsYXNzIFRhYmxlU2NyZWVue1xuICBjb25zdHJ1Y3Rvcih0aGlzTW9ydGdhZ2Upe1xuICAgIHRoaXMubW9ydGdhZ2UgPSB0aGlzTW9ydGdhZ2U7XG4gICAgdGhpcy4kZWxlbWVudCA9IGdlbmVyYXRlSFRNTEVsZW1lbnQoJ2RpdicsIFsnc2NyZWVuJywgJ3RhYmxlJ10pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IFsnTW9udGhzJywgJ1ByaW5jaXBsZSBSZW1haW5pbmcnLCAnVG90YWwgUGFpZCcsICdQcmluY2lwbGUgUGFpZCcsXG4gICAgICdJbnRlcmVzdCBQYWlkJywgJ1RvdGFsIEludGVyZXN0IEFjY3J1ZWQnXTtcblxuICAgICBjb25zdCBtb250aHNBcnJheSA9IEFycmF5LmZyb20oXG4gICAgICB7bGVuZ3RoOiAoTnVtYmVyKHRoaXMubW9ydGdhZ2UubnVtUGF5bWVudHMpICsgMSl9LFxuICAgICAgKF8sIGluZGV4KSA9PiBpbmRleFxuICAgICk7XG5cbiAgICBjb25zdCBjb2x1bW5EYXRhID0gW21vbnRoc0FycmF5LCB0aGlzLm1vcnRnYWdlLnByaW5jaXBsZVZhbHVlc0xpc3QsIHRoaXMubW9ydGdhZ2UudG90YWxQYWlkTGlzdCxcbiAgICAgIHRoaXMubW9ydGdhZ2UucHJpbmNpcGxlUGF5bWVudHNMaXN0LCB0aGlzLm1vcnRnYWdlLmludGVyZXN0UGF5bWVudHNMaXN0LFxuICAgICAgdGhpcy5tb3J0Z2FnZS50b3RhbEludGVyZXN0TGlzdF07XG4gICAgY29uc29sZS5sb2coY29sdW1uRGF0YSk7XG5cbiAgICBjb25zdCB0YWJsZSA9IHRhYmxlTWFrZXIoaGVhZGVycywgY29sdW1uRGF0YSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICBcbiAgfVxuXG4gIGdldCBlbGVtZW50KCl7XG4gICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gIH1cblxuICBzZXQgZWxlbWVudChlbGVtZW50KXtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhUTUxFbGVtZW50KHR5cGUgPSAndGV4dCcsIGNsYXNzTGlzdCA9IFtdLCBpbm5lckhUTUwgPSAnJyl7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gIGNsYXNzTGlzdC5mb3JFYWNoKGh0bWxDbGFzcyA9PntcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaHRtbENsYXNzKTtcbiAgfSk7XG5cbiAgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZvcm1JbnB1dEFuZExhYmVsKHR5cGUsIGlkLCBsYWJlbCwgcGFyZW50KXtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRleHQudHlwZSA9IHR5cGU7XG4gIHRleHQuaWQgPSBpZDtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUZvcm1MYWJlbChsYWJlbCwgaWQpKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRGb3JtU2VsZWN0RmllbGQoaWQsIGxhYmVsLCBzZWxlY3Rpb25MaXN0LCBwYXJlbnQpe1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIGZvcihsZXQgaT0wOyBpPHNlbGVjdGlvbkxpc3QubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gc2VsZWN0aW9uTGlzdFtpXTtcbiAgICBvcHRpb24udGV4dCA9IHNlbGVjdGlvbkxpc3RbaV07XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVGb3JtTGFiZWwobGFiZWwsIGlkKSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChzZWxlY3QpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm1MYWJlbChsYWJlbCwgZm9ySW5wdXQpe1xuICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0ZXh0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBmb3JJbnB1dCk7XG4gIHRleHRMYWJlbC5pbm5lclRleHQgPSBsYWJlbDtcbiAgcmV0dXJuIHRleHRMYWJlbDtcbn1cblxuZnVuY3Rpb24gdGFibGVNYWtlcihoZWFkZXJzID0gW10sIGRhdGFDb2x1bW5zID0gW10pe1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGZvcihsZXQgaT0wOyBpPGhlYWRlcnMubGVuZ3RoOyBpKyspe1xuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChnZW5lcmF0ZUhUTUxFbGVtZW50KCd0aCcsIFtdLCBoZWFkZXJzW2ldKSk7XG4gIH1cbiAgdGFibGUuYXBwZW5kQ2hpbGQoaGVhZGVyUm93KTtcbiAgZm9yKGxldCBpPTA7IGk8ZGF0YUNvbHVtbnNbMF0ubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yKGxldCBqPTA7IGo8ZGF0YUNvbHVtbnMubGVuZ3RoOyBqKyspe1xuICAgICAgY29uc3QgZGF0YSA9IGdlbmVyYXRlSFRNTEVsZW1lbnQoJ3RkJywgW10sIE1hdGgucm91bmQoZGF0YUNvbHVtbnNbal1baV0gKiAxMDApIC8gMTAwKTsgLy8gXCJuYWl2ZVwiIHJvdW5kaW5nIGFwcGFyZW50bHksIHdvcmtzIGZpbmUgZW5vdWdoIGhlcmUgYmMgdGhpcyBkb2VzbnQgYWZmZWN0IGNhbGN1bGF0aW9ucyBvbiBkaXNwbGF5LlxuICAgICAgcm93LmFwcGVuZENoaWxkKGRhdGEpO1xuICAgIH1cbiAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIFxuICByZXR1cm4gdGFibGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5cbmNvbnN0IHdlYnBhZ2UgPSBuZXcgUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==