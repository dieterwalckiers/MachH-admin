export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
        },
        {
            name: "description",
            title: "Site Description",
            type: "text",
        },
        {
            name: "logo",
            title: "Site Logo",
            type: "image",
        },
    ],
    preview: {
        prepare() {
            return {
                title: "Site Settings",
            };
        },
    },
};