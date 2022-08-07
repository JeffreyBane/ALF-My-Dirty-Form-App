import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../dirty-form-guard';

@Component({
  selector: 'app-dirty-form',
  templateUrl: './dirty-form.component.html',
  styleUrls: ['./dirty-form.component.scss']
})
export class DirtyFormComponent implements OnInit, ComponentCanDeactivate {

  formUnchanged = false;


  @HostListener('window:beforeunload')
  public canDeactivate(): Observable<boolean> | boolean {
    
    return this.formUnchanged;

  }


  constructor() { }

  ngOnInit(): void {
  }

}
