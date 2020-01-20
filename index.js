$(function () {
    $('body').prepend('<link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />');

    $("#draggable").draggable().resizable();
    /*function download(data, filename, type) {
        var file = new Blob([data], {type: type});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }*/
    $("#save").on("click", function () {
        $.post("save.php", {"name": "test", "content": $("body").html()}, function (data) {
            console.log(data);
        });
    })
});