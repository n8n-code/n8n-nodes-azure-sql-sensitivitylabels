import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlSensitivitylabels implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Sensitivitylabels',
		name: 'N8nDevAzureSqlSensitivitylabels',
		icon: { light: 'file:./azure-sql-sensitivitylabels.png', dark: 'file:./azure-sql-sensitivitylabels.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure SQL Database RESTful API manages database services.',
		defaults: { name: 'Azure SQL Sensitivitylabels' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlSensitivitylabelsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
