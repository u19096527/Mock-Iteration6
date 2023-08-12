import { Component,OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router'
import { DataService } from 'src/app/services/data.service';
import { ResellerVM } from 'src/app/shared/ResellerViewModel';
import { PrescribedBook } from 'src/app/shared/prescribedbookReseller';


@Component({
  selector: 'app-check-book-estimate',
  templateUrl: './check-book-estimate.component.html',
  styleUrls: ['./check-book-estimate.component.scss']
})
export class CheckBookEstimateComponent  {
  cart: number = 5;
  constructor(private dataService:DataService,private router:Router,private activated:ActivatedRoute) { }
  showModal: boolean = false;
  book:PrescribedBook []=[]
  isPagesFolded: boolean = false;
  isPagesHighlighted: boolean = false;
  isPagesWrittenOn: boolean = false;
  isPagesTorn: boolean = false;
  isPagesStained: boolean = false;
  estimatedPrice:number =0;
  showEstimatedPriceModal: boolean = false;
  FrontImage:File|null = null;
  binderImage:File|null = null;
  backImage:File|null = null;
  openImage:File|null = null;





  CheckBook() {
    const isbnInputValue = (document.getElementById('isbnInput') as HTMLInputElement).value;

    if (isbnInputValue) {
      this.dataService.getBookEstimate(isbnInputValue).subscribe(
        (result) => {
          console.log(result); // Log the response to inspect its format
          let bList: any[] = result;
          bList.forEach((element) => {
            this.book.push(element);
            console.log(this.book);
            this.showModal=true;
          });
        },
        (error) => {
          console.error(error); // Handle error cases
        }
      );
    }
  }
 CheckBookEstimate(baseprice:number)
 {
  let numOfTickedCheckboxes = 0;

  if (this.isPagesFolded) {
    numOfTickedCheckboxes++;
  }

  if (this.isPagesHighlighted) {
    numOfTickedCheckboxes++;
  }

  if (this.isPagesWrittenOn) {
    numOfTickedCheckboxes++;
  }

  if (this.isPagesTorn) {
    numOfTickedCheckboxes++;
  }

  if (this.isPagesStained) {
    numOfTickedCheckboxes++;
  }

  // Use the numOfTickedCheckboxes as needed
 // console.log('Number of ticked checkboxes:', numOfTickedCheckboxes);
 // console.log(baseprice)

  this.estimatedPrice = baseprice - ((baseprice*0.02) * numOfTickedCheckboxes);
  console.log(this.estimatedPrice)
  this.showBasePrice()
}


showBasePrice() {
  this.showEstimatedPriceModal = true;
}

closeEstimatedPriceModal() {
  this.showEstimatedPriceModal = false;
}
//IMAGES
onFrontImageSelected(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement?.files?.length) {
    this.FrontImage = inputElement.files[0];
  }
}
onBackImageSelected(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement?.files?.length) {
    this.backImage = inputElement.files[0];
  }
}
onBinderImageSelected(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement?.files?.length) {
    this.binderImage = inputElement.files[0];
    console.log(this.binderImage)
  }
}
onOpenImageSelected(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement?.files?.length) {
    this.openImage = inputElement.files[0];
    console.log(this.openImage)
  }
}

async AddResale() {
  this.closeEstimatedPriceModal(); // Close the modal after adding to Resale

  // Function to convert File to base64 string using FileReader
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  try {
    if (this.FrontImage && this.backImage && this.openImage && this.binderImage) {
      const imageFrontString = await readFileAsBase64(this.FrontImage);
      const imageBackString = await readFileAsBase64(this.backImage);
      const imageOpenString = await readFileAsBase64(this.openImage);
      const imageBinderString = await readFileAsBase64(this.binderImage);

      // All images have been processed, create the newReseller object
      let newReseller = new ResellerVM();
      newReseller.estimated_Price = this.estimatedPrice;
      newReseller.imageBack = imageBackString.split(',')[1];
      newReseller.imageBinder = imageBinderString.split(',')[1];
      newReseller.imageFront = imageFrontString.split(',')[1];
      newReseller.imageOpen = imageOpenString.split(',')[1];
      newReseller.student_ID = 1;
      newReseller.isbn = this.book[0].isbn;
      console.log(newReseller);

      this.dataService.addBookToResaleCart(newReseller).subscribe(
        (messageback: any) => {
          if (messageback.statusCode == 500) {
            alert(messageback);
          }
          this.router.navigate(['/Schedule']);
        },
        (error) => {
          console.error('Error adding book to resale cart:', error);
          alert('Sorry, an error occurred while adding the book to the cart.');
        }
      );
    } else {
      console.error('Some images are missing. Please select all required images.');
    }
  } catch (error) {
    console.error('Error processing images:', error);
    alert('Sorry, an error occurred while processing the images.');
  }
}



}

