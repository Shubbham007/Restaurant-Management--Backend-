import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(public nameService:NameService)
  {

  }
  

}
