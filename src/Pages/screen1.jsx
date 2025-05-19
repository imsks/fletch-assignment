import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getSession, setSession } from "../utils/functions"

const Screen1 = () => {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    let navigate = useNavigate()

    useEffect(() => {
        const { fName, lName, email, phone } = getSession("DATA")

        setFName(fName)
        setLName(lName)
        setEmail(email)
        setPhone(phone)
    }, [])

    const handleNext = (e) => {
        e.preventDefault()

        if (!fName || !lName || !email || !phone) {
            alert("Please fill the details")
        }

        setSession("DATA", {
            fName,
            lName,
            email,
            phone
        })

        navigate("/loan")
    }
    return (
        <main>
            <section>
                <form>
                    <div>
                        <label htmlFor='fname'>Enter First Name</label>
                        <input
                            type='text'
                            value={fName}
                            id='fname'
                            onChange={(e) => {
                                setFName(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='lname'>Enter Last Name</label>
                        <input
                            type='text'
                            id='lname'
                            value={lName}
                            onChange={(e) => {
                                setLName(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Enter Email</label>
                        <input
                            type='text'
                            id='email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='phone'>Enter Phone</label>
                        <input
                            type='tel'
                            id='phone'
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <button type='submit' onClick={handleNext}>
                        Next
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Screen1
