function runshop() {

    //'add item' button event handler
    $('#js-shopping-list-form').submit((event) => {

        event.preventDefault();

        let input = $('#shopping-list-entry').val();

        let item =
            `<li>
            <span class="shopping-item">${input}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                 <span class="button-label">delete</span>
                </button>
            </div>
            </li>`;

        //add item to list
        $('.shopping-list').append(item);

        $('#shopping-list-entry').val('');
    });


    //these buttons need event delegation - they aren't working on new
    //items added to the DOM

    //'check' button event handler
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().siblings('.shopping-item').toggleClass("shopping-item__checked");
    });

    //'delete' button event handler
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).parent().parent().remove();
    });




}

$(runshop);