import mock from "./mock";

const data = {
    role: {
        id: 2,
        name: "AGENT",
        guard_name: "api",
        created_at: "2023-02-02T10:46:39.607000Z",
        updated_at: "2023-02-02T10:46:39.607000Z",
        permissions: [
            {
                id: 1,
                name: "order",
                guard_name: "api",
                created_at: "2023-02-02T10:46:39.597000Z",
                updated_at: "2023-02-02T10:46:39.597000Z",
                pivot: {
                    role_id: "2",
                    permission_id: "1"
                }
            }
        ]
    },
    permissions: [
        {
            id: 1,
            name: "order",
            guard_name: "api",
            created_at: "2023-02-02T10:46:39.597000Z",
            updated_at: "2023-02-02T10:46:39.597000Z"
        },
        {
            id: 2,
            name: "user management",
            guard_name: "api",
            created_at: "2023-02-02T10:47:06.407000Z",
            updated_at: "2023-02-02T10:47:06.407000Z"
        },
        {
            id: 3,
            name: "staff",
            guard_name: "api",
            created_at: "2023-02-02T10:49:02.503000Z",
            updated_at: "2023-02-02T10:49:02.503000Z"
        },
        {
            id: 4,
            name: "admin",
            guard_name: "api",
            created_at: "2023-02-02T10:49:02.517000Z",
            updated_at: "2023-02-02T10:49:02.517000Z"
        }
    ]
}

mock.onGet('/role-permission').reply(()=> [200, data])

