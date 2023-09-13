// In your schema file, define your document types
export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "photo",
            title: "Photo",
            type: "image",
        },
        {
            name: "events",
            title: "Events",
            type: "array",
            of: [{ type: "reference", to: [{ type: "event" }] }],
        },
    ],
};
