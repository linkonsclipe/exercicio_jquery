$(document).ready(function() {
    $('header button').click(function() {
        adicionarAtividade();
    });

$('form').on('click', 'li.atividade', function() {
 $(this).toggleClass('concluida');
});    

function adicionarAtividade() {
    var novaAtividade = $('header input').val();
        if (novaAtividade !== '') {
            var novoItem = $('<li class="atividade"></li>').text(novaAtividade);
            $('form ul').append(novoItem);
            $('header input').val('');
        }
    }
});    