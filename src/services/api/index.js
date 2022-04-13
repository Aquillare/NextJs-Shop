const API = process.env.NEXT_PUBLIC_API;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth:{
        addCustomer:`${API}/api/${VERSION}/customers`,
        login:`${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products:{
        getProducts:`${API}/api/${VERSION}/products`,
    }
};

export default endPoints;