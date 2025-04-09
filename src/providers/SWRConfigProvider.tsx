import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

export default function SWRConfigProvider({ children }: PropsWithChildren) {
  return (
    <SWRConfig
      value={{
        revalidateOnMount: false,
        revalidateOnFocus: false,
        revalidateIfStale: false,
        refreshInterval: 1000,
      }}
    >
      {children}
    </SWRConfig>
  );
}
