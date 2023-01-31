/**
 * A função abaixo insere as noticias do arquivo json na pasta. 
 * Precisa ter, no HTML, elementos com as classes passadas nos parâmetros da função.
 * Importante ressaltar que deve ter, no mínimo, o mesmo número de elementos que o número de notícias no arquivo .json. 
 * Se tiver menos, vai exibir no console log que tem menos e não vai colocar as notícias na página
 */
function insereNoticiaDoJson(classTitulo, classTexto){
    let htmlTitulo = document.querySelectorAll(classTitulo);
    let htmlTexto = document.querySelectorAll(classTexto);

    fetch('jsons/noticias.json').then(res => res.json()).then(noticia => {

            if (htmlTexto.length < noticia.length || htmlTitulo.length < noticia.length){
                console.log("O número de notícias no arquivo .json é maior que o número de elementos no HTML. Favor inserir mais.");

            } else {

                for(i = 0; i < noticia.length; i++){
                    htmlTitulo[i].innerHTML = noticia[i].titulo;
                    htmlTexto[i].innerHTML = noticia[i].texto;
                }
            }
        })
}

insereNoticiaDoJson(".tituloNoticia", ".textoNoticia");


