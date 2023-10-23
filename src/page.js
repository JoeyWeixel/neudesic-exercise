import Mortgage from "./mortgage";

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
      const newMortgage = new Mortgage(principle, months, rate/100);
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

export default Page;