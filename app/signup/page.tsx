import { signup } from './actions'

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="firstname">First Name:</label>
            <input id="firstname" name="firstnmae" type="firstname" required />
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={signup}>Sign up</button>
        </form>
    )
}