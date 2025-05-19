import { useNavigate } from "react-router"
import { useState } from "react"

const Screen1 = () => {
    const [zip, setZip] = useState("")
    const [loan, setLoan] = useState("")
    const [message, setMessage] = useState("")

    let navigate = useNavigate()

    const handleApplyLoan = (e) => {
        e.preventDefault()

        if (!zip || !loan) {
            alert("Please fill the details")
        }

        setMessage("Loan Applied Sucessfully")
    }

    const handleBack = () => {
        navigate("/")
    }

    const loanFormContainer = (
        <form>
            <div>
                <label htmlFor='zip'>Enter Zip</label>
                <input
                    type='number'
                    id='zip'
                    onChange={(e) => {
                        setZip(e.target.value)
                    }}
                    required
                />
            </div>
            <div>
                <label htmlFor='loan'>Enter Loan Amount</label>
                <input
                    type='number'
                    id='loan'
                    onChange={(e) => {
                        setLoan(e.target.value)
                    }}
                    required
                />
            </div>
            <button type='submit' onClick={handleApplyLoan}>
                Apply
            </button>
        </form>
    )

    const messageContainer = message && <p>{message}</p>

    return (
        <main>
            <section>
                <h1>Loan Details</h1>
                <button onClick={handleBack}>Back</button>
                {loanFormContainer}
                {messageContainer}
            </section>
        </main>
    )
}

export default Screen1

// IMPROVEMENTS
// const InputField = ({
//     placeholder,
//     name,
//     type,
//     handler,
//     isRequired
// }: props) => {
//     return (
//         <div>
//             <label htmlFor={name}>{placeholder}</label>
//             <input
//                 type={type}
//                 id={name}
//                 onChange={handler}
//                 required={isRequired}
//             />
//         </div>
//     )
// }
