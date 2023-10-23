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

export default Mortgage;