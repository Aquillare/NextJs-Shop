const API = process.env.NEXT_PUBLIC_API;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth:{
        addCustomer:`${API}/api/${VERSION}/customers`,
    },
};

export default endPoints;