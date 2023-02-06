import { forwardRef } from 'react';

import * as Styles from './styles';
import { IComponentParams } from './types';

export const SelectImageComponent = forwardRef(
  (props: IComponentParams, ref: any) => {
    if (props.thumbnailSource) {
      return (
        <Styles.Header>
          <Styles.Thumbnail thumbnailSource={props.thumbnailSource} />

          <Styles.ButtonIcon
            onClick={() => props.onDeleteThumbnail()}
            arial-label="Botão para remover o arquivo que foi feito o upload"
          >
            <Styles.IconTrash />
          </Styles.ButtonIcon>
        </Styles.Header>
      );
    }

    return (
      <Styles.SelectImage htmlFor={props.htmlFor}>
        <Styles.Icon />
        <Styles.Input
          type="file"
          accept="image/*"
          ref={ref}
          {...props}
        />
      </Styles.SelectImage>
    );
  }
);
