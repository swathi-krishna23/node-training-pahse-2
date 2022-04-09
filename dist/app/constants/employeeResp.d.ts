declare const employeeResp: {
    id: string;
    name: string;
    joiningDate: string;
    role: string;
    experience: number;
    status: string;
    designation: string;
    employeeProofUrl: string;
    email: string;
    password: string;
    departments: {
        id: string;
        name: string;
    }[];
}[];
export default employeeResp;
