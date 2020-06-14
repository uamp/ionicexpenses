import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {

  //this entire class would be written to interface with an API backend, however, as this is a front end only standalone app, this has been implemented as faker factory	
	
  expensesPending: Expense[]; //local variable to store array of expenses waiting payment
  expensesArchived: Expense[];  //local variable to store array of expenses archived
  
	
  constructor() {
	  this.expensesPending = [{
		  timestamp: "P2135413501680",
		  photo: null,
		  amount: 11,
		  description: "Demo expense 1",
		  status: "Pending"
	  }];
	this.expensesArchived = [{
		  timestamp: "P8976419633596",
		  photo: null,
		  amount: 13,
		  description: "Demo expense 2",
		status: "Paid"
	  },{
		  timestamp: "P1029478883509",
		  photo: null,
		  amount: 14,
		  description: "Demo expense 3",
		  status: "Paid"
	  }];
  	}
	
  getExpensesPending(): Expense[] {
    return this.expensesPending; 
  }
	
  getExpensesArchived(): Expense[] {
    return this.expensesArchived; 
  }
	
	 
  addExpense(expense: Expense) {
	  this.expensesPending.push(expense); 
  }
	

	
	
	
}