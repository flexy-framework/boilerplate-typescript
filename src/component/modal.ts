import $ from 'jquery';
import "magnific-popup";

$(document)
    .on('click', '[data-modal]', e => {
        e.preventDefault();

        let $link = $(e.target).closest('a'),
            href = $link.attr('href'),
            options = {
                delegate: 'a',
                removalDelay: 0,
                midClick: false
            };

        if ($link.attr('href').charAt(0) == '#') {
            $.magnificPopup.open({
                items: {
                    src: $(href)
                },
                type: 'inline',
                ...options
            }, 0);
        } else {
            $.magnificPopup.open({
                items: {
                    src: href
                },
                type: 'ajax',
                callbacks: {
                    ajaxContentAdded: function () {
                        // Do something
                    }
                },
                ...options
            }, 0);
        }
    });