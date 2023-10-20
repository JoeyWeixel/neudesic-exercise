import _ from 'lodash';

class mortgage{
  constructor(principle, numPayments, interestRate){
    this.principle = principle;
    this.numPayments = numPayments;
    this.interestRate = interestRate;
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
  
  #generateMonthlyValues(){
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
  }
}