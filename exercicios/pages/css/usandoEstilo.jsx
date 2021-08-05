import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={5} color="#fff" />
            <Estilo numero={-5} color="#000" direita/>
        </div>
    )
        
}