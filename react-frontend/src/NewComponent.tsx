import styled from "styled-components";

const SubStyledHelloWorld = styled.p<{$fontSize ?: number;}>`
    font-size: ${props => props.$fontSize ? props.$fontSize : 2}rem;
`

interface NewComponentProps {
    count: number
}

function NewComponent(props: NewComponentProps) {
    return (
        <>
            <div>
                <p> Count Is {props.count}</p>
            </div>
        </>
    )
}

export {NewComponent, SubStyledHelloWorld}