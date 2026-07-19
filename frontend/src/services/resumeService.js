import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/resume`;

export const analyzeResume = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await axios.post(
        `${API}/analyze`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};