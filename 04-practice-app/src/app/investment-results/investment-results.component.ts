import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { investmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class resultsComponent {

    private investmentService = inject(investmentService);

    // Expose results data from service to html template of this component
    // Basically, all calculating and storing the result is done within service. No need to emit or pass data around
    get results() { return this.investmentService.resultsData; }

  // Type of results is an array of objects with the following properties
  // @Input() results?: {
  //     year: number,
  //     interest: number,
  //     valueEndOfYear: number,
  //     annualInvestment: number,
  //     totalInterest: number,
  //     totalAmountInvested: number
  // }[]
}
