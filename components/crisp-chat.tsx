import { useEffect } from "react";

import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {

    useEffect(() => {
        Crisp.configure('22c692e7-9a7a-4c73-ab83-1107bb1e906e');
    }, []);

    return null;
};