import { defineField, defineType } from "@sanity/types";

const homePage = defineType({
  name: "homePage",
  type: "document",
  title: "Page d'accueil",
  fields: [
    defineField({
      name: "key",
      type: "string",
      initialValue: "Modifiez page d'accueil",
      hidden: true
    }),
    defineField({
      name: 'bgImage',
      type: 'image',
      title: 'Background Image',
      description: 'Recommandé: utilisez une image haute résolution avec un aspect ratio de 16:9.'
    }),
    defineField({
      name: 'logoImage',
      type: 'image',
      title: 'Logo du hero section',
    }),
    defineField({
      name: 'catchPhrase',
      type: 'text',
      title: 'Phrase clé',
      rows: 3
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Caractéristiques",
      /* of: [{ type: "features" }], */
      of: [
        {
          type: 'reference',
          to: [
            { type: 'features' },
          ]
        },
      ],
      options: {
        sortable: true,
      }
    })
  ]
});

export default homePage;
