import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],
})
export class ReactComponent implements OnInit {
  public reactSkills = [
    {
      name: 'Comprehensive knowledge of Php and Codeigniter platform and core principle',
    },
    { name: 'Command over HTML and Php languages' },
    { name: 'Great knowledge of Windows and Linux' },
    {
      name: 'Command over developing Php components, backend and workflows',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
