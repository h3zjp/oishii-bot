const goodText = 'おいしい', badText = 'まずい';

module.exports = {
    getWord: word => {
        if (Array.isArray(word)) {
            return word[Math.floor(Math.random() * word.length)];
        } else {
            return word;
        }
    },
    messages: {
        deleteDB: (cond, del) => `\`\`\`\nデータベースのレコード数が${cond}件を超えたため、学習されてないものを${del}件削除しました。\n\`\`\``,
        commands: {
            denied: 'このコマンドは、オーナーのみ実行できます。',
            help: [
                '/help: コマンドリストを表示する。',
                '/ping: 生存確認する。',
                '/info: (今のところは)DBのレコード数を表示する。',
                '/say: なにか言わせる。(オーナーのみ)',
                '/follow: フォローする。',
                '/unfollow: フォローを解除する。'
            ],
            ping: 'ぽん！',
            nullpo: 'ガッ',
            delete: {
                done: num => `${num}件削除しました。`,
                notFound: '見つかりませんでした。'
            },
            follow: {
                done: 'フォローしました。',
                already: '既にフォローしています。',
                cant: 'フォローできませんでした。'
            },
            unfollow: {
                done: 'フォロー解除しました。',
                not: 'フォローしていません。',
                cant: 'フォロー解除できませんでした。'
            }
        },
        food: {
            good: goodText,
            bad: badText,
            learn: (food, good) => `${food} は${good}\nおぼえた`,
            search: (food, good) => `${food} は${good ? goodText : badText}`,
            hungry: (food, good) => `${food} とかどう？\n${good ? goodText : badText}よ`,
            say: (food, good) => `${food}${good ? goodText : badText}`,
            canEat: 'それ食べられる？',
            idk: 'わからない',
            ngword: 'それ食べられない',
            long: '長いもの',
            sushi: num => '🍣'.repeat(num),
            food: ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🍍','🥥','🥝','🥭','🥑','🥦','🍅','🍆','🥒','🥕','🌶','🥔','🌽','🥬','🍠','🥜','🧄','🧅','🍯','🥐','🍞','🥖','🥯','🥨','🧀','🥚','🥓','🥩','🥞','🍗','🍖','🦴','🍤','🍳','🍔','🍟','🥙','🌭','🍕','🥪','🥫','🍝','🌮','🌯','🥗','🥘','🍜','🍲','🍥','🥠','🍣','🍱','🍛','🍙','🍚','🍘','🍢','🍡','🍧','🍨','🍦','🥧','🍰','🧁','🥮','🎂','🍮','🍬','🍭','🍫','🍿','🥟','🍩','🍪','🧇','🧆','🧈','🦪','🥛','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🍾','🍶','🍵','🥤','☕','🍼','🧃','🧉','🧊','🧂','🥄','🍴','🍽','🥣','🥡','🥢']
        }
    },
    variables: {
        food: {
            good: '(おいし|美味し|(まず|マズ|ﾏｽﾞ)く(な|にゃ)|不味く(な|にゃ))い',
            bad: '((まず|マズ|ﾏｽﾞ)|不味|おいしく(な|にゃ)|美味しく(な|にゃ))い',
            pizza: [
                {
                    name: 'ドミノ・ピザ',
                    url: 'https://www.dominos.jp/'
                },
                {
                    name: 'ピザーラ',
                    url: 'https://www.pizza-la.co.jp/'
                },
                {
                    name: 'ピザハット',
                    url: 'https://pizzahut.jp/'
                }
            ]
        },
        db: {
            deleteCountCond: 5000,
            deleteNum: 1000
        },
        post: {
            probability: 0.4,
            rateLimitSec: 60,
            rateLimitPost: 5
        }
    }
};
