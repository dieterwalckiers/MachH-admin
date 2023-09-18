
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
            type: "number",
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
    ],
};