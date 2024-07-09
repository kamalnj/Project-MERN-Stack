// import { useEffect } from "react";

const useRouter = () => {
    const navigate = (url) => {
        window.location.href = url;
    };

    return {
        navigate
    };
};

export default useRouter;
