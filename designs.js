// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function makeGrid(event) {

    // Your code goes here!
    const inputHeight = $("input#inputHeight").val();
    const inputWidth = $("input#inputWeight").val();
    let pickedColor = $("input#colorPicker").val();
    $("input#colorPicker").change(function changeColor(event) {
        pickedColor = $("input#colorPicker").val();
        $(".clicked").css("background-color", pickedColor);
    })
    const pageBgColor = $("body").css("background-color");
    event.preventDefault();
    let table = $("#pixelCanvas");
    table.children().remove();
    let rowPrint;
    for (let row = 0; row < inputHeight; row++) {
        rowPrint = "<tr id=\"" + row + "\" class=\"" + "row\">" + "</tr>";
        table.append(rowPrint);
        let colPrint;
        for (let col = 0; col < inputWidth; col++) {
            colPrint = "<td id=\"row" + row + "" + col + "\" class=\"" + "col\">" + "</tr>"
            $("#" + row).append(colPrint);
            $("#" + "row" + row + "" + col).click(function click(event) {
                let clicked;
                clicked = $(this).hasClass("clicked");
                if (clicked) {
                    $(this).css("background-color", pageBgColor);
                    $(this).removeClass("clicked");
                } else {
                    $(this).css("background-color", pickedColor);
                    $(this).addClass("clicked");
                }
            });
        }

    }
    $(".row").css({ "height": "40px" });
    $(".col").css({ "width": "40px" });
});

