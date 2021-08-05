export default function jsx4() { 
    const versao = "#04"
    const saudacao = "Estou no JavaScript"
    return (
        <div>
            <h1>JSX {versao}</h1>
            <h2>{saudacao}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(15, 10, 20)}</h5>
            <h5>{entre(5, 10, 20)}</h5>
        </div>
    )
}

function entre( valor, min, max) { 
    if( valor >= min && valor <= max){
        return "Sim"
    }else{
        return "Não"
    }
}