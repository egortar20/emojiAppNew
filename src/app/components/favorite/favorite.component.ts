import { Component, OnInit } from '@angular/core';
import { EmojiesService } from 'src/app/services';
import { EmojiModel, EmojiStatus } from '../../models/emoji.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit {


  //получаем список любимых
  get emojies(){
    return this.emojiesService.searchEmojies.filter(emoji => emoji.status == EmojiStatus.Favorite);
  }

  //удаляем из списка любимых 
  delete(emoji: EmojiModel){
    emoji.status = EmojiStatus.Default;
    this.emojiesService.saveToLocalStorage(emoji);
  }

  constructor(private emojiesService: EmojiesService) { }

  ngOnInit() {
  }

}
 