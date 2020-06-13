import { Component, ViewChild , ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ExpensesService} from '../expenses.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  expenses: Expense[];
  total: number;
	
  constructor(private sanitizer: DomSanitizer, private expensesService: ExpensesService) {
  }

  ngOnInit() { 
	  this.expenses = this.expensesService.getExpensesArchived();
	  this.expenses.forEach( (expense) => {
  			this.total+=expense.amount;   
		});
	}
	
}