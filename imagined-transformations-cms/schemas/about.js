export default {
    name: 'about-copy',
    type: 'document',
    title: 'About Page Copy Content',
    fields: [
        {
          name: 'about_paragraphs',
          type: 'array',
          title: 'About Paragraphs',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'content', type: 'text', title: 'Content' }
              ]
            }
          ]
        }
      ]
  }