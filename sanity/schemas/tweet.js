export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in  Tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      description:'ADMIN Controls: Toggle if tweet deemed inappropriate',
      type: 'boolean',
      
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      // type: 'reference',
      // to: {type: 'author'},
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'string',      
    },   
    {
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    },
  ],
}
