'use client'
import * as React from 'react';
import AppFooter from '@/modules/views/AppFooter';
import AppAppBar from '@/modules/views/AppAppBar';
import withRoot from '@/modules/withRoot';

function Artist() {
    return (
        <React.Fragment>
            <AppAppBar />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(Artist);