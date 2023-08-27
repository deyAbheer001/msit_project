'use client'
import * as React from 'react';
import AppFooter from '@/modules/views/AppFooter';
import AppAppBar from '@/modules/views/AppAppBar';
import withRoot from '@/modules/withRoot';
import Album from '@/modules/views/Album';

function Artists() {

  return (
    <React.Fragment>
      <AppAppBar />
        <Album />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Artists);
