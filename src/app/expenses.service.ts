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
		  timestamp: "P2135413501",
		  photo: null,
		  amount: 11,
		  description: "First",
		  status: "Pending"
	  }];
	this.expensesArchived = [{
		  timestamp: "P897641963",
		  photo: null,
		  amount: 13,
		  description: "Third",
		status: "Paid"
	  },{
		  timestamp: "P102947888",
		  photo: null,
		  amount: 14,
		  description: "Fourth",
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