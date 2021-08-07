import React, { Children } from 'react';

function Layout() {
    return <section>
        <header>header</header>
        {children}
    </section>;
}

export default Layout;