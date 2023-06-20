api = 'http://127.0.0.1:3000'
$(document).ready(() => {
    users.list();
});
var users = {
    list() {
        $.ajax({
            url: api + '/formacao',
            type: 'GET',
            success: data => {
                console.log(data)
                var tx = '';
                tx += '<div class="form">';
                    tx += '<div class="title">' + `${data[1].curso} - ${data[1].instituicao} - ${data[1].duracaoPrevista} - ${data[1].anoIngresso} - ${data[1].anoTermino}` + '</div>';
                tx += '</div>';
                $('#main').html(tx);
            }
        });
    }
};