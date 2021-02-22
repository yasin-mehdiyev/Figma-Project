$(document).ready(function() {

    // ---> Variables Start <---

    $isChanged = true;

    // ---> Variables End <---

    // ---> Custom Functions Start <---

    function tagsFunction() {
        $('#tags').html(`
        Tags
        <div class="ml-2 mn-2"><img src="img/icons8-tags 2.svg" alt="Tags" class="w-16 h-18"></div>
        `);
    }

    function myToggleClick($oneBtns, $oneParams, $oneCheckParams) {

        $($oneParams).fadeIn(500);
        $($oneBtns).addClass('clicked-text');
        $($oneBtns + ' ' + 'img').attr('src', 'img/white_toggle.png');

        $(window).click(function(event) {
            console.log(event.target)
            if (!$(event.target).hasClass('dropdown-content-toggle') && !$(event.target).hasClass('toggle-contain') && !$(event.target).hasClass($oneCheckParams)) {
                $($oneParams).fadeOut(500);
                $($oneBtns).removeClass('clicked-text');
                $($oneBtns + ' ' + 'img').attr('src', 'img/selected-icon-library.png');
            }
        });
    }

    function myModalClosed($closedPopup, $closedBtn) {
        $(window).click(function(ev) {
            console.log(ev.target.id);

            if (ev.target.id == $closedPopup || ev.target.id == $closedBtn) {
                $('#' + $closedPopup).fadeOut(700);
            }
        });
    }

    // ---> Custom Functions End <---


    // ---> Search Bar Focus Action Start <--- 

    $("#myInput").focus(function() {
        $("#" + this.id).css("outline", "none");
        console.log("#" + this.id);
    });

    // ---> Search Bar Focus Action End <--- 


    // ---> Search Bar Keyup Action Start <---

    $("#myInput").keyup(function() {
        $isChanged = false;
        if (this.value != "") {
            console.log(this.value);
            $('#tags').html(`
               ${this.value}
               <div class="ml-2 mn-2"><img src="img/cancel-icon-library.png" alt="Cancel Icon" class="w-16 h-18"></div>
            `);

            $('#changeText').text(`Search results for “${this.value}”`);
            // console.log($('#tags').text());
        } else {
            tagsFunction();
            $('#changeText').text('Frequently Viewed');
            $isChanged = true;
            console.log('Empty')
        }
    });

    // ---> Search Bar Keyup Action End <---


    // ---> SortBy Dropdown Action Start <---

    $('#sortBy').click(function() {
        $('#myDropdown').fadeIn(500);
        $(this).addClass('clicked-text');
        $('.cancel').attr('src', 'img/white_lamp.png');

        $(window).click(function(e) {
            // console.log($(e.target).hasClass('dropdown-content-elem'));

            if (!$(e.target).hasClass('dropdown-content-elem') && !$(e.target).hasClass('dropBtn') && !$(e.target).hasClass('cancel')) {
                $('#myDropdown').fadeOut(500);
                $('#sortBy').removeClass('clicked-text');
                $('.cancel').attr('src', 'img/Vector.svg');
            }
        });
    });

    // ---> SortBy Dropdown Action End <---


    // ---> Dropdown Action for Frequently and Files Sections Start <---

    $('#toggleOneIcon').click(function(ev) {
        ev.preventDefault();
        myToggleClick('#toggleOneIcon', '#myDropdownOneToggle', 'toggle-one-icon');
    });

    $('#toggleTwoIcon').click(function(ev) {
        ev.preventDefault();
        myToggleClick('#toggleTwoIcon', '#myDropdownTwoToggle', 'toggle-two-icon');
    });

    $('#toggleThreeIcon').click(function(ev) {
        ev.preventDefault();
        myToggleClick('#toggleThreeIcon', '#myDropdownThreeToggle', 'toggle-three-icon');
    });

    $('#toggleFourIcon').click(function(ev) {
        ev.preventDefault();
        myToggleClick('#toggleFourIcon', '#myDropdownFourToggle', 'toggle-four-icon');
    });

    $('#toggleFiveIcon').click(function(ev) {
        ev.preventDefault();
        myToggleClick('#toggleFiveIcon', '#myDropdownFiveToggle', 'toggle-five-icon');
    });

    $('#toggleSixIcon').click(function(ev) {
        ev.preventDefault();
        myToggleClick('#toggleSixIcon', '#myDropdownSixToggle', 'toggle-six-icon');
    });

    $('#toggleSevenIcon').click(function(ev) {
        ev.preventDefault();
        myToggleClick('#toggleSevenIcon', '#myDropdownSevenToggle', 'toggle-seven-icon');
    });

    // ---> Dropdown Action for Frequently and Files Sections End <---


    // ---> Modal(Popup) Action with Custom Function Start <---

    $('#tags').click(function(e) {
        e.preventDefault();
        console.log('clicked');
        if ($isChanged) {
            $('#myPopup').fadeIn(700);
        }
        myModalClosed('myPopup', 'closed');
    });

    $('#modalOpen').click(function() {
        console.log('clicked Modal Open');
        $('#uploadPopup').fadeIn(700);
        myModalClosed('uploadPopup', 'closed');
    });

    // ---> Modal(Popup) Action with Custom Function End <---

});