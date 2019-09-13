export interface RegisterResponse {
    success: boolean;
    message: string;
    data?: any;
}

export interface PageableLaravel {
    path: string;
    current_page: number;
    from: number;
    to: number;
    total: number;
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    prev_page_url: string;
    per_page: number;
    data: Array<any>
}

export interface Pageable {
    success: boolean;
    message: string;
    paginate: PageableLaravel;
}