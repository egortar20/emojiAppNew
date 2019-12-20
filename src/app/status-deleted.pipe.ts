import { PipeTransform, Pipe } from '@angular/core';
import { EmojiModel, EmojiStatus } from './models/emoji.model';


@Pipe({
    name: "statusdel",
    pure: false
})
export class StatusDeletedPipe implements PipeTransform{
    transform(data: EmojiModel[]){
        return data.filter(emoji => emoji.status == EmojiStatus.Deleted)
    }
}