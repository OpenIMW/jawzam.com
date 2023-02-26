import defineStructure from '@/sanity/utils/defineStructure';

const hiddenItemsIds = ['homePage'];

export const structure = defineStructure(
  (S) => S.list()
    .title("Jawzam Ressources")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Page d'accueil")
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                ),
            ])
        ),
      ...S.documentTypeListItems()
        .filter(item => !hiddenItemsIds.includes(item.getId()!))
    ])
);
