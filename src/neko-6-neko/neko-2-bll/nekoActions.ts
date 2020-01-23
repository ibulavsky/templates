export const PROFILE_SET_NAME = 'REGISTER-LOGIN-RESPONSE/PROFILE/PROFILE_SET_NAME';

interface IProfileSetName {
    type: typeof PROFILE_SET_NAME;
    name: string;
}

export type IProfileActions = IProfileSetName;

export const profileSetName = (name: string): IProfileSetName => ({
    type: PROFILE_SET_NAME,
    name,
});
