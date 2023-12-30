"use client";
import { useFormStatus, useFormState } from "react-dom";
import {
  ReactNode,
  FormEventHandler,
  ReactElement,
  useEffect,
  RefObject,
  JSX,
} from "react";

/**
 * @typedef FormLayoutProps
 * @prop {ReactElement} children - children
 * @prop {T} initialFormData - inititalFormData
 * @prop {() => void} onSubmit - onSubmit
 * @prop {(state: Awaited<T>, payload: FormData) => Promise<T>} serverAction - serverAction
 * @prop {(data: T) => void|Promise<void>} handleStateUpdate - handleStateUpdate
 * @prop {RefObject<HTMLFormElement>|null} formRef - formRef
 * @prop {string} formStyle - formStyle
 * @prop {string} buttonStyle - buttonStyle
 * @prop {"submit" | "reset" | "button" | undefined} buttonType - buttonType
 * @prop {string} unChangedStyle - unChangedStyle
 * @prop {string} pendingChangedStyle - pendingChangedStyle
 * @prop {ReactNode} buttonContext - buttonContext
 * @prop {ReactNode} loadingContext - loadingContext
 * @prop {() => void} onClick - onCLick
 * @prop {boolean} loading - loading
 */
interface FormLayoutProps<T> {
  children: ReactElement;
  initialFormData: T;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  serverAction?: (state: Awaited<T>, payload: FormData) => Promise<T>;
  handleStateUpdate?: (data: T) => void;
  formRef?: RefObject<HTMLFormElement>;
  formStyle: string;
  buttonStyle: string;
  unChangedStyle: string;
  pendingChangedStyle: string;
  buttonType: "submit" | "reset" | "button" | undefined;
  buttonContext: ReactNode;
  loadingContext: ReactNode;
  onClick?: () => void;
  loading: boolean;
}

/**
 * @typedef FormButtonProps
 * @prop {string} buttonStyle - buttonStyle
 * @prop {string} unChangedStyle - unChangedStyle
 * @prop {string} pendingChangedStyle - pendingChangedStyle
 * @prop {ReactNode} buttonContext - buttonContext
 * @prop {"submit" | "reset" | "button" | undefined} buttonType - buttonType
 * @prop {ReactNode} loadingContext - loadingContext
 * @prop {boolean} loading - loading
 * @prop {() => void} onClick - onClick
 */
interface FormButtonProps {
  buttonStyle: string;
  unChangedStyle: string;
  pendingChangedStyle: string;
  buttonType: "submit" | "reset" | "button" | undefined;
  buttonContext: ReactNode;
  loadingContext: ReactNode;
  loading: boolean;
  onClick?: () => void;
}

/**
 * form button
 * @param {FormButtonProps} props - props
 * @return {JSX.Element} - FormButton component
 */
function FormButton(props: FormButtonProps): JSX.Element {
  const { pending } = useFormStatus();
  return (
    <button
      className={`${props.buttonStyle} ${
        pending || props.loading
          ? props.pendingChangedStyle
          : props.unChangedStyle
      } `}
      aria-disabled={pending || props.loading}
      type={props.buttonType}
      onClick={props.onClick}
    >
      {pending || props.loading ? (
        <>
          <svg
            className="mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {props.loadingContext}
        </>
      ) : (
        props.buttonContext
      )}
    </button>
  );
}

/**
 * Customized form layout
 * @param {FormLayoutProps} props - props
 * @return {Promise<JSX.Element>} - Customized form layout
 */
export function FormLayout<T>(props: FormLayoutProps<T>): JSX.Element {
  const initialState = props.initialFormData as Awaited<T>;
  const serverAction =
    props.serverAction === undefined
      ? () => Promise.resolve(initialState)
      : props.serverAction;

  const [state, formAction] = useFormState<T, FormData>(
    serverAction,
    initialState
  );

  useEffect(() => {
    if (props.handleStateUpdate) {
      props.handleStateUpdate(state);
    }
  }, [state, props]);

  return (
    <form
      className={props.formStyle}
      action={formAction}
      onSubmit={props.onSubmit}
      ref={props.formRef}
    >
      {props.children}
      <FormButton
        buttonStyle={props.buttonStyle}
        unChangedStyle={props.unChangedStyle}
        pendingChangedStyle={props.pendingChangedStyle}
        buttonType={props.buttonType}
        buttonContext={props.buttonContext}
        loadingContext={props.loadingContext}
        loading={props.loading}
        onClick={props.onClick}
      />
    </form>
  );
}

export default FormLayout;
