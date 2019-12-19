import { Component, OnInit } from '@angular/core';
import { EmojiesService } from 'src/app/services';
import { EmojiModel, EmojiStatus } from '../../models/emoji.model';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.sass']
})
export class DeletedComponent implements OnInit {

  //получаем список удаленных эмоджи
  get emojies(){
    return this.emojiesService.searchEmojies.filter(emoji => emoji.status == EmojiStatus.Deleted);
  }

  //восстановление
  restore(emoji: EmojiModel){
    emoji.status = EmojiStatus.Default;
    this.emojiesService.saveToLocalStorage(emoji);
  }

  constructor(private emojiesService: EmojiesService) { 
  }

  ngOnInit() {
  }

}
