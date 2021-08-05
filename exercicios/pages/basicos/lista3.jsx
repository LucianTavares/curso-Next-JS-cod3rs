function gerarLista(valorFinal = 10) {
    const lista = []
    for(let i = 1; i <= valorFinal; i++) {
        lista.push(<span>{i}, </span>)
    }
    
    return lista
}

export default function lista3() {
    return (
        <div>
          <div>
            {gerarLista()}
         </div>
         <div>
            {gerarLista(30)}
         </div>
        </div>
    )
}