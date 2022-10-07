if (typeof Cookies.get('cookies-accept') === 'undefined') {
    $('#cook').removeClass('!hidden');
}

$('#cookies-accept').click(function () {
    Cookies.set('cookies-accept', true);
    location.reload();
});