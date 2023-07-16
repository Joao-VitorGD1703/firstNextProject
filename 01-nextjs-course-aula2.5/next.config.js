module.export={

    trailingSlash: true,
        async redirects() {
            return [
                {
                    source: '/about',
                    destination: '/',
                    permanent: true,
                },
            ]
        },
    
}