$(document).ready(function () {
    $('#main').append('<div class="board"></div>');
    var scale = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (var j = 1; j <= 10; j++) {
        $('#main .board').append('<div class="line"></div>');
        for (var i = 1; i <= 10; i++) {
            if (j % 2 == 0) {
                if (i % 2 == 0) {
                    $('#main .board .line:nth-of-type(' + j + ')').append('<div class="cell" data-row="' + j + '" data-col="' + i + '"></div>');
                } else {
                    $('#main .board .line:nth-of-type(' + j + ')').append('<div class="cell black" data-row="' + j + '" data-col="' + i + '"></div>');
                }
            } else {
                if (i % 2 == 0) {
                    $('#main .board .line:nth-of-type(' + j + ')').append('<div class="cell black" data-row="' + j + '" data-col="' + i + '"></div>');
                } else {
                    $('#main .board .line:nth-of-type(' + j + ')').append('<div class="cell" data-row="' + j + '" data-col="' + i + '"></div>');
                }
            }
        }
    }
    $('.cell').each(function () {
        var dr = parseFloat($(this).data('row'));
        var dc = parseFloat($(this).data('col'));
        var straightDC = scale[dc - 2];
        if (dc == 1) {
            $(this).addClass('slim left');
        }
        if (dc == 10) {
            $(this).addClass('slim right');
        }
        if (dr == 1) {
            $(this).addClass('short bottom');
        }
        if (dr == 10) {
            $(this).addClass('short top');
        }
        if (dc != 1 && dc != 10 && (dr == 1 || dr == 10)) {
            $(this).append('<span class="mark">' + straightDC + '</span>');
        }
        if (dr != 1 && dr != 10 && (dc == 1 || dc == 10)) {
            $(this).append('<span class="mark">' + Number(scale.length - (dr - 2)) + '</span>');
        }
        if (dc != 1 && dc != 10 && dr != 1 && dr != 10) {
            $(this).addClass('field');
            if (dr == 8) {
                $(this).append('<div class="unit wh pawn"></div>');
            }
            if (dr == 3) {
                $(this).append('<div class="unit bl pawn"></div>');
            }
            if (dr == 9) {
                if (dc == 2 || dc == 9) {
                    $(this).append('<div class="unit wh rock"></div>');
                }
                if (dc == 3 || dc == 8) {
                    $(this).append('<div class="unit wh horse"></div>');
                }
                if (dc == 4 || dc == 7) {
                    $(this).append('<div class="unit wh bishop"></div>');
                }
                if (dc == 5) {
                    $(this).append('<div class="unit wh queen"></div>');
                }
                if (dc == 6) {
                    $(this).append('<div class="unit wh king"></div>');
                }
            }
            if (dr == 2) {
                if (dc == 2 || dc == 9) {
                    $(this).append('<div class="unit bl rock"></div>');
                }
                if (dc == 3 || dc == 8) {
                    $(this).append('<div class="unit bl horse"></div>');
                }
                if (dc == 4 || dc == 7) {
                    $(this).append('<div class="unit bl bishop"></div>');
                }
                if (dc == 5) {
                    $(this).append('<div class="unit bl queen"></div>');
                }
                if (dc == 6) {
                    $(this).append('<div class="unit bl king"></div>');
                }
            }
        }

    });

});
