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
        },
        {
          name: 'slider_images',
          type: 'array',
          title: 'About Slider Images',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'slider_image', type: 'image', title: 'Slider Image'}
              ]
            }
          ]
        }
      ]
  }