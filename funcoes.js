const fs =require('fs')
module.exports =
{
    adicionaFilme: function (arquivo ,array, novo) {
        array.push(novo)
        fs.writeFileSync(arquivo,JSON.stringify(array,null,2))
        
    },
    buscaFilme:function (array, codigoFilme) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].codigo == codigoFilme) {
                return array[i]
            }
        }
    
    },
    alterarStatusEmCartaz:function (arquivo,array, codigoFilme) {
     const filme = this.buscaFilme(array,codigoFilme)
     filme.emCartaz = !filme.emCartaz
     
     fs.writeFileSync(arquivo,JSON.stringify(array,null,2))
    },
    listarTodosOsFilmes:function (array) {
        let result = ""
        for (var i = 0; i < array.length; i++) {
            result = result + ", " + array[i].titulo
        }
    
        return "os filmes no acervo são" + result + "."
    },
    listarFilmesEmCartaz:function (array) {
        let result = ""
        for (var i = 0; i < array.length; i++) {
            if (array[i].emCartaz == true) {
                result = result + ", " + array[i].titulo + ""
            }
        }
        return "os filmes em cartaz são" + result + "."
    },
    listarFilmesLongos:function (array,duracaoFilme) {
       return array.filter((filme =>filme.duracao>=duracaoFilme))
        
    }

}







