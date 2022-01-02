import java.sql.Date;

/**
 Library management system
 Requirements
 1. User,Librarian can issue a book
 2. Book entiry (name, serialNum. author, bookCopies) 
 3. Book searching -> By new user, registered user -> consurency managemet 
 4. Issue book -> activity
 5. Current book status
 */

 class Library {
    String libraryName;
    Date inaugDate;
    int libraryUID;
    boolean status;
    Address address;    /** Has a relastionship */
 }
 class Address {
    String street;
    String city;
    String state;
    String country;
 }
 class Book {
    String bookName;
    String author;
    BookType bookType;
 }
 enum BookType {
     ONLY_READING;
 }
 class BookCopies extends Book {
    int serialNum;

 }


