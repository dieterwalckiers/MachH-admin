
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
            type: "text",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            description: "will be cropped to a square thumbnail on the events page"
        },
        {
            name: "ctaHref",
            title: "Call-to-action link",
            type: "string",
            description: "Start with http(s) to link to an external site",
        },
        {
            name: "ctaText",
            title: "Call-to-action text",
            type: "string",
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
};