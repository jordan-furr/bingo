export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p>Testing</p>
            <div>
                {children}
            </div>
        </div>

    );
}