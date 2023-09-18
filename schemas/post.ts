
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default {
    name: "post",
    title: "Post",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "date",
            title: "Date",
            type: "date",
            default: Date.now,
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [
                { type: "block" },
                { type: "image" },
            ],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "linkedProjects",
            title: "Linked Projects",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
            description: "These will be rendered as a list of clickable tags at the bottom of the post"
        },
        {
            name: "ctaHref",
            title: "Call-to-action link",
            type: "string",
        },
        orderRankField({ type: "post" }),
    ],
    preview: {
        select: {
            title: "title",
            date: "date",
        },
        prepare(selection: any) {
            const { title, date } = selection;
            return {
                title: `${date}: ${title || "Untitled"}`,
            };
        },
    },
};
