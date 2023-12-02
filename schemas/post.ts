
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
        // {
        //     name: "body",
        //     title: "Body",
        //     type: "array",
        //     of: [
        //         { type: "block" },
        //         { type: "image" }, // note to self: so this is possible: array of both blocks and images... skipping it for now though for dev speed
        //     ],
        //     validation: (Rule: any) => Rule.required(),
        // },
        {
            name: "body",
            title: "Body",
            type: "text",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "linkedProjects",
            title: "Linked Projects",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
        },
        {
            name: "ctaHref",
            title: "Call-to-action link",
            type: "string",
            description: "Start with http(s) to link to an external site"
        },
        {
            name: "ctaText",
            title: "Call-to-action text",
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
