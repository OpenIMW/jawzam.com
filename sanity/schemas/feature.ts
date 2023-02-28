import { defineField, defineType } from "@sanity/types";

const feature = defineType({
  name: "features",
  type: "document",
  title: "Caractéristiques",
  fields: [
    defineField({
      name: 'icon',
      type: 'image',
      title: 'Icône de la caractéristique',
      description: "Une image transparente (.svg ou .png)",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre de la caractéristique',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description de la caractéristique',
      validation: (rule) => rule.max(250)
    })
  ]
});

export default feature;
