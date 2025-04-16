import styled from "styled-components"

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
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Mais Curtidos</a>
                    </li>
                </BarraEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral