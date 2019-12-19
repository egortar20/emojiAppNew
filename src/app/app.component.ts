import {Component, OnInit} from '@angular/core';
import { EmojiesService } from './services';
import {Title} from '@angular/platform-browser';
import {ChildActivationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
  loading = false;

  constructor (private emojiesService: EmojiesService, private router: Router, private title: Title) {

  }

  //подгрузка с гитхаба
  async updateEmojis() {
    this.loading = true;
    await this.emojiesService.getEmojies();
    this.loading = false;
  }

  onRouterChange(e) {
    if (!(e instanceof ChildActivationEnd)) {
      return;
    }
    this.title.setTitle(e.snapshot.firstChild.data.title);
  }

  ngOnInit(): void{
    this.router.events.subscribe(this.onRouterChange.bind(this));
    this.updateEmojis(); //обновляем список эмоджи при загрузке приложения
  }
}
