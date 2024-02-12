export const pageRoutes = {
    dashboard: '/dashboard',
    auth: {
        login: '/auth/login',
        logout: '/auth/logout'
    },
    articles: {
        home: '/articles',
        create: '/articles/create-article',
        update: '/articles/update-article',
        category: {
            home: '/articles/categories',
            create: '/articles/categories/create-categories',
            update: '/articles/categories/update-categories',
        }
    }
}