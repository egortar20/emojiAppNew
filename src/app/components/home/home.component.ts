import { Component, OnInit } from '@angular/core';
import { EmojiesService } from 'src/app/services';
import { EmojiModel, EmojiStatus } from '../../models/emoji.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  constructor(private emojiesService: EmojiesService) { 

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
