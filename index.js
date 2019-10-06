function runshop() {

    //'add item' button event handler
    $('.js-shopping-list-form').on('submit', (event) => {
        let item = $('#shopping-list-entry').val();

        //add item to list
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
                <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
            </div>
        </li>`
        );

        event.preventDefault();

    });


    //'check' button event handler
    $('.shopping-item-toggle').on('click', (event) => {
        $(event.currentTarget).parent().siblings('.shopping-item').toggleClass("shopping-item__checked");
    });

    //'delete' button event handler
    $('.shopping-item-delete').on('click', (event) => {
        $(event.currentTarget).parent().parent().remove();
    });




}

$(runshop);