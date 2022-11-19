
export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Parent Category',
            to: [{type: 'category'}]
        },
        {
            name: 'metaKeywords',
            type: 'array',
            title: 'Meta Keywords',
            description: 'Input keywords for serch engine optimization',
            of: [{type:'string'}]
        },
        {
            name: 'metaDescription',
            type: 'text',
            title: 'Meta Description',
            description: 'Input description for serch engine optimization',
            options: {
                maxLength: 150
            }
        }
    ]
}


