import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class resultsService {
  onCalculateresults(
    initialInvestment: any,
    annualInvestment: any,
    expectedReturn: any,
    duration: any
  ) {
    initialInvestment = Number(initialInvestment);
    annualInvestment = Number(annualInvestment);
    expectedReturn = Number(expectedReturn);
    duration = Number(duration);

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}

