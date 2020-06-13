import { Component, ViewChild , ElementRef, OnInit  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ExpensesService} from '../expenses.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  expenses: Expense[];
  total: number;
	
  constructor(private sanitizer: DomSanitizer, private expensesService: ExpensesService) {

  }

  ngOnInit() {  //this only runs once, so doesn't update!
	  this.expenses = this.expensesService.getExpensesPending();
	  this.expenses.forEach( (expense) => {
  			this.total+=expense.amount;   
		});
	}
	
	
}
