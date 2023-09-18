
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
            description: "Id to create a unique event-link (eg. /events/{slug}). You can generate this or manually fill this in.",
        }
    ],
};