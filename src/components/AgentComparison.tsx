/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { Agent } from '../api';
import { getAverageScore } from '../agentUtils';
import { blue, white } from '../styles';

const AgentComparisonStyles: SerializedStyles = css`
    grid-area: 1 / 2 / 3 / 4;
    margin: 1rem 1rem 1rem 0rem;
    padding: 1rem;
    background: ${white};

    div {
        text-align: center;
    }

    h2 {
        font-size: 1.2rem;
        margin: 3rem 0 1rem 0;
    }

    strong {
        border: 1px solid ${blue};
        border-radius: 30px;
        padding: 12px 16px;
    }

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: .2fr .2fr .8fr .2fr .8fr .2fr .8fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
        
    div:nth-of-type(1) { grid-area: 1 / 1 / 2 / 2; }
    div:nth-of-type(2) { grid-area: 1 / 2 / 2 / 3; }
    div:nth-of-type(3) { grid-area: 2 / 1 / 3 / 3; }
    div:nth-of-type(4) { grid-area: 3 / 1 / 4 / 2; }
    div:nth-of-type(5) { grid-area: 3 / 2 / 4 / 3; }
    div:nth-of-type(6) { grid-area: 4 / 1 / 5 / 3; }
    div:nth-of-type(7) { grid-area: 5 / 1 / 6 / 2; }
    div:nth-of-type(8) { grid-area: 5 / 2 / 6 / 3; }
    div:nth-of-type(9) { grid-area: 6 / 1 / 7 / 3; }
    div:nth-of-type(10) { grid-area: 7 / 1 / 8 / 2; }
    div:nth-of-type(11) { grid-area: 7 / 2 / 8 / 3; }
`;

interface AgentComparisonProps {
	agents: ReadonlyArray<Agent>;
}

function AgentComparison({ agents }: AgentComparisonProps): JSX.Element | null {
    const [agentA, agentB] = agents;

    const [memory, planning, logic] = ['memory', 'planning', 'logic'].map(category => {
            const scoreA = getAverageScore(agentA.tasks, category);
            const scoreB = getAverageScore(agentB.tasks, category);
            const best = Math.max(scoreA, scoreB);
            return { scoreA, scoreB, best };
        }
    )

    return (
        <section css={AgentComparisonStyles}>
            <div>
                <h1>{agentA.name}</h1>
            </div>
            <div>
                <h1>{agentB.name}</h1>
            </div>
            <div>
                <h2>Memory</h2>
            </div>
            <div>{memory.scoreA === memory.best ? <strong>{ memory.scoreA }</strong> : memory.scoreA}</div>
            <div>{memory.scoreB === memory.best ? <strong>{ memory.scoreB }</strong> : memory.scoreB}</div>
            <div>
                <h2>Planning</h2>
            </div>
            <div>{planning.scoreA === planning.best ? <strong>{ planning.scoreA }</strong> : planning.scoreA}</div>
            <div>{planning.scoreB === planning.best ? <strong>{ planning.scoreB }</strong> : planning.scoreB}</div>
            <div>
                <h2>Logic</h2>
            </div>
            <div>{logic.scoreA === logic.best ? <strong>{ logic.scoreA }</strong> : logic.scoreA}</div>
            <div>{logic.scoreB === logic.best ? <strong>{ logic.scoreB }</strong> : logic.scoreB}</div>
        </section>
    );
}

export default AgentComparison;
