import { Component, ViewChild , ElementRef, OnInit } from '@angular/core';
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
	
  constructor(private sanitizer: DomSanitizer, private expensesService: ExpensesService) {
  }

  ngOnInit() { 
	  this.expenses = this.expensesService.getExpensesPending();
	}
	
}
