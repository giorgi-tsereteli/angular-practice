import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  
  // Good practice to name event handlers with the prefix "on"
  onCalculateInvestmentResults(data: InvestmentInput) {
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
    
    return annualData;
  }
}
