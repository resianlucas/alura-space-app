import styled from "styled-components"

const ItemListaEstilizado = styled.li`
    
`

const ItemNavegacao = ({ children, itemAtivo, itemInativo, ativo = false }) => {
    return (
        <ItemListaEstilizado>
            <img src={ativo ? itemAtivo : itemInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao