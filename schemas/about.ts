export default {
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "body",
            title: "Body",
            type: "text",
        },
    ],
    preview: {
        prepare() {
            return {
                title: "About",
            };
        },
    },
};