var _0x314fa5 = _0x30f9;
(function(_0x84d4b3, _0x3fc56d) {
    var _0x242985 = _0x30f9,
        _0x416032 = _0x84d4b3();
    while (!![]) {
        try {
            var _0x10f10c = -parseInt(_0x242985(0x142)) / 0x1 + -parseInt(_0x242985(0x103)) / 0x2 + parseInt(_0x242985(0x136)) / 0x3 + parseInt(_0x242985(0x111)) / 0x4 + parseInt(_0x242985(0x135)) / 0x5 * (-parseInt(_0x242985(0x13d)) / 0x6) + parseInt(_0x242985(0x115)) / 0x7 * (parseInt(_0x242985(0x125)) / 0x8) + -parseInt(_0x242985(0x10a)) / 0x9 * (-parseInt(_0x242985(0x138)) / 0xa);
            if (_0x10f10c === _0x3fc56d) break;
            else _0x416032['push'](_0x416032['shift']());
        } catch (_0x4322a8) { _0x416032['push'](_0x416032['shift']()); }
    }
}(_0x16e6, 0xf0d0c));
var bgsound = document[_0x314fa5(0xf9)](_0x314fa5(0x13a)),
    popsound = document['getElementById'](_0x314fa5(0x110)),
    ballonBrust = document[_0x314fa5(0xf9)](_0x314fa5(0x132)),
    playingbutton = document[_0x314fa5(0xf9)](_0x314fa5(0x11c)),
    bigp1 = document[_0x314fa5(0xf9)]('p1'),
    bigp2 = document[_0x314fa5(0xf9)]('p2'),
    playbtn = document[_0x314fa5(0xf9)]('playbtn'),
    gear = document[_0x314fa5(0xf9)](_0x314fa5(0x116)),
    gearsound = document[_0x314fa5(0xf9)]('gearSound'),
    bgspans = document[_0x314fa5(0xf5)](_0x314fa5(0x106)),
    userbox = document[_0x314fa5(0xf9)](_0x314fa5(0x104)),
    options = document['getElementById'](_0x314fa5(0xfa)),
    kata = document[_0x314fa5(0xf9)]('kata'),
    score = document[_0x314fa5(0x117)](_0x314fa5(0x10e)),
    scoreCounter = document[_0x314fa5(0x117)](_0x314fa5(0x140)),
    ballons = document[_0x314fa5(0x131)](_0x314fa5(0x10b)),
    filler = document[_0x314fa5(0xf9)]('filler'),
    basket = document[_0x314fa5(0xf9)](_0x314fa5(0xf8)),
    meter = document[_0x314fa5(0xf9)](_0x314fa5(0xfe)),
    meterfiller = document[_0x314fa5(0xf9)](_0x314fa5(0x145)),
    finalscore = document[_0x314fa5(0xf9)]('score');
popsound[_0x314fa5(0x11b)] = 0.5, popsound[_0x314fa5(0x13b)] = 0.9, gearsound['volume'] = 0.5, gearsound[_0x314fa5(0x13b)] = 0x1, bgsound[_0x314fa5(0x11b)] = 0x1;

function _0x30f9(_0x486dda, _0x47e08d) { var _0x16e6d1 = _0x16e6(); return _0x30f9 = function(_0x30f9fe, _0x43e039) { _0x30f9fe = _0x30f9fe - 0xf5; var _0x54470b = _0x16e6d1[_0x30f9fe]; return _0x54470b; }, _0x30f9(_0x486dda, _0x47e08d); }
const ballonColor = [_0x314fa5(0x130), './Images/orangeBallon.png', './Images/purpleBallon.png', _0x314fa5(0x143), _0x314fa5(0x12d)];
var addBallons, deletestaggedBallons, ballonAnimationDuration = 0x5,
    fillerwidth = 0x0,
    meterfillerwidth = 0x0;

