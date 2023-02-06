import { forwardRef, Fragment } from 'react';

import * as Styles from './styles';
import { IComponentParams } from './types';

export const TextFieldComponent = forwardRef(
  (props: IComponentParams, ref?: any) => {
    return (
      <Fragment>
        <Styles.TextField ref={ref} {...props} />

        {props.error && (
          <Styles.Message>{props.message}</Styles.Message>
        )}
      </Fragment>
    );
  }
);
