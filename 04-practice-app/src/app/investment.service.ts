import { Injectable } from '@angular/core';
import { InvestmentInput } from './investment-input.model';

// Makes sure angular can inject this service and components can request it
@Injectable({
  providedIn: 'root',
})
export class investmentService {

  resultsData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];

    calculateResults(data: InvestmentInput) {
      // JS desctructuring syntax
      const { initialInvestment, annualInvestment, expectedReturn, duration } =
        data;
  
      // initialInvestment = Number(initialInvestment);
      // annualInvestment = Number(annualInvestment);
      // expectedReturn = Number(expectedReturn);
      // duration = Number(duration);
  
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
      console.log('annualData from app component');
      console.log(annualData);
      this.resultsData = annualData; // Store the result in the property
    }

  // My own initial attempt to create a service function
  // calculateResults(
  //   initialInvestment: any,
  //   annualInvestment: any,
  //   expectedReturn: any,
  //   duration: any
  // ) {
  //   initialInvestment = Number(initialInvestment);
  //   annualInvestment = Number(annualInvestment);
  //   expectedReturn = Number(expectedReturn);
  //   duration = Number(duration);

  //   const annualData = [];
  //   let investmentValue = initialInvestment;

  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }

  //   return annualData;
  // }
}

