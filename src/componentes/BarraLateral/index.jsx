import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const BarraEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <BarraEstilizada>
                    <ItemNavegacao 
                        itemAtivo='/icons/home-ativo.png'
                        itemInativo='/icons/home-inativo.png'
                        ativo={true}
                    >
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao 
                        itemAtivo='/icons/mais-vistas-ativo.png'
                        itemInativo='/icons/mais-vistas-inativo.png'
                        ativo={false}
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        itemAtivo='/icons/mais-curtidas-ativo.png'
                        itemInativo='/icons/mais-curtidas-inativo.png'
                        ativo={false}
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        itemAtivo='/icons/novas-ativo.png'
                        itemInativo='/icons/novas-inativo.png'
                        ativo={false}
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        itemAtivo='/icons/surpreenda-me-ativo.png'
                        itemInativo='/icons/surpreenda-me-inativo.png'
                        ativo={false}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </BarraEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral