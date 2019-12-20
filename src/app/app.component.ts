import {Component, OnInit} from '@angular/core';
import { EmojiesService } from './services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
  loading = false;

  constructor (private emojiesService: EmojiesService)
  }

  //подгрузка с гитхаба
  async loadEmojies() {
    this.loading = true;
    await this.emojiesService.getEmojies();
    this.loading = false;
  }

  ngOnInit(): void{
    this.loadEmojies(); //обновляем список эмоджи при загрузке приложения
  }
}
