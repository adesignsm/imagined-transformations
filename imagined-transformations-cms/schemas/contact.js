export default {
    name: 'contact-copy',
    type: 'document',
    title: 'Contact Page Copy Content',
    fields: [
      {
        name: 'paragraph_1',
        type: 'text',
        title: 'Pargraph 1'
      },
      {
        name: 'paragraph_2',
        type: 'text',
        title: 'Pargraph 2'
      },
      {
        name: "email_contact",
        type: "string",
        title: "Email"
      },
      {
        name: "secondary_email_contact",
        type: "string",
        title: "Default Email",
        description: "This email will be used if there is no preferred email present in the field above."
      }
    ]
  }