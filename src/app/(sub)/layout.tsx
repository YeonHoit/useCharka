import { useColorMode } from "@chakra-ui/react";

export default async function SubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
