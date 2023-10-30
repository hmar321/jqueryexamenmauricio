var globalUrlApiSeries= "https://apiseriespersonajes.azurewebsites.net/";

function globalPintarSeries(selector) {
    var request = "api/series";
    var url = globalUrlApiSeries + request;
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json",
        success: function (data) {
            var html = "";
            $.each(data, function (index, serie) {
                html += "<li>";
                html += "<a class='dropdown-item' href='Serie.html?id="+serie.idSerie+"'>"+serie.nombre+"</a>";
                html += "</li>";
            });
            $(selector).html(html);
        }
    });
}
