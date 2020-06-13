import { Component, OnInit, Input } from '@angular/core';
import { ViewChild , ElementRef } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss'],
})
export class ExpenseCardComponent implements OnInit {
  @Input() expense: Expense;
  
	
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {}
	
}
