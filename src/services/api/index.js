const API = process.env.NEXT_PUBLIC_API;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const API_PZ = process.env.NEXT_PUBLIC_API_PZ;
const API_AU = process.env.NEXT_PUBLIC_API_M;

const endPoints = {
    auth:{
        addCustomer:`${API_AU}/api/${VERSION}/customers`,
        login:`${API_AU}/api/${VERSION}/auth/login`,
        profile: `${API_AU}/api/${VERSION}/auth/profile`,
    },
    products:{
        getProducts:`${API_PZ}/api/${VERSION}/products`,
    }
};

export default endPoints;