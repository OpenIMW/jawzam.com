import defineStructure from '@/sanity/utils/defineStructure';
import Iframe from 'sanity-plugin-iframe-pane'


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
                    .title("Page d'accueil")
                    .schemaType('homePage')
                    .documentId('homePage')
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .options({
                          url: (doc: any) => {
                            if (doc?.slug?.current) {
                              return `http://localhost:3000/api/preview?slug=${doc.slug.current}`
                            }

                            return `http://localhost:3000/api/preview`
                          }
                        })
                        .title('Preview'),
                    ])
                ),
            ])
        ),
      ...S.documentTypeListItems()
        .filter(item => !hiddenItemsIds.includes(item.getId()!))
    ])
);
