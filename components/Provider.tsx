import { Session } from "next-auth/core/types";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
  session: Session;
}

const Provider = ({ children, session }: ProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;