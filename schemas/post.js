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
        }
    ]
}