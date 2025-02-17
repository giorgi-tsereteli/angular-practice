import { FormsModule } from '@angular/forms';
import { Component, inject, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

import { investmentService } from '../investment.service';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // Injecting the service
  constructor(private investmentService: investmentService) {}

  enteredInitialInvestment: string = '0';
  enteredAnnualInvestment: string = '0';
  enteredExpectedInvestment: string = '0';
  enteredDuration: string = '0';

  @Output() calculate = new EventEmitter<InvestmentInput>();

  onSubmit() {
    this.investmentService.calculateResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedInvestment,
      duration: +this.enteredDuration,
    })

    // Previous version without using the service
    // this.calculate.emit({
    //   // + is a shorthand for converting a string to a number
    //   // Question is, why in course is he NOT making it number by default? O__o
    //   initialInvestment: +this.enteredInitialInvestment,
    //   annualInvestment: +this.enteredAnnualInvestment,
    //   expectedReturn: +this.enteredExpectedInvestment,
    //   duration: +this.enteredDuration,
    // });
  }
}
