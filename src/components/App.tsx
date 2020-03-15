/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { useEffect, useState } from 'react';
import { AgentsApi, Agent } from '../api';
import AgentList from './AgentList';
import Loading from './Loading';
import AgentPage from './AgentPage';
import AgentComparison from './AgentComparison';
import PleaseSelect from './PleaseSelect';

const AppStyles: SerializedStyles = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

function App(): JSX.Element | null {
    useEffect(() => {
        async function fetchAgents() {
            const agentsApi = new AgentsApi();
            try {
                const agents = await agentsApi.listAgents();
                setAgents(agents);
            } catch(e) {
                console.error(e);
                // TODO: set error state and add UI state
            }
        }
  
        fetchAgents();
    }, []);

    const [agents, setAgents] = useState<ReadonlyArray<Agent>>();
    const [selected, setSelected] = useState<number | null>(null);
    const [comparedAgents, setComparedAgents] = useState<Agent[]>([]);

    if (!agents) return <Loading />;

    const onDetails = (index: number) => {
        setSelected(index);
        setComparedAgents([]);
    }

    const onCompare = (index: number) => {
        setSelected(null);
        setComparedAgents([agents[index], ...comparedAgents].slice(0, 2));
    }

    const rightPanel = (comparedAgents: Agent[], selected: number | null, agents: ReadonlyArray<Agent>): JSX.Element | null => {
        if (comparedAgents.length === 1) {
            return <PleaseSelect />
        } else if (comparedAgents.length === 2) {
            return <AgentComparison agents={comparedAgents}/>
        }
        return (selected !== null) ? <AgentPage agent={agents[selected]}/> : null;
    }
    

    return (
        <main css={AppStyles}>
            <AgentList
                agents={agents}
                onDetails={onDetails}
                onCompare={onCompare}
                selected={selected}
                comparedAgents={comparedAgents}
            />
            { rightPanel(comparedAgents, selected, agents) }
        </main>
    )
}

export default App;