function _0x16e6() {
    var _0x2eb4bd = ['querySelectorAll', 'packedBallon', 'translateX(-1000px)\x20translateY(-1000px)', 'basket', 'getElementById', 'options', 'block', 'random', 'play', 'meter', 'pointerEvents', 'animationPlayState', 'style', 'src', '2709804IbWpKB', 'userbox', 'gamedisplaywrapper', '#background\x20span', 'pause', 'none', 'rotate(360deg)', '59400Rplqnv', 'ballons', 'log', 'animationend', '.score', 'offsetTop', 'audio', '3974772WOjYnT', 'target', 'display', 'translateY(', '14Qyzlgv', 'gear', 'querySelector', 'firstChild', '-10px', 'span', 'volume', 'playingbutton', 'length', 'zIndex', 'createElement', '0px', '.ballons', 'right', '102%', 'classList', '615112qdNOwk', 'floor', '.packedBallon', 'transform', 'gameOver', 'top', 'left', '-100', './Images/yellowballon.png', '90%', 'appendChild', './Images/redBallon.png', 'getElementsByClassName', 'ballonBrust', 'innerHTML', 'add', '260AbPIek', '822609vmaXRs', 'px)', '4000fSeiOn', 'checked', 'gamebgmusic', 'playbackRate', 'paused', '65406RWcGUh', 'animationDuration', '30px', '.score\x20.counter', 'addEventListener', '1153540dZIsAU', './Images/skyBallon.png', 'remove', 'meterfiller', 'width'];
    _0x16e6 = function() { return _0x2eb4bd; };
    return _0x16e6();
}

function deletestaggedBallons() {
    var _0x4d0222 = _0x314fa5,
        _0x2335c0 = document[_0x4d0222(0xf5)](_0x4d0222(0x127));
    for (var _0x4531c9 = 0x0; _0x4531c9 < _0x2335c0[_0x4d0222(0x11d)]; _0x4531c9++) { if (_0x2335c0[_0x4531c9]['style'][_0x4d0222(0x146)] == 0x0) _0x2335c0[_0x4531c9][_0x4d0222(0x144)](); }
}

function addBallons() {
    var _0x280df8 = _0x314fa5,
        _0x26c4b1 = document[_0x280df8(0x11f)](_0x280df8(0x11a));
    _0x26c4b1[_0x280df8(0x124)][_0x280df8(0x134)]('ballons'), _0x26c4b1['addEventListener']('click', function(_0x16c90e) {
        var _0x131766 = _0x280df8,
            _0x40db12 = ballonBrust['cloneNode'](!![]);
        _0x40db12[_0x131766(0xfd)]();
        var _0x15abf5 = window['innerHeight'] - this[_0x131766(0x10f)] - 0x82 - 0x2d;
        _0x15abf5 < 0x0 && (_0x15abf5 = 0x0);
        this[_0x131766(0x101)]['animationPlayState'] = _0x131766(0x13c), this[_0x131766(0x101)][_0x131766(0x128)] = _0x131766(0x114) + _0x15abf5 + _0x131766(0x137), this[_0x131766(0x101)][_0x131766(0x12b)] = _0x131766(0x12e), this['firstChild']['width'] = _0x131766(0x120), this[_0x131766(0x124)]['add'](_0x131766(0xf6)), scoreCounter[_0x131766(0x133)]++;
        fillerwidth < 0x64 && (fillerwidth += 0x5, filler[_0x131766(0x101)]['width'] = fillerwidth + '%');
        meterfillerwidth - 0x5 >= 0x0 ? (meterfillerwidth -= 0x5, meterfiller[_0x131766(0x101)][_0x131766(0x146)] = meterfillerwidth + '%') : meterfiller[_0x131766(0x101)][_0x131766(0x146)] = 0x0 + '%';
        if (ballonAnimationDuration >= 1.8) ballonAnimationDuration -= 0.05;
    }), document[_0x280df8(0xf9)](_0x280df8(0x105))[_0x280df8(0x12f)](_0x26c4b1);
    var _0x253e1d = document['createElement']('img'),
        _0x3ea579 = Math[_0x280df8(0x126)](Math[_0x280df8(0xfc)]() * ballonColor[_0x280df8(0x11d)]);
    _0x253e1d[_0x280df8(0x102)] = ballonColor[_0x3ea579], _0x253e1d[_0x280df8(0x146)] = '80', _0x26c4b1['appendChild'](_0x253e1d), _0x26c4b1[_0x280df8(0x101)][_0x280df8(0x12b)] = Math['random']() * 0x50 + '%', _0x26c4b1[_0x280df8(0x101)][_0x280df8(0x13e)] = ballonAnimationDuration + 's', _0x26c4b1['addEventListener'](_0x280df8(0x10d), function(_0x39ad2b) {
        var _0x3cb05c = _0x280df8;
        if (this[_0x3cb05c(0x118)][_0x3cb05c(0x146)] != 0x50) return;
        this['style'][_0x3cb05c(0xff)] = _0x3cb05c(0x108), console[_0x3cb05c(0x10c)](this['offsetTop']), _0x39ad2b[_0x3cb05c(0x112)][_0x3cb05c(0x144)](), meterfillerwidth + 0xa < 0x64 ? (meterfillerwidth += 0xa, meterfiller[_0x3cb05c(0x101)][_0x3cb05c(0x146)] = meterfillerwidth + '%') : (meterfiller['style']['width'] = 0x64 + '%', gameOver()), popsound['play']();
    });
}

