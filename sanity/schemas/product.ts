import { defineField, defineType } from "@sanity/types";

const products = defineType({
  name: 'products',
  type: "document",
  title: "Produits",
  fields: [
    defineField({
      type: "image",
      name: "image",
      title: "Photo du produit",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nom de produit',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Prix (€)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 4
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Lien du produits',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    /* defineField({
      name: 'featured',
      type: 'boolean',
      title: "S'agit-il du pack mixte ?",
      initialValue: false
    }), */
  ]
})

export default products;
