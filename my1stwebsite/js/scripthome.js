/**
 * A função abaixo insere as noticias do arquivo json na pasta. 
 * Precisa ter, no HTML, os seguintes elementos: divs para título, divs para texto e img para imagem com o src vazio.
 * Os parâmetros da função são os nomes das classes dos elementos do HTML.
 * Importante ressaltar que deve ter, no mínimo, o mesmo número de elementos que o número de notícias no arquivo .json. 
 * Se tiver menos, vai exibir no console log que tem menos e não vai colocar as notícias na página
 */
function insereNoticiaDoJson(classTitulo, classTexto, classImagem){
    let htmlTitulo = document.querySelectorAll(classTitulo);
    let htmlTexto = document.querySelectorAll(classTexto);
    let htmlImagem = document.querySelectorAll(classImagem);

    fetch('jsons/noticias.json').then(res => res.json()).then(noticia => {

            if (htmlTexto.length < noticia.length || htmlTitulo.length < noticia.length){
                console.log("O número de notícias no arquivo .json é maior que o número de elementos no HTML. Favor inserir mais.");

            } else {

                for(i = 0; i < noticia.length; i++){
                    htmlTitulo[i].innerHTML = noticia[i].titulo;
                    htmlTexto[i].innerHTML = noticia[i].texto;
                    htmlImagem[i].setAttribute("src", noticia[i].imagem);
                }
            }
        })
}

insereNoticiaDoJson(".tituloNoticia", ".textoNoticia", ".fotoNoticia");