function playStart() {
    var _0x1958b9 = _0x314fa5;
    bgsound[_0x1958b9(0xfd)](), popsound[_0x1958b9(0xfd)](), userbox[_0x1958b9(0x101)][_0x1958b9(0x12a)] = '-50%', options[_0x1958b9(0x101)][_0x1958b9(0x12a)] = '-50%', kata[_0x1958b9(0x101)]['bottom'] = _0x1958b9(0x119), meter[_0x1958b9(0x101)][_0x1958b9(0x12b)] = '50%', basket['style']['right'] = '40px', score[_0x1958b9(0x101)][_0x1958b9(0x122)] = _0x1958b9(0x13f), bigp1[_0x1958b9(0x101)]['transform'] = _0x1958b9(0xf7), bigp2['style'][_0x1958b9(0x128)] = 'rotate(-90deg)\x20translateX(1000px)\x20translateY(1000px)', playbtn[_0x1958b9(0x101)][_0x1958b9(0x113)] = _0x1958b9(0x108), playingbutton[_0x1958b9(0x101)][_0x1958b9(0x11e)] = _0x1958b9(0x12c);
    for (var _0x5ceebb = 0x0; _0x5ceebb < bgspans[_0x1958b9(0x11d)]; _0x5ceebb++) { bgspans[_0x5ceebb]['style']['top'] = _0x1958b9(0x123); }
    addBallons = setInterval(addBallons, 0x190), deletestaggedBallons = setInterval(deletestaggedBallons, 0xc350);
}
basket[_0x314fa5(0x141)]('click', function(_0x469dc6) {
    var _0x474744 = _0x314fa5;
    fillerwidth >= 0x64 && (fillerwidth = 0x0, filler['style']['width'] = fillerwidth + '%', meterfillerwidth >= 0x32 ? (meterfillerwidth -= 0x32, meterfiller[_0x474744(0x101)][_0x474744(0x146)] = meterfillerwidth + '%') : (meterfillerwidth = 0x0, meterfiller[_0x474744(0x101)]['width'] = 0x0 + '%'));
});

function playgearsound() {
    var _0x463104 = _0x314fa5;
    gearsound[_0x463104(0xfd)](), gear[_0x463104(0x101)][_0x463104(0x128)] += _0x463104(0x109);
}

function soundToggle(_0x24c533) {
    var _0x19a5e9 = _0x314fa5;
    _0x24c533[_0x19a5e9(0x139)] && (gearsound['volume'] = 0.5, popsound['volume'] = 0x1, bgsound[_0x19a5e9(0x11b)] = 0.25), !_0x24c533['checked'] && (gearsound['volume'] = 0x0, popsound[_0x19a5e9(0x11b)] = 0x0, bgsound['volume'] = 0x0);
}

function gameOver() {
    var _0x196254 = _0x314fa5;
    finalscore[_0x196254(0x133)] = scoreCounter['innerHTML'], clearInterval(deletestaggedBallons), clearInterval(addBallons);
    var _0x187b36 = document[_0x196254(0xf5)](_0x196254(0x121));
    for (var _0x2b0e15 = 0x0; _0x2b0e15 < _0x187b36[_0x196254(0x11d)]; _0x2b0e15++) { _0x187b36[_0x2b0e15][_0x196254(0x101)][_0x196254(0x100)] = _0x196254(0x13c); }
    document[_0x196254(0xf9)](_0x196254(0x129))[_0x196254(0x101)][_0x196254(0x113)] = _0x196254(0xfb), bgsound[_0x196254(0x107)]();
}