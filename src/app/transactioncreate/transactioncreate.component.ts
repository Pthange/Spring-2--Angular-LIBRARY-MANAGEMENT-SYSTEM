import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { TransactionHttpServiceService } from '../transaction-http-service.service';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { Book } from '../Book';

@Component({
  selector: 'app-transactioncreate',
  templateUrl: './transactioncreate.component.html',
  styleUrls: ['./transactioncreate.component.css']
})
export class TransactioncreateComponent implements OnInit {

  transaction: Transaction = new Transaction();
  students: Student[] = []; // You need to fetch students and other related data
  books: Book[] = [];
  constructor(private transactionService: TransactionHttpServiceService, // Assuming you have a service for Transaction
    private router: Router) {}

  ngOnInit(): void {}

  saveTransaction() {
    // this.transaction.student = { id: this.transaction.studentId } as Student;
    // this.transaction.book = { id: this.transaction.bookId } as Book;

    this.transactionService.createTransaction(this.transaction).subscribe(data => {
      console.log(data);
      this.goToTransactionList();
      this.router.navigate(['thanks']);
    });
  }

  goToTransactionList() {
    this.router.navigate(['/get-transaction']); // Update the route accordingly
  }

  onSubmit() {
    this.saveTransaction();
  }

  goBack() {
    window.history.back();
  }
}



