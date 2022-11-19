export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields :[
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Keep your title short and sweet :)'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'}
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [ { type:'reference', to: { type: 'category' } } ]
        },
        {
            name: 'timeToRead',
            title: 'Time to Read',
            type: 'number',
            validation: Rule => Rule.required().lessThan(20)
        },
        // {
        //     name: 'content',
        //     title: 'Blog Content',
        //     type: 'text',
        //     description: 'Start explaining...'
        // },
        {
            name: 'content',
            description: 'Start explaining your story...',
            title: 'Content',
            type: 'array',
            of: [
                {
                type: 'block'
                },
                {
                type: 'image',
                fields: [
                    {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                        be they blind, color-blind, low-sighted; 
                        alternative text is of great help for those 
                        people that can rely on it to have a good idea of 
                        what's on your page.`,
                    options: {
                        isHighlighted: true
                    }
                    }
                ]
                }
            ]
        }
    ]
}