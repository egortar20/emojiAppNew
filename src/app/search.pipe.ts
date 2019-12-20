import { PipeTransform, Pipe } from '@angular/core';
import { EmojiModel } from './models/emoji.model';



@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    transform(data: EmojiModel[] , term: string){
        return data.filter( emoji => 
            emoji.name.toLowerCase().includes(term.toLowerCase()))
    }
}