import { v4 as uuidv4 } from "uuid";

const mockData = [
	{
		id: uuidv4(),
		title: "Tarefas à fazer",
		tasks: [
			{
				id: uuidv4(),
				title: "Entregar tarefa do dia 03/06",
			},
			{
				id: uuidv4(),
				title: "Orçamento X",
			},
			{
				id: uuidv4(),
				title: "Planejamento Y",
			},
		],
	},
	{
		id: uuidv4(),
		title: "Fazendo",
		tasks: [
			{
				id: uuidv4(),
				title: "Projeto de Software",
			},
			{
				id: uuidv4(),
				title: "Mockup Kanban",
			},
		],
	},
	{
		id: uuidv4(),
		title: "Concluído",
		tasks: [
			{
				id: uuidv4(),
				title: "Entrevista",
			},
		],
	},
	{
		id: uuidv4(),
		title: "Pedidos",
		tasks: [
			{
				id: uuidv4(),
				title: "Estudar TypeScript",
			},
		],
	},
	{
		id: uuidv4(),
		title: "Code Review",
		tasks: [
			{
				id: uuidv4(),
				title: "Projeto de Software III",
			},
		],
	},
];

export default mockData;
