import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {

  expensesPending: Expense[]; //local variable to store array of expenses waiting payment
  expensesArchived: Expense[];  //local variable to store array of expenses archived
	
  constructor() {
	  this.expensesPending = [{
		  timestamp: "P2135413501",
		  photo: null,
		  amount: 1,
		  description: "First",
		  status: "Pending"
	  }];
	this.expensesArchived = [{
		  timestamp: "P897641963",
		  photo: null,
		  amount: 1,
		  description: "Third",
		status: "Paid"
	  },{
		  timestamp: "P102947888",
		  photo: null,
		  amount: 2,
		  description: "Fourth",
		  status: "Paid"
	  }];
  	}
	
  getExpensesPending(): Expense[] {
    return this.expensesPending; //in a real implementation this would fetch from the API of the backend
  }
	
  getExpensesArchived(): Expense[] {
    return this.expensesArchived; //in a real implementation this would fetch from the API of the backend
  }
	
	 
  addExpense(expense: Expense) {
	  this.expensesPending.push(expense); //again, in a real implementation this would push the data to the backend API
  }
	
	
}