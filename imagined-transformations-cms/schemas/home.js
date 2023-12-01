export default {
    name: 'home-page',
    type: 'document',
    title: 'Home Page Content',
    fields: [
      {
        name: 'home_paragraph',
        type: 'text',
        title: 'Home Paragraph'
      },
      {
        name: 'home_image_one',
        title: 'Home Image 1',
        type: 'image',
        description: 'One of the two images that will appear on the left hand side.'
      },
      {
        name: 'home_image_two',
        title: 'Home Image 2',
        type: 'image',
        description: 'One of the two images that will appear on the left hand side.'
      },
      {
        name: 'home_word_blurb',
        type: 'text',
        title: 'Word Blurb',
        description: 'Along with the images above, this word blurb will appear on the left hand side.'
      }
    ]
  }