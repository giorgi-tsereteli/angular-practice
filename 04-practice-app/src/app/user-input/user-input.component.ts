import { FormsModule } from '@angular/forms';
import { Component, inject, Input, output, signal } from '@angular/core';

import { resultsService } from './investment.service';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: resultsService) {}

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedInvestment = signal('0');
  enteredDuration = signal('0');

  calculate = output<InvestmentInput>();

  onSubmit() {
    this.calculate.emit({
      // + is a shorthand for converting a string to a number
      // You need () with when emitting the values bcz you need to emit data and not the signal itself
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedInvestment(),
      duration: +this.enteredDuration(),
    });
    // Following is block to reset inputs to 0
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedInvestment.set('0');
    this.enteredDuration.set('0');
  }
}
