import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  name: string;
  status: string;
  certification: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dataService.setData({ name: this.name, status: this.status, certification: this.certification });
  }
}
