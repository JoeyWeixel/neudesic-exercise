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
  for(let i=0; i<=dataColumns[0].length; i++){
    const row = document.createElement('tr');
    for(let j=0; j<dataColumns.length; j++){
      const data = generateHTMLElement('td', [], dataColumns[j][i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZXOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlEQUFRO0FBQ3RDO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxnREFBZ0Q7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QztBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUN4S25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEI7O0FBRTFCLG9CQUFvQiw2Q0FBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2UvLi9zcmMvbW9ydGdhZ2UuanMiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2UvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vcnRnYWdle1xuICBjb25zdHJ1Y3RvcihwcmluY2lwbGUsIG51bVBheW1lbnRzLCBpbnRlcmVzdFJhdGUpe1xuICAgIHRoaXMuJHByaW5jaXBsZSA9IHByaW5jaXBsZTtcbiAgICB0aGlzLiRudW1QYXltZW50cyA9IG51bVBheW1lbnRzO1xuICAgIHRoaXMuJGludGVyZXN0UmF0ZSA9IGludGVyZXN0UmF0ZTtcblxuICAgIHRoaXMuY3JlYXRlTW9udGhseUxpc3RzKCk7XG4gIH1cblxuICBnZXQgcHJpbmNpcGxlKCl7XG4gICAgcmV0dXJuIHRoaXMuJHByaW5jaXBsZTtcbiAgfVxuICBnZXQgbnVtUGF5bWVudHMoKXtcbiAgICByZXR1cm4gdGhpcy4kbnVtUGF5bWVudHM7XG4gIH1cbiAgZ2V0IGludGVyZXN0UmF0ZSgpe1xuICAgIHJldHVybiB0aGlzLiRpbnRlcmVzdFJhdGU7XG4gIH1cbiAgZ2V0IG1vbnRobHlQYXltZW50KCl7XG4gICAgbGV0IG9uZVBsdXNSdG9OID0gTWF0aC5wb3coMSArIHRoaXMuaW50ZXJlc3RSYXRlLCB0aGlzLm51bVBheW1lbnRzKTtcbiAgICBsZXQgcGF5bWVudCA9IHRoaXMucHJpbmNpcGxlICogKCh0aGlzLmludGVyZXN0UmF0ZSAqIG9uZVBsdXNSdG9OKSAvIChvbmVQbHVzUnRvTiAtIDEpKTtcbiAgICByZXR1cm4gcGF5bWVudDtcbiAgfVxuICBnZXQgcHJpbmNpcGxlVmFsdWVzTGlzdCgpe1xuICAgIHJldHVybiB0aGlzLiRwcmluY2lwbGVWYWx1ZXNMaXN0O1xuICB9XG4gIGdldCBwcmluY2lwbGVQYXltZW50c0xpc3QoKXtcbiAgICByZXR1cm4gdGhpcy4kcHJpbmNpcGxlUGF5bWVudHNMaXN0O1xuICB9XG4gIGdldCBpbnRlcmVzdFBheW1lbnRzTGlzdCgpe1xuICAgIHJldHVybiB0aGlzLiRpbnRlcmVzdFBheW1lbnRzTGlzdDtcbiAgfVxuICBnZXQgdG90YWxJbnRlcmVzdExpc3QoKXtcbiAgICByZXR1cm4gdGhpcy4kdG90YWxJbnRlcmVzdExpc3Q7XG4gIH1cbiAgZ2V0IHRvdGFsUGFpZExpc3QoKXtcbiAgICByZXR1cm4gdGhpcy4kdG90YWxQYWlkTGlzdDtcbiAgfVxuXG4gIHNldCBwcmluY2lwbGVWYWx1ZXNMaXN0KHZhbHVlcyl7XG4gICAgdGhpcy4kcHJpbmNpcGxlVmFsdWVzTGlzdCA9IHZhbHVlcztcbiAgfVxuICBzZXQgcHJpbmNpcGxlUGF5bWVudHNMaXN0KHZhbHVlcyl7XG4gICAgdGhpcy4kcHJpbmNpcGxlUGF5bWVudHNMaXN0ID0gdmFsdWVzO1xuICB9XG4gIHNldCBpbnRlcmVzdFBheW1lbnRzTGlzdCh2YWx1ZXMpe1xuICAgIHRoaXMuJGludGVyZXN0UGF5bWVudHNMaXN0ID0gdmFsdWVzO1xuICB9XG4gIHNldCB0b3RhbEludGVyZXN0TGlzdCh2YWx1ZXMpe1xuICAgIHRoaXMuJHRvdGFsSW50ZXJlc3RMaXN0ID0gdmFsdWVzO1xuICB9XG4gIHNldCB0b3RhbFBhaWRMaXN0KHZhbHVlcyl7XG4gICAgdGhpcy4kdG90YWxQYWlkTGlzdCA9IHZhbHVlcztcbiAgfVxuICBzZXQgcHJpbmNpcGxlKHByaW5jaXBsZSl7XG4gICAgdGhpcy4kcHJpbmNpcGxlID0gcHJpbmNpcGxlO1xuICB9XG4gIHNldCBudW1QYXltZW50cyhudW0pe1xuICAgIHRoaXMuJG51bVBheW1lbnRzID0gbnVtO1xuICB9XG4gIHNldCBpbnRlcmVzdFJhdGUocmF0ZSl7XG4gICAgdGhpcy4kaW50ZXJlc3RSYXRlID0gcmF0ZTtcbiAgfVxuICBzZXQgbW9udGhseVBheW1lbnQobW9udGhseSl7XG4gICAgbGV0IG9uZVBsdXNSdG9OID0gTWF0aC5wb3coMSArIHRoaXMuaW50ZXJlc3RSYXRlLCB0aGlzLm51bVBheW1lbnRzKTtcbiAgICBsZXQgcGF5bWVudCA9IHRoaXMucHJpbmNpcGxlICogKCh0aGlzLmludGVyZXN0UmF0ZSAqIG9uZVBsdXNSdG9OKSAvIChvbmVQbHVzUnRvTiAtIDEpKTtcbiAgICB0aGlzLm1vbnRobHlQYXltZW50ID0gcGF5bWVudDtcbiAgfVxuXG4gIGNyZWF0ZU1vbnRobHlMaXN0cygpe1xuICAgIGNvbnN0IHByaW5jaXBsZVZhbHVlcyA9IFt0aGlzLnByaW5jaXBsZV07XG4gICAgY29uc3QgcHJpbmNpcGxlUGF5bWVudHMgPSBbMF07XG4gICAgY29uc3QgaW50ZXJlc3RQYXltZW50cyA9IFswXTtcbiAgICBjb25zdCB0b3RhbEludGVyZXN0ID0gWzBdO1xuICAgIGNvbnN0IHRvdGFsUGFpZCA9IFswXTtcbiAgICBmb3IobGV0IGk9MTsgaTw9dGhpcy5udW1QYXltZW50czsgaSsrKXtcbiAgICAgIGxldCBpbnRlcmVzdCA9IHByaW5jaXBsZVZhbHVlc1tpLTFdICogdGhpcy5pbnRlcmVzdFJhdGU7XG4gICAgICBsZXQgcHJpbmNpcGxlUGF5bWVudCA9IHRoaXMubW9udGhseVBheW1lbnQgLSBpbnRlcmVzdDtcblxuICAgICAgcHJpbmNpcGxlVmFsdWVzLnB1c2gocHJpbmNpcGxlVmFsdWVzW2ktMV0gLSBwcmluY2lwbGVQYXltZW50KTtcbiAgICAgIHByaW5jaXBsZVBheW1lbnRzLnB1c2gocHJpbmNpcGxlUGF5bWVudCk7XG4gICAgICBpbnRlcmVzdFBheW1lbnRzLnB1c2goaW50ZXJlc3QpO1xuICAgICAgdG90YWxJbnRlcmVzdC5wdXNoKHRvdGFsSW50ZXJlc3RbaS0xXSArIGludGVyZXN0KTtcbiAgICAgIHRvdGFsUGFpZC5wdXNoKGkgKiB0aGlzLm1vbnRobHlQYXltZW50KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJpbmNpcGxlVmFsdWVzKTtcbiAgICB0aGlzLnByaW5jaXBsZVZhbHVlc0xpc3QgPSBwcmluY2lwbGVWYWx1ZXM7XG4gICAgdGhpcy5wcmluY2lwbGVQYXltZW50c0xpc3QgPSBwcmluY2lwbGVQYXltZW50cztcbiAgICB0aGlzLmludGVyZXN0UGF5bWVudHNMaXN0ID0gaW50ZXJlc3RQYXltZW50cztcbiAgICB0aGlzLnRvdGFsSW50ZXJlc3RMaXN0ID0gdG90YWxJbnRlcmVzdDtcbiAgICB0aGlzLnRvdGFsUGFpZExpc3QgPSB0b3RhbFBhaWQ7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3J0Z2FnZTsiLCJpbXBvcnQgTW9ydGdhZ2UgZnJvbSBcIi4vbW9ydGdhZ2VcIjtcblxuY2xhc3MgUGFnZXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLiRzY3JlZW4gPSBuZXcgSW5wdXRTY3JlZW4odGhpcyk7XG4gICAgdGhpcy4kcGFnZU5vZGUgPSBkb2N1bWVudC5ib2R5O1xuICAgIHRoaXMucGFnZU5vZGUuYXBwZW5kQ2hpbGQodGhpcy5zY3JlZW4uZWxlbWVudCk7XG4gIH1cblxuICBnZXQgc2NyZWVuKCl7XG4gICAgcmV0dXJuIHRoaXMuJHNjcmVlbjtcbiAgfVxuICBnZXQgcGFnZU5vZGUoKXtcbiAgICByZXR1cm4gdGhpcy4kcGFnZU5vZGU7XG4gIH1cblxuICBzZXQgc2NyZWVuKHNjcmVlbil7XG4gICAgdGhpcy4kc2NyZWVuID0gc2NyZWVuO1xuICAgIHRoaXMudXBkYXRlUGFnZSgpO1xuICB9XG4gIHNldCBwYWdlTm9kZShwYWdlTm9kZSl7XG4gICAgdGhpcy4kcGFnZU5vZGUgPSBwYWdlTm9kZTtcbiAgfVxuXG4gIHVwZGF0ZVBhZ2UoKXtcbiAgICB0aGlzLnBhZ2VOb2RlLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMucGFnZU5vZGUuYXBwZW5kQ2hpbGQodGhpcy5zY3JlZW4uZWxlbWVudCk7XG4gIH1cblxuXG59XG5cbmNsYXNzIElucHV0U2NyZWVue1xuICBjb25zdHJ1Y3RvcihwYWdlKXtcbiAgICB0aGlzLiRwYWdlID0gcGFnZTtcbiAgICB0aGlzLiRlbGVtZW50ID0gZ2VuZXJhdGVIVE1MRWxlbWVudCgnZGl2JywgWydzY3JlZW4nXSk7XG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlSFRNTEVsZW1lbnQoJ2RpdicsIFsnZm9ybSddKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBhcHBlbmRGb3JtSW5wdXRBbmRMYWJlbCgnbnVtYmVyJywgJ2xvYW5BbW91bnQnLCAnRW50ZXIgbG9hbiBhbW91bnQgKCQpJywgZm9ybSk7XG4gICAgYXBwZW5kRm9ybUlucHV0QW5kTGFiZWwoJ251bWJlcicsICdsb2FuTGVuZ3RoJywgJ0VudGVyIGxvYW4gbGVuZ3RoIChNb250aHMpJywgZm9ybSk7XG4gICAgYXBwZW5kRm9ybUlucHV0QW5kTGFiZWwoJ251bWJlcicsICdpbnRlcmVzdFJhdGUnLCAnRW50ZXIgbG9hbiBpbnRlcmVzdCByYXRlICglKScsIGZvcm0pO1xuXG4gICAgY29uc3Qgc3VibWl0TW9ydGdhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRNb3J0Z2FnZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnYWRkJywgJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICBzdWJtaXRNb3J0Z2FnZUJ1dHRvbi5pbm5lclRleHQgPSAnYWRkJztcbiAgICBzdWJtaXRNb3J0Z2FnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgcHJpbmNpcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYW5BbW91bnQnKS52YWx1ZTtcbiAgICAgIGNvbnN0IG1vbnRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FuTGVuZ3RoJykudmFsdWU7XG4gICAgICBjb25zdCByYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludGVyZXN0UmF0ZScpLnZhbHVlO1xuICAgICAgY29uc3QgbmV3TW9ydGdhZ2UgPSBuZXcgTW9ydGdhZ2UocHJpbmNpcGxlLCBtb250aHMsIHJhdGUvMTAwKTtcbiAgICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlU2NyZWVuKG5ld01vcnRnYWdlKTtcbiAgICAgIHRoaXMucGFnZS5zY3JlZW4gPSB0YWJsZTtcblxuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0TW9ydGdhZ2VCdXR0b24pO1xuXG4gIH1cblxuICBnZXQgZWxlbWVudCgpe1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICB9XG4gIGdldCBwYWdlKCl7XG4gICAgcmV0dXJuIHRoaXMuJHBhZ2U7XG4gIH1cblxuICBzZXQgZWxlbWVudChlbGVtZW50KXtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuICBzZXQgcGFnZShwYWdlKXtcbiAgICB0aGlzLiRwYWdlID0gcGFnZTtcbiAgfVxufVxuXG5jbGFzcyBUYWJsZVNjcmVlbntcbiAgY29uc3RydWN0b3IodGhpc01vcnRnYWdlKXtcbiAgICB0aGlzLm1vcnRnYWdlID0gdGhpc01vcnRnYWdlO1xuICAgIHRoaXMuJGVsZW1lbnQgPSBnZW5lcmF0ZUhUTUxFbGVtZW50KCdkaXYnLCBbJ3NjcmVlbicsICd0YWJsZSddKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbJ01vbnRocycsICdQcmluY2lwbGUgUmVtYWluaW5nJywgJ1RvdGFsIFBhaWQnLCAnUHJpbmNpcGxlIFBhaWQnLFxuICAgICAnSW50ZXJlc3QgUGFpZCcsICdUb3RhbCBJbnRlcmVzdCBBY2NydWVkJ107XG5cbiAgICAgY29uc3QgbW9udGhzQXJyYXkgPSBBcnJheS5mcm9tKFxuICAgICAge2xlbmd0aDogKE51bWJlcih0aGlzLm1vcnRnYWdlLm51bVBheW1lbnRzKSArIDEpfSxcbiAgICAgIChfLCBpbmRleCkgPT4gaW5kZXhcbiAgICApO1xuXG4gICAgY29uc3QgY29sdW1uRGF0YSA9IFttb250aHNBcnJheSwgdGhpcy5tb3J0Z2FnZS5wcmluY2lwbGVWYWx1ZXNMaXN0LCB0aGlzLm1vcnRnYWdlLnRvdGFsUGFpZExpc3QsXG4gICAgICB0aGlzLm1vcnRnYWdlLnByaW5jaXBsZVBheW1lbnRzTGlzdCwgdGhpcy5tb3J0Z2FnZS5pbnRlcmVzdFBheW1lbnRzTGlzdCxcbiAgICAgIHRoaXMubW9ydGdhZ2UudG90YWxJbnRlcmVzdExpc3RdO1xuICAgIGNvbnNvbGUubG9nKGNvbHVtbkRhdGEpO1xuXG4gICAgY29uc3QgdGFibGUgPSB0YWJsZU1ha2VyKGhlYWRlcnMsIGNvbHVtbkRhdGEpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgXG4gIH1cblxuICBnZXQgZWxlbWVudCgpe1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICB9XG5cbiAgc2V0IGVsZW1lbnQoZWxlbWVudCl7XG4gICAgdGhpcy4kZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIVE1MRWxlbWVudCh0eXBlID0gJ3RleHQnLCBjbGFzc0xpc3QgPSBbXSwgaW5uZXJIVE1MID0gJycpe1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICBjbGFzc0xpc3QuZm9yRWFjaChodG1sQ2xhc3MgPT57XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGh0bWxDbGFzcyk7XG4gIH0pO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRGb3JtSW5wdXRBbmRMYWJlbCh0eXBlLCBpZCwgbGFiZWwsIHBhcmVudCl7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0ZXh0LnR5cGUgPSB0eXBlO1xuICB0ZXh0LmlkID0gaWQ7XG4gIHRleHQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVGb3JtTGFiZWwobGFiZWwsIGlkKSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRm9ybVNlbGVjdEZpZWxkKGlkLCBsYWJlbCwgc2VsZWN0aW9uTGlzdCwgcGFyZW50KXtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdC5pZCA9IGlkO1xuICBmb3IobGV0IGk9MDsgaTxzZWxlY3Rpb25MaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHNlbGVjdGlvbkxpc3RbaV07XG4gICAgb3B0aW9uLnRleHQgPSBzZWxlY3Rpb25MaXN0W2ldO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlRm9ybUxhYmVsKGxhYmVsLCBpZCkpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtTGFiZWwobGFiZWwsIGZvcklucHV0KXtcbiAgY29uc3QgdGV4dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGV4dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZm9ySW5wdXQpO1xuICB0ZXh0TGFiZWwuaW5uZXJUZXh0ID0gbGFiZWw7XG4gIHJldHVybiB0ZXh0TGFiZWw7XG59XG5cbmZ1bmN0aW9uIHRhYmxlTWFrZXIoaGVhZGVycyA9IFtdLCBkYXRhQ29sdW1ucyA9IFtdKXtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBmb3IobGV0IGk9MDsgaTxoZWFkZXJzLmxlbmd0aDsgaSsrKXtcbiAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIVE1MRWxlbWVudCgndGgnLCBbXSwgaGVhZGVyc1tpXSkpO1xuICB9XG4gIHRhYmxlLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG4gIGZvcihsZXQgaT0wOyBpPD1kYXRhQ29sdW1uc1swXS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IobGV0IGo9MDsgajxkYXRhQ29sdW1ucy5sZW5ndGg7IGorKyl7XG4gICAgICBjb25zdCBkYXRhID0gZ2VuZXJhdGVIVE1MRWxlbWVudCgndGQnLCBbXSwgZGF0YUNvbHVtbnNbal1baV0pO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGRhdGEpO1xuICAgIH1cbiAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIFxuICByZXR1cm4gdGFibGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5cbmNvbnN0IHdlYnBhZ2UgPSBuZXcgUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==