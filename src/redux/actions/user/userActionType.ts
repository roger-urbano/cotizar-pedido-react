export const USER_DETAIL_SUCCESS = 'USER_DETAIL_SUCCESS';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LOADING = 'USER_LOADING';
export const USER_DETAIL_FAIL = 'USER_DETAIL_FAIL';

/* Type para peticion axios */
// export type Usertype = {
//     userList: UserDetail[],
// }

export type UserType = {
        id?: number,
        first_name?: string,
        last_name?: string,
        full_name?: string,
        email?: any,
        document_number?: number,
        type_doc?: number,
        gender?: number,
        phone?: number,
        image_url?: any,
        date_birth?: Date
}

/* Inteface para dispatch */
export interface IUserDetail {
    type: typeof USER_DETAIL_SUCCESS;
    payload: UserType
}

export interface IUserDetailFail {
    type: typeof USER_DETAIL_FAIL
}

export interface IUserList {
    type: typeof USER_LIST_SUCCESS;
    payload: UserType[]
}
export interface IUserLoading {
    type: typeof USER_LOADING
}

export type UserDispatchTypes =  IUserDetail | IUserDetailFail |  IUserList | IUserLoading