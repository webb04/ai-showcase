/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { white } from '../styles';

const PleaseSelectStyles: SerializedStyles = css`
    grid-area: 1 / 2 / 3 / 4;
    margin: 1rem 1rem 1rem 0rem;
    padding: 1rem;
    background: ${white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default function PleaseSelect(): JSX.Element {
    return (
        <section css={PleaseSelectStyles}>
            <p>Please select 1 more agent to compare</p>
        </section>
    )
}