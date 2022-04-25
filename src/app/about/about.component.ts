import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log('You subscribed ', form);
  }

  toTop() {
    document.documentElement.scrollTop = 0;
  }
}
