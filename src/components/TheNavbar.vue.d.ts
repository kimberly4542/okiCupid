// navbar.d.ts



export interface TheNavbarProps {
  bgColor: string;
}

export interface TheNavbarMethods {
  signIn(): void;
  toggleSignIn(): void;
}

export interface TheNavbarData {
  showSignInForm: boolean;
  email: string;
  password: string;
  placeholderEmail: string;
  placeholderPassword: string;
}
