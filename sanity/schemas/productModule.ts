// @ts-ignore
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'productModule',
  title: 'Product Module',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Module Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'pillarNumber',
      title: 'Pillar Number (1-6)',
      type: 'number',
      validation: Rule => Rule.min(1).max(6),
    }),
    defineField({
      name: 'oneLineDescription',
      title: 'One Line Description',
      type: 'string',
    }),
    defineField({
      name: 'fullHero',
      title: 'Hero Copy',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'problemStatement',
      title: 'Problem Statement',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string', title: 'Lucide Icon Name' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ]
        }
      ]
    }),
  ],
})
