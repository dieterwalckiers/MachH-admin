import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default {
    name: "project",
    title: "Project",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "tileCaption",
            title: "Tile caption",
            type: "string",
            description: "Caption that appears on the tile on the home page (spaces become line breaks)"
        },
        {
            name: "photo",
            title: "Photo",
            type: "image",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "events",
            title: "Events",
            type: "array",
            of: [{ type: "reference", to: [{ type: "event" }] }],
        },
        orderRankField({ type: "project" }),
    ],
};
