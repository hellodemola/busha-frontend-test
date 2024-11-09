import { useState } from "react";

const useModel = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModel = () => setIsOpen(!isOpen)

    return { isOpen, handleModel }
};

export default useModel;