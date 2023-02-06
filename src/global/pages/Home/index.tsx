import { Fragment } from 'react';

import { FormComponent, HeaderComponent } from '@components/index';

import * as Styles from './styles';
import { useValidationListPosts } from './useValidationListPosts';

export function HomePage() {
  const { renderSectionPosts } = useValidationListPosts();

  return (
    <Fragment>
      <HeaderComponent />

      <Styles.Container>
        <FormComponent />

        <Styles.List>
          <h2>Feed</h2>

          {renderSectionPosts()}
        </Styles.List>
      </Styles.Container>
    </Fragment>
  );
}
