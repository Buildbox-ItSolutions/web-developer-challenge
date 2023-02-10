import { PropsWithChildren } from 'react';

function BaseLayout({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export default BaseLayout;