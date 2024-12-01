import { Component, OnInit } from '@angular/core';
import { env } from '../enum';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  site: string = env.mainWebSite;
  constructor() { }

  ngOnInit(): void {
  }

}
