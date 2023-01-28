export interface Props {
    menuOptions: {
        page: string;
        pageLogo?: string;
    };
    isLoggedIn: boolean;
    avatar?: string;
}

export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }