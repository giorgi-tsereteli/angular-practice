import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type InvestmentInput } from './investment-input.model';
import { resultsComponent } from "./investment-results/investment-results.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, resultsComponent, CommonModule],
})
export class AppComponent {
  
  resultsData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
}[]

  // Good practice to name event handlers with the prefix "on"
  onCalculateresults(data: InvestmentInput) {
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
}
