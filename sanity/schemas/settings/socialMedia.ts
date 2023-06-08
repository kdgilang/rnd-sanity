const socialMedia = {
  name: 'socialMediaSetting',
  type: 'document',
  title: 'Social Media',
  fields: [
    {
      name: 'facebook',
      type: 'object',
      title: 'Facebook',
      fields: [
        {
          name: 'facebookUrl',
          type: 'url',
          title: 'Facebook Url'
        }
      ]
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter Url'
    }
  ]
}

export default socialMedia