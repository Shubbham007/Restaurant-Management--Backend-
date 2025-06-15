import { Component } from '@angular/core';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(public nameService:NameService)
  {}
}
