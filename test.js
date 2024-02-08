// import AdminDashboard from "./src/pagesAdminDashboard";
// import CreateAdmin from "./src/pagesCreateAdmin";
// import CreateFaculty from "./src/pagesCreateFaculty";
// import CreateStudent from "./src/pagesCreateStudent";

// export const adminPaths2 = [
//     {
//         name: "Dashboard",
//         path: "dashboard",
//         // element: <AdminDashboard />,
//         element: "AdminDashboard",
//     },
//     {
//         name: "User Management",
//         children: [
//             {
//                 name: "Create Admin",
//                 path: "create-admin",
//                 element: "CreateAdmin"
//                 // element: <CreateAdmin />
//             },
//             {
//                 name: "create-faculty",
//                 path: "create-faculty",
//                 element: "<CreateFaculty />"
//             },
//             {
//                 name: "create-student",
//                 path: "create-student",
//                 element: "<CreateStudent />"
//             },
//         ]
//     }
// ]


// const newArray = adminPaths2.reduce((acc, item) => {
//     // acc.push(item);
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }

//     if (item.children) {
//         item.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
// }, [])
// console.log(newArray)