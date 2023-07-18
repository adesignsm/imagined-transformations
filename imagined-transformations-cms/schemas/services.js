export default {
    name: 'services-copy',
    type: 'document',
    title: 'Your Services',
    fields: [
        {
          name: 'service_content',
          type: 'array',
          title: 'List your services here',
          description: "Please be advised that you are limited to six services at this time. Please contact your developer for further functionality.",
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Name of Service' },
                { name: 'content', type: 'text', title: 'Service Description' }
              ]
            }
          ]
        }
      ]
  }