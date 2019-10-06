function runshop() {

    //'add item' button event handler
    $('input[type="submit"]').submit((event) => {
        event.preventDefault();
        let item = $(this).val();

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

    });


    //'check' button event handler
    $('.').on('click', () => {



    });

    //'delete' button event handler
    $('.shopping-item-delete').on('click', (event) => {

    });




}

$(runshop);