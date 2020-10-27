import { Bot } from '../bot';
import messages from '../messages';
import { Note } from '../misskey/note';
import Module from '../module';

export default class extends Module {
    Name = 'Sushi';
    Regex = /^\s*お?(寿司|すし)を?(握|にぎ)(って|れ)/;

    Run(bot: Bot, note: Note): void {
        // 1 ~ 10
        const num = Math.floor(Math.random() * 10) + 1;
        this.log('Count:', String(num));
        const _s = messages.food.sushi(num);
        note.reply(_s);
    }
}