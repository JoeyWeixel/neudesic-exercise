class Mortgage{
  constructor(principal, numPayments, interestRate){
    this.$principal = principal;
    this.$numPayments = numPayments;
    this.$interestRate = interestRate;

    this.createMonthlyLists();
  }

  get principal(){
    return this.$principal;
  }
  get numPayments(){
    return this.$numPayments;
  }
  get interestRate(){
    return this.$interestRate;
  }
  get monthlyPayment(){
    let onePlusRtoN = Math.pow(1 + (this.interestRate / 12), this.numPayments);
    console.log(this.interestRate);
    let payment = this.principal * (((this.interestRate / 12) * onePlusRtoN) / (onePlusRtoN - 1));
    return payment;
  }
  get principalValuesList(){
    return this.$principalValuesList;
  }
  get principalPaymentsList(){
    return this.$principalPaymentsList;
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

  set principalValuesList(values){
    this.$principalValuesList = values;
  }
  set principalPaymentsList(values){
    this.$principalPaymentsList = values;
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
  set principal(principal){
    this.$principal = principal;
  }
  set numPayments(num){
    this.$numPayments = num;
  }
  set interestRate(rate){
    this.$interestRate = rate;
  }
  set monthlyPayment(monthly){
    let onePlusRtoN = Math.pow(1 + this.interestRate, this.numPayments);
    let payment = this.principal * ((this.interestRate * onePlusRtoN) / (onePlusRtoN - 1));
    this.monthlyPayment = payment;
  }

  createMonthlyLists(){
    const principalValues = [this.principal];
    const principalPayments = [0];
    const interestPayments = [0];
    const totalInterest = [0];
    const totalPaid = [0];
    const monthlyInterest = this.interestRate/12;
    for(let i=1; i<=this.numPayments; i++){
      let interest = principalValues[i-1] * monthlyInterest;
      let principalPayment = this.monthlyPayment - interest;
      principalValues.push(principalValues[i-1] - principalPayment);
      principalPayments.push(principalPayment);
      interestPayments.push(interest);
      totalInterest.push(totalInterest[i-1] + interest);
      totalPaid.push(i * this.monthlyPayment);
    }
    
    this.principalValuesList = principalValues;
    this.principalPaymentsList = principalPayments;
    this.interestPaymentsList = interestPayments;
    this.totalInterestList = totalInterest;
    this.totalPaidList = totalPaid;

  }
}

export default Mortgage;