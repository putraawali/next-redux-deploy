import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserPage() {
    const router = useRouter();
    const { id } = router.query;
    const [DUMMY_USER] = useState([
        {
            id: 1,
            name: "Binar",
        },
        {
            id: 2,
            name: "Academy",
        },
    ]);
    const [indexUser, setIndexUser] = useState();

    useEffect(() => {
        if (id) {
            const idx = DUMMY_USER.findIndex((el) => el.id === +id);
            setIndexUser(idx);
        }
    }, [id]);

    return (
        <center>
            <h1>User Page</h1>
            <h1>{DUMMY_USER[indexUser]?.name}</h1>
        </center>
    );
}
