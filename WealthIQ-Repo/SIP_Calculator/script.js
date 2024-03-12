loanAmountInput = document.querySelector(".loan-amount");
intrestRateInput = document.querySelector(".intrest-rate")
tenureInput = document.querySelector(".tenure")

loanEMIValue = document.querySelector(".loan-emi .result-value");
TotalIntrestvalue = document.querySelector(".total-intrest .result-value")
TotalAmountvalue = document.querySelector(".total-amount .result-value")

CalculateBtn = document.querySelector(".calculate-btn")

let loanAmount = parseFloat(loanAmountInput.value);
let intrestRate = parseFloat(intrestRateInput.value)
let tenure = parseFloat(tenureInput.value)

let intrest = intrestRate/12/100;

const calculateTotalValue= ()=>{
    
  let monthlyRate = intrestRate / 12 / 100;
  let totalMonths = (tenure*12)
  let monthlyInvestment = loanAmount;
  // Calculate future value formula
  var futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);

  // Round the result to two decimal places
  futureValue = Math.round(futureValue * (1 + monthlyRate) * 100) / 100;
  console.log(futureValue)
  return futureValue;
    
}

const displayChart = (investedAmount, ExpectedReturns) => {
  var existingChart = Chart.getChart("myChart");
  if (existingChart) {
      existingChart.destroy();
  }
  
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
         // labels: [investedAmount,ExpectedReturns],
          labels: ["Invested amount ", "Expected Returns"],
          datasets: [{

            data: [investedAmount, ExpectedReturns],
          backgroundColor: ["#e63946", "#14213d"],
          borderWidth: 0,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}

const update = (total_value)=>{
  
    //invested amount
    let investedAmount =Math.round(loanAmount * (tenure*12));
    loanEMIValue.innerHTML = Math.round(investedAmount)

    
    //Expected returns
    let ExpectedReturns  = total_value - investedAmount;
    
    TotalIntrestvalue.innerHTML = Math.round( ExpectedReturns);

    //Total value
    TotalAmountvalue.innerHTML = Math.round(total_value);
    
    displayChart(investedAmount,ExpectedReturns);
    console.log("jp")

}





const refreshInputvalues = ()=>{
     loanAmount = parseFloat(loanAmountInput.value);
    intrestRate = parseFloat(intrestRateInput.value)
    tenure = parseFloat(tenureInput.value)
    
}
const init = ()=>{
    refreshInputvalues()
    let TotalValue = calculateTotalValue();
    update(TotalValue);
}
// init()

CalculateBtn.addEventListener("click",init);

