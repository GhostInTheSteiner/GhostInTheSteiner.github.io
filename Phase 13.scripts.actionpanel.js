var thisForm = this;
var root = $(":root");

$.ajax({
    url: "Phase 13.views.actionpanel.html",
    data: {}
}).done(function(data) {
    var html = $(data);
    $('#actionpanel').html(html);
    $('st-actionContainer', html).launchBtn({
        openDuration: 200
    });
});