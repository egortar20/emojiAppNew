import { Component, OnInit } from '@angular/core';
import { EmojiesService } from 'src/app/services';
import { EmojiModel, EmojiStatus } from '../../models/emoji.model';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.sass']
})
export class DeletedComponent implements OnInit {



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
