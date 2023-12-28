export class Transaction {
  id!: number;
  name!: string;
  booktitle!: string;
  borrowDate!: string;
  dueDate!: string;
  returnDate!: string;
  totalfine!: string;

  student: Student | undefined;  // Assuming 'student' property is of type Student
    book: Book | undefined;   
  studentId?: number; // Make it optional
  bookId?: number; 
  // student?: Student; // Make it optional
  // book?: Book; // Make it optional
}

export class Student {
  id!: number;
  studName!: string;
  studAddress!: string;
  studEmail!: string;
  studDOB!: string;
  studGender!: string;
  studDepartment!: string;
  studMobno!: string;
  username!: string;
  password!: string;
}

export class Book {
  id!: number;
  title!: string;
  author!: string;
  bookISBN!: string;
  genre!: string;
  language!: string;
}
