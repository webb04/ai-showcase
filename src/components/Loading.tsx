/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'

const LoadingStyles: SerializedStyles = css`
    margin: 1rem;
`;

export default function Loading(): JSX.Element {
    return <section css={LoadingStyles}>Fetching agents...</section>
}