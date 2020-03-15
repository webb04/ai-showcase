/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { Agent } from '../api';
import { blue, white, pink, yellow, yellowBright } from '../styles';

const AgentListStyles: SerializedStyles = css`
	list-style: none;
  	padding: 0;
  	margin: 0;
  	grid-area: 1 / 1 / 3 / 2;

  	li {
    	margin: 1rem;
    	padding: 1rem;
    	text-align: center;
	}

	button {
		outline: none;
		transition: background-color .15s linear,border-color .15s linear,color .15s linear;		
		border: 1px solid ${blue};
    	border-radius: 30px;
    	color: ${blue};
		padding: 12px 16px;
		
		&:first-of-type {
			margin-right: .5rem;
		}

		&:hover {
			cursor: pointer;
			background-color: ${yellowBright};
			border: 1px solid ${yellowBright};
    		color: ${blue};
		}
	}

	@media (max-width: 667px) { {
		button:first-of-type {
			margin-right: 0;
			margin-bottom: .5rem;
		}
	}
`;

const listItemStyles = (props: AgentListProps, index: number, id: number): SerializedStyles => {
	if (props.comparedAgents.find(agent => agent.id === id)) {
		return css`background: ${pink}`
	}
	
	return props.selected === index ? css`background: ${yellow}` : css`background: ${white}`;
}

interface AgentListProps {
	agents: ReadonlyArray<Agent>;
	selected?: number | null;
	comparedAgents: Agent[];
	onDetails: (index: number) => void;
	onCompare: (index: number) => void;
}

function AgentList(props: AgentListProps): JSX.Element | null {
	const { agents, onDetails, onCompare } = props;

	return (
    	<ul css={AgentListStyles}>
      		{
        		agents.map((agent, index) => (
          			<li key={agent.id} css={listItemStyles(props, index, agent.id)}>
            			<p>{agent.name}</p>
            			<button onClick={() => onDetails(index)}>Details</button>
            			<button onClick={() => onCompare(index)}>Compare</button>
          			</li>
        		))
      		}
    	</ul>
  	)
}

export default AgentList;
