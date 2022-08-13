function Evento({numero}){
    function meuEvento(){
        console.log(`Opa, fui ativado! ${numero}`);
    }
    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <buttom className="btnAtivar" onClick={meuEvento}>Ativar</buttom>
        </div>
    )
}

export default Evento;