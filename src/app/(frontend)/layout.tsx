import { SanityLive } from "@/sanity/lib/live";

const FrontendLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main>
            {children}
            <SanityLive />
        </main>
    );
};

export default FrontendLayout;
