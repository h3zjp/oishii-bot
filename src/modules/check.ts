import { Bot } from '../bot.js';
import { MecabType } from '../config.js';
import messages from '../messages.js';
import { Note } from '../misskey/note.js';
import Module from '../module.js';
import { getNouns } from '../utils/get-nouns.js';
import { TextProcess } from '../utils/text-process.js';
import variables from '../variables.js';

export default class extends Module {
    Name = 'Check';
    Regex = new RegExp(`(.+?)(は|って)?(${variables.food.good}|${variables.food.bad})の?[？?]+`);
    LogName = 'CHCK';

    async Run(bot: Bot, note: Note): Promise<void> {
        note.reaction();

        const match = note.text.match(this.Regex);
        if (!match) return;
        const food = new TextProcess(match[1]).removeSpace().toString();

        const ng = note.findNGWord(bot.ngWords);
        if (ng) {
            note.reply({ text: messages.food.ngWord });
            this.log('NG WORD:', ng);
            return;
        }

        const query = {
            text: 'SELECT "good" FROM oishii_table WHERE LOWER("name") = LOWER($1)',
            values: [food],
        };
        const res = await bot.runQuery<'good'>(query);
        if (!res) return;

        if (res.rowCount < 1) {
            const noun = await this.isNoun(food, bot.config.mecab);
            if (noun) {
                note.reply({ text: messages.food.idk });
            } else {
                note.reply({ text: messages.food.canEat });
            }
            return;
        }

        const isGood = res.rows[0].good;
        const goodText = isGood ? messages.food.good : messages.food.bad;
        note.reply({ text: goodText });
    }

    private async isNoun(text: string, mecab: MecabType): Promise<boolean> {
        this.log('Check noun:', text);
        const nouns = await getNouns(text, mecab);
        return nouns ? true : false;
    }
}
