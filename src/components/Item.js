// Pra usar o PropTypes e o defaultProps temos que importar do react
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

// Esses dois item é para que tenhamos validação e valor Default


// Esse caso ele faz a verificação em nivel de programação!
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

// Preenche com o Valor Default, configurado pelo programador
Item.defaultProps ={
    marca:'Faltou a marca',
    ano_lancamento: 0,
}

export default Item;