import { Bot } from '../bot';
import messages from '../messages';
import { Note } from '../misskey/note';
import Module from '../module';
import { TextProcess } from '../utils/text-process';
import variables from '../variables';

export default class extends Module {
    Name = 'Learn';
    Regex = new RegExp(`(.+)[はも](${variables.food.good}|${variables.food.bad})よ?`);

    async Run(bot: Bot, note: Note): Promise<void> {
        const ng = note.findNGWord(bot.ngWords);
        if (ng) {
            note.reply(messages.food.ngWord);
            return;
        }

        const match = note.note.text.match(this.Regex);
        if (!match) return;
        const food = TextProcess.removeSpace(match[1]);
        const good = new RegExp(variables.food.good).test(match[2]);

        const isExists = await bot.existsFood(food);
        if (isExists) {
            await bot.learnFood(food, good);
            this.log('UPDATE:', `${food} (${good})`);
        } else {
            await bot.addFood(food, good, true);
            this.log('INSERT:', `${food} (${good})`);
        }
        note.reply(messages.food.learn(food, match[2]));
    }
}
