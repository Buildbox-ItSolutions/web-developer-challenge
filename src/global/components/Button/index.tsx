import { Button } from './styles';
import { IComponentParams } from './types';

export function ButtonComponent({
  title,
  variant,
  loading,
  ...restProps
}: IComponentParams) {
  return (
    <Button variant={variant} {...restProps}>
      <span>{loading ? 'carregando...' : title}</span>
    </Button>
  );
}
