import CountButton from "./count-button";

export default async function Page() {
    const colors = ['orange', 'red', 'pink'];
    return (
        <main>
            <div>
                <h2>Youve got this</h2>
                <h3>My favorite colors:</h3>
                <ul>
                    {colors.map((color) => (
                        <li key={color}>{color}</li>
                    ))}
                </ul>
                <CountButton />
            </div>
        </main>
    );
} 