  
import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import { EmojiModel } from '../../models/emoji.model';
import { PageEvent } from '@angular/material';
import { EmojiesService } from 'src/app/services';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  @Input() emojies: EmojiModel[] = [];
  @ContentChild(TemplateRef) templateRef: TemplateRef<EmojiModel>;
  columns = ['name', 'url', 'img', 'buttons'];
  pageNumber = 0;
  pageSize = 10;

  get pagedEmojies() {
    let start = this.pageNumber * this.pageSize;
    return this.emojies.slice(start, start + this.pageSize);
  }


  page(p: PageEvent) {
    this.pageSize = p.pageSize;
    this.pageNumber = p.pageIndex;
  }

  constructor(private emojiesService: EmojiesService) { }

  ngOnInit() {
  }

}
