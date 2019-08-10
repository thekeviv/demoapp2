import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: "concat"})
export class ConcatPipe implements PipeTransform
{
    transform(value: string, post_string: string)
    {
        return value.concat(post_string);
    }
}