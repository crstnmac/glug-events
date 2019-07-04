export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'glug-events-studio',
                  apiId: '51b429d1-b778-4aeb-b77d-98c1c245f399'
                },
                {
                  buildHookId: '5d1d73ca6c1581481d59dac9',
                  title: 'Events Website',
                  name: 'glug-events',
                  apiId: '8777d8af-7629-4e62-97dc-d01e25e5956f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crstnmac/glug-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://glug-events.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
