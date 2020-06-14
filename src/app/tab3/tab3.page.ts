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
	
  constructor(private sanitizer: DomSanitizer, private expensesService: ExpensesService) {
  }

  ngOnInit() { 
	  this.expenses = this.expensesService.getExpensesArchived();
	}
	
  getTotal(){
  	let total =0;
	this.expenses.forEach( (expense) => {
		total+=expense.amount;   
	}); 
	return total;
  }
	
	
}