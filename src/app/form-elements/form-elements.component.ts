import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  constructor(private tabService: TabService, private router: Router) { }

  ngOnInit(): void {
  }

}
