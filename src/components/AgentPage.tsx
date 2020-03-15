/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { Agent } from '../api';
import { getAverageScore } from '../agentUtils';
import { white } from '../styles';

interface AgentPageProps {
    agent: Readonly<Agent>;
}

const AgentPageStyles: SerializedStyles = css`
    grid-area: 1 / 2 / 3 / 4;
    background: ${white};
    margin: 1rem 1rem 1rem 0rem;
    padding: 1rem;
`;

function AgentPage({ agent }: AgentPageProps): JSX.Element {
    const { name, description, tasks } = agent;

    return (
        <section css={AgentPageStyles}>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>
                <strong>Memory: </strong>
                {getAverageScore(tasks, 'memory')}
            </p>
            <p>
                <strong>Planning: </strong>
                {getAverageScore(tasks, 'planning')}
            </p>
            <p>
                <strong>Logic: </strong>
                {getAverageScore(tasks, 'logic')}
            </p>
        </section>
    )
}

export default AgentPage;
