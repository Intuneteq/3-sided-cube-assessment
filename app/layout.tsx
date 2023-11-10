import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { Footer, Navbar } from "@/components/organisms";
import TanstackProvider from "@/util/TanstackProvider";

import { getNominees } from "./select-nominee/actions";
import { getNominations } from "./nominations/actions";

import "./globals.css";

/** Preventing NextJs from handling Cache */
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["nominees"],
    queryFn: getNominees,
  });

  await queryClient.prefetchQuery({
    queryKey: ["nominations"],
    queryFn: getNominations,
  });

  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Navbar />
            <div className="flex justify-center items-center md:pt-10 pb-20 md:px-20 md:bg-background-image">
              {children}
            </div>
            <Footer />
          </HydrationBoundary>
        </TanstackProvider>
      </body>
    </html>
  );
}
