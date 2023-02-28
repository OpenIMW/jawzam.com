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
      name: 'buttonLabel',
      type: 'string',
      title: 'CTA button'
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Caractéristiques",
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
    }),
    defineField({
      name: "products",
      type: "array",
      title: "Produits",
      /* of: [{ type: "features" }], */
      of: [
        {
          type: 'reference',
          to: [
            { type: 'products' },
          ]
        },
      ],
      options: {
        sortable: true,
      },
      validation: Rule => Rule.unique()
    }),
    defineField({
      name: "featuredProduct",
      type: "reference",
      title: "Produit MIX",
      to: { type: "products" }
    }),
    defineField({
      name: "specialOrderBannerTitle",
      type: "string",
      title: "Bannière de commande spéciale: Titre"
    }),
    defineField({
      name: "specialOrderBannerSentence",
      type: "text",
      title: "Bannière de commande spéciale: Phrase clé",
      rows: 3
    }),
    defineField({
      name: "newsletterBannerTitle",
      type: "string",
      title: "Bannière de newsletter: Titre"
    }),
    defineField({
      name: "newsletterBannerSentence",
      type: "text",
      title: "Bannière de newsletter: Phrase clé",
      rows: 3
    }),
  ]
});

export default homePage;
