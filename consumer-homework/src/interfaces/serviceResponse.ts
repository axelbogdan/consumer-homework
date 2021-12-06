export interface ServiceResponse<T> {
    success: boolean;
    error?: string;
    data?: T;
}