
export default {
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        {
            name: "date",
            title: "Date",
            type: "date",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "time",
            title: "Time",
            type: "string",
            description: "hh:mm",
        },
        {
            name: "place",
            title: "Place",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            description: "will be cropped to a square thumbnail on the events page"
        },
        {
            name: "callToActions",
            title: "Call-to-action's",
            type: "array",
            of: [{ type: "callToAction" }],
        },
        {
            name: "linkedProjects",
            title: "Linked Projects",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: (doc: any, { parent }: any) => parent && parent.title,
                maxLength: 96
            },
            validation: (Rule: any) => Rule.required(),
            description: "Id to create a unique event-link (eg. mach-h.be/events/{slug}). You can generate this or manually fill this in.",
        }
    ],
    orderings: [
        {
            title: 'Date',
            name: 'date',
            by: [
                { field: 'date', direction: 'desc' }
            ]
        },
    ]

};