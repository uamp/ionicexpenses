import { Component, ViewChild , ElementRef } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ExpensesService} from '../expenses.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	//photo: SafeResourceUrl;
  newexpense: Expense;
  message: string;
  
  constructor(private sanitizer: DomSanitizer, private expensesService: ExpensesService) {
	this.clearExpense();	
	this.message=null;
  }

  async takePicture() {
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    }).then((image) => {
      this.newexpense.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    }).catch(err => {
      this.newexpense.photo = null;
      console.log(err);
    });
  }
	
  submit() {
	this.newexpense.status="Pending";
	this.newexpense.timestamp = "P" + Date.now(); //timestamp the expense
	this.expensesService.addExpense(this.newexpense);
	this.clearExpense();
	this.message="Success"; //In real implementation this would be based on success of submission to API.
  }

  private clearExpense(){
	this.newexpense = {
		timestamp: null,
		photo:null,
		amount: null,
		description: null,
		status: null
	  };
  }
	
}