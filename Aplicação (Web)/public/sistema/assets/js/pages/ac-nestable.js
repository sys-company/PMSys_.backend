'use strict';
$(window).on('load', function () {
    var updateOutput = function (e) {
        var list = e.length ? e : $(e.target),
            output = list.data('output');
        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize')));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    };
    $('#nestable').nestable({
        group: 1
    }).on('change', updateOutput);
    $('#nestable2').nestable({
        group: 1
    }).on('change', updateOutput);
    $('#nestable3').nestable({
        group: 1
    }).on('change', updateOutput);
    updateOutput($('#nestable').data('output', $('#nestable-output')));
    updateOutput($('#nestable2').data('output', $('#nestable2-output')));
    updateOutput($('#nestable3').data('output', $('#nestable3-output')));
    $('#nestable-menu').on('click', function (e) {
        var target = $(e.target),
            action = target.data('action');
        if (action === 'expand-all') {
            $('.dd').nestable('expandAll');
        }
        if (action === 'collapse-all') {
            $('.dd').nestable('collapseAll');
        }
    });
    $('#nestable3').nestable();
});