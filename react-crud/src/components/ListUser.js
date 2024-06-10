import { useState } from "react";

export default function ListUser() {

    const [input, setInpit] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event
    }
    const handleSubmit = (event) => {
        event.prevenrDefault();
    }
    return (
        <div>
            <h1>List User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange}/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>

    )
}

