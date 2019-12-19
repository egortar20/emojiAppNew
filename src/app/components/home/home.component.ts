import { Component, OnInit } from '@angular/core';
import { EmojiesService } from 'src/app/services';
import { EmojiModel, EmojiStatus } from '../../models/emoji.model';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  constructor(private emojiesService: EmojiesService) { 

  }

  //получаем список эмоджи
  get emojies(){
    return this.emojiesService.searchEmojies.filter(emoji => emoji.status !== EmojiStatus.Deleted);
  }

  //в список удаленных
  delete(emoji: EmojiModel){
    emoji.status = EmojiStatus.Deleted;
    this.emojiesService.saveToLocalStorage(emoji);
  }

  //в список любимых 
  favorite(emoji: EmojiModel){
    emoji.status = emoji.status === EmojiStatus.Favorite ? EmojiStatus.Default : EmojiStatus.Favorite;
    this.emojiesService.saveToLocalStorage(emoji)
  }

  ngOnInit() {
  }


}
