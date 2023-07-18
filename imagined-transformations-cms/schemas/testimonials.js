export default {
    name: 'testimonial-accounts',
    type: 'document',
    title: 'Testimonial Profiles',
    fields: [
        {
          name: 'testimonial_accounts',
          type: 'array',
          title: 'Testimonial Accounts & Profiles',
          description: "Please be advised that you are limited to three testimonials at this time. Please contact your developer for further functionality.",
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Name of Attestant' },
                { name: "subject", type: "string", title: "Testimonial Subject"},
                { name: 'content', type: 'text', title: 'Testimonial Content' }
              ]
            }
          ]
        }
      ]
  }