import Mortgage from "./mortgage";

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
    submitMortgageButton.classList.add('button', 'done', 'material-symbols-outlined');
    submitMortgageButton.innerText = 'check';
    submitMortgageButton.addEventListener('click', e => {
      const principle = document.getElementById('loanAmount').value;
      const months = document.getElementById('loanLength').value;
      const rate = document.getElementById('interestRate').value;
      const newMortgage = new Mortgage(principle, months, rate/100);
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

export default {Page, TableScreen};