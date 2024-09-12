import { useState, useCallback } from "react";
import api from "../api";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(
        async (url, method = "GET", body = null, headers = {}) => {
            setLoading(true);
            try {
                if (body) {
                    headers["Content-Type"] = "application/json";
                }

                const response = await api.post(url, body);
                if (!response.data) {
                    throw new Error(
                        response.data.message || "Что-то пошло не так"
                    );
                }
                setLoading(false);
                return response.data;
            } catch (e) {
                setLoading(false);
                setError(e.message);
                throw e;
            }
        },
        []
    );

    const clearError = useCallback(() => setError(null), []);

    return { loading, request, error, clearError };
};
