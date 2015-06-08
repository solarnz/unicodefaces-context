function genericOnClick(face) {
    return function() {
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.value = face;
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    };
}

var title = 'unicodefac.es (click to copy)';
var id = chrome.contextMenus.create({'title': title, contexts: ['all']});

var faces = [
    '¯\\_(ツ)_/¯',
    '(ノಠ益ಠ)ノ彡┻━┻',
    '(╯°□°）╯︵ ┻━┻',
    '┬──┬◡ﾉ(° -°ﾉ)',
    '٩(͡๏̯͡๏)۶',
    '(∩｀-´)⊃━☆ﾟ.*･｡ﾟ',
    '(V) (;,,;) (V)',
    '┻━┻ ︵﻿ ¯\\(ツ)/¯ ︵ ┻━┻',
    '(☞ﾟヮﾟ)☞',
    'ಠ_ಠ',
    '( ͡° ͜ʖ ͡°)',
    '~(>_<。)＼',
    '༼ つ ◕_◕ ༽つ',
    '(⊙_◎)',
    '(▰˘︹˘▰)',
    '(  \'.\')-o  ┬─|─┬ o-(\'.\'  )',
    '(๑ↀᆺↀ๑)☄',
    'ლ(=ↀωↀ=)ლ',
    '(=^・^=)',
    'ò_ó',
    'o_O',
    '(T_T)',
    '╰(　´◔　ω　◔ `)╯',
    '┗┐ヽ(′Д、`*)ﾉ┌┛',
    '(●⌒∇⌒●)',
    '(▰˘◡˘▰)',
    '｡◕‿◕｡',
    '｡^‿^｡',
    'ƪ(‾_‾)ʃ',
    '(⊙_☉)',
    '(⊙.☉)7',
    '●.◉',
    '⁀⊙﹏☉⁀',
    'щ(ಠ益ಠщ)',
    'щ(ºДºщ)',
    '((┌|o^▽^o|┘))♪',
    'ヽ( ಠ益ಠ )ﾉ',
    'ツ',
    '♪((└|o^▽^o|┐))',
    '♒((⇀.↼))♒',
    '(ﾉಥ益ಥ）ﾉ﻿ ┻━┻',
    '((≡^⚲͜^≡))',
    '┏(＾0＾)┛',
    'へ(゜∇、°)へ',
    '“ψ(｀∇´)ψ',
];

faces.forEach(function(face) {
    chrome.contextMenus.create({
        title: face,
        onclick: genericOnClick(face),
        parentId: id,
        contexts: ['all'],
    });
});

