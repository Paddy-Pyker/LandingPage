import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  slides: any=[
    {src: '../../assets/c2.png'},
    {src:"../../assets/c1.png"},
    {src:"../../assets/c3.png"}
  ];

  NewsLetterForm: FormGroup;

  currentSlide=0
  constructor() { }

  ngOnInit(): void {
    this.NewsLetterForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Email: new FormControl(null, Validators.required),
    })
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  onSubmit(){
    console.log(this.NewsLetterForm.value);
    this.NewsLetterForm.reset();
  }

}
