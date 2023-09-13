// In your schema file, define your singleton document type
export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    __experimental_actions: ["update", "publish"],
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