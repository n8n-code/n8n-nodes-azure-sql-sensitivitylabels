import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlSensitivitylabelsApi implements ICredentialType {
        name = 'N8nDevAzureSqlSensitivitylabelsApi';

        displayName = 'Azure SQL Sensitivitylabels API';

        icon: Icon = { light: 'file:../nodes/AzureSqlSensitivitylabels/azure-sql-sensitivitylabels.png', dark: 'file:../nodes/AzureSqlSensitivitylabels/azure-sql-sensitivitylabels.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Sensitivitylabels API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
