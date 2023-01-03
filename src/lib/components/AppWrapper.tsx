import { ThemeProvider } from "next-themes";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default AppWrapper;
